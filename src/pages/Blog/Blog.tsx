import type { BlogPost } from "../../lib/types";
import { BlogCard } from "../../components/BlogCard/BlogCard";

export const BlogPage: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Learn how to structure and build maintainable React applications using TypeScript, best practices, and modern tooling.',
      date: 'Jan 15, 2025',
      readTime: '8 min read',
      category: 'React',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Modern CSS Grid Layout Techniques',
      excerpt: 'Explore advanced CSS Grid techniques for creating responsive and flexible layouts that work across all devices.',
      date: 'Jan 10, 2025',
      readTime: '6 min read',
      category: 'CSS',
      image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Optimizing Web Performance in 2025',
      excerpt: 'A comprehensive guide to web performance optimization covering Core Web Vitals, lazy loading, and modern techniques.',
      date: 'Jan 5, 2025',
      readTime: '12 min read',
      category: 'Performance',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'The Future of Frontend Development',
      excerpt: 'Exploring emerging trends in frontend development including AI integration, WebAssembly, and next-gen frameworks.',
      date: 'Dec 28, 2024',
      readTime: '10 min read',
      category: 'Trends',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="text-start mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Blog
          </h1>
          <p className="text-xl  text-gray-600 dark:text-gray-300">
            Sharing insights about web development, design, and the latest trends in technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};
