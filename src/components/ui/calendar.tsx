"use client"

import * as React from "react"
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <div className="rounded-2xl border shadow-md p-6 bg-background max-w-5xl w-full mx-auto h-full min-h-[700px]">
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn(
          "group/calendar p-0 bg-transparent",
          className
        )}
        captionLayout={captionLayout}
        formatters={{
          formatMonthCaption: (date) =>
            date.toLocaleString("pt-BR", { month: "long", year: "numeric" }),
          formatWeekdayName: (date) =>
            date.toLocaleDateString("pt-BR", { weekday: "short" }).replace(".", "").replace(/^(.)/, (l) => l.toUpperCase()),
          ...formatters,
        }}
        classNames={{
          root: cn("w-full", defaultClassNames.root),
          months: cn(
            "flex flex-col gap-0 relative w-full",
            defaultClassNames.months
          ),
          month: cn("flex flex-col w-full gap-0", defaultClassNames.month),
          nav: cn(
            "flex items-center justify-between w-full px-0 py-0 gap-0 min-h-0 border-none mb-0",
            defaultClassNames.nav
          ),
          button_previous: cn(
            buttonVariants({ variant: buttonVariant }),
            "size-8 aria-disabled:opacity-50 p-0 select-none rounded-full bg-transparent hover:bg-accent flex-shrink-0",
            defaultClassNames.button_previous
          ),
          button_next: cn(
            buttonVariants({ variant: buttonVariant }),
            "size-8 aria-disabled:opacity-50 p-0 select-none rounded-full bg-transparent hover:bg-accent flex-shrink-0",
            defaultClassNames.button_next
          ),
          month_caption: cn(
            "flex-1 flex items-center justify-center font-bold text-2xl text-foreground min-w-0",
            defaultClassNames.month_caption
          ),
          dropdowns: cn(
            "w-full flex items-center text-base font-medium justify-center h-12 gap-1.5",
            defaultClassNames.dropdowns
          ),
          dropdown_root: cn(
            "relative border shadow-xs rounded-md",
            defaultClassNames.dropdown_root
          ),
          dropdown: cn("absolute inset-0 opacity-0", defaultClassNames.dropdown),
          caption_label: cn(
            "select-none font-bold text-2xl text-foreground",
            defaultClassNames.caption_label
          ),
          table: "w-full border-collapse",
          weekdays: cn("flex border-b border-t border-muted mt-4 mb-4", defaultClassNames.weekdays),
          weekday: cn(
            "text-foreground flex-1 font-semibold text-base select-none py-2 text-center",
            defaultClassNames.weekday
          ),
          week: cn("flex w-full", defaultClassNames.week),
          week_number_header: cn(
            "select-none w-(--cell-size)",
            defaultClassNames.week_number_header
          ),
          week_number: cn(
            "text-[0.8rem] select-none text-muted-foreground",
            defaultClassNames.week_number
          ),
          day: cn(
            "flex-1 h-26 max-h-full min-h-10 p-0 text-center select-none transition-colors duration-100 hover:bg-accent text-foreground font-medium hover:rounded-md",
            defaultClassNames.day
          ),
          range_start: cn(
            "rounded-l-md bg-accent",
            defaultClassNames.range_start
          ),
          range_middle: cn("rounded-none", defaultClassNames.range_middle),
          range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
          today: cn(
            "bg-muted text-foreground rounded-md border border-muted-foreground/30 data-[selected=true]:rounded-none",
            defaultClassNames.today
          ),
          outside: cn(
            "text-muted aria-selected:text-muted",
            defaultClassNames.outside
          ),
          disabled: cn(
            "text-muted-foreground opacity-50",
            defaultClassNames.disabled
          ),
          hidden: cn("invisible", defaultClassNames.hidden),
          ...classNames,
        }}
        components={{
          Root: ({ className, rootRef, ...props }) => {
            return (
              <div
                data-slot="calendar"
                ref={rootRef}
                className={cn(className)}
                {...props}
              />
            )
          },
          Chevron: ({ className, orientation, ...props }) => {
            if (orientation === "left") {
              return (
                <ChevronLeftIcon className={cn("size-6", className)} {...props} />
              )
            }
            if (orientation === "right") {
              return (
                <ChevronRightIcon className={cn("size-6", className)} {...props} />
              )
            }
            return (
              <ChevronDownIcon className={cn("size-6", className)} {...props} />
            )
          },
          DayButton: CalendarDayButton,
          WeekNumber: ({ children, ...props }) => {
            return (
              <td {...props}>
                <div className="flex size-(--cell-size) items-center justify-center text-center">
                  {children}
                </div>
              </td>
            )
          },
          ...components,
        }}
        {...props}
      />
    </div>
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames()
  const ref = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected={modifiers.selected ? true : undefined}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "w-full h-full flex items-center justify-center rounded-md hover:rounded-md aspect-square",
        defaultClassNames.day,
        className,
        modifiers.selected && "bg-accent text-accent-foreground"
      )}
      onClick={props.onClick}
      {...props} // isso é importante para acessibilidade e seleção funcionar
    >
      {day.date.getDate()}
    </Button>
  )
}


export { Calendar, CalendarDayButton }