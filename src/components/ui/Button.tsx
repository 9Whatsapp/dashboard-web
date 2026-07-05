import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center disabled:opacity-50 disabled:pointer-events-none";
    const variants = {
      primary: "btn-primary",
      secondary: "btn-secondary",
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
