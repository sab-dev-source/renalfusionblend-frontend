"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon, ChevronDown } from "lucide-react";

interface Tab {
  title: string;
  icon: LucideIcon;
  href?: string;
  type?: "link";
  dropdownItems?: never;
}

interface DropdownTab {
  title: string;
  icon: LucideIcon;
  type: "dropdown";
  dropdownItems: Array<{
    title: string;
    icon: LucideIcon;
    href: string;
  }>;
  href?: never;
}

interface Separator {
  type: "separator";
  title?: never;
  icon?: never;
  href?: never;
  dropdownItems?: never;
}

type TabItem = Tab | DropdownTab | Separator;

interface HoverExpandableTabsProps {
  tabs: TabItem[];
  className?: string;
  onNavigate?: (href: string) => void;
}

const buttonVariants = {
  initial: {
    gap: 0,
    paddingLeft: "0.75rem",
    paddingRight: "0.75rem",
  },
  animate: (isHovered: boolean) => ({
    gap: isHovered ? "0.5rem" : 0,
    paddingLeft: isHovered ? "1rem" : "0.75rem",
    paddingRight: isHovered ? "1rem" : "0.75rem",
  }),
};

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "auto", opacity: 1 },
  exit: { width: 0, opacity: 0 },
};

const dropdownVariants = {
  initial: { opacity: 0, y: -10, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -10, scale: 0.95 },
};

const transition = { type: "spring" as const, bounce: 0, duration: 0.4 };

export function HoverExpandableTabs({
  tabs,
  className,
  onNavigate,
}: HoverExpandableTabsProps) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [dropdownOpen, setDropdownOpen] = React.useState<number | null>(null);

  const handleClick = (tab: TabItem, index: number) => {
    if (tab.type === "dropdown") {
      setDropdownOpen(dropdownOpen === index ? null : index);
    } else if (tab.href) {
      onNavigate?.(tab.href);
    }
  };

  const Separator = () => (
    <div className="mx-1 h-[24px] w-[1.2px] bg-border/50" aria-hidden="true" />
  );

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {tabs.map((tab, index) => {
        if (tab.type === "separator") {
          return <Separator key={`separator-${index}`} />;
        }

        const Icon = tab.icon;
        const isHovered = hoveredIndex === index;
        const isDropdownOpen = dropdownOpen === index;

        return (
          <div key={tab.title} className="relative">
            <motion.button
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              custom={isHovered}
              onClick={() => handleClick(tab, index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              transition={transition}
              className={cn(
                "relative flex items-center rounded-xl py-2.5 text-sm font-medium transition-all duration-300",
                "hover:bg-muted/60 hover:text-primary",
                "text-foreground",
                isDropdownOpen && "bg-muted/60 text-primary"
              )}
            >
              <Icon size={18} />
              <AnimatePresence initial={false}>
                {isHovered && (
                  <motion.span
                    variants={spanVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={transition}
                    className="overflow-hidden whitespace-nowrap"
                  >
                    {tab.title}
                  </motion.span>
                )}
              </AnimatePresence>
              {tab.type === "dropdown" && (
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "ml-1 opacity-0 transition-opacity duration-300",
                    isHovered && "opacity-100"
                  )}
                >
                  <ChevronDown size={14} />
                </motion.div>
              )}
            </motion.button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {tab.type === "dropdown" && isDropdownOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={transition}
                  className="absolute top-full left-0 mt-2 w-48 z-50 rounded-lg border bg-background/95 backdrop-blur-sm shadow-lg"
                >
                  <div className="p-1">
                    {tab.dropdownItems.map((item) => {
                      const ItemIcon = item.icon;
                      return (
                        <button
                          key={item.title}
                          onClick={() => {
                            onNavigate?.(item.href);
                            setDropdownOpen(null);
                          }}
                          className="flex w-full items-center space-x-2 rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          <ItemIcon size={16} />
                          <span>{item.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}