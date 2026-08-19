import React from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

export interface OrbProps {
  className?: string
  size?: number
}

export function Orb({ className, size = 260 }: OrbProps) {
  return (
    <div
      className={cn("relative flex items-center justify-center pointer-events-none select-none", className)}
      style={{ width: size, height: size }}
    >
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 rounded-full blur-3xl opacity-60"
        style={{
          background: "radial-gradient(circle at 35% 35%, #0447ff 0%, #ff4704 60%, rgba(255, 71, 4, 0.2) 100%)",
        }}
        animate={{
          scale: [1, 1.08, 0.96, 1],
          rotate: [0, 45, 90, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Organic Orb Sphere */}
      <motion.div
        className="relative w-4/5 h-4/5 rounded-full shadow-2xl overflow-hidden backdrop-blur-sm"
        style={{
          background: "radial-gradient(circle at 30% 30%, #CADCFC 0%, #0447ff 35%, #ff4704 70%, #171615 100%)",
          boxShadow: "inset -10px -10px 30px rgba(0,0,0,0.5), 0 20px 40px rgba(4, 71, 255, 0.25)",
        }}
        animate={{
          scale: [1, 1.03, 0.98, 1],
          y: [-4, 4, -4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Internal Light Shimmer */}
        <div
          className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
          style={{
            background: "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.9) 0%, transparent 60%)",
          }}
        />
      </motion.div>
    </div>
  )
}
