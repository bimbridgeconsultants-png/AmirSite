import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 hover:from-blue-700 hover:to-purple-700",
        destructive:
          "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95",
        outline:
          "border-2 border-gray-200 bg-white/80 backdrop-blur-sm text-gray-700 shadow-lg hover:bg-gray-50 hover:border-gray-300 hover:shadow-xl hover:scale-105 active:scale-95 dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-700/80",
        secondary:
          "bg-gray-100 text-gray-900 shadow-lg hover:bg-gray-200 hover:shadow-xl hover:scale-105 active:scale-95 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700",
        ghost: 
          "text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:scale-105 active:scale-95 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100",
        link: 
          "text-blue-600 underline-offset-4 hover:underline hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300",
        glass:
          "glass text-gray-700 hover:shadow-2xl hover:scale-105 active:scale-95 dark:text-gray-200",
        premium:
          "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-2xl hover:shadow-3xl hover:scale-110 active:scale-95 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600",
      },
      size: {
        default: "h-12 px-6 py-3 text-sm font-semibold",
        sm: "h-9 rounded-lg px-4 text-xs font-medium",
        lg: "h-14 rounded-2xl px-8 text-base font-semibold",
        xl: "h-16 rounded-2xl px-10 text-lg font-bold",
        icon: "h-12 w-12 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
