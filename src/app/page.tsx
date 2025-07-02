import { Calendar } from "@/components/ui/calendar";
import "./globals.css";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
       <h1 className="text-4xl font-bold">R3 Agendamento</h1>
       <div className="w-full max-w-2xl items-center justify-items-center">
        <Calendar captionLayout="dropdown" />
      </div>
     </div>
  );
}
