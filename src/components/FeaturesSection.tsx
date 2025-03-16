"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const FeaturesSection = () => {
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Only run animations after client-side hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.5,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  // Determines if animation should run
  const shouldAnimate = mounted && isInView;

  return (
    <section className="py-16" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl md:text-3xl font-medium">
            Với FPT.SmartKiosk, <span className="text-primary">bạn chủ động hơn!</span>
          </h2>
          <motion.div
            className="h-1 w-16 bg-primary mx-auto mt-4 mb-6"
            initial={shouldAnimate ? { width: 0 } : { width: 64 }}
            animate={shouldAnimate ? { width: 64 } : { width: 64 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          ></motion.div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            FPT.SmartKiosk thấu hiểu vấn đề của bệnh nhân, chúng tôi đem đến các giải pháp
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial={shouldAnimate ? "hidden" : "show"}
          animate={shouldAnimate ? "show" : "show"}
        >
          {/* Feature 1 */}
          <motion.div
            className="bg-[#f7fafb] dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            variants={item}
            whileHover={mounted ? { y: -5, transition: { duration: 0.2 } } : {}}
          >
            <h3 className="text-xl font-medium mb-4">Chủ động tại bệnh viện</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Không phải loay hoay tìm kiếm sự trợ giúp, với KIOSK bạn có thể đặt lịch khám, đóng tiền khám để có trải nghiệm khám xuôi suốt
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="bg-[#f7fafb] dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            variants={item}
            whileHover={mounted ? { y: -5, transition: { duration: 0.2 } } : {}}
          >
            <h3 className="text-xl font-medium mb-4">Tài khoản y tế bảo mật</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Sử dụng CCCD để tạo tài khoản Y tế dễ dàng, tích hợp mã bệnh nhân và tài khoản thanh toán viện phí thông minh, loại bỏ phiếu khám giấy thủ tục rườm rà *
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
              (*) Thông tin bệnh nhân sẽ được định danh và xác thực với dữ liệu của Trung tâm RAR - Bộ Công an giúp làm sạch dữ liệu y tế cho các CSYT
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="bg-[#f7fafb] dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            variants={item}
            whileHover={mounted ? { y: -5, transition: { duration: 0.2 } } : {}}
          >
            <div className="mb-4">
              <h3 className="text-xl font-medium">Ứng dụng điện thoại thông minh</h3>
            </div>
            <div className="flex justify-center">
              <motion.div
                initial={shouldAnimate ? { scale: 0.8, opacity: 0 } : { scale: 1, opacity: 1 }}
                animate={shouldAnimate ? { scale: 1, opacity: 1 } : { scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Image
                  src="https://ytedongthap.vn/assets/landing/images/phone_2.png"
                  alt="FPT.SmartKiosk App"
                  width={200}
                  height={400}
                  className="object-contain"
                />
              </motion.div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
                Bạn có thể dễ dàng đặt lịch khám tại bệnh viện trực tiếp trên ứng dụng và nhận kết quả trực tuyến tại nhà, giúp tiết kiệm thời gian và thuận tiện hơn trong quá trình chăm sóc sức khỏe
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
