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
}

export function MultiSelect({ label, options }: OptionsSelectorsProps) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string[]>([]);

  function toggleItem(value: string) {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          {selected.length > 0 ? `${selected.length} selecionada(s)` : label}
          <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-75 p-0">
        <Command>
          <CommandInput placeholder="Buscar..." />
          <CommandEmpty>Nenhuma disciplina encontrada.</CommandEmpty>

          <CommandGroup>
            <ScrollArea className="h-48">
              {options.map((selector) => (
                <CommandItem
                  key={selector}
                  onSelect={() => toggleItem(selector)}
                  className="flex items-center gap-2"
                >
                  <Checkbox checked={selected.includes(selector)} />
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
