import { AnimatedText } from '@/components/AnimatedText';
import { CalendarIcon, MapPinIcon } from '@/components/Icons';
import { InfoItem } from '@/components/InfoItem';
import Image from 'next/image';
import React from 'react';

const ProfileImage = () => {
  return (
    <div className="relative">
      {/* Clean card with subtle shadow */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        
        {/* Minimal frame - just a thin border */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden">
          <div className="w-64 h-64 sm:w-80 sm:h-80">
            <Image
              src="/images/profile.jpg"
              alt="Manish Lath"
              width={480}
              height={480}
              className="w-full h-full object-cover rounded-md transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

const TextContent = () => {
  // Configurable texts for animation
  const animatedTexts = [
    'Software Developer',
    'Backend Developer',
    'Java Developer',
    'History Enthusiast'
  ];

  // Fallback text for SSR and SEO
  const fallbackText = 'Software Developer';

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Hi, I am{' '}
          <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            &lt; Manish Lath /&gt;
          </span>
        </h1>

        <div className="text-2xl font-light min-h-[2rem] text-right">
          A <AnimatedText
            texts={animatedTexts}
            fallbackText={fallbackText}
            speed={120}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3 pt-4 justify-end">
        <InfoItem icon={MapPinIcon} text="Pune" />
        <InfoItem icon={CalendarIcon} text="5 Years Experience" />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="bg-background text-foreground flex items-center">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          <div className="flex-shrink-0">
            <ProfileImage />
          </div>

          <div className="flex-1 max-w-2xl">
            <TextContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;