"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";

export interface AvailableTimeSlot {
  id: string;
  time: string;
  label: string;
  available: boolean;
}

interface Props {
  slots: AvailableTimeSlot[];
  selectedSlot: AvailableTimeSlot | null;
  onSelectTimeSlot: (slot: AvailableTimeSlot) => void;
  className?: string;
}

export function TimeSlotPicker({
  slots,
  selectedSlot,
  onSelectTimeSlot,
  className,
}: Props) {
  return (
    <div className={className}>
      <p className="text-sm font-medium mb-2 flex items-center">
        <Clock className="h-4 w-4 mr-1 text-primary" />
        Chọn giờ khám
      </p>
      <div className="grid grid-cols-3 gap-2">
        {slots.map((slot) => (
          <button
            key={slot.id}
            className={cn(
              "p-2 text-sm rounded-md transition-colors",
              slot.available
                ? selectedSlot?.id === slot.id
                  ? "bg-primary text-white"
                  : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
                : "bg-gray-200 text-gray-400 dark:bg-gray-800 dark:text-gray-500 cursor-not-allowed"
            )}
            onClick={() => slot.available && onSelectTimeSlot(slot)}
            disabled={!slot.available}
          >
            {slot.label}
          </button>
        ))}
      </div>
    </div>
  );
}