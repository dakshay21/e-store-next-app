export default function HomeLoading() {
  return (
    <div className="container mx-auto py-12 space-y-12">
      {/* Hero Section Skeleton */}
      <section className="text-center space-y-4">
        <div className="h-14 w-96 mx-auto bg-muted rounded animate-pulse" />
        <div className="h-6 w-2/3 mx-auto bg-muted rounded animate-pulse" />
        <div className="flex gap-4 justify-center pt-4">
          <div className="h-11 w-48 bg-muted rounded animate-pulse" />
          <div className="h-11 w-40 bg-muted rounded animate-pulse" />
        </div>
      </section>

      {/* Features Section Skeleton */}
      <section className="grid md:grid-cols-3 gap-6 pt-12">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="rounded-lg border bg-card shadow-sm p-6 space-y-4"
          >
            <div className="h-10 w-10 bg-muted rounded animate-pulse" />
            <div className="h-6 w-40 bg-muted rounded animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-muted rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-muted rounded animate-pulse" />
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section Skeleton */}
      <section className="bg-muted rounded-lg p-12 text-center space-y-6">
        <div className="h-10 w-80 mx-auto bg-muted-foreground/20 rounded animate-pulse" />
        <div className="h-6 w-96 mx-auto bg-muted-foreground/20 rounded animate-pulse" />
        <div className="h-11 w-48 mx-auto bg-muted-foreground/20 rounded animate-pulse" />
      </section>
    </div>
  );
}

