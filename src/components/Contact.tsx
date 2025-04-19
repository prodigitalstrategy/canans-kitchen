import React from "react";
import { MapPin, Phone, Clock, Instagram, ExternalLink } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-12 xs:py-14 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6 text-orange-900">
              Visit Us
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-orange-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gray-600">
                    16937 Bushard St
                    <br />
                    Fountain Valley, CA 92708
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-orange-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a
                    href="tel:9493946318"
                    className="text-orange-600 hover:text-orange-700"
                  >
                    (949) 394-6318
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-orange-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 7:00 AM - 3:00 PM
                    <br />
                    Saturday - Sunday: 8:00 AM - 4:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-orange-600 mt-1">
                  <Instagram size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/canansktchen/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-orange-700"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.yelp.com/biz/canans-kitchen-and-bakery-fountain-valley"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-orange-700 flex items-center gap-1"
                    >
                      <span>Yelp</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.5675782412392!2d-117.95642548479258!3d33.72131048070039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd262e37cd1b99%3A0x87f58df36b1c3bde!2sCanan&#39;s%20Kitchen%20%26%20Bakery!5e0!3m2!1sen!2sus!4v1679807997130!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Canan's Kitchen & Bakery Location"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
