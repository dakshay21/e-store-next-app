import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function OrderDetailLoading() {
  return (
    <div className="container mx-auto py-8 max-w-4xl">
      {/* Back Button Skeleton */}
      <div className="h-10 w-24 bg-muted rounded animate-pulse mb-6" />

      <div className="space-y-6">
        {/* Success Header Skeleton */}
        <Card>
          <CardContent className="p-6 text-center space-y-4">
            <div className="h-16 w-16 mx-auto bg-muted rounded-full animate-pulse" />
            <div className="h-8 w-64 mx-auto bg-muted rounded animate-pulse" />
            <div className="h-5 w-96 mx-auto bg-muted rounded animate-pulse" />
            <div className="h-8 w-32 mx-auto bg-muted rounded-full animate-pulse" />
          </CardContent>
        </Card>

        {/* Details Cards Skeleton */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="h-6 w-48 bg-muted rounded animate-pulse" />
            </CardHeader>
            <CardContent className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-4 w-24 bg-muted rounded animate-pulse" />
                  <div className="h-5 w-40 bg-muted rounded animate-pulse" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-6 w-40 bg-muted rounded animate-pulse" />
            </CardHeader>
            <CardContent className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-4 w-24 bg-muted rounded animate-pulse" />
                  <div className="h-5 w-32 bg-muted rounded animate-pulse" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Order Items Skeleton */}
        <Card>
          <CardHeader>
            <div className="h-6 w-32 bg-muted rounded animate-pulse" />
          </CardHeader>
          <CardContent className="space-y-4">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="flex justify-between items-center py-3 border-b"
              >
                <div className="space-y-2">
                  <div className="h-5 w-40 bg-muted rounded animate-pulse" />
                  <div className="h-4 w-24 bg-muted rounded animate-pulse" />
                </div>
              </div>
            ))}
            <div className="pt-4 border-t">
              <div className="flex justify-between">
                <div className="h-6 w-16 bg-muted rounded animate-pulse" />
                <div className="h-6 w-24 bg-muted rounded animate-pulse" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions Skeleton */}
        <div className="flex gap-4 justify-center">
          <div className="h-10 w-40 bg-muted rounded animate-pulse" />
          <div className="h-10 w-40 bg-muted rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}

