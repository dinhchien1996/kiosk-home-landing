"use client";

import { useEffect, useState, useRef } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type LazyImageProps = Omit<ImageProps, "onLoad"> & {
  blurEffect?: boolean;
  wrapperClassName?: string;
  threshold?: number;
};

export default function LazyImage({
  src,
  alt,
  width,
  height,
  blurEffect = true,
  wrapperClassName,
  className,
  threshold = 0.1,
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If the IntersectionObserver API is available
    if (typeof window !== "undefined" && window.IntersectionObserver) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.disconnect();
            }
          });
        },
        { threshold }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => {
        if (imgRef.current) {
          observer.unobserve(imgRef.current);
        }
      };
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      setIsVisible(true);
    }
  }, [threshold]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      ref={imgRef}
      className={cn("relative overflow-hidden", wrapperClassName)}
      style={{ width: typeof width === "number" ? `${width}px` : width, height: typeof height === "number" ? `${height}px` : height }}
    >
      {isVisible && (
        <>
          {blurEffect && !isLoaded && (
            <div
              className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse"
              style={{
                width: typeof width === "number" ? `${width}px` : width,
                height: typeof height === "number" ? `${height}px` : height
              }}
            />
          )}
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={cn(
              className,
              !isLoaded && blurEffect && "opacity-0",
              isLoaded && "transition-opacity duration-300 opacity-100"
            )}
            onLoad={handleLoad}
            {...props}
          />
        </>
      )}
    </div>
  );
}
