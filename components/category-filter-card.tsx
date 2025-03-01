import { ArrowRight } from "lucide-react";

interface CategoryFilterCardProps {
  label: string;
}

const CategoryFilterCard = ({ label }: CategoryFilterCardProps) => {
  const handleClick = () => {
    // todo: handle click
  };
  return (
    <div
      className="group relative flex items-center justify-between rounded-xl px-4 overflow-hidden bg-secondary py-4 hover:cursor-pointer hover:bg-primary/90"
      onClick={handleClick}
    >
      <div className="flex items-center">
        <div>
          <h3 className="font-medium group-hover:text-white">{label}</h3>
        </div>
      </div>
      <div className="bg-primary text-white group-hover:text-primary p-2 rounded-full group-hover:bg-white ">
        <ArrowRight className="h-4 w-4" />
      </div>
    </div>
  );
};

export default CategoryFilterCard;
