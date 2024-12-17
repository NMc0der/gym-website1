import "./gallery.scss";
import GalleryList from "@/app/data/galleryList";
import { knewave } from "@/app/fonts/googleFonts";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="gallery-page-container">
      <div className="gallery-text">
        <h2 className={`${knewave.className}`}>Our Gallery</h2>
        <p>
          Here are a few Photos from the members at our gym showcasing different
          classes, equipment, and Intensity. Become a Patron today and you may
          see yourselve among these photos someday!
        </p>
      </div>

      <div className="gallery-container">
        {GalleryList.map((galleryImg) => {
          return (
            <div key={galleryImg} className="gallery-post">
              <Image
                className="gallery-post-img"
                alt={galleryImg}
                src={galleryImg}
              />
            </div>
          );
        })}
        {/* <Image src={GalleryList[0]} /> */}
      </div>
    </div>
  );
};

export default Gallery;
