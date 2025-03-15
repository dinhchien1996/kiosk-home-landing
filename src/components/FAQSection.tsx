"use client";

import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

const faqs: FaqItem[] = [
  {
    question: 'FPT.SmartKiosk là gì?',
    answer: (
      <div>
        <p className="mb-4">
          FPT.SmartKiosk là một tiện ích y tế thông minh giúp bạn thuận tiện và tiết kiệm thời gian. Với FPT.SmartKiosk, bạn có thể:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Đăng ký khám bệnh trực tuyến qua App tại nhà hoặc Kiosk tại bệnh viện thay vì xếp hàng như trước.</li>
          <li>Thanh toán viện phí không tiền mặt qua Kiosk hoặc App.</li>
          <li>Tra cứu kết quả khám.</li>
        </ul>
      </div>
    ),
  },
  {
    question: 'FPT.SmartKiosk có an toàn không?',
    answer: (
      <p>
        FPT.SmartKiosk sử dụng các công nghệ bảo mật tiên tiến nhất để đảm bảo an toàn thông tin cho người dùng. Tài khoản y tế có thông tin của bạn được định danh và xác thực dữ liệu của Trung tâm RAR - Bộ công an.
      </p>
    ),
  },
  {
    question: 'Tôi có thể thanh toán viện phí bằng những phương thức nào?',
    answer: (
      <p>
        Bạn có thể thanh toán viện phí bằng các phương thức sau thông qua App hoặc Kiosk: Thanh toán qua POS, VietQR, Tài khoản ngân hàng.
      </p>
    ),
  },
  {
    question: 'FPT.SmartKiosk có hoạt động tại tất cả các bệnh viện không?',
    answer: (
      <p>
        Hiện nay, FPT.SmartKiosk đang được triển khai tại nhiều bệnh viện lớn ở HCM, HN và sẽ mở rộng hơn trong năm 2024, danh sách bệnh viện liên kết sẽ được cập nhật.
      </p>
    ),
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Only run animations after client-side hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // Determines if animation should run
  const shouldAnimate = mounted && isInView;

  return (
    <section className="py-16 bg-[#f7fafb] dark:bg-gray-900" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-8"
          initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button asChild variant="primary" className="hover:scale-105 transition-transform">
          </Button>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm"
          initial={shouldAnimate ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-2xl font-medium text-center mb-2">
            Những câu hỏi <span className="text-primary">thường gặp</span>
          </h2>
          <motion.div
            className="h-1 w-16 bg-primary mx-auto mt-2 mb-6"
            initial={shouldAnimate ? { width: 0 } : { width: 64 }}
            animate={shouldAnimate ? { width: 64 } : { width: 64 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          ></motion.div>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Giải đáp thắc mắc của người bệnh và bệnh viện
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border-b dark:border-gray-700 pb-4"
                initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <button
                  className="flex justify-between items-center w-full text-left py-2"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <motion.span
                    animate={mounted ? { rotate: openIndex === index ? 180 : 0 } : { rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openIndex === index ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M5 12h14" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    )}
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {mounted && openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-2 text-gray-600 dark:text-gray-300 pt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
