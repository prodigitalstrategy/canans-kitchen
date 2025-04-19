import React from 'react';
import { AboutContent } from './AboutContent';
import { AboutImage } from './AboutImage';

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AboutContent />
          <AboutImage />
        </div>
      </div>
    </section>
  );
}