import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "./blogData";
import { Calendar, User, ArrowRight } from "lucide-react";

interface BlogProps {
  fullWidth?: boolean;
}

export function Blog({ fullWidth = false }: BlogProps) {
  const posts = blogPosts;

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
            From Our Kitchen
          </h2>
          <p className="text-gray-600 text-lg">
            Discover our collection of authentic recipes, cooking tips, and
            culinary stories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-white/90 text-primary text-sm font-medium rounded-full transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      {post.category}
                    </span>
                  </div>
                </div>
              </Link>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} className="text-primary" />
                    <time>{post.date}</time>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={16} className="text-primary" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary hover:text-primary-dark transition-colors font-medium group/link"
                >
                  Read Recipe
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No blog posts found.</p>
          </div>
        )}
      </div>
    </section>
  );
}
