import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Chính sách & điều khoản - FPT.SmartKiosk",
  description: "Chính sách bảo mật và điều khoản sử dụng của FPT.SmartKiosk",
};

export default function PrivacyPolicy() {
  return (
    <main>
      <Header />
      <div className="container-custom py-16">
        <h1 className="text-3xl font-medium mb-8">Chính sách bảo mật</h1>

        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            FPT.SmartKiosk cam kết bảo vệ quyền riêng tư và thông tin cá nhân của bạn. Chính sách bảo mật này mô tả cách chúng tôi thu thập, sử dụng và bảo vệ thông tin của bạn khi sử dụng dịch vụ của chúng tôi.
          </p>

          <h2 className="text-2xl font-medium mt-8 mb-4">1. Thông tin chúng tôi thu thập</h2>
          <p className="mb-4">
            Khi bạn sử dụng FPT.SmartKiosk, chúng tôi có thể thu thập các thông tin sau:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Thông tin cá nhân: Họ tên, số điện thoại, email, địa chỉ, ngày sinh.</li>
            <li>Thông tin y tế: Mã bệnh nhân, lịch sử khám chữa bệnh.</li>
            <li>Thông tin thanh toán: Thông tin thẻ, tài khoản ngân hàng.</li>
            <li>Thông tin thiết bị: Địa chỉ IP, loại thiết bị, hệ điều hành.</li>
          </ul>

          <h2 className="text-2xl font-medium mt-8 mb-4">2. Cách chúng tôi sử dụng thông tin</h2>
          <p className="mb-4">
            Chúng tôi sử dụng thông tin thu thập được để:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Cung cấp và duy trì dịch vụ FPT.SmartKiosk.</li>
            <li>Xử lý thanh toán viện phí và các giao dịch liên quan.</li>
            <li>Xác thực danh tính của bạn thông qua hệ thống RAR của Bộ Công an.</li>
            <li>Liên hệ với bạn để thông báo về lịch khám và kết quả khám bệnh.</li>
            <li>Cải thiện dịch vụ và trải nghiệm người dùng.</li>
            <li>Tuân thủ các yêu cầu pháp lý.</li>
          </ul>

          <h2 className="text-2xl font-medium mt-8 mb-4">3. Bảo mật thông tin</h2>
          <p className="mb-6">
            FPT.SmartKiosk áp dụng các biện pháp bảo mật tiên tiến nhất để bảo vệ thông tin của bạn, bao gồm mã hóa dữ liệu, hệ thống xác thực, và kiểm soát truy cập. Chúng tôi không bao giờ chia sẻ thông tin cá nhân của bạn với bên thứ ba mà không có sự đồng ý của bạn, trừ khi có yêu cầu từ cơ quan pháp luật.
          </p>

          <h2 className="text-2xl font-medium mt-8 mb-4">4. Quyền của bạn</h2>
          <p className="mb-4">
            Bạn có các quyền sau đối với thông tin cá nhân của mình:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Quyền truy cập và cập nhật thông tin cá nhân.</li>
            <li>Quyền yêu cầu xóa thông tin cá nhân.</li>
            <li>Quyền phản đối việc xử lý thông tin cá nhân.</li>
            <li>Quyền giới hạn việc sử dụng thông tin cá nhân.</li>
          </ul>

          <h2 className="text-2xl font-medium mt-8 mb-4">5. Liên hệ</h2>
          <p className="mb-6">
            Nếu bạn có bất kỳ câu hỏi hoặc lo ngại nào về chính sách bảo mật của chúng tôi, vui lòng liên hệ với chúng tôi theo số điện thoại 02873007373 hoặc địa chỉ 5B Đ. Phổ Quang, Phường 2, Tân Bình, Thành phố Hồ Chí Minh 700000.
          </p>

          <p className="text-sm text-gray-500 mt-10">
            Cập nhật lần cuối: 15/03/2025
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
