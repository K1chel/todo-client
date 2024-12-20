import { cn } from "@/lib/utils";

interface TaskColorCircleProps {
  handleColorSelect: (color: string) => void;
  selectedColor: string;
  value: string;
  disabled?: boolean;
}

export const TaskColorCircle = ({
  handleColorSelect,
  selectedColor,
  value,
  disabled,
}: TaskColorCircleProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => handleColorSelect(value)}
      className={cn(
        "size-12 rounded-full cursor-pointer transition",
        value,
        selectedColor === value ? "ring-2 ring-white" : "ring-0"
      )}
    />
  );
};
