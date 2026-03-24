import { Skeleton } from "@/components/ui/skeleton";

export default function HomeLoading() {
  return (
    <div className="container mx-auto py-12 space-y-12 animate-in fade-in duration-500">
      {/* Hero Section Skeleton */}
      <section className="text-center space-y-4">
        <Skeleton className="h-14 w-96 max-w-full mx-auto" />
        <Skeleton className="h-6 w-2/3 max-w-2xl mx-auto" />
        <div className="flex gap-4 justify-center pt-4 flex-wrap">
          <Skeleton className="h-11 w-48" />
          <Skeleton className="h-11 w-40" />
        </div>
      </section>

      {/* Features Section Skeleton */}
      <section className="grid md:grid-cols-3 gap-6 pt-12">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="rounded-lg border bg-card shadow-sm p-6 space-y-4"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <Skeleton className="h-10 w-10 rounded-lg" />
            <Skeleton className="h-6 w-40" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section Skeleton */}
      <section className="bg-gradient-to-br from-muted/50 to-muted rounded-lg p-12 text-center space-y-6">
        <Skeleton className="h-10 w-80 max-w-full mx-auto" />
        <Skeleton className="h-6 w-96 max-w-full mx-auto" />
        <Skeleton className="h-11 w-48 mx-auto" />
      </section>
    </div>
  );
}

