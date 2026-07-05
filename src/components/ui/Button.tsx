import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg px-[20px] py-[10px] text-[0.75rem] font-medium leading-normal transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none";
    const variants = {
      primary: "bg-primary text-bg-deep hover:bg-primary-deep shadow-[0_4px_24px_rgba(37,211,102,0.1)] focus:ring-2 focus:ring-primary/50",
      secondary: "bg-bg-surface text-ink-secondary border border-border-visible hover:border-ink-secondary hover:text-ink-primary focus:ring-2 focus:ring-white/20",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className || ""}`}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
