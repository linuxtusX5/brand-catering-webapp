import React from "react";
import { galleryImages } from "../../data/content";
import { X, ZoomIn } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  return (
    <section id="gallery" className="py-20 pt-40 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[var(--color-primary)] tracking-wide uppercase mb-4">
            Our Gallery
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            A Visual Journey Through Our
            <span className="text-[var(--color-primary)]">
              {" "}
              Culinary Artistry
            </span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of exquisite dishes, elegant presentations,
            and memorable events that showcase our commitment to culinary
            excellence.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block bg-[var(--color-primary)] text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {image.category}
                  </span>
                  <p className="text-sm font-medium">{image.alt}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to create your own memorable event?
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            Schedule a Consultation
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors duration-300"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
