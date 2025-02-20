import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const galleryImages = [
    {
      id: 1,
      src: "https://i.ibb.co/1YQJwg9X/longevity-clinic.webp",
      alt: "Health Camp 1",
    },
    {
      id: 2,
      src: "https://i.ibb.co/ycsxyycZ/Dentist-visit-during-COVID-19-1-1080x675.jpg",
      alt: "Health Camp 2",
    },
    {
      id: 3,
      src: "https://i.ibb.co/HDD6zXqB/Routine-Eye-Checkup1.webp",
      alt: "Health Camp 3",
    },
    {
      id: 11,
      src: "https://i.ibb.co/NdJY9jQ1/download.jpg",
      alt: "Health Camp 11",
    },
    {
      id: 12,
      src: "https://i.ibb.co/SXncKbJk/images.jpg",
      alt: "Health Camp 12",
    },
    {
      id: 13,
      src: "https://i.ibb.co/Mk4H6j2F/8d5d30ac0af2b07932ba54bf05905edb.jpg",
      alt: "Health Camp 13",
    },
    {
      id: 14,
      src: "https://i.ibb.co/V0NbCzvp/internalmedicine-doctor.jpg",
      alt: "Health Camp 14",
    },
    {
      id: 15,
      src: "https://i.ibb.co/r2wxGqSg/Internist-Prime-Internal-Medicine-Associates-Dallas.jpg",
      alt: "Health Camp 15",
    },
    {
      id: 16,
      src: "https://i.ibb.co/mrYgwtjq/when-is-it-a-good-time-to-see-an-internist.jpg",
      alt: "Health Camp 16",
    },
    {
      id: 17,
      src: "https://i.ibb.co/JF7Mh1Wn/urgent-care1901.jpg",
      alt: "Health Camp 17",
    },
  ];
    

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="container mx-auto my-12 px-4">
      <h2 className="text-4xl font-bold text-center text-[#27477D] mb-8">Gallery</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:grid-cols-4 gap-6 mx-2 xl:mx-20">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            onClick={() => setSelectedImage(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-60 object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">View</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Full-Screen Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative max-w-4xl mx-auto">
            <img src={selectedImage} alt="Full-Screen" className="max-w-full max-h-screen rounded-lg" />
            <button
              className="absolute top-4 right-4 text-white bg-red-600 p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;