import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function OrderDetailLoading() {
  return (
    <div className="container mx-auto py-8 max-w-4xl animate-in fade-in duration-500">
      {/* Back Button Skeleton */}
      <Skeleton className="h-10 w-24 mb-6" />

      <div className="space-y-6">
        {/* Success Header Skeleton */}
        <Card className="border-2">
          <CardContent className="p-6 text-center space-y-4">
            <Skeleton className="h-16 w-16 mx-auto rounded-full" />
            <Skeleton className="h-8 w-64 max-w-full mx-auto" />
            <Skeleton className="h-5 w-96 max-w-full mx-auto" />
            <Skeleton className="h-8 w-32 mx-auto rounded-full" />
          </CardContent>
        </Card>

        {/* Details Cards Skeleton */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-48" />
            </CardHeader>
            <CardContent className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-5 w-40" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-40" />
            </CardHeader>
            <CardContent className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-5 w-32" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Order Items Skeleton */}
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent className="space-y-4">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="flex justify-between items-center py-3 border-b"
              >
                <div className="space-y-2">
                  <Skeleton className="h-5 w-40" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            ))}
            <div className="pt-4 border-t">
              <div className="flex justify-between">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-6 w-24" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions Skeleton */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Skeleton className="h-10 w-40" />
          <Skeleton className="h-10 w-40" />
        </div>
      </div>
    </div>
  );
}

