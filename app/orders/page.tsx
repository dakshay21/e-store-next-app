"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { orderApi } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatPrice, formatDate } from "@/lib/utils";
import { Loader2, Search } from "lucide-react";

export default function OrdersPage() {
  const [email, setEmail] = useState("");
  const [searchEmail, setSearchEmail] = useState("");

  const { data: orders, isLoading, error } = useQuery({
    queryKey: ["orders", "email", searchEmail],
    queryFn: () => orderApi.getByEmail(searchEmail),
    enabled: !!searchEmail,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchEmail(email);
  };

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Order History</h1>
        <p className="text-muted-foreground">
          Enter your email to view your orders
        </p>
      </div>

      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Find Your Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john.doe@example.com"
              />
            </div>
            <Button type="submit" className="w-full">
              <Search className="mr-2 h-4 w-4" />
              Search Orders
            </Button>
          </form>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="flex justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      )}

      {error && (
        <div className="text-center py-12 text-destructive">
          <p>Error loading orders. Please try again.</p>
        </div>
      )}

      {orders && orders.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No orders found for this email address.
          </p>
        </div>
      )}

      {orders && orders.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Orders for {searchEmail}
          </h2>
          <div className="grid gap-4">
            {orders.map((order) => (
              <Card key={order.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Order ID</p>
                      <p className="font-semibold">#{order.id}</p>
                    </div>
                    <Badge>Completed</Badge>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Customer</p>
                      <p className="font-medium">{order.customer_name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total</p>
                      <p className="font-bold text-lg">
                        {formatPrice(order.total_price)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="font-medium">
                        {formatDate(order.created_at)}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-1">
                      Shipping Address
                    </p>
                    <p className="text-sm">{order.address}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-2">Items</p>
                    <div className="space-y-1">
                      {order.items && order.items.length > 0 ? (
                        order.items.map((item, index) => (
                          <div
                            key={index}
                            className="text-sm flex justify-between"
                          >
                            <span>
                              Product ID: {item.product_id} × {item.quantity}
                            </span>
                          </div>
                        ))
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          {(order as any).items_count || 0} item(s)
                        </p>
                      )}
                    </div>
                  </div>

                  <Link href={`/orders/${order.id}`}>
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

