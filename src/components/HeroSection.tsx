"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection = () => {
  // Use state to track if component is mounted (client-side only)
  const [mounted, setMounted] = useState(false);
  const { translations } = useLanguage();

  // Only run animations after client-side hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const textVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delay: 0.2, duration: 0.5 }
    }
  };

  const lineVariant = {
    hidden: { width: 0 },
    show: {
      width: 96,
      transition: { delay: 0.5, duration: 0.5 }
    }
  };

  const paragraphVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delay: 0.7, duration: 0.5 }
    }
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.9, duration: 0.5 }
    }
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.3, duration: 0.7 }
    }
  };

  const testimonialVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { delay: 1, duration: 0.5 }
    }
  };

  return (
    <section className="py-16 bg-[#f7fafb] dark:bg-gray-900">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          className="space-y-6"
          variants={container}
          initial={mounted ? "hidden" : "show"}
          animate={mounted ? "show" : "show"}
        >
          <motion.h1
            className="text-3xl lg:text-4xl font-medium leading-tight"
            variants={textVariant}
            initial={mounted ? "hidden" : "show"}
            animate={mounted ? "show" : "show"}
          >
            {translations.hero.title} <br />
            <span className="text-primary font-semibold">{translations.hero.titleHighlight}</span>
          </motion.h1>
          <motion.div
            className="h-1 w-24 bg-primary"
            variants={lineVariant}
            initial={mounted ? "hidden" : "show"}
            animate={mounted ? "show" : "show"}
          ></motion.div>
          <motion.p
            className="text-gray-700 dark:text-gray-300 max-w-lg"
            variants={paragraphVariant}
            initial={mounted ? "hidden" : "show"}
            animate={mounted ? "show" : "show"}
          >
            {translations.hero.description}
            <span className="font-semibold"> {translations.hero.kioskFeature}</span> {translations.hero.kioskDescription},
            <span className="font-semibold"> {translations.hero.appFeature}</span> {translations.hero.appDescription}
          </motion.p>
          <motion.div
            variants={buttonVariant}
            initial={mounted ? "hidden" : "show"}
            animate={mounted ? "show" : "show"}
          >
            <Button asChild variant="primary" className="hover:scale-105 transition-transform">
              <Link href="tel:02873007373">{translations.hero.contactButton}</Link>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative"
          variants={imageVariant}
          initial={mounted ? "hidden" : "show"}
          animate={mounted ? "show" : "show"}
        >
          <Image
            src="https://ytedongthap.vn/assets/landing/images/phone1.png"
            alt={translations.hero.imageAlt}
            width={400}
            height={800}
            priority
            className="object-contain w-auto h-auto max-h-[600px] transition-all duration-500 ease-out hover:scale-102 hover:-translate-y-2"
            style={{
              filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))',
              transform: 'perspective(1000px) rotateY(-5deg)',
            }}
          />
          <motion.div
            className="absolute top-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-[200px]"
            variants={testimonialVariant}
            initial={mounted ? "hidden" : "show"}
            animate={mounted ? "show" : "show"}
            whileHover={mounted ? { scale: 1.05 } : {}}
          >
            <div className="text-sm text-gray-600 dark:text-gray-300 italic">
              "{translations.hero.testimonial}"
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
