import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export default function CartLoading() {
  return (
    <div className="container mx-auto py-8">
      <div className="h-10 w-48 bg-muted rounded animate-pulse mb-8" />

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items Skeleton */}
        <div className="lg:col-span-2 space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-24 h-24 bg-muted rounded-lg animate-pulse flex-shrink-0" />

                  <div className="flex-1 space-y-2">
                    <div className="h-5 w-48 bg-muted rounded animate-pulse" />
                    <div className="h-4 w-24 bg-muted rounded animate-pulse" />

                    <div className="flex items-center gap-4 pt-2">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-muted rounded animate-pulse" />
                        <div className="h-5 w-12 bg-muted rounded animate-pulse" />
                        <div className="h-10 w-10 bg-muted rounded animate-pulse" />
                      </div>
                      <div className="h-10 w-10 bg-muted rounded animate-pulse" />
                    </div>
                  </div>

                  <div className="h-6 w-24 bg-muted rounded animate-pulse" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary Skeleton */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <div className="h-6 w-40 bg-muted rounded animate-pulse" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <div className="h-4 w-20 bg-muted rounded animate-pulse" />
                <div className="h-4 w-24 bg-muted rounded animate-pulse" />
              </div>
              <div className="flex justify-between">
                <div className="h-4 w-20 bg-muted rounded animate-pulse" />
                <div className="h-4 w-40 bg-muted rounded animate-pulse" />
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <div className="h-6 w-16 bg-muted rounded animate-pulse" />
                  <div className="h-6 w-24 bg-muted rounded animate-pulse" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="h-11 w-full bg-muted rounded animate-pulse" />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

