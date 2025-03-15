import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import LazyImage from '@/components/LazyImage';
import { motion } from 'framer-motion';
import { User, Verified, Lightbulb, Target, Award, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Về chúng tôi - FPT.SmartKiosk',
  description: 'Tìm hiểu thêm về FPT.SmartKiosk - Một giải pháp y tế thông minh cho toàn dân',
};

const AboutPage = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-[#f7fafb] dark:bg-gray-900">
          <div className="container-custom">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-medium mb-4">
                Về <span className="text-primary font-semibold">FPT.SmartKiosk</span>
              </h1>
              <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                FPT.SmartKiosk là một giải pháp y tế toàn diện dành cho mọi người. Chúng tôi kết nối bệnh nhân với các cơ sở y tế, xây dựng nền tảng thanh toán viện phí thông minh và cung cấp các tiện ích hỗ trợ khám chữa bệnh.
              </p>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1">
                  <div className="text-left space-y-4">
                    <h2 className="text-2xl font-medium">Sứ mệnh của chúng tôi</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      Mỗi ngày, hàng nghìn người Việt Nam phải mất nhiều thời gian chờ đợi các thủ tục khám bệnh rườm rà và phức tạp. FPT.SmartKiosk ra đời với sứ mệnh đơn giản hóa quy trình khám chữa bệnh, giúp người bệnh tiết kiệm thời gian, tiết kiệm chi phí và có trải nghiệm y tế tốt hơn.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Chúng tôi tin rằng mỗi người đều xứng đáng được tiếp cận dịch vụ y tế một cách thuận tiện, nhanh chóng và hiệu quả.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <div className="relative">
                    <LazyImage
                      src="https://ext.same-assets.com/4038553266/2781732977.jpeg"
                      alt="FPT.SmartKiosk Team"
                      width={450}
                      height={300}
                      className="rounded-lg shadow-lg object-cover"
                    />
                    <div className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md">
                      <p className="text-primary font-medium">Đội ngũ FPT.SmartKiosk</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Values */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-medium">
                Tầm nhìn & <span className="text-primary">Giá trị cốt lõi</span>
              </h2>
              <div className="h-1 w-16 bg-primary mx-auto mt-4 mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Lightbulb className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-3">Sáng tạo</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Chúng tôi không ngừng đổi mới để tạo ra các giải pháp sáng tạo nhằm cải thiện trải nghiệm khám chữa bệnh.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Target className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-3">Hiệu quả</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Mọi giải pháp và sản phẩm của chúng tôi đều hướng đến hiệu quả tối đa, giúp tiết kiệm thời gian và chi phí.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <ShieldCheck className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-3">An toàn</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Bảo mật và an toàn thông tin là ưu tiên hàng đầu của chúng tôi. Dữ liệu y tế của bạn luôn được bảo vệ tốt nhất.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-[#f7fafb] dark:bg-gray-900">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-medium">
                Đội ngũ <span className="text-primary">lãnh đạo</span>
              </h2>
              <div className="h-1 w-16 bg-primary mx-auto mt-4 mb-6"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Đội ngũ lãnh đạo của FPT.SmartKiosk bao gồm những chuyên gia hàng đầu trong lĩnh vực y tế & công nghệ
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm group">
                <div className="h-64 overflow-hidden">
                  <LazyImage
                    src="https://ext.same-assets.com/3089429254/2064407578.jpeg"
                    alt="CEO"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium">Phạm Thanh Tùng</h3>
                  <p className="text-primary font-medium">Giám đốc khối chăm sóc sức khỏe</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                    Hơn 15 năm kinh nghiệm trong lĩnh vực công nghệ y tế và khởi nghiệp
                  </p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm group">
                <div className="h-64 overflow-hidden">
                  <LazyImage
                    src="https://ext.same-assets.com/3743580584/1839078272.jpeg"
                    alt="CTO"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium">Nguyễn Duy Hiền</h3>
                  <p className="text-primary font-medium">Phó giám đốc</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                    Chuyên gia công nghệ với nhiều năm kinh nghiệm phát triển hệ thống thanh toán
                  </p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm group">
                <div className="h-64 overflow-hidden">
                  <LazyImage
                    src="https://ext.same-assets.com/2157053350/2598433384.jpeg"
                    alt="CMO"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium">Phương Ngọc Thắng</h3>
                  <p className="text-primary font-medium">Giám đốc trung tâm sản phẩm</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                    Chuyên gia marketing với 10 năm kinh nghiệm trong ngành y tế và fintech
                  </p>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm group">
                <div className="h-64 overflow-hidden">
                  <LazyImage
                    src="https://ext.same-assets.com/2254887780/4248577834.jpeg"
                    alt="Medical Advisor"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium">Nguyễn Văn A</h3>
                  <p className="text-primary font-medium">Cố vấn Y tế</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                    Bác sĩ chuyên khoa II với hơn 20 năm kinh nghiệm trong ngành y tế
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-medium">
                Thành tựu <span className="text-primary">nổi bật</span>
              </h2>
              <div className="h-1 w-16 bg-primary mx-auto mt-4 mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <Award className="text-primary h-8 w-8 mr-4" />
                  <h3 className="text-xl font-medium">Giải thưởng Ứng dụng Y tế Xuất sắc</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  FPT.SmartKiosk vinh dự nhận được giải thưởng "Ứng dụng Y tế Xuất sắc năm 2023" do Hiệp hội Công nghệ Y tế Việt Nam trao tặng.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <User className="text-primary h-8 w-8 mr-4" />
                  <h3 className="text-xl font-medium">Hơn 100,000 người dùng</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Trong vòng 2 năm, FPT.SmartKiosk đã đạt mốc hơn 100,000 người dùng trên toàn quốc, với mức độ hài lòng lên đến 98%.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <Verified className="text-primary h-8 w-8 mr-4" />
                  <h3 className="text-xl font-medium">Triển khai tại 30+ bệnh viện</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  FPT.SmartKiosk đã được triển khai thành công tại hơn 30 bệnh viện và phòng khám lớn trên cả nước, tạo ra sự thay đổi tích cực trong quy trình khám chữa bệnh.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <Lightbulb className="text-primary h-8 w-8 mr-4" />
                  <h3 className="text-xl font-medium">Tiên phong trong công nghệ y tế</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  FPT.SmartKiosk tự hào là đơn vị tiên phong tại Việt Nam ứng dụng công nghệ mới vào lĩnh vực y tế, mang lại trải nghiệm khám bệnh hiện đại và tiện lợi.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
