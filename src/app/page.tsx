"use client";
import "./globals.css";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";
import { Calendar } from "@/components/ui/calendar";
import React from "react";
import { Booking } from "@/components/ui/booking";

export default function Home() {
  // Estado para o dia selecionado, inicia com o dia atual
  const [selectedDay, setSelectedDay] = React.useState<Date>(() => new Date());
  const [showBooking, setShowBooking] = React.useState<boolean>(false);

  // Ao clicar em um dia, seleciona e mostra o Booking
  const handleSelect = (day: Date | undefined) => {
    if (day) {
      setSelectedDay(day);
      setShowBooking(true);
    } else {
      setShowBooking(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between p-1 relative">
        <div className="flex items-center gap-2 ml-4">
          <ModeToggle />
        </div>
        <div className="flex items-center mr-4 mt-2">
          <Image
            src="/r3logo.png"
            alt="Logo"
            width={70}
            height={70}
            className="rounded-full"
          />
        </div>
      </div>

      <h1 className="w-full text-center text-4xl font-bold mb-2">Agendamento de Reuniões</h1>
      <div className="w-full min-h-screen flex items-center justify-center p-4 sm:p-10 relative">
        <div className="w-full max-w-5xl relative flex items-center justify-center">
          <Calendar
            className="w-full"
            mode="single"
            selected={selectedDay}
            onSelect={handleSelect}
          />
          {showBooking && (
            <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
              <Booking />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
