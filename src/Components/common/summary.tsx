import { JSX } from "react";

import { Typography } from "@components/ui/typography";

function Summary(): JSX.Element {
  return (
    <section className="px-15 py-20 bg-yellow-400 border-y-1 border-yellow-500 z-10 border-solid">
      <Typography
        size="2xl"
        weight="light"
        className="border-l-4 border-gray-600 pl-6 py-3 text-gray-500 indent-8 font-noto-serif"
      >
        <cite className="font-semibold text-gray-600">I'm a passionate web developer</cite> with 14 years of experience
        crafting exceptional user experiences and building reliable web applications. I specialize in modern frontend
        technologies and love solving complex problems through clean, maintainable code.
      </Typography>
    </section>
  );
}

export default Summary;
