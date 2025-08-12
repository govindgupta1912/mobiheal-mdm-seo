import { useEffect, useState } from "react";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import bg_image from "../../assets/hero_bg_sf-scaled.webp"; // Adjust the path as necessary

const BlogHero = ({ blog }) => {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    // This only runs on the client side
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <div className="relative w-full  overflow-hidden text-white bg-gradient">
      {/* Optional Background Image */}
      {/* <div className="absolute inset-0 overflow-hidden z-0">
        <img
          src={bg_image}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div> */}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-24 py-18 h-full flex flex-col ">
        <div className="max-w-4xl">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            {blog.title.split(" ").map((word, index) => (
              <span key={index} className="text-white">
                {word + " "}
              </span>
            ))}
          </h1>

          {/* Author & Date */}
          <div className="text-white/80 text-sm mb-10 space-y-1">
            <p>
              Written by <span className="text-white font-medium">{blog.author}</span>
            </p>
            <p>{blog.publishedAt}</p>
          </div>

          {/* Share Icons */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <span className="text-white/80 text-sm">Share On</span>
            <div className="flex gap-4">
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-blue-500 transition-all"
              >
                <FaLinkedinIn className="text-white text-lg" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-blue-500 transition-all"
              >
                <FaFacebookF className="text-white text-lg" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(blog.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-blue-500 transition-all"
              >
                <FaTwitter className="text-white text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
