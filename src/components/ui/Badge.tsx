import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  dotColor?: "primary" | "yellow" | "red" | "none";
  ping?: boolean;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, children, dotColor = "none", ping = false, ...props }, ref) => {
    const dotColors = {
      primary: "bg-primary",
      yellow: "bg-yellow-500",
      red: "bg-red-500",
      none: "hidden",
    };

    return (
      <span
        ref={ref}
        className={`inline-flex items-center gap-1.5 rounded-full px-[12px] py-[6px] border border-border-subtle bg-bg-surface text-[0.75rem] font-medium leading-normal text-ink-muted ${className || ""}`}
        {...props}
      >
        {dotColor !== "none" && (
          <span className="relative flex w-1.5 h-1.5">
            {ping && (
              <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${dotColors[dotColor]}`}></span>
            )}
            <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${dotColors[dotColor]}`}></span>
          </span>
        )}
        {children}
      </span>
    );
  }
);
Badge.displayName = "Badge";

export { Badge };
