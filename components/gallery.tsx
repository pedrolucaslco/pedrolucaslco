import * as React from "react"

import { cn } from "@/lib/utils"

const Gallery = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "grid grid-cols-3 gap-2",
      className
    )}
    {...props}
  />
))
Gallery.displayName = "Gallery"

const GalleryItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
GalleryItem.displayName = "GalleryItem"

export { Gallery, GalleryItem }