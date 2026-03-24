import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function OrdersLoading() {
  return (
    <div className="container mx-auto py-8 space-y-8 animate-in fade-in duration-500">
      {/* Header Skeleton */}
      <div>
        <Skeleton className="h-10 w-48 mb-2" />
        <Skeleton className="h-5 w-64" />
      </div>

      {/* Search Card Skeleton */}
      <Card className="max-w-xl">
        <CardHeader>
          <Skeleton className="h-6 w-40" />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-10 w-full" />
          </div>
          <Skeleton className="h-10 w-full" />
        </CardContent>
      </Card>

      {/* Orders List Skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-8 w-64" />
        <div className="grid gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card 
              key={i}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-5 w-24" />
                  </div>
                  <Skeleton className="h-6 w-20 rounded-full" />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <div key={j} className="space-y-2">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-5 w-32" />
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-full" />
                </div>

                <div className="space-y-2">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-48" />
                </div>

                <Skeleton className="h-10 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

