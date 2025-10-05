"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { productApi } from "@/lib/api";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductSearch } from "@/components/products/ProductSearch";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { ProductListItem, PaginatedResponse } from "@/types";

export default function ProductsPage() {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading, error } = useQuery<
    ProductListItem[] | PaginatedResponse<ProductListItem>
  >({
    queryKey: searchQuery ? ["products", "search", searchQuery] : ["products", page],
    queryFn: () =>
      searchQuery
        ? productApi.search(searchQuery)
        : productApi.getAll(page, 12),
  });

  const products = searchQuery
    ? (data as ProductListItem[])
    : (data as PaginatedResponse<ProductListItem>)?.results || [];
  const hasNext = !searchQuery && (data as PaginatedResponse<ProductListItem>)?.next;
  const hasPrev = !searchQuery && (data as PaginatedResponse<ProductListItem>)?.previous;

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Products</h1>
        <ProductSearch onSearch={setSearchQuery} />
      </div>

      {error && (
        <div className="text-center py-12 text-destructive">
          <p>Error loading products. Please try again later.</p>
        </div>
      )}

      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            {searchQuery
              ? "No products found matching your search."
              : "No products available."}
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {!searchQuery && (
            <div className="flex justify-center gap-4 pt-8">
              <Button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={!hasPrev}
                variant="outline"
              >
                Previous
              </Button>
              <Button
                onClick={() => setPage((p) => p + 1)}
                disabled={!hasNext}
                variant="outline"
              >
                Next
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

