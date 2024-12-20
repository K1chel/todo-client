"use client";

import * as React from "react";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<"input">
>(({ className, checked, onChange, ...props }, ref) => {
  return (
    <div className={cn("relative inline-flex items-center", className)}>
      <input
        type="checkbox"
        ref={ref}
        className={cn(
          "opacity-0 absolute h-full w-full rounded-full",
          className
        )}
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <span
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all duration-300",
          checked
            ? "bg-purple border-purple"
            : "border-blue-400 hover:border-blue-500 focus:border-blue-500"
        )}
      >
        {checked && (
          <CheckIcon className="h-4 w-4 text-white transition-opacity duration-300" />
        )}
      </span>
    </div>
  );
});
Checkbox.displayName = "Checkbox";

export { Checkbox };
