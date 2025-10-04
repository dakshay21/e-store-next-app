import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function ProductsLoading() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Header Skeleton */}
      <div className="space-y-4">
        <div className="h-10 w-48 bg-muted rounded animate-pulse" />
        <div className="flex gap-2">
          <div className="h-10 flex-1 bg-muted rounded animate-pulse" />
          <div className="h-10 w-24 bg-muted rounded animate-pulse" />
        </div>
      </div>

      {/* Products Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <div className="aspect-square bg-muted animate-pulse" />
            <CardContent className="p-4 space-y-3">
              <div className="h-6 bg-muted rounded animate-pulse" />
              <div className="flex items-center justify-between">
                <div className="h-8 w-24 bg-muted rounded animate-pulse" />
                <div className="h-4 w-16 bg-muted rounded animate-pulse" />
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <div className="h-10 w-full bg-muted rounded animate-pulse" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

