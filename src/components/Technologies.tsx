import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { technologies as technologyData } from "../data/technologies";
import TechnologCard from "./TechnologCard";

type Technology = (typeof technologyData)[number];

const Technologies = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadTechnologies = () => {
      try {
        setLoading(true);
        setTimeout(() => {
          setTechnologies(technologyData);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Failed to load technologies:", error);
        toast.error("Failed to load technologies.");
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  const handleRemoveFromStack = (technologyId: string) => {
    const technology = selectedTechnologies.find(
      (tech) => tech.id === technologyId,
    );

    setSelectedTechnologies((previous) =>
      previous.filter((tech) => tech.id !== technologyId),
    );

    if (technology) {
      toast.success(`${technology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      toast.info("All technologies removed!");
      return;
    }

    setSelectedTechnologies([]);

    toast.success("All technologies removed from your stack.");
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="mb-10">
          <h1 className="text-base-content text-3xl font-bold tracking-tight sm:text-4xl">
            Explore the{" "}
            <span className="bg-gradient-to-r from-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Technologies
            </span>
          </h1>

          <p className="text-base-content/60 mt-3 text-sm sm:text-base">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
            {loading ? (
              <>
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-base-100 h-64 animate-pulse rounded-lg border border-gray-200/70 p-5"
                  >
                    <div className="h-8 w-8 rounded-md bg-gray-200" />
                    <div className="mt-6 h-5 w-28 rounded bg-gray-200" />
                    <div className="mt-3 h-4 w-full rounded bg-gray-200" />
                    <div className="mt-2 h-4 w-4/5 rounded bg-gray-200" />
                    <div className="mt-6 h-8 w-full rounded bg-gray-200" />
                  </div>
                ))}
              </>
            ) : technologies.length === 0 ? (
              <div className="col-span-full flex min-h-60 items-center justify-center rounded-lg border border-dashed border-gray-300">
                <p className="text-sm text-gray-500">
                  No technologies available.
                </p>
              </div>
            ) : (
              technologies.map((tech) => (
                <TechnologCard
                  tech={tech}
                  selectedTechnologies={selectedTechnologies}
                  setSelectedTechnologies={setSelectedTechnologies}
                />
              ))
            )}
          </div>

          <aside className="bg-base-100 h-fit rounded-lg border border-gray-200 p-5 shadow-xs">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base-content text-lg font-bold">
                  Your Stack
                </h2>

                <p className="text-base-content/50 mt-1 text-xs">
                  {selectedTechnologies.length === 0
                    ? "No technologies selected yet."
                    : `${selectedTechnologies.length} technologies selected`}
                </p>
              </div>
            </div>
            {selectedTechnologies.length === 0 ? (
              <div className="bg-base-100 mt-6 rounded-xl border border-dashed border-gray-300 p-5 text-center">
                <p className="text-base-content/40 mt-1 text-xs">
                  Your stack is empty.
                </p>
              </div>
            ) : (
              <div className="mt-6 space-y-3">
                {selectedTechnologies.map((tech) => (
                  <div
                    key={tech.id}
                    className="bg-base-100 flex items-center gap-3 rounded-md border border-gray-200 p-3"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gray-50">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="size-6 object-contain"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base-content truncate text-sm font-semibold">
                        {tech.name}
                      </h3>

                      <p className="text-base-content/50 text-xs">
                        {tech.category}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleRemoveFromStack(tech.id)}
                      className="text-base-content/40 flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-red-50 hover:text-red-500"
                      aria-label={`Remove ${tech.name}`}
                    >
                      <X size={15} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={handleRemoveAll}
              className="mt-5 w-full cursor-pointer rounded-md border border-red-500 px-6 py-2 text-sm font-medium text-red-500 transition-colors hover:bg-red-500 hover:text-white"
            >
              Remove All
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
