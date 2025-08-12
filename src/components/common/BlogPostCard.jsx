import { Link } from "react-router";

const BlogPostCard = ({
  title,
  excerpt,
  date,
  imageSrc,
  href,
}) => {
  return (
    <Link to={href}>
      <a className="group block bg-white rounded-lg overflow-hidden  shadow-lg hover:shadow-xl transition-shadow ease-in-out">
        <div className="p-5">
          <div className="text-sm text-neutral-500 mb-2">{date}</div>
          <h4 className="text-lg font-semibold mb-2 text-neutral-800 line-2 group-hover:text-primary transition-colors">
            {title}
          </h4>
          <p className="text-neutral-600 line-clamp-2">{excerpt}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogPostCard;
