import React from "react";
import { Link, useParams } from "react-router-dom";
import { blogPosts } from "./blogData";
import {
  Calendar,
  User,
  ArrowLeft,
  Clock,
  Users,
  ChefHat,
  Share2,
  Facebook,
  Twitter,
} from "lucide-react";
import ReactMarkdown from "react-markdown";

export function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-display mb-4">Post not found</h1>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 text-white/80 mb-4">
              <div className="flex items-center gap-1">
                <Calendar size={18} />
                <time>{post.date}</time>
              </div>
              <div className="flex items-center gap-1">
                <User size={18} />
                <span>{post.author}</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-primary/20 text-white text-sm">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Article Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-display font-bold text-primary mt-12 mb-6">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-display font-semibold text-gray-800 mt-8 mb-4">
                      {children}
                    </h3>
                  ),
                  ul: ({ children }) => (
                    <ul className="space-y-2 my-6">{children}</ul>
                  ),
                  li: ({ children }) => (
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary/60 mt-2 mr-3" />
                      <span>{children}</span>
                    </li>
                  ),
                  ol: ({ children }) => (
                    <ol className="space-y-4 my-6 list-none pl-0">
                      {children}
                    </ol>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Quick Facts Card */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-primary/5 p-6">
                  <h3 className="font-display font-semibold text-xl text-primary mb-4">
                    Quick Facts
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Clock className="text-primary" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">Prep Time</p>
                        <p className="font-semibold">15 mins</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="text-primary" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">Cook Time</p>
                        <p className="font-semibold">30-35 mins</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="text-primary" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">Servings</p>
                        <p className="font-semibold">4-6 people</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChefHat className="text-primary" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">Difficulty</p>
                        <p className="font-semibold">Medium</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Share Card */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Share2 className="text-primary" size={20} />
                  <h3 className="font-display font-semibold text-xl">
                    Share Recipe
                  </h3>
                </div>
                <div className="flex gap-4">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      post.title
                    )}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2]/10 text-[#1DA1F2] rounded-lg hover:bg-[#1DA1F2]/20 transition-colors"
                  >
                    <Twitter size={18} />
                    Twitter
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      window.location.href
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#4267B2]/10 text-[#4267B2] rounded-lg hover:bg-[#4267B2]/20 transition-colors"
                  >
                    <Facebook size={18} />
                    Facebook
                  </a>
                </div>
              </div>

              {/* Print Button */}
              <button
                onClick={() => window.print()}
                className="w-full px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 font-medium"
              >
                Print Recipe
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                  />
                </svg>
              </button>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
