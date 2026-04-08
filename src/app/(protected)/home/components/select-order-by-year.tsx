import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectOrderByYearProps {
  orderBy: string;
  onChange: (value: string) => void;
}

export const SelectOrderByYear = ({
  orderBy,
  onChange,
}: SelectOrderByYearProps) => {
  return (
    <Select value={orderBy} onValueChange={onChange}>
      <SelectTrigger className="w-full lg:w-50">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="desc">Mais recentes</SelectItem>
          <SelectItem value="asc">Mais antigas</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectOrderByYear;
