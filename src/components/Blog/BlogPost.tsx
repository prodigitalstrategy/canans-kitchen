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

  // Parse inline markdown (bold, italic, links)
  const parseInlineMarkdown = (text: string): React.ReactNode => {
    // Split by markdown patterns while keeping delimiters
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let key = 0;

    while (remaining.length > 0) {
      // Check for bold **text**
      const boldMatch = remaining.match(/\*\*([^*]+)\*\*/);
      // Check for italic *text* (not bold)
      const italicMatch = remaining.match(/(?<!\*)\*([^*]+)\*(?!\*)/);
      // Check for links [text](url)
      const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);

      // Find the earliest match
      const matches = [
        boldMatch ? { type: 'bold', match: boldMatch, index: boldMatch.index! } : null,
        italicMatch ? { type: 'italic', match: italicMatch, index: italicMatch.index! } : null,
        linkMatch ? { type: 'link', match: linkMatch, index: linkMatch.index! } : null,
      ].filter(Boolean).sort((a, b) => a!.index - b!.index);

      if (matches.length === 0) {
        // No more matches, add remaining text
        parts.push(remaining);
        break;
      }

      const earliest = matches[0]!;
      
      // Add text before the match
      if (earliest.index > 0) {
        parts.push(remaining.slice(0, earliest.index));
      }

      // Add the formatted element
      if (earliest.type === 'bold') {
        parts.push(
          <strong key={key++} className="font-semibold text-charcoal">
            {earliest.match![1]}
          </strong>
        );
        remaining = remaining.slice(earliest.index + earliest.match![0].length);
      } else if (earliest.type === 'italic') {
        parts.push(
          <em key={key++} className="italic">
            {earliest.match![1]}
          </em>
        );
        remaining = remaining.slice(earliest.index + earliest.match![0].length);
      } else if (earliest.type === 'link') {
        parts.push(
          <a
            key={key++}
            href={earliest.match![2]}
            className="text-primary hover:text-primary-dark underline"
            target={earliest.match![2].startsWith('http') ? '_blank' : undefined}
            rel={earliest.match![2].startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {earliest.match![1]}
          </a>
        );
        remaining = remaining.slice(earliest.index + earliest.match![0].length);
      }
    }

    return parts.length === 1 && typeof parts[0] === 'string' ? parts[0] : <>{parts}</>;
  };

  const renderContent = (content: string) => {
    const sections = content.split("\n\n");
    let currentSection = {
      title: "",
      content: [] as string[],
    };
    const renderedSections: { title: string; content: string[] }[] = [];

    sections.forEach((section, index) => {
      if (section.startsWith("#")) {
        // If we have a previous section, push it
        if (currentSection.content.length > 0 || currentSection.title) {
          renderedSections.push({ ...currentSection });
        }
        // Start new section
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
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-6">
            {parseInlineMarkdown(section.title)}
          </h2>
        )}
        <div className="space-y-6">
          {section.content.map((paragraph, paraIndex) => {
            if (paragraph.startsWith("- ")) {
              const items = paragraph
                .split("\n")
                .map((item) => item.replace(/^-\s/, ""));
              return (
                <ul key={paraIndex} className="list-disc pl-6 space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="text-charcoal-light">
                      {parseInlineMarkdown(item)}
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
                    <li key={i} className="text-charcoal-light">
                      {parseInlineMarkdown(item)}
                    </li>
                  ))}
                </ol>
              );
            }
            return (
              <p key={paraIndex} className="text-charcoal-light leading-relaxed">
                {parseInlineMarkdown(paragraph)}
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
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center text-white/90 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
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
              {renderContent(post.content)}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
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
