import { Card, CardContent } from "@/components/ui/card";

export default function ProductDetailLoading() {
  return (
    <div className="container mx-auto py-8">
      {/* Back Button Skeleton */}
      <div className="h-10 w-24 bg-muted rounded animate-pulse mb-6" />

      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Skeleton */}
        <Card>
          <CardContent className="p-6">
            <div className="aspect-square bg-muted rounded-lg animate-pulse" />
          </CardContent>
        </Card>

        {/* Details Skeleton */}
        <div className="space-y-6">
          {/* Title */}
          <div className="space-y-3">
            <div className="h-8 w-3/4 bg-muted rounded animate-pulse" />
            <div className="flex items-center gap-2">
              <div className="h-6 w-20 bg-muted rounded-full animate-pulse" />
              <div className="h-4 w-32 bg-muted rounded animate-pulse" />
            </div>
            <div className="h-10 w-32 bg-muted rounded animate-pulse" />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <div className="h-6 w-32 bg-muted rounded animate-pulse" />
            <div className="h-4 w-full bg-muted rounded animate-pulse" />
            <div className="h-4 w-full bg-muted rounded animate-pulse" />
            <div className="h-4 w-2/3 bg-muted rounded animate-pulse" />
          </div>

          {/* Quantity and Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-6 w-24 bg-muted rounded animate-pulse" />
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 bg-muted rounded animate-pulse" />
                <div className="h-6 w-12 bg-muted rounded animate-pulse" />
                <div className="h-10 w-10 bg-muted rounded animate-pulse" />
              </div>
            </div>
            <div className="h-11 w-full bg-muted rounded animate-pulse" />
          </div>

          {/* Dates */}
          <div className="pt-4 border-t space-y-2">
            <div className="h-4 w-48 bg-muted rounded animate-pulse" />
            <div className="h-4 w-48 bg-muted rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

