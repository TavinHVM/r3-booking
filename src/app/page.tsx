"use client";
import "./globals.css";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";
import { Calendar } from "@/components/ui/calendar";
import React from "react";
import { Booking } from "@/components/ui/booking";

export default function Home() {
  const [selectedDay, setSelectedDay] = React.useState<Date | undefined>()

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
      <div className="w-full items-center justify-items-center min-h-screen p-8 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-inter)]">
        <Calendar className="w-full"
          mode="single"
          selected={selectedDay}
          onSelect={setSelectedDay}
        />

        <Booking />
      </div>

    </>
  );
}
