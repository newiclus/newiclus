import React from "react";

interface TypographyProps
  extends React.HTMLAttributes<
    HTMLDivElement | HTMLParagraphElement | HTMLElement
  > {
  component:
    | "small"
    | "em"
    | "cite"
    | "div"
    | "span"
    | "p"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";
  size: "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  weight: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  className?: string;
  children: React.ReactNode;
}

const sizeClasses: Record<TypographyProps["size"], string> = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
};

const weightClasses: Record<TypographyProps["weight"], string> = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
};

const componentMap: Record<TypographyProps["component"], React.ElementType> = {
  small: "small",
  em: "em",
  cite: "cite",
  div: "div",
  span: "span",
  p: "p",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
};

const createElement = (
  component: React.ElementType,
  props: React.HTMLAttributes<HTMLElement>,
  children: React.ReactNode,
) => {
  return React.createElement(component, props, children);
};

const Typography: React.FC<TypographyProps> = ({
  component = "p",
  size = "base",
  weight = "normal",
  className = "",
  children,
  ...props
}) => {
  const sizeClass = sizeClasses[size];
  const weightClass = weightClasses[weight];

  return createElement(
    componentMap[component],
    {
      className: `${sizeClass} ${weightClass} ${className}`.trim(),
      ...props,
    },
    children,
  );
};

export { Typography };
