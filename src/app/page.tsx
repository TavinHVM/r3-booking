import { Calendar } from "@/components/ui/calendar";
import "./globals.css";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, } from "@/components/ui/select";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Card className="w-full max-w-2xl items-center justify-items-center">
        <CardHeader className="w-full font-bold flex flex-row items-center justify-between gap-2">
          <ModeToggle />
          <span className="font-bold">R3 - Agendamento</span>
          <a></a>
        </CardHeader>

        <CardContent className="w-full max-w-2xl items-center justify-items-center">
          <Calendar className="w-full max-w-2xl" captionLayout="dropdown" />
          <div className="w-full max-w-2xl items-center justify-items-center">
            <Select>
              <SelectTrigger className="w-full max-w-2xl">
                <SelectValue placeholder="Selecione a sala" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sala1">Sala 1</SelectItem>
                <SelectItem value="sala2">Sala 2</SelectItem>
                <SelectItem value="sala3">Sala 3</SelectItem>
                <SelectItem value="sala4">Sala 4</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
