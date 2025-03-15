"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const [mounted, setMounted] = useState(false);

  // Only run animations after client-side hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation should only run client-side
  const initialState = mounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 };
  const animateState = mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 };

  return (
    <footer className="bg-primary dark:bg-primary/90 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <motion.div
            initial={initialState}
            animate={animateState}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-medium mb-4">Về chúng tôi</h3>
            <p className="text-sm md:text-base mb-4">
              FPT.SmartKiosk là một tiện ích y tế thông minh giúp bệnh nhân và người có nhu cầu khám bệnh thuận tiện hơn và tiết kiệm thời gian
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={initialState}
            animate={animateState}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-xl font-medium mb-4">Liên kết</h3>
            <ul className="space-y-2">
              <motion.li
                whileHover={mounted ? { x: 5 } : {}}
                transition={{ duration: 0.2 }}
              >
                <Link href="/" className="text-white hover:underline hover:text-gray-200 transition-colors">
                  Trang chủ
                </Link>
              </motion.li>
              <motion.li
                whileHover={mounted ? { x: 5 } : {}}
                transition={{ duration: 0.2 }}
              >
                <Link href="/lien-he" className="text-white hover:underline hover:text-gray-200 transition-colors">
                  Liên hệ
                </Link>
              </motion.li>
              <motion.li
                whileHover={mounted ? { x: 5 } : {}}
                transition={{ duration: 0.2 }}
              >
                <Link href="/chinh-sach-bao-mat" className="text-white hover:underline hover:text-gray-200 transition-colors">
                  Chính sách & bảo mật
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={initialState}
            animate={animateState}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3 className="text-xl font-medium mb-4">Liên hệ</h3>
            <ul className="space-y-2">
              <motion.li
                className="flex items-start"
                whileHover={mounted ? { scale: 1.02 } : {}}
                transition={{ duration: 0.2 }}
              >
                <span className="mr-2">📍</span>
                <Link
                  href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5732261386966!2d106.7469216!3d10.7673374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f210b494631%3A0x6a827c97ede183c3!2sC%C3%B4ng%20Ty%20TNHH%20FPT%20IS!5e0!3m2!1svi!2s!4v1742051836304!5m2!1svi!2s"
                  target="_blank"
                  className="text-white hover:underline hover:text-gray-200 transition-colors"
                >
                  Lô B3 Đ. Sáng Tạo, Tân Thuận Đông, Quận 7, Hồ Chí Minh 756200
                </Link>
              </motion.li>
              <motion.li
                className="flex items-center"
                whileHover={mounted ? { scale: 1.02 } : {}}
                transition={{ duration: 0.2 }}
              >
                <span className="mr-2">📞</span>
                <Link href="tel:02873007373" className="text-white hover:underline hover:text-gray-200 transition-colors">
                  02873007373
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-white/20 mt-8 pt-6 text-center"
          initial={mounted ? { opacity: 0 } : { opacity: 1 }}
          animate={mounted ? { opacity: 1 } : { opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p>© {new Date().getFullYear()}, FPT.SmartKiosk - All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
