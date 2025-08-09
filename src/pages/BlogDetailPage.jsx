import { useParams } from "react-router-dom";
import { blogs } from "../components/data/blogs";
import BlogHero from "../components/blog/BlogHero";
import BlogBody from "../components/blog/BlogBody";
import LatestBlogCarousel from "../components/blog/LatestBlogCarousel";
import NewsletterCTA from "../components/blog/NewsletterCTA";
import SidebarBlogList from "../components/blog/SidebarBlogList";
// import BlogSEO from "../components/common/BlogSEO";
import { Helmet } from "react-helmet-async";
 //import BlogSEO from "@/components/common/BlogSEO";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.id === slug);

  if (!blogs || blogs.length === 0) {
    return <div className="text-center p-8">No blogs available</div>;
  }

  if (!blog) {
    return <div className="text-center p-8">Blog not found</div>;
  }

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* <BlogSEO
        title={`${blog.title} | MobiHeal MDM`}
        description={blog.introduction}
        // internalLinks={blog.seoRecommendations?.internalLinks}
      /> */}
    
<Helmet>
    <title>{blog.title}</title>
    <meta name="description" content={blog.description} />
    <meta name="keywords" content={blog.keywords} />

    {/* Canonical */}
    <link rel="canonical" href={blog.canonical} />

    {/* Open Graph */}
    <meta property="og:type" content={blog.og.type} />
    <meta property="og:url" content={blog.og.url} />
    <meta property="og:title" content={blog.og.title} />
    <meta property="og:description" content={blog.og.description} />
    <meta property="og:image" content={blog.og.image} />
    <meta property="og:image:alt" content={blog.og.imageAlt} />

    {/* Twitter / X */}
    <meta name="twitter:card" content={blog.twitter.card} />
    <meta name="twitter:url" content={blog.twitter.url} />
    <meta name="twitter:title" content={blog.twitter.title} />
    <meta name="twitter:description" content={blog.twitter.description} />
    <meta name="twitter:image" content={blog.twitter.image} />
    <meta name="twitter:image:alt" content={blog.twitter.imageAlt} />
  </Helmet>
      <BlogHero blog={blog} />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 mt-8 px-4 lg:px-0">
        {/* Main Blog Body */}
        <div className="lg:col-span-9">
          <BlogBody blog={blog} />
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-3 hidden lg:block">
          <div className="sticky top-20">
            <SidebarBlogList blogs={blogs} activeBlogId={blog.id} />
          </div>
        </aside>
      </div>

      <LatestBlogCarousel blogs={blogs.filter((b) => b.id !== blog.id)} />
      {/* <NewsletterCTA /> */}
    </div>
  );
};

export default BlogDetailPage;
