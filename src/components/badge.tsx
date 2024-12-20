import { cn } from "@/lib/utils";

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    React.PropsWithChildren {}

export const Badge = ({ className, ...props }: BadgeProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full bg-muted/30 px-2.5 py-0.5 text-xs font-semibold transition-colors",
        className
      )}
      {...props}
    />
  );
};
