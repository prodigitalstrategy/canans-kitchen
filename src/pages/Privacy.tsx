import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function Privacy() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back to Home Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <h1 className="text-4xl font-serif font-bold mb-8 text-primary">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold mb-4 text-gray-800">
              Introduction
            </h2>
            <p className="text-gray-600">
              At Canan's Kitchen & Bakery, we respect your privacy and are
              committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, and safeguard your data when
              you visit our website or dine at our restaurant.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold mb-4 text-gray-800">
              Information We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Contact information (name, email, phone number)</li>
              <li>Reservation details</li>
              <li>Order history and preferences</li>
              <li>Website usage data</li>
              <li>Customer feedback and reviews</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold mb-4 text-gray-800">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Manage reservations</li>
              <li>Communicate with you about our services</li>
              <li>Improve our menu and customer experience</li>
              <li>Send promotional offers (with your consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold mb-4 text-gray-800">
              Information Sharing
            </h2>
            <p className="text-gray-600">
              We do not sell or share your personal information with third
              parties except as necessary to provide our services (such as
              payment processing or delivery services) or as required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold mb-4 text-gray-800">
              Your Rights
            </h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold mb-4 text-gray-800">
              Contact Us
            </h2>
            <p className="text-gray-600">
              If you have any questions about our Privacy Policy, please contact
              us at:
            </p>
            <div className="mt-4 text-gray-600">
              <p>Canan's Kitchen & Bakery</p>
              <p>16937 Bushard St</p>
              <p>Fountain Valley, CA 92708</p>
              <p>Phone: (949) 394-6318</p>
              <p>Email: info@cananskitchen.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
