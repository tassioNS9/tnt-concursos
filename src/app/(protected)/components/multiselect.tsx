"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";

interface OptionsSelectorsProps {
  label: string;
  options: string[];
  value: string[]; // vindo do Zustand
  onChange: (value: string) => void; // toggle
}

export function MultiSelect({
  label,
  options,
  value,
  onChange,
}: OptionsSelectorsProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="text-dark-blue-1-color w-full justify-between md:w-60 lg:w-75"
        >
          {value.length > 0 ? `${value.length} selecionada(s)` : label}
          <ChevronDown className="ml-4 h-4 w-8 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full p-0 md:w-60 lg:w-75">
        <Command>
          <CommandInput placeholder="Buscar..." />
          <CommandEmpty>Nenhuma opção encontrada.</CommandEmpty>

          <CommandGroup>
            <ScrollArea className="h-48">
              {options.map((selector) => (
                <CommandItem
                  key={selector}
                  onSelect={() => onChange(selector)}
                  className="flex items-center gap-4"
                >
                  <Checkbox checked={value.includes(selector)} />
                  <span>{selector}</span>
                </CommandItem>
              ))}
            </ScrollArea>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
