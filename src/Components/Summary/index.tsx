import { JSX } from "react";

import { Button } from "@components/ui/button";
import { Typography } from "@components/ui/typography";

function Summary(): JSX.Element {
  return (
    <article className="summary">
      <Typography component="h1" size="3xl" weight="bold">
        Summary
      </Typography>
      <div className="summary__content">
        <p>
          I am a SR Web UI Developer with more than 10 years of experience
          developing in platforms using JavaScript, HTML and CSS. The last 3
          years of experience he has used React JS.
        </p>
        <p>
          I work with agile methodologies, has experience leading teams and has
          a great ability to communicate and understand the client’s
          requirements.
        </p>
        <p>
          I am an easygoing person, result-oriented professional focused on the
          quality to find the best solution for the client, I have the ability
          to easily adapts to change and commits to the projects that I am
          working on.
        </p>

        <Button variant="outline" size="lg">
          Review CV
        </Button>
      </div>
    </article>
  );
}

export { Summary };
