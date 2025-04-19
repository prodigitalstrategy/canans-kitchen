import React, { useState, useEffect } from "react";
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
  const [postsPerView, setPostsPerView] = useState(3);
  const posts = blogPosts;

  // Adjust posts per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) { // sm
        setPostsPerView(1);
      } else if (window.innerWidth < 1024) { // md
        setPostsPerView(2);
      } else {
        setPostsPerView(3);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      className="py-12 sm:py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6 xs:mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
            From Our Kitchen
          </h2>
          <p className="text-gray-600 text-base sm:text-lg px-4">
            Discover our collection of authentic recipes, cooking tips, and
            culinary stories.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons - Hidden on mobile, shown on tablet and up */}
          <div className="hidden sm:block">
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
          </div>

          {/* Posts Carousel */}
          <div className="relative">
            <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 xs:gap-8 mb-8">
              {visiblePosts.map((post) => (
                <article
                  key={post.id}
                  className="w-full flex-shrink-0 group bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 xs:h-56 object-cover rounded-t-xl"
                        loading="lazy"
                        draggable="false"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block px-3 py-1 bg-white/90 text-primary text-sm font-medium rounded-full transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </Link>

                  <div className="p-4 sm:p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3 sm:mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} className="text-primary" />
                        <time>{post.date}</time>
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={16} className="text-primary" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-gray-600 mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3 text-sm sm:text-base">
                      {post.excerpt}
                    </p>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary hover:text-primary-dark transition-colors font-medium group/link text-sm sm:text-base"
                    >
                      Read Recipe
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 sm:hidden">
            {Array.from({ length: Math.ceil(posts.length / postsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setStartIndex(index * postsPerView)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(startIndex / postsPerView) === index
                    ? "bg-primary w-4"
                    : "bg-gray-300"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {posts.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-gray-600">No blog posts found.</p>
          </div>
        )}
      </div>
    </section>
  );
}
