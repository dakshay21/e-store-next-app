import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "shimmer";
}

const Skeleton = ({ className, variant = "shimmer", ...props }: SkeletonProps) => {
  return (
    <div
      className={cn(
        "rounded-md bg-muted",
        variant === "shimmer" &&
          "animate-pulse relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
        className
      )}
      {...props}
    />
  );
};

export { Skeleton };

