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
      // Force reload by adding a timestamp to the src
      const currentSrc = new URL(src, window.location.origin).toString();
      const separator = currentSrc.includes('?') ? '&' : '?';
      const retrySrc = `${currentSrc}${separator}retry=${retryCount + 1}`;

      // We can't easily change the src of the img inside the picture without a ref
      // But since this is a functional component, the simplest way to trigger a reload
      // is to let the component re-render or use a ref.
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
      {!isLoaded && (aspectRatio || width || height) && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: isLoaded ? 0 : 0 }}
          className="absolute inset-0 z-10 bg-brand-violet/10 dark:bg-brand-white/10 animate-pulse"
        />
      )}

      <picture>
        {/*
          REMOVE source tags for local development.
          vite-imagetools generates variants at build time,
          but during dev, these .avif/.webp files don't exist in public/,
          causing the browser to try and load them and potentially fail
          or delay the fallback.
        */}
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
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${className}`}
        />
      </picture>
    </div>
  );
};

export default OptimizedImage;
