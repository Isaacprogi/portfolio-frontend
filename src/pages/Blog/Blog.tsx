import type { BlogPost } from "../../lib/types";
import { BlogCard } from "../../components/BlogCard/BlogCard";

export const BlogPage: React.FC = () => {
  const blogPosts: BlogPost[] = []; // ← No blogs yet

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="text-start mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Sharing insights about web development, design, and the latest trends in technology.
          </p>
        </div>

        {blogPosts.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-20 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-inner">
            <img
              src="https://undraw.io/illustrations/undraw_blog_post_re_fy5x.svg"
              alt="Coming soon"
              className="w-60 h-auto mb-6"
            />
            <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
              No blogs yet
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Stay tuned — exciting content is on the way!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
