import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "./blogData";
import {
  Calendar,
  User,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

export function Blog() {
  const [startIndex, setStartIndex] = useState(0);
  const [postsPerView, setPostsPerView] = useState(3);
  const posts = blogPosts;

  // Adjust posts per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setPostsPerView(1);
      } else if (window.innerWidth < 1024) {
        setPostsPerView(2);
      } else {
        setPostsPerView(3);
      }
    };

    handleResize();
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
      className="py-12 sm:py-20 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <BookOpen size={14} />
            From Our Kitchen
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            Recipes & Stories
          </h2>
          <p className="text-charcoal-light text-lg">
            Discover our collection of authentic recipes, cooking tips, and
            culinary stories from Türkiye.
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <div className="hidden sm:block">
            {canShowPrev && (
              <button
                onClick={showPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-cream p-3 rounded-full shadow-card hover:shadow-card-hover transition-all duration-300"
                aria-label="Previous posts"
              >
                <ChevronLeft className="w-5 h-5 text-charcoal" />
              </button>
            )}
            {canShowNext && (
              <button
                onClick={showNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-cream p-3 rounded-full shadow-card hover:shadow-card-hover transition-all duration-300"
                aria-label="Next posts"
              >
                <ChevronRight className="w-5 h-5 text-charcoal" />
              </button>
            )}
          </div>

          {/* Posts Carousel */}
          <div className="relative">
            <div
              className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${startIndex * (100 / postsPerView)}%)`,
              }}
            >
              {visiblePosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full flex-shrink-0 group bg-cream rounded-2xl shadow-card overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                  style={{
                    flex: `0 0 calc(${100 / postsPerView}% - ${
                      (16 * (postsPerView - 1)) / postsPerView
                    }px)`,
                  }}
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block px-3 py-1 bg-white/90 text-primary text-sm font-medium rounded-full transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </Link>

                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-4 text-xs text-charcoal-light mb-3">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-primary/60" />
                        <time>{post.date}</time>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User size={14} className="text-primary/60" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    <h3 className="font-display text-xl mb-2 text-charcoal group-hover:text-primary transition-colors line-clamp-2">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-charcoal-light text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary hover:text-primary-dark transition-colors font-medium text-sm group/link"
                    >
                      Read Recipe
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 sm:hidden">
            {Array.from({ length: Math.ceil(posts.length / postsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setStartIndex(index * postsPerView)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  Math.floor(startIndex / postsPerView) === index
                    ? "bg-primary w-6"
                    : "bg-charcoal/20 w-2"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {posts.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-charcoal-light">No blog posts found.</p>
          </div>
        )}
      </div>
    </section>
  );
}
