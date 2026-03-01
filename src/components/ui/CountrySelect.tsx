'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { COUNTRIES, type CountryOption } from '@/lib/country-codes'

import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'

type Props = {
  value: CountryOption
  onChange: (next: CountryOption) => void
}

export default function CountrySelect({ value, onChange }: Props) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            // match your input styling vibe
            'h-[46px] min-w-[160px] justify-between rounded-xl border-gray-200 bg-white px-3 text-sm text-charcoal hover:bg-white',
            'focus-visible:ring-0 focus-visible:ring-offset-0'
          )}
        >
          <span className="flex items-center gap-2">
            <span className="text-base leading-none">{value.flag}</span>
            <span className="text-charcoal/80">{value.dial}</span>
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[320px] p-0 rounded-xl" align="start">
        <Command>
          <CommandInput placeholder="Search country..." className="h-11" />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {COUNTRIES.map((c) => (
                <CommandItem
                  key={c.code}
                  value={`${c.name} ${c.dial}`}
                  onSelect={() => {
                    onChange(c)
                    setOpen(false)
                  }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base leading-none">{c.flag}</span>
                    <span className="text-sm">{c.name}</span>
                    <span className="text-charcoal/50 text-sm">{c.dial}</span>
                  </div>
                  <Check
                    className={cn(
                      'h-4 w-4',
                      value.code === c.code ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}