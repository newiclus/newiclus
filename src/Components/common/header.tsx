import React from "react";

import { Avatar, AvatarImage, AvatarFallback } from "@components/ui/avatar";
import { Typography } from "@components/ui/typography";

const Header: React.FC = () => {
  return (
    <header className="w-full p-10">
      <div className="container mx-auto flex flex-col justify-between items-center">
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

        <section className="flex-2/4 text-center">
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
            size="lg"
            weight="medium"
            className="border-amber-950 border-1 uppercase text-gray-50 text-center font-stretch-semi-condensed inline-block py-2 px-4 bg-amber-600 mt-2 tracking-wide shadow-[-6px_6px_0px_rgba(0,0,0,0.5)] "
          >
            SR Frontend Developer
          </Typography>
        </section>
      </div>
    </header>
  );
};
export default Header;
