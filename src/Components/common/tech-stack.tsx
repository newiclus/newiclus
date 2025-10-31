import React from "react";

import StackCard from "@components/common/stack-card";

const TechStack: React.FC = () => {
  return (
    <div className="px-9 py-15 relative z-10 bg-orange-50">
      <h2 className="text-4xl font-bold text-gray-800">Tech Stack</h2>
      <h3 className="text-xl font-medium mb-6 text-gray-600 italic font-noto-serif">Part of my journey</h3>

      <section className="list-disc list-inside space-y-2">
        <StackCard title="Frontend" stacks={["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Zustand"]} />

        <StackCard title="Backend" stacks={["Node.js", "Express", "NestJS", "GraphQL", "Prisma"]} />

        <StackCard title="Databases" stacks={["PostgreSQL", "MongoDB", "MySQL"]} />

        <StackCard title="Testing" stacks={["Vitest", "Testing Library", "Cypress"]} />

        <StackCard title="Version Control" stacks={["Git", "GitHub", "Bitbucket"]} />

        <StackCard title="Cloud Providers" stacks={["AWS", "Azure", "Google Cloud"]} />

        <StackCard title="Other Tools" stacks={["Vite", "Babel", "ESLint", "Prettier", "Storybook"]} />
      </section>
    </div>
  );
};

export default TechStack;
