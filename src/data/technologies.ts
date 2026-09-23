export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}
export const technologies: Technology[] = [
  {
    id: "react",
    name: "React",
    category: "Frontend",
    description:
      "A declarative, component-based JavaScript library for building modern user interfaces.",
    icon: "https://icon.icepanel.io/Technology/svg/React.svg",
    rating: 4.9,
    difficulty: "Beginner-Friendly",
    badge: "Popular",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
    description:
      "A React framework for building fast, scalable, and production-ready web applications.",
    icon: "https://icon.icepanel.io/Technology/svg/Next.js.svg",
    rating: 4.8,
    difficulty: "Intermediate",
    badge: "Trending",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend",
    description:
      "A strongly typed programming language that builds on JavaScript for safer and more scalable applications.",
    icon: "https://icon.icepanel.io/Technology/svg/TypeScript.svg",
    rating: 4.9,
    difficulty: "Intermediate",
    badge: "Recommended",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    description:
      "A JavaScript runtime built on Chrome's V8 engine for building fast and scalable server-side applications.",
    icon: "https://icon.icepanel.io/Technology/svg/Node.js.svg",
    rating: 4.8,
    difficulty: "Intermediate",
    badge: "Popular",
  },
  {
    id: "expressjs",
    name: "Express.js",
    category: "Backend",
    description:
      "A minimal and flexible Node.js web framework for building APIs and server-side applications.",
    icon: "https://icon.icepanel.io/Technology/svg/Express.svg",
    rating: 4.7,
    difficulty: "Beginner-Friendly",
    badge: "Lightweight",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Database",
    description:
      "A flexible NoSQL document database designed for modern applications with scalable data models.",
    icon: "https://icon.icepanel.io/Technology/svg/MongoDB.svg",
    rating: 4.8,
    difficulty: "Beginner-Friendly",
    badge: "Popular",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Database",
    description:
      "A powerful, open-source object-relational database system with proven reliability and advanced features.",
    icon: "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg",
    rating: 4.9,
    difficulty: "Intermediate",
    badge: "Top SQL",
  },
  {
    id: "docker",
    name: "Docker",
    category: "DevOps",
    description:
      "A platform for packaging applications and their dependencies into portable and consistent containers.",
    icon: "https://icon.icepanel.io/Technology/svg/Docker.svg",
    rating: 4.8,
    difficulty: "Intermediate",
    badge: "Essential",
  },
  {
    id: "git",
    name: "Git",
    category: "Tools",
    description:
      "A distributed version control system that helps developers track changes and collaborate on projects.",
    icon: "https://icon.icepanel.io/Technology/svg/Git.svg",
    rating: 4.9,
    difficulty: "Beginner-Friendly",
    badge: "Essential",
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    category: "Frontend",
    description:
      "A utility-first CSS framework for rapidly building modern and responsive user interfaces.",
    icon: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
    rating: 4.8,
    difficulty: "Beginner-Friendly",
    badge: "Trending",
  },
];
