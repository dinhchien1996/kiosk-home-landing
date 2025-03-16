"use client";

import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Button } from '@/components/ui/button';
import { format, addDays, isBefore, startOfToday, isWeekend } from 'date-fns';
import { vi } from 'date-fns/locale';
import { Calendar, Clock, User, CalendarClock } from 'lucide-react';
import { type AvailableTimeSlot } from './TimeSlotPicker';
import { AppointmentDialog, PatientInfo } from './AppointmentDialog';

// Current available departments for appointments
const departments = [
  { id: 1, name: 'Khoa Nội' },
  { id: 2, name: 'Khoa Ngoại' },
  { id: 3, name: 'Khoa Tim mạch' },
  { id: 4, name: 'Khoa Nhi' },
  { id: 5, name: 'Khoa Sản' },
  { id: 6, name: 'Khoa Mắt' },
  { id: 7, name: 'Khoa Tai mũi họng' },
];

// Generate time slots
const generateTimeSlots = (): AvailableTimeSlot[] => {
  const slots: AvailableTimeSlot[] = [];
  const startHour = 8;
  const endHour = 17;

  for (let hour = startHour; hour < endHour; hour++) {
    // Add slots at the beginning of each hour and at half past
    slots.push({
      id: `${hour}:00`,
      time: `${hour}:00`,
      label: `${hour}:00`,
      available: true
    });

    slots.push({
      id: `${hour}:30`,
      time: `${hour}:30`,
      label: `${hour}:30`,
      available: true
    });
  }

  return slots;
};

// Helper function to get random availability for demo purposes
const getRandomAvailability = () => {
  const slots = generateTimeSlots();
  return slots.map(slot => ({
    ...slot,
    available: Math.random() > 0.3 // 70% chance of being available
  }));
};

type AppointmentCalendarProps = {
  onSelectDate: (date: Date) => void;
  onSelectDepartment: (department: { id: number; name: string }) => void;
  onSelectTimeSlot: (timeSlot: AvailableTimeSlot) => void;
  onBookAppointment: () => void;
};

const AppointmentCalendar = ({
  onSelectDate,
  onSelectDepartment,
  onSelectTimeSlot,
  onBookAppointment
}: AppointmentCalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<{ id: number; name: string } | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<AvailableTimeSlot | null>(null);
  const [availableTimeSlots, setAvailableTimeSlots] = useState<AvailableTimeSlot[]>(generateTimeSlots());
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Calculate max date (30 days from today)
  const maxDate = addDays(new Date(), 30);

  // Handle date selection
  const handleDateSelect = (info: any) => {
    const selectedDate = new Date(info.dateStr);

    // Check if the date is valid (not in the past and within the next 30 days)
    if (isBefore(selectedDate, startOfToday())) {
      alert('Không thể đặt lịch cho ngày đã qua.');
      return;
    }

    if (isBefore(maxDate, selectedDate)) {
      alert('Chỉ có thể đặt lịch trong vòng 30 ngày tới.');
      return;
    }

    setSelectedDate(selectedDate);
    onSelectDate(selectedDate);

    // Generate random availability for the selected date
    setAvailableTimeSlots(getRandomAvailability());

    // Reset time slot selection when date changes
    setSelectedTimeSlot(null);
  };

  // Handle department selection
  const handleDepartmentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const departmentId = parseInt(event.target.value, 10);
    const department = departments.find(dep => dep.id === departmentId) || null;
    setSelectedDepartment(department);

    if (department) {
      onSelectDepartment(department);
    }
  };

  // Handle time slot selection
  const handleTimeSlotSelect = (timeSlot: AvailableTimeSlot) => {
    if (!timeSlot.available) return;

    setSelectedTimeSlot(timeSlot);
    onSelectTimeSlot(timeSlot);
  };

  // Check if appointment booking is valid
  const isBookingValid = selectedDate && selectedDepartment && selectedTimeSlot;

  // Handle appointment booking
  const handleBookAppointment = () => {
    if (!isBookingValid) return;
    setIsDialogOpen(true);
  };

  const handleConfirmAppointment = async (patientInfo: PatientInfo) => {
    try {
      // Here you would typically make an API call to save the appointment
      console.log('Booking appointment with:', {
        date: selectedDate,
        department: selectedDepartment,
        timeSlot: selectedTimeSlot,
        patientInfo
      });
      
      // Show success message
      alert('Đặt lịch thành công! Chúng tôi sẽ gửi thông tin xác nhận qua SMS và email.');
      
      // Reset form
      setSelectedDate(null);
      setSelectedDepartment(null);
      setSelectedTimeSlot(null);
      setAvailableTimeSlots(generateTimeSlots());
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('Có lỗi xảy ra khi đặt lịch. Vui lòng thử lại sau.');
    }
  };

  if (!mounted) return null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-medium mb-4 flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-primary" />
            Chọn ngày khám
          </h3>
          <div className="calendar-container">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth'
              }}
              locale={vi}
              selectable={true}
              select={handleDateSelect}
              dateClick={handleDateSelect}
              height="auto"
              validRange={{
                start: new Date(),
                end: maxDate
              }}
              dayCellClassNames={(arg) => {
                const today = new Date();
                if (arg.date < today && arg.date.getDate() !== today.getDate()) {
                  return 'fc-day-past';
                }
                if (isWeekend(arg.date)) {
                  return 'fc-day-weekend';
                }
                return '';
              }}
              dayMaxEvents={true}
            />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-medium mb-4 flex items-center">
            <User className="mr-2 h-5 w-5 text-primary" />
            Chi tiết đặt lịch
          </h3>

          <div className="space-y-6">
            {/* Department Selection */}
            <div>
              <label htmlFor="department" className="block mb-2 text-sm font-medium">
                Chọn chuyên khoa <span className="text-red-500">*</span>
              </label>
              <select
                id="department"
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-gray-800"
                value={selectedDepartment?.id || ''}
                onChange={handleDepartmentChange}
              >
                <option value="">-- Chọn chuyên khoa --</option>
                {departments.map(department => (
                  <option key={department.id} value={department.id}>
                    {department.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Selected Date Display */}
            <div>
              <p className="text-sm font-medium mb-2">Ngày đã chọn</p>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-md flex items-center">
                <CalendarClock className="h-5 w-5 text-primary mr-2" />
                <span>
                  {selectedDate
                    ? format(selectedDate, 'EEEE, dd/MM/yyyy', { locale: vi })
                    : 'Chưa chọn ngày'}
                </span>
              </div>
            </div>

            {/* Time Slots */}
            {selectedDate && (
              <div className="space-y-4">
                <p className="text-sm font-medium">Chọn giờ khám</p>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {availableTimeSlots.map((slot) => (
                    <button
                      key={slot.id}
                      className={`p-2 text-sm rounded-md border transition-colors
                        ${selectedTimeSlot === slot 
                          ? 'bg-primary text-white border-primary' 
                          : 'border-gray-300 hover:border-primary'
                        }`}
                      onClick={() => handleTimeSlotSelect(slot)}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Book Appointment Button */}
            <Button
              variant="primary"
              className="w-full mt-4"
              disabled={!isBookingValid}
              onClick={handleBookAppointment}
            >
              Đặt lịch khám
            </Button>

            {/* Requirements */}
            <div className="text-xs text-gray-500 dark:text-gray-400">
              <p>* Vui lòng chọn đầy đủ thông tin để đặt lịch khám</p>
              <p>* Lịch khám sẽ được xác nhận qua SMS và email</p>
              <p>* Vui lòng đến trước giờ hẹn 15 phút</p>
            </div>
          </div>
        </div>
      </div>

      <AppointmentDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onConfirm={handleConfirmAppointment}
        selectedDate={selectedDate}
        selectedDepartment={selectedDepartment}
        selectedTimeSlot={selectedTimeSlot}
      />
    </>
  );
};

export default AppointmentCalendar;
