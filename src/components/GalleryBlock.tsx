import React from "react";
import OptimizedImage from "./OptimizedImage";

interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
  span?: "full" | "half";
}

interface Gallery {
  layout?: "grid" | "stacked";
  title?: string;
  items: GalleryItem[];
}

interface GalleryBlockProps {
  gallery?: Gallery;
}

const GalleryBlock: React.FC<GalleryBlockProps> = ({ gallery }) => {
  if (!gallery || !gallery.items || gallery.items.length === 0) {
    return null;
  }

  return (
    <section className="border-t hairline-border pt-12">
      <div className="flex items-center gap-3 mb-12">
        <h4 className="text-muted uppercase text-xs font-bold tracking-widest">
          {gallery.title || "Gallery"}
        </h4>
      </div>

      {gallery.layout === "stacked" ? (
        <div className="space-y-12">
          {gallery.items.map((item, i) => (
            <div key={i} className="flex flex-col gap-4">
              <OptimizedImage
                src={item.src}
                alt={item.alt}
                className="border hairline-border w-full h-auto"
              />
              {item.caption && (
                <p className="text-sm text-muted italic max-w-2xl">
                  {item.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gallery.items.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col gap-4 ${item.span === "full" ? "md:col-span-2" : ""}`}
            >
              <OptimizedImage
                src={item.src}
                alt={item.alt}
                className="border hairline-border w-full h-auto"
              />
              {item.caption && (
                <p className="text-sm text-muted italic">
                  {item.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default GalleryBlock;
