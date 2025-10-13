import React from "react";

import StackCard from "@components/common/stack-card";

const TechStack: React.FC = () => {
  return (
    <div className="p-8 relative z-10 bg-green-50">
      <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>

      <section className="list-disc list-inside space-y-2">
        <StackCard
          title="Frontend"
          stacks={[
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Redux",
            "Zustand",
          ]}
        />

        <StackCard
          title="Backend"
          stacks={["Node.js", "Express", "NestJS", "GraphQL", "REST APIs"]}
        />

        <StackCard
          title="Databases"
          stacks={["PostgreSQL", "MongoDB", "MySQL", "Redis"]}
        />

        <StackCard
          title="Testing"
          stacks={["Vitest", "React Testing Library", "Cypress"]}
        />

        <StackCard
          title="Version Control"
          stacks={["Git", "GitHub", "GitLab"]}
        />

        <StackCard
          title="Cloud Providers"
          stacks={["AWS", "Azure", "Google Cloud"]}
        />

        <StackCard
          title="Other Tools"
          stacks={["Vite", "Babel", "ESLint", "Prettier", "Storybook"]}
        />
      </section>
    </div>
  );
};

export default TechStack;
