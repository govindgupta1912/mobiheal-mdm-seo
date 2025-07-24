import { Suspense } from "react";
import { Link } from "react-router-dom";

const ResourceCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  linkText,
  href,
}) => {
  return (
    <Link to={href} className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-w-16 aspect-h-9 bg-neutral-200">
       <Suspense>
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label={imageAlt}
        />
        </Suspense>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-neutral-800 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-neutral-600">{description}</p>
        <div className="mt-4 flex items-center text-primary">
          <span className="font-medium">{linkText}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ResourceCard;
