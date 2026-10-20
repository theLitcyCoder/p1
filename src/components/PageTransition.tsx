
"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function PageTransition({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={
          shouldReduceMotion
            ? false
            : { opacity: 0, y: 12 }
        }
        animate={{ opacity: 1, y: 0 }}
        exit={
          shouldReduceMotion
            ? { opacity: 1 }
            : { opacity: 0, y: -6 }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                opacity: { duration: 0.35, ease: "easeOut" },
                y: {
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                },
              }
        }
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
