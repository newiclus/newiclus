import { JSX } from "react";

import { Typography } from "@components/ui/typography";

function Summary(): JSX.Element {
  return (
    <section className="p-15 bg-amber-100 border-y-1 border-amber-800 z-10">
      <Typography
        size="2xl"
        weight="light"
        className="border-l-4 border-gray-400 pl-6 py-3 text-gray-400 indent-8 font-noto-serif"
      >
        <cite className="font-semibold text-gray-500">
          I'm a passionate web developer
        </cite>{" "}
        with 14 years of experience crafting exceptional user experiences and
        building reliable web applications. I specialize in modern frontend
        technologies and love solving complex problems through clean,
        maintainable code.
      </Typography>
    </section>
  );
}

export default Summary;
