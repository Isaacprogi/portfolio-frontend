import { type BlogPost } from "../../lib/types";
import { Calendar } from "lucide-react";

export const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <article className="bg-white rounded-md dark:bg-gray-900  shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6"> 
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
          {post.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {post.date}
          </div>
          <div>
            <span>{post.readTime}</span>
          </div>
        
        <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors">
          Read More →
        </button>
      </div>
    </article>
  );
};