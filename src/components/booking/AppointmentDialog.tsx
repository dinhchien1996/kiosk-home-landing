"use client";

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { CalendarClock, User, Phone, Mail, FileText, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import { AvailableTimeSlot } from './TimeSlotPicker';
import { toast } from 'sonner';

interface AppointmentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (patientInfo: PatientInfo) => void;
  selectedDate: Date | null;
  selectedDepartment: { id: number; name: string } | null;
  selectedTimeSlot: AvailableTimeSlot | null;
}

export interface PatientInfo {
  name: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  insuranceNumber?: string;
  symptoms: string;
  note?: string;
}

export function AppointmentDialog({
  isOpen,
  onClose,
  onConfirm,
  selectedDate,
  selectedDepartment,
  selectedTimeSlot,
}: AppointmentDialogProps) {
  const [step, setStep] = useState<'form' | 'confirm' | 'success' | 'error'>('form');
  const [patientInfo, setPatientInfo] = useState<PatientInfo>({
    name: '',
    phone: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    insuranceNumber: '',
    symptoms: '',
    note: '',
  });
  const [errors, setErrors] = useState<Partial<PatientInfo>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    const newErrors: Partial<PatientInfo> = {};
    
    // Name validation
    if (!patientInfo.name.trim()) {
      newErrors.name = 'Vui lòng nhập họ tên';
    } else if (patientInfo.name.length < 2) {
      newErrors.name = 'Họ tên phải có ít nhất 2 ký tự';
    }
    
    // Phone validation
    if (!patientInfo.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!/^(0|\+84)[0-9]{9}$/.test(patientInfo.phone)) {
      newErrors.phone = 'Số điện thoại không hợp lệ (VD: 0912345678 hoặc +84912345678)';
    }
    
    // Email validation
    if (!patientInfo.email.trim()) {
      newErrors.email = 'Vui lòng nhập email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(patientInfo.email)) {
      newErrors.email = 'Email không hợp lệ';
    }

    // Date of birth validation
    if (!patientInfo.dateOfBirth) {
      newErrors.dateOfBirth = 'Vui lòng nhập ngày sinh';
    } else {
      const dob = new Date(patientInfo.dateOfBirth);
      const today = new Date();
      if (dob > today) {
        newErrors.dateOfBirth = 'Ngày sinh không hợp lệ';
      }
    }

    // Gender validation
    if (!patientInfo.gender) {
      newErrors.gender = 'Vui lòng chọn giới tính';
    }

    // Address validation
    if (!patientInfo.address.trim()) {
      newErrors.address = 'Vui lòng nhập địa chỉ';
    }

    // Insurance number validation (optional but if provided, must be valid)
    if (patientInfo.insuranceNumber && !/^\d{10}$/.test(patientInfo.insuranceNumber)) {
      newErrors.insuranceNumber = 'Số bảo hiểm y tế không hợp lệ (10 chữ số)';
    }

    // Symptoms validation
    if (!patientInfo.symptoms.trim()) {
      newErrors.symptoms = 'Vui lòng mô tả triệu chứng';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setStep('confirm');
  };

  const handleConfirm = async () => {
    setIsSubmitting(true);
    try {
      await onConfirm(patientInfo);
      setStep('success');
      toast.success('Đặt lịch thành công!', {
        description: 'Chúng tôi sẽ gửi thông tin xác nhận qua SMS và email.',
      });
      setTimeout(() => {
        onClose();
        // Reset form after closing
        setPatientInfo({
          name: '',
          phone: '',
          email: '',
          dateOfBirth: '',
          gender: '',
          address: '',
          insuranceNumber: '',
          symptoms: '',
          note: '',
        });
        setStep('form');
      }, 3000);
    } catch (error) {
      console.error('Error submitting appointment:', error);
      setStep('error');
      setErrorMessage('Có lỗi xảy ra khi đặt lịch. Vui lòng thử lại sau.');
      toast.error('Đặt lịch thất bại', {
        description: 'Có lỗi xảy ra khi đặt lịch. Vui lòng thử lại sau.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderConfirmationStep = () => (
    <>
      <DialogHeader>
        <DialogTitle>Xác nhận thông tin</DialogTitle>
        <DialogDescription>
          Vui lòng kiểm tra lại thông tin trước khi xác nhận đặt lịch
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-4 py-4">
        <div className="space-y-2 rounded-lg bg-muted p-4">
          <h4 className="font-medium">Thông tin lịch khám</h4>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <CalendarClock className="h-4 w-4 text-primary" />
              {selectedDate && format(selectedDate, 'EEEE, dd/MM/yyyy', { locale: vi })}
              {selectedTimeSlot && ` - ${selectedTimeSlot.label}`}
            </p>
            <p className="flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              {selectedDepartment?.name}
            </p>
          </div>
        </div>

        <div className="space-y-2 rounded-lg bg-muted p-4">
          <h4 className="font-medium">Thông tin bệnh nhân</h4>
          <div className="space-y-2 text-sm">
            <p><span className="font-medium">Họ và tên:</span> {patientInfo.name}</p>
            <p><span className="font-medium">Ngày sinh:</span> {format(new Date(patientInfo.dateOfBirth), 'dd/MM/yyyy')}</p>
            <p><span className="font-medium">Giới tính:</span> {
              patientInfo.gender === 'male' ? 'Nam' : 
              patientInfo.gender === 'female' ? 'Nữ' : 'Khác'
            }</p>
            <p><span className="font-medium">Số điện thoại:</span> {patientInfo.phone}</p>
            <p><span className="font-medium">Email:</span> {patientInfo.email}</p>
            <p><span className="font-medium">Địa chỉ:</span> {patientInfo.address}</p>
            {patientInfo.insuranceNumber && (
              <p><span className="font-medium">Số BHYT:</span> {patientInfo.insuranceNumber}</p>
            )}
            <p><span className="font-medium">Triệu chứng:</span> {patientInfo.symptoms}</p>
            {patientInfo.note && (
              <p><span className="font-medium">Ghi chú:</span> {patientInfo.note}</p>
            )}
          </div>
        </div>
      </div>

      <DialogFooter>
        <Button variant="outline" onClick={() => setStep('form')}>
          Quay lại
        </Button>
        <Button 
          variant="primary"
          onClick={handleConfirm}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Đang xử lý...' : 'Xác nhận đặt lịch'}
        </Button>
      </DialogFooter>
    </>
  );

  const renderSuccessStep = () => (
    <>
      <DialogHeader>
        <DialogTitle className="text-center text-green-600">
          <CheckCircle2 className="h-12 w-12 mx-auto mb-2" />
          Đặt lịch thành công!
        </DialogTitle>
      </DialogHeader>
      <div className="py-6 text-center space-y-2">
        <p>Chúng tôi sẽ gửi thông tin xác nhận qua SMS và email.</p>
        <p className="text-sm text-muted-foreground">Cửa sổ này sẽ tự động đóng sau 3 giây.</p>
      </div>
    </>
  );

  const renderErrorStep = () => (
    <>
      <DialogHeader>
        <DialogTitle className="text-center text-red-600">
          <XCircle className="h-12 w-12 mx-auto mb-2" />
          Đặt lịch thất bại
        </DialogTitle>
      </DialogHeader>
      <div className="py-6 text-center space-y-2">
        <p>{errorMessage}</p>
        <Button variant="outline" onClick={() => setStep('form')}>
          Thử lại
        </Button>
      </div>
    </>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        {step === 'form' && (
          <div className="space-y-6 py-4">
            {/* Appointment Details */}
            <div className="space-y-2 rounded-lg bg-muted p-4">
              <div className="flex items-center gap-2">
                <CalendarClock className="h-4 w-4 text-primary" />
                <span className="text-sm">
                  {selectedDate && format(selectedDate, 'EEEE, dd/MM/yyyy', { locale: vi })}
                  {selectedTimeSlot && ` - ${selectedTimeSlot.label}`}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-primary" />
                <span className="text-sm">{selectedDepartment?.name}</span>
              </div>
            </div>

            {/* Patient Information Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Họ và tên <span className="text-red-500">*</span></Label>
                <Input
                  id="name"
                  value={patientInfo.name}
                  onChange={(e) => setPatientInfo(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Nhập họ và tên"
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Ngày sinh <span className="text-red-500">*</span></Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={patientInfo.dateOfBirth}
                  onChange={(e) => setPatientInfo(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                  className={errors.dateOfBirth ? "border-red-500" : ""}
                />
                {errors.dateOfBirth && <p className="text-xs text-red-500">{errors.dateOfBirth}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Giới tính <span className="text-red-500">*</span></Label>
                <select
                  id="gender"
                  value={patientInfo.gender}
                  onChange={(e) => setPatientInfo(prev => ({ ...prev, gender: e.target.value }))}
                  className={`w-full p-2 border rounded-md ${errors.gender ? "border-red-500" : "border-input"}`}
                >
                  <option value="">Chọn giới tính</option>
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                  <option value="other">Khác</option>
                </select>
                {errors.gender && <p className="text-xs text-red-500">{errors.gender}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Số điện thoại <span className="text-red-500">*</span></Label>
                <Input
                  id="phone"
                  value={patientInfo.phone}
                  onChange={(e) => setPatientInfo(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="Nhập số điện thoại"
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                <Input
                  id="email"
                  type="email"
                  value={patientInfo.email}
                  onChange={(e) => setPatientInfo(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Nhập email"
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="insuranceNumber">Số BHYT (nếu có)</Label>
                <Input
                  id="insuranceNumber"
                  value={patientInfo.insuranceNumber}
                  onChange={(e) => setPatientInfo(prev => ({ ...prev, insuranceNumber: e.target.value }))}
                  placeholder="Nhập số bảo hiểm y tế"
                  className={errors.insuranceNumber ? "border-red-500" : ""}
                />
                {errors.insuranceNumber && <p className="text-xs text-red-500">{errors.insuranceNumber}</p>}
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address">Địa chỉ <span className="text-red-500">*</span></Label>
                <Input
                  id="address"
                  value={patientInfo.address}
                  onChange={(e) => setPatientInfo(prev => ({ ...prev, address: e.target.value }))}
                  placeholder="Nhập địa chỉ"
                  className={errors.address ? "border-red-500" : ""}
                />
                {errors.address && <p className="text-xs text-red-500">{errors.address}</p>}
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="symptoms">Triệu chứng <span className="text-red-500">*</span></Label>
                <Input
                  id="symptoms"
                  value={patientInfo.symptoms}
                  onChange={(e) => setPatientInfo(prev => ({ ...prev, symptoms: e.target.value }))}
                  placeholder="Mô tả triệu chứng của bạn"
                  className={errors.symptoms ? "border-red-500" : ""}
                />
                {errors.symptoms && <p className="text-xs text-red-500">{errors.symptoms}</p>}
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="note">Ghi chú thêm</Label>
                <Input
                  id="note"
                  value={patientInfo.note}
                  onChange={(e) => setPatientInfo(prev => ({ ...prev, note: e.target.value }))}
                  placeholder="Nhập ghi chú nếu có"
                />
              </div>
            </div>

            {/* Form Instructions */}
            <div className="text-sm text-muted-foreground space-y-1">
              <p className="flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                Vui lòng điền đầy đủ các thông tin bắt buộc (*)
              </p>
              <p className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                Thông tin của bạn sẽ được bảo mật theo quy định
              </p>
            </div>
          </div>
        )}
        {step === 'confirm' && renderConfirmationStep()}
        {step === 'success' && renderSuccessStep()}
        {step === 'error' && renderErrorStep()}
      </DialogContent>
    </Dialog>
  );
} 