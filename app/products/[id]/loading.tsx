import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductDetailLoading() {
  return (
    <div className="container mx-auto py-8 animate-in fade-in duration-500">
      {/* Back Button Skeleton */}
      <Skeleton className="h-10 w-24 mb-6" />

      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Skeleton */}
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <Skeleton className="aspect-square rounded-lg" />
          </CardContent>
        </Card>

        {/* Details Skeleton */}
        <div className="space-y-6">
          {/* Title */}
          <div className="space-y-3">
            <Skeleton className="h-8 w-3/4" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-4 w-32" />
            </div>
            <Skeleton className="h-10 w-32" />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>

          {/* Quantity and Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Skeleton className="h-6 w-24" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-10 w-10 rounded-md" />
                <Skeleton className="h-6 w-12" />
                <Skeleton className="h-10 w-10 rounded-md" />
              </div>
            </div>
            <Skeleton className="h-11 w-full" />
          </div>

          {/* Dates */}
          <div className="pt-4 border-t space-y-2">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-48" />
          </div>
        </div>
      </div>
    </div>
  );
}

