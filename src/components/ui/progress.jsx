import * as React from "react"
import { cn } from "@/lib/utils"

const Progress = React.forwardRef(({ className, value, indicatorClassName, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative h-2.5 w-full overflow-hidden rounded-full bg-secondary/40",
      className
    )}
    {...props}
  >
    <div
      className={cn("h-full w-full flex-1 bg-primary transition-all duration-1000 ease-out", indicatorClassName)}
      style={{ transform: `translateX(-${100 - Math.min(100, Math.max(0, value || 0))}%)` }}
    />
  </div>
))
Progress.displayName = "Progress"

export { Progress }
