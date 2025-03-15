import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Liên hệ - FPT.SmartKiosk',
  description: 'Liên hệ với FPT.SmartKiosk - Một giải pháp y tế thông minh cho toàn dân',
};

const ContactPage = () => {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 bg-[#f7fafb] dark:bg-gray-900">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-medium mb-4">
                Liên hệ <span className="text-primary font-semibold">FPT.SmartKiosk</span>
              </h1>
              <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Chúng tôi luôn sẵn sàng hỗ trợ và trả lời các câu hỏi của bạn. Vui lòng liên hệ với chúng tôi qua form bên dưới hoặc sử dụng thông tin liên hệ.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium mb-6 border-b pb-3 dark:border-gray-700">Thông tin liên hệ</h3>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div className="ml-4">
                        <p className="font-medium">Địa chỉ</p>
                        <p className="text-gray-600 dark:text-gray-300">
                        Lô B3 Đ. Sáng Tạo, Tân Thuận Đông, Quận 7, Hồ Chí Minh
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div className="ml-4">
                        <p className="font-medium">Số điện thoại</p>
                        <p className="text-gray-600 dark:text-gray-300">028 7300 7373</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div className="ml-4">
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600 dark:text-gray-300">contact@fpt.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div className="ml-4">
                        <p className="font-medium">Giờ làm việc</p>
                        <p className="text-gray-600 dark:text-gray-300">
                          Thứ Hai - Thứ Sáu: 8:30 - 17:30<br />
                          Thứ Bảy & Chủ nhật: đóng cửa
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium mb-6 border-b pb-3 dark:border-gray-700">Bản đồ</h3>
                  <div className="rounded-lg overflow-hidden border dark:border-gray-700">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5732261386966!2d106.7469216!3d10.7673374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f210b494631%3A0x6a827c97ede183c3!2sC%C3%B4ng%20Ty%20TNHH%20FPT%20IS!5e0!3m2!1svi!2s!4v1742051836304!5m2!1svi!2s"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-6 border-b pb-3 dark:border-gray-700">Gửi yêu cầu</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
