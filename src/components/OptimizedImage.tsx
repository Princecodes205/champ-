import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  aspectRatio?: string;
  priority?: boolean;
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  aspectRatio,
  priority = false,
  className = "",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setRetryCount(0);
    setHasError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    if (retryCount < 2) {
      setRetryCount((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio: aspectRatio || (width && height ? `${width}/${height}` : "auto"),
      }}
    >
      {/* Neutral theme-aware placeholder - only show if we have a specific aspectRatio or dimensions, otherwise it's likely a logo/icon and shouldn't have a background box */}
      {!isLoaded && !hasError && (aspectRatio || width || height) && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: isLoaded ? 0 : 0 }}
          className="absolute inset-0 z-10 bg-brand-violet/10 dark:bg-brand-white/10 animate-pulse"
        />
      )}

      <picture>
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          {...({ fetchPriority: priority ? "high" : "auto" } as any)}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${className}`}
        />
      </picture>
    </div>
  );
};

export default OptimizedImage;
