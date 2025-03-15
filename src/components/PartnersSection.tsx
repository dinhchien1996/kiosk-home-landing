"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const partners = [
  {
    imageSrc: "https://ext.same-assets.com/3157684533/2039398885.webp",
    alt: "Partner 1",
  },
  {
    imageSrc: "https://ext.same-assets.com/249083353/4092621181.jpeg",
    alt: "Partner 2",
  },
  {
    imageSrc: "https://ext.same-assets.com/2638208496/1872655184.webp",
    alt: "Partner 3",
  },
  {
    imageSrc: "https://ext.same-assets.com/2966398283/778902462.webp",
    alt: "Partner 4",
  },
  {
    imageSrc: "https://ext.same-assets.com/2351056805/3769169821.png",
    alt: "Partner 5",
  },
];

const PartnersSection = () => {
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Only run animations after client-side hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determines if animation should run
  const shouldAnimate = mounted && isInView;

  return (
    <section className="py-16 bg-[#f7fafb] dark:bg-gray-900" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-medium">
            Các cơ sở y tế đang <span className="text-primary">triển khai FPT.SmartKiosk</span>
          </h2>
          <motion.div
            className="h-1 w-16 bg-primary mx-auto mt-4 mb-6"
            initial={shouldAnimate ? { width: 0 } : { width: 64 }}
            animate={shouldAnimate ? { width: 64 } : { width: 64 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          ></motion.div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            FPT.SmartKiosk dễ dàng tích hợp với hệ thống HIS bệnh viện để triển khai KIOSK và tích hợp đặt lịch khám/kết quả khám vào ứng dụng, tối ưu trải nghiệm khám bệnh
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex justify-center"
              initial={shouldAnimate ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
              animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              whileHover={mounted ? { scale: 1.1, transition: { duration: 0.2 } } : {}}
            >
              <Image
                src={partner.imageSrc}
                alt={partner.alt}
                width={120}
                height={120}
                className="object-contain bg-white dark:bg-gray-800 rounded-full p-2"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Liên hệ ngay để tư vấn giải pháp thanh toán không tiền mặt với QR và hợp tác lắp đặt KIOSK tại cơ sở y tế
          </p>
          <Button asChild variant="primary" className="hover:scale-105 transition-transform">
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
