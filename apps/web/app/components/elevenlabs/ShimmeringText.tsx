import React from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

export interface ShimmeringTextProps {
  text: string
  className?: string
}

export function ShimmeringText({ text, className }: ShimmeringTextProps) {
  return (
    <motion.span
      className={cn(
        "relative inline-block bg-gradient-to-r from-muted-foreground via-foreground to-muted-foreground bg-[length:200%_auto] bg-clip-text text-transparent",
        className
      )}
      animate={{
        backgroundPosition: ["0% center", "200% center"],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {text}
    </motion.span>
  )
}
