import { Button } from "@/components/ui/button";

type Props = {
  label: string;
  onRemove: () => void;
};

export function Chip({ label, onRemove }: Props) {
  return (
    <div className="flex items-center rounded-2xl bg-amber-500 px-3 py-1 text-sm">
      <span>{label}</span>

      <Button
        onClick={onRemove}
        variant="ghost"
        size="icon-xs"
        className="ml-2 rounded-full p-0 text-sm opacity-70 hover:bg-transparent hover:text-red-500 focus:bg-transparent focus:text-red-500"
      >
        ✕
      </Button>
    </div>
  );
}
