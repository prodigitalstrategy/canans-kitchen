import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "./blogData";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Users,
  ChefHat,
  Share2,
  Facebook,
  Twitter,
} from "lucide-react";

export function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">Blog post not found.</p>
        </div>
      </div>
    );
  }

  const renderContent = (content: string) => {
    const sections = content.split("\n\n");
    let currentSection = {
      title: "",
      content: [] as string[],
    };
    const renderedSections = [];

    sections.forEach((section, index) => {
      if (section.startsWith("#")) {
        // If we have a previous section, push it
        if (currentSection.content.length > 0 || currentSection.title) {
          renderedSections.push({ ...currentSection });
        }
        // Start new section
        const level = section.match(/^#+/)[0].length;
        const title = section.replace(/^#+\s/, "");
        currentSection = {
          title,
          content: [],
        };
      } else {
        currentSection.content.push(section);
      }

      // Push the last section
      if (
        index === sections.length - 1 &&
        (currentSection.content.length > 0 || currentSection.title)
      ) {
        renderedSections.push({ ...currentSection });
      }
    });

    return renderedSections.map((section, sectionIndex) => (
      <div key={sectionIndex} className="mb-12">
        {section.title && (
          <h2 className="text-3xl font-display font-bold text-primary mb-6">
            {section.title}
          </h2>
        )}
        <div className="space-y-6">
          {section.content.map((paragraph, paraIndex) => {
            if (paragraph.startsWith("- ")) {
              const items = paragraph
                .split("\n")
                .map((item) => item.replace("- ", ""));
              return (
                <ul key={paraIndex} className="list-disc pl-6 space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            if (paragraph.match(/^\d+\./)) {
              const items = paragraph
                .split("\n")
                .map((item) => item.replace(/^\d+\.\s/, ""));
              return (
                <ol key={paraIndex} className="list-decimal pl-6 space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ol>
              );
            }
            return (
              <p key={paraIndex} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
    ));
  };

  return (
    <article className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden flex items-end">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover z-0 brightness-90 scale-105"
        />
        {/* Multi-layered gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-primary/30 to-black/80 z-10" />
        {/* Glassy title card */}
        <div className="relative z-20 w-full">
          <div className="container mx-auto px-4 flex flex-col justify-end h-[60vh] pb-12 md:pb-20">
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center text-white/90 hover:text-white transition-colors mb-8 group backdrop-blur-sm bg-black/30 px-4 py-2 rounded-xl shadow-lg"
            >
              <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </button>
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-4 text-white/80 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={18} />
                  <time>{post.date}</time>
                </div>
                <div className="flex items-center gap-1">
                  <User size={18} />
                  <span>{post.author}</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-primary/30 text-white text-sm font-semibold shadow-md">
                  {post.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6 leading-tight drop-shadow-2xl bg-gradient-to-br from-white/80 to-primary/60 bg-clip-text text-transparent animate-fade-in">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Article Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none animate-fade-in-up">
              {renderContent(post.content)}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-10">
              {/* Quick Facts Card */}
              <div className="rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl bg-white/80 dark:bg-gray-900/70 border border-primary/10 animate-fade-in delay-100">
                <div className="bg-primary/10 p-6">
                  <h3 className="font-display font-semibold text-xl text-primary mb-4">
                    Quick Facts
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Clock className="text-primary" size={20} />
                      <div>
                        <p className="text-xs text-gray-600">Prep Time</p>
                        <p className="font-semibold">15 mins</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="text-primary" size={20} />
                      <div>
                        <p className="text-xs text-gray-600">Cook Time</p>
                        <p className="font-semibold">30-35 mins</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="text-primary" size={20} />
                      <div>
                        <p className="text-xs text-gray-600">Servings</p>
                        <p className="font-semibold">4-6 people</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChefHat className="text-primary" size={20} />
                      <div>
                        <p className="text-xs text-gray-600">Difficulty</p>
                        <p className="font-semibold">Medium</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Share Card */}
              <div className="rounded-2xl shadow-2xl p-6 bg-white/80 dark:bg-gray-900/70 border border-primary/10 animate-fade-in delay-200">
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
                    className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2]/10 text-[#1DA1F2] rounded-lg hover:bg-[#1DA1F2]/20 transition-colors shadow-md"
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
                    className="flex items-center gap-2 px-4 py-2 bg-[#4267B2]/10 text-[#4267B2] rounded-lg hover:bg-[#4267B2]/20 transition-colors shadow-md"
                  >
                    <Facebook size={18} />
                    Facebook
                  </a>
                </div>
              </div>

              {/* Print Button */}
              <button
                onClick={() => window.print()}
                className="w-full px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 font-semibold shadow-lg animate-fade-in delay-300"
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
