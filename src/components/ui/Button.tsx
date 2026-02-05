import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-montserrat",
    {
        variants: {
            variant: {
                default: "bg-brand-teal text-white hover:bg-brand-teal/90",
                destructive: "bg-red-500 text-slate-50 hover:bg-red-500/90",
                outline: "border-2 border-brand-earth/20 bg-transparent text-brand-earth hover:bg-brand-earth/5 hover:text-brand-earth",
                secondary: "bg-brand-accent text-brand-earth hover:bg-brand-accent/80",
                ghost: "hover:bg-brand-earth/10 text-brand-earth",
                link: "text-brand-teal underline-offset-4 hover:underline",
            },
            size: {
                default: "h-11 px-6 py-2", // Min 44px touch target (11 * 4 = 44px)
                sm: "h-9 rounded-lg px-3",
                lg: "h-12 rounded-xl px-8 text-base",
                icon: "h-11 w-11",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
