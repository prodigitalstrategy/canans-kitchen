import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "./blogData";
import {
  Calendar,
  User,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

export function Blog() {
  const [startIndex, setStartIndex] = useState(0);
  const postsPerView = 3;
  const posts = blogPosts;

  const showNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + postsPerView, posts.length - postsPerView)
    );
  };

  const showPrev = () => {
    setStartIndex((prev) => Math.max(prev - postsPerView, 0));
  };

  const visiblePosts = posts.slice(startIndex, startIndex + postsPerView);
  const canShowNext = startIndex + postsPerView < posts.length;
  const canShowPrev = startIndex > 0;

  return (
    <section
      id="blog"
      className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
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

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          {canShowPrev && (
            <button
              onClick={showPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Previous posts"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
          )}
          {canShowNext && (
            <button
              onClick={showNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Next posts"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          )}

          {/* Posts Carousel */}
          <div className="relative">
            <div
              className="flex gap-8 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${startIndex * (100 / postsPerView)}%)`,
              }}
            >
              {visiblePosts.map((post) => (
                <article
                  key={post.id}
                  className="w-full flex-shrink-0 group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  style={{
                    flex: `0 0 calc(${100 / postsPerView}% - ${
                      (24 * (postsPerView - 1)) / postsPerView
                    }px)`,
                  }}
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
          </div>
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
