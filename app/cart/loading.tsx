import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function CartLoading() {
  return (
    <div className="container mx-auto py-8 animate-in fade-in duration-500">
      <Skeleton className="h-10 w-48 mb-8" />

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items Skeleton */}
        <div className="lg:col-span-2 space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card 
              key={i}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <Skeleton className="w-24 h-24 rounded-lg flex-shrink-0" />

                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-5 w-48" />
                    <Skeleton className="h-4 w-24" />

                    <div className="flex items-center gap-4 pt-2">
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-10 w-10 rounded-md" />
                        <Skeleton className="h-5 w-12" />
                        <Skeleton className="h-10 w-10 rounded-md" />
                      </div>
                      <Skeleton className="h-10 w-10 rounded-md" />
                    </div>
                  </div>

                  <Skeleton className="h-6 w-24" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary Skeleton */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <Skeleton className="h-6 w-40" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="flex justify-between">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-40" />
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <Skeleton className="h-6 w-16" />
                  <Skeleton className="h-6 w-24" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Skeleton className="h-11 w-full" />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

