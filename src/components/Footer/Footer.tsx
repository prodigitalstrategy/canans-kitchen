import React from "react";
import { SocialLinks } from "./SocialLinks";
import { QuickLinks } from "./QuickLinks";
import { Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-white">
              Canan's Kitchen
            </h3>
            <p className="text-white/70">
              Bringing authentic Turkish breakfast and hospitality to Fountain
              Valley, CA. Experience the warmth of Turkish culture through our
              delicious food and welcoming atmosphere.
            </p>
          </div>

          {/* Hours Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-display font-semibold text-white">
              Hours
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Clock size={20} className="mt-1 flex-shrink-0 text-white/70" />
                <div>
                  <p className="text-white">Monday - Friday</p>
                  <p className="text-white/70">8:30 AM - 2:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={20} className="mt-1 flex-shrink-0 text-white/70" />
                <div>
                  <p className="text-white">Saturday - Sunday</p>
                  <p className="text-white/70">9:00 AM - 3:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-display font-semibold text-white">
              Quick Links
            </h4>
            <QuickLinks />
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-display font-semibold text-white">
              Connect With Us
            </h4>
            <SocialLinks />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-4 text-white/70 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Canan's Kitchen & Bakery. All
              rights reserved.
            </p>
            <p className="md:text-right">
              Designed with ❤️ in Fountain Valley, CA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
