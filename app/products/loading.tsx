import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsLoading() {
  return (
    <div className="container mx-auto py-8 space-y-8 animate-in fade-in duration-500">
      {/* Header Skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-10 w-48" />
        <div className="flex gap-2">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-24" />
        </div>
      </div>

      {/* Products Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <Card 
            key={i} 
            className="overflow-hidden group hover:shadow-lg transition-shadow"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <Skeleton className="aspect-square rounded-none" />
            <CardContent className="p-4 space-y-3">
              <Skeleton className="h-6 w-full" />
              <div className="flex items-center justify-between">
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-4 w-16" />
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Skeleton className="h-10 w-full" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

