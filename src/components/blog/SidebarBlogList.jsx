import { Suspense } from "react";
import { Link } from "react-router-dom";

const SidebarBlogList = ({ blogs, activeBlogId }) => {
  return (
    <aside className="bg-gray-50 rounded-2xl p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-5 border-b pb-2">
        More Blogs
      </h3>

      <div className="space-y-6">
        {blogs
          .filter((b) => b.id !== activeBlogId)
          .map((b) => (
            <Link
              key={b.id}
              to={`/blog/${b.id}`}
              className="block bg-white shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-200 overflow-hidden"
            >
              <Suspense>
              <img
                src={b.featureImage}
                alt={b.title}
                className="w-full h-36 object-cover"
              />
              </Suspense>
              <div className="p-4">
                <h4 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 line-clamp-2">
                  {b.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{b.publishedAt}</p>
              </div>
            </Link>
          ))}
      </div>
    </aside>
  );
};

export default SidebarBlogList;
