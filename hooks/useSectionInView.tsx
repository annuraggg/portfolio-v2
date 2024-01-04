"use client"
import { useInView } from "react-intersection-observer";

export function useSectionInView(threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });

  console.log(inView);  

  return {
    ref,
  };
}
