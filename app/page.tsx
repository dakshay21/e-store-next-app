"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Package, ShoppingCart, Clock } from "lucide-react";

export default function HomePage() {
  return (
    <div className="container mx-auto py-12 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Welcome to E-Store
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover amazing products at great prices. Shop the latest trends and
          get fast, reliable delivery.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Link href="/products">
            <Button size="lg">
              Browse Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/orders">
            <Button variant="outline" size="lg">
              Track Orders
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6 pt-12">
        <Card>
          <CardHeader>
            <Package className="h-10 w-10 mb-2 text-primary" />
            <CardTitle>Wide Selection</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Browse through our extensive catalog of quality products from top
              brands.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <ShoppingCart className="h-10 w-10 mb-2 text-primary" />
            <CardTitle>Easy Shopping</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Simple checkout process with secure payment options and cart
              management.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Clock className="h-10 w-10 mb-2 text-primary" />
            <CardTitle>Fast Delivery</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Track your orders in real-time and get quick delivery to your
              doorstep.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Shopping Today</h2>
        <p className="text-lg mb-6 opacity-90">
          Join thousands of satisfied customers and find what you need.
        </p>
        <Link href="/products">
          <Button size="lg" variant="secondary">
            View All Products
          </Button>
        </Link>
      </section>
    </div>
  );
}

