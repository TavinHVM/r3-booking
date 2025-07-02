import { Calendar } from "@/components/ui/calendar";
import "./globals.css";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex items-center justify-center w-full">
        <ModeToggle />
        <span className="text-4xl font-bold items-center justify-center ml-2">R3 Agendamento</span>
      </div>
      <div className="w-full max-w-2xl items-center justify-items-center">
        <Calendar captionLayout="dropdown" />
      </div>
    </div>
  );
}
