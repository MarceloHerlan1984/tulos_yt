import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function Title({ children, className }: Props) {
  return (
    <h2
      className={cn(
        "bg-gradient-to-r from-festival-orange via-festival-red to-festival-purple bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </h2>
  );
}

export default Title;
