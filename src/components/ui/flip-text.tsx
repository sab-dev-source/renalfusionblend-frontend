"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { Fragment } from "react";

import { cn } from "../../lib/utils";

interface FlipTextProps {
  word: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

function FlipText({
  word,
  duration = 0.5,
  delayMultiple = 0.08,
  framerProps = {
    hidden: { rotateX: -90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
  },
  className,
}: FlipTextProps) {
  const words = word.split(" ");

  return (
    <span
      className={cn(
        "inline-flex flex-wrap items-baseline whitespace-normal break-words leading-tight",
        className
      )}
      aria-label={word}
    >
      <AnimatePresence mode="wait">
        {words.map((w, wi) => (
          <Fragment key={`word-${wi}`}>
            <span className="inline-flex">
              {w.split("").map((char, ci) => (
                <motion.span
                  key={`${wi}-${ci}`}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={framerProps}
                  transition={{ duration, delay: (wi + ci) * delayMultiple }}
                  className={cn("origin-center will-change-transform")}
                >
                  {char}
                </motion.span>
              ))}
            </span>
            {wi < words.length - 1 && (
              <span className="inline-block w-[0.25em]" aria-hidden="true">
                &nbsp;
              </span>
            )}
          </Fragment>
        ))}
      </AnimatePresence>
    </span>
  );
}

export { FlipText };
