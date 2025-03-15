"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  Smartphone,
  CreditCard,
  MessageSquareText,
  Building,
  CheckCircle,
  MonitorSmartphone,
  BadgeCheck,
  Users
} from 'lucide-react';

const ServicesPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const iconVariant = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  const listVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const listItemVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const userServices = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Ứng dụng di động dành cho người bệnh - PATIO",
      description: "Ứng dụng PATIO trên điện thoại giúp bạn đặt lịch khám bệnh, thanh toán viện phí, và quản lý hồ sơ sức khỏe cá nhân mọi lúc mọi nơi.",
      features: [
        "Đặt lịch khám bệnh trực tuyến 24/7",
        "Nhận kết quả khám trực tiếp trên ứng dụng",
        "Quản lý hồ sơ sức khỏe của bạn và gia đình"
      ]
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Thanh toán viện phí không tiền mặt",
      description: "Thanh toán viện phí nhanh chóng và an toàn qua nhiều phương thức khác nhau, giúp tiết kiệm thời gian và tránh phải mang nhiều tiền mặt.",
      features: [
        "Thanh toán qua ví điện tử, QR code",
        "Hỗ trợ thẻ tín dụng/ghi nợ nội địa và quốc tế",
        "Nhận biên lai điện tử ngay sau khi thanh toán"
      ]
    },
    {
      icon: <MessageSquareText className="h-8 w-8" />,
      title: "Tư vấn sức khỏe trực tuyến",
      description: "Kết nối với các bác sĩ chuyên khoa để được tư vấn sức khỏe trực tuyến không cần phải đến bệnh viện.",
      features: [
        "Tư vấn sức khỏe 24/7 với các bác sĩ chuyên khoa",
        "Chat trực tuyến hoặc cuộc gọi video",
        "Nhận đơn thuốc và hướng dẫn điều trị từ xa"
      ]
    }
  ];

  const hospitalServices = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Hệ thống quản lý bệnh viện - FPT.eHospital",
      description: "Giải pháp quản lý toàn diện dành cho các cơ sở y tế, tích hợp với hệ thống HIS hiện có để tối ưu hóa quy trình khám chữa bệnh.",
      features: [
        "Tích hợp với hệ thống HIS của bệnh viện",
        "Quản lý lịch hẹn và bệnh nhân hiệu quả",
        "Báo cáo và phân tích dữ liệu chi tiết"
      ]
    },
    {
      icon: <MonitorSmartphone className="h-8 w-8" />,
      title: "Kiosk tự phục vụ",
      description: "Hệ thống kiosk tự phục vụ đặt tại các cơ sở y tế, giúp bệnh nhân tự đăng ký khám bệnh, thanh toán viện phí và nhận kết quả mà không cần xếp hàng chờ đợi.",
      features: [
        "Đăng ký khám bệnh tự động bằng CCCD",
        "Thanh toán viện phí và in biên lai",
        "Hỗ trợ đa ngôn ngữ và trợ giúp từ xa"
      ]
    },
    {
      icon: <BadgeCheck className="h-8 w-8" />,
      title: "Xác thực thông tin bệnh nhân",
      description: "Hệ thống xác thực thông tin bệnh nhân tích hợp với dữ liệu của Bộ Công an, đảm bảo thông tin bệnh nhân luôn chính xác và an toàn.",
      features: [
        "Xác thực bằng CCCD gắn chip",
        "Tích hợp với cơ sở dữ liệu quốc gia",
        "Bảo mật và tuân thủ quy định về dữ liệu"
      ]
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="py-16 bg-[#f7fafb] dark:bg-gray-900"
        >
          <div className="container-custom">
            <motion.div
              className="text-center"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-medium mb-4">
                Các dịch vụ <span className="text-primary font-semibold">FPT.SmartKiosk</span>
              </h1>
              <motion.div
                className="h-1 w-24 bg-primary mx-auto mb-6"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              ></motion.div>
              <motion.p
                className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
              >
                FPT.SmartKiosk cung cấp nhiều dịch vụ khác nhau để giúp người dùng và các cơ sở y tế có trải nghiệm khám chữa bệnh tốt hơn.
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Main Services Section */}
        <section className="py-16">
          <div className="container-custom">
            {/* User Services */}
            <motion.div
              className="mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2
                className="text-2xl font-medium mb-4"
                variants={fadeInUp}
              >
                Cho Người dùng
              </motion.h2>
              <motion.div
                className="h-1 w-16 bg-primary mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              ></motion.div>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer}
              >
                {userServices.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariant}
                    whileHover={mounted ? { y: -10, transition: { duration: 0.2 } } : {}}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <motion.div
                      className="bg-primary/10 p-4 rounded-full h-16 w-16 flex items-center justify-center mb-6"
                      variants={iconVariant}
                    >
                      <div className="text-primary">{service.icon}</div>
                    </motion.div>
                    <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {service.description}
                    </p>
                    <motion.ul
                      className="space-y-3"
                      variants={listVariant}
                    >
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          variants={listItemVariant}
                          className="flex items-start"
                        >
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Hospital Services */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2
                className="text-2xl font-medium mb-4"
                variants={fadeInUp}
              >
                Cho Cơ sở y tế
              </motion.h2>
              <motion.div
                className="h-1 w-16 bg-primary mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              ></motion.div>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer}
              >
                {hospitalServices.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariant}
                    whileHover={mounted ? { y: -10, transition: { duration: 0.2 } } : {}}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <motion.div
                      className="bg-primary/10 p-4 rounded-full h-16 w-16 flex items-center justify-center mb-6"
                      variants={iconVariant}
                    >
                      <div className="text-primary">{service.icon}</div>
                    </motion.div>
                    <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {service.description}
                    </p>
                    <motion.ul
                      className="space-y-3"
                      variants={listVariant}
                    >
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          variants={listItemVariant}
                          className="flex items-start"
                        >
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <motion.section
          className="py-16 bg-[#f7fafb] dark:bg-gray-900"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="container-custom">
            <motion.div
              className="text-center mb-12"
              variants={fadeInUp}
            >
              <h2 className="text-2xl md:text-3xl font-medium">
                Bảng giá <span className="text-primary">dịch vụ</span>
              </h2>
              <motion.div
                className="h-1 w-16 bg-primary mx-auto mt-4 mb-6"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              ></motion.div>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Chúng tôi cung cấp nhiều gói dịch vụ linh hoạt phù hợp với nhu cầu của bạn và cơ sở y tế.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              {/* Basic Plan */}
              <motion.div
                variants={cardVariant}
                whileHover={mounted ? { scale: 1.05, transition: { duration: 0.2 } } : {}}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="bg-gray-100 dark:bg-gray-700 p-6 text-center">
                  <h3 className="text-xl font-medium">Cơ bản</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">Miễn phí</span>
                  </div>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">Cho người dùng cá nhân</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span>Đặt lịch khám bệnh cơ bản</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span>Hồ sơ sức khỏe cá nhân</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span>Thanh toán viện phí cơ bản</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span>Nhắc lịch khám định kỳ</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full mt-6">
                    <Link href="/lien-he">Đăng ký ngay</Link>
                  </Button>
                </div>
              </motion.div>

              {/* Premium Plan */}
              <motion.div
                variants={cardVariant}
                whileHover={mounted ? { scale: 1.05, transition: { duration: 0.2 } } : {}}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border-2 border-primary overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-medium">Phổ biến</div>
                <div className="bg-primary/10 p-6 text-center">
                  <h3 className="text-xl font-medium">Cao cấp</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">150,000 đ</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">/tháng</span>
                  </div>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">Cho cá nhân và gia đình</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span>Tất cả tính năng gói Cơ bản</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span>Tư vấn sức khỏe ưu tiên 24/7</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span>Quản lý hồ sơ cho 5 thành viên gia đình</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span>Ưu đãi thanh toán và đặt lịch khám</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span>Hỗ trợ bảo hiểm y tế</span>
                    </li>
                  </ul>
                  <Button variant="primary" className="w-full mt-6">
                    <Link href="/lien-he">Đăng ký ngay</Link>
                  </Button>
                </div>
              </motion.div>

              {/* Enterprise Plan */}
              <motion.div
                variants={cardVariant}
                whileHover={mounted ? { scale: 1.05, transition: { duration: 0.2 } } : {}}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="bg-gray-100 dark:bg-gray-700 p-6 text-center">
                  <h3 className="text-xl font-medium">Doanh nghiệp</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">Liên hệ</span>
                  </div>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">Cho tổ chức y tế</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span>Tích hợp toàn diện với hệ thống HIS</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span>Hệ thống kiosk đa năng tại bệnh viện</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span>Báo cáo phân tích chi tiết</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span>Quản lý đội ngũ y tế</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span>Hỗ trợ kỹ thuật 24/7 ưu tiên</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full mt-6">
                    <Link href="/lien-he">Liên hệ tư vấn</Link>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Call To Action */}
        <motion.section
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="container-custom">
            <motion.div
              className="bg-primary text-white rounded-xl p-8 md:p-12"
              whileHover={mounted ? { scale: 1.02, transition: { duration: 0.2 } } : {}}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <motion.div variants={fadeInUp}>
                  <h2 className="text-2xl md:text-3xl font-medium mb-4">
                    Bắt đầu sử dụng FPT.SmartKiosk ngay hôm nay
                  </h2>
                  <p className="mb-6">
                    Hãy liên hệ với chúng tôi để được tư vấn chi tiết về các dịch vụ và giải pháp phù hợp nhất với nhu cầu của bạn.
                  </p>
                  <Button variant="secondary" className="hover:scale-105 transition-transform">
                    <Link href="/lien-he">Liên hệ ngay</Link>
                  </Button>
                </motion.div>
                <motion.div
                  className="flex justify-center md:justify-end"
                  variants={iconVariant}
                >
                  <div className="bg-white p-4 rounded-full">
                    <Users className="h-24 w-24 text-primary" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
