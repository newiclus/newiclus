import React from "react";
import { ESize } from "@utils/_enums";

interface ITag {
  name: string;
  color?: string;
  size?: ESize;
}

function Tag({ name, size, color = "default" }: ITag) {
  const hasSize = size ? `tag__size--${size}` : "";
  const tagColor = `tag__color--${color}`;

  return <label>{name}</label>;
}

export { Tag };
