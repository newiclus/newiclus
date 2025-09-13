import React from "react";

import { Avatar, AvatarImage, AvatarFallback } from "@components/ui/avatar";
import { Typography } from "@components/ui/typography";

const Header: React.FC = () => {
  return (
    <header className="w-full p-4">
      <div className="container mx-auto flex flex-col justify-between items-center">
        <section className="flex-2/4">
          <Typography
            component="h3"
            size="base"
            weight="normal"
            className="text-gray-500 text-center"
          >
            👋 Hi there, I'm
          </Typography>

          <Typography
            component="h1"
            size="4xl"
            weight="bold"
            className="text-orange-600 tracking-wide uppercase"
          >
            Junihor T. Moran
          </Typography>

          <Typography
            component="h2"
            size="xl"
            weight="medium"
            className="uppercase text-gray-500 text-center font-stretch-semi-condensed"
          >
            SR Frontend Developer
          </Typography>
        </section>

        <section className="flex-2/4 my-4">
          <div className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 shadow-md p-1 rounded-full inline-block">
            <Avatar className="size-48">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/223031?v=4"
                alt="@shadcn"
              />
              <AvatarFallback>JM</AvatarFallback>
            </Avatar>
          </div>
        </section>

        <section className="flex-2/4 border-l-2 border-gray-500 pl-4 py-2">
          <Typography
            component="h3"
            size="base"
            weight="normal"
            className="text-gray-500 indent-8"
          >
            I'm a passionate web developer with 14 years of experience crafting
            exceptional user experiences and building reliable web applications.
            I specialize in modern frontend technologies and love solving
            complex problems through clean, maintainable code.
          </Typography>
        </section>
      </div>
    </header>
  );
};
export default Header;
