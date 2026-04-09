// import { useEffect, useState } from "react";
// import { ArrowUp } from "lucide-react";

// export default function FloatingButtons() {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShow(window.scrollY > 200); // show after scroll
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   const phone = "919876543210";
//   const message = "Hello, I need help";
//   const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

//   if (!show) return null;

//   return (
//     <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
//       {/* WhatsApp */}
//       <a
//         href={whatsappUrl}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
//       >
//         {/* SVG WhatsApp */}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="22"
//           height="22"
//           fill="white"
//           viewBox="0 0 24 24"
//         >
//           <path d="M20.52 3.48A11.94 11.94 0 0012.01 0C5.37 0 .01 5.36 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.2-1.63A11.94 11.94 0 0012.01 24c6.63 0 11.99-5.36 12-12 0-3.2-1.25-6.2-3.49-8.52zM12.01 22a9.93 9.93 0 01-5.08-1.39l-.36-.21-3.68.97.98-3.59-.24-.37A9.93 9.93 0 012 12C2 6.49 6.5 2 12.01 2c2.67 0 5.18 1.04 7.07 2.93A9.93 9.93 0 0122 12c0 5.51-4.49 10-9.99 10zm5.46-7.36c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.52 0 1.48 1.08 2.91 1.23 3.11.15.2 2.13 3.26 5.16 4.57.72.31 1.28.49 1.72.63.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z" />
//         </svg>
//       </a>

//       {/* Scroll to top */}
//       <button
//         onClick={scrollToTop}
//         className="bg-black text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
//       >
//         <ArrowUp size={22} />
//       </button>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const phone = "918700954964";
  const message = "Hello, I need help";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
      {/* WhatsApp always visible */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.94 11.94 0 0012.01 0C5.37 0 .01 5.36 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.2-1.63A11.94 11.94 0 0012.01 24c6.63 0 11.99-5.36 12-12 0-3.2-1.25-6.2-3.49-8.52zM12.01 22a9.93 9.93 0 01-5.08-1.39l-.36-.21-3.68.97.98-3.59-.24-.37A9.93 9.93 0 012 12C2 6.49 6.5 2 12.01 2c2.67 0 5.18 1.04 7.07 2.93A9.93 9.93 0 0122 12c0 5.51-4.49 10-9.99 10zm5.46-7.36c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.52 0 1.48 1.08 2.91 1.23 3.11.15.2 2.13 3.26 5.16 4.57.72.31 1.28.49 1.72.63.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z" />
        </svg>
      </a>

      {/* Scroll button only after scroll */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="bg-primary text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <ArrowUp size={22} className="" />
        </button>
      )}
    </div>
  );
}
