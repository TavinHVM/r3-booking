import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { Input } from "./input";
import { Button } from "./button";

export function Booking() {
    const hours = [
        "07:00", "07:15", "07:30", "07:45",
        "08:00", "08:15", "08:30", "08:45",
        "09:00", "09:15", "09:30", "09:45",
        "10:00", "10:15", "10:30", "10:45",
        "11:00", "11:15", "11:30", "11:45",
        "12:00", "12:15", "12:30", "12:45",
        "13:00", "13:15", "13:30", "13:45",
        "14:00", "14:15", "14:30", "14:45",
        "15:00", "15:15", "15:30", "15:45",
        "16:00", "16:15", "16:30", "16:45",
        "17:00", "17:15", "17:30", "17:45",
        "18:00", "18:15", "18:30", "18:45",
    ]
  return (
    <Card className="w-full max-w-[260px] mt-4">
          <CardHeader>
            <CardTitle className="text-center text-xl font-bold">Agendamento</CardTitle>
          </CardHeader>

          <CardContent>
            <Input type="text" placeholder="Nome e sobrenome" />

            <Select>
              <SelectTrigger className="w-full mt-2">
                <SelectValue placeholder="Selecione um horário" />
              </SelectTrigger>
              <SelectContent className="max-h-[200px] overflow-y-auto items-center justify-center text-center">
                {hours.map((hour) => (
                  <SelectItem key={hour} value={hour}>
                    {hour}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-full mt-2">
                <SelectValue placeholder="Selecione uma sala" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sala1">Sala 1</SelectItem>
                <SelectItem value="sala2">Sala 2</SelectItem>
                <SelectItem value="sala3">Sala 3</SelectItem>
              </SelectContent>
            </Select>

            <Button className="w-full mt-2">Agendar</Button>
          </CardContent>

        </Card>
  )
}