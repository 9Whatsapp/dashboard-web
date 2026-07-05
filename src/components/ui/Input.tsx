import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={`flex w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-4 py-2.5 text-sm text-ink-primary focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/30 focus:shadow-[0_0_15px_rgba(37,211,102,0.2)] transition-all duration-300 placeholder:text-ink-muted disabled:cursor-not-allowed disabled:opacity-50 ${className || ""}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
