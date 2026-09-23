import { Star } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import type { Technology } from "../data/technologies";

type Props = {
  tech: Technology;
  selectedTechnologies: Technology[];
  setSelectedTechnologies: Dispatch<SetStateAction<Technology[]>>;
};

const TechnologCard = ({
  tech,
  selectedTechnologies,
  setSelectedTechnologies,
}: Props) => {
  const getBadgeStyle = (badge: string) => {
    switch (badge) {
      case "Popular":
        return "bg-blue-100 text-blue-700";

      case "Trending":
        return "bg-purple-100 text-purple-700";

      case "Recommended":
        return "bg-green-100 text-green-700";

      case "Top SQL":
        return "bg-orange-100 text-orange-700";

      case "Essential":
        return "bg-red-100 text-red-700";

      case "Lightweight":
        return "bg-cyan-100 text-cyan-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const handleAddToStack = (technology: Technology) => {
    const alreadySelected = selectedTechnologies.some(
      (tech) => tech.id === technology.id,
    );

    if (alreadySelected) {
      toast.error(`${technology.name} is already in your stack.`);
      return;
    }
    setSelectedTechnologies((previous) => [...previous, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };
  return (
    <div
      key={tech.id}
      className="group bg-base-100 rounded-lg border border-gray-200/70 p-5 shadow-xs"
    >
      <div className="flex items-center justify-between">
        <img
          className="size-8 object-contain"
          src={tech.icon}
          alt={tech.name}
        />
        {tech.badge && (
          <span
            className={`rounded-md px-3 py-1 text-[10px] font-semibold ${getBadgeStyle(
              tech.badge,
            )}`}
          >
            {tech.badge}
          </span>
        )}
      </div>
      <h3 className="text-base-content mt-6 text-lg font-bold">{tech.name}</h3>
      <p className="text-base-content/60 mt-2 min-h-[72px] text-sm leading-6">
        {tech.description}
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="text-base-content/70 rounded-md bg-gray-100 px-2 py-1 text-xs">
          {tech.category}
        </span>
        <span className="text-base-content/70 text-xs">{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 text-sm font-medium">
          <Star className="text-yellow-400" size={14} fill="currentColor" />
          {tech.rating}
        </span>
      </div>
      <button
        type="button"
        onClick={() => handleAddToStack(tech)}
        className="mt-5 w-full cursor-pointer rounded-md bg-gray-900 px-6 py-2 text-sm font-medium text-white transition-all hover:bg-gray-800"
      >
        Add to stack
      </button>
    </div>
  );
};

export default TechnologCard;
