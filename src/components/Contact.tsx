import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6 text-orange-900">Visit Us</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-orange-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gray-600">16937 Bushard St<br />Fountain Valley, CA 92708</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-orange-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a href="tel:9493946318" className="text-orange-600 hover:text-orange-700">
                    (949) 394-6318
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-orange-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 7:00 AM - 3:00 PM<br />
                    Saturday - Sunday: 8:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.5677963774257!2d-117.95420882357644!3d33.72151593770786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd25f2648a4ac9%3A0x4c0c5f1c2c6e236b!2s16937%20Bushard%20St%2C%20Fountain%20Valley%2C%20CA%2092708!5e0!3m2!1sen!2sus!4v1709901234567!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}