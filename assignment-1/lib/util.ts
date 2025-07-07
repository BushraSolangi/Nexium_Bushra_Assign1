import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn() is a utility function that merges Tailwind CSS class names
 * without conflicting styles. Use it when applying conditional or dynamic classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
