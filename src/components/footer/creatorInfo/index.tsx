import { linkedinCreator } from "utils/variables";
import { SocialMediaLinks } from "./socialMediaLinks";

export const CreatorInfo = () => {
  return (
    <div className="flex w-full min-w-60 flex-col gap-2 md:w-2/5">
      <p className="text-justify">
        This website was created by{" "}
        <a
          href={linkedinCreator}
          target="blank"
          className="cursor-pointer text-nowrap font-semibold text-primary duration-300 hover:opacity-80"
        >
          Felipe Santiago
        </a>
        , Fullstack developer on React, Typescript, Node and SQL databases.
        Contact me on my social media and check-out my{" "}
        <a
          href={linkedinCreator}
          target="blank"
          className="cursor-pointer text-nowrap font-semibold text-primary duration-300 hover:opacity-80"
        >
          Github here
        </a>{" "}
        to see my projects. This project was created just for study and its
        database can reset any time. But enjoy anyway and subscribe and register
        your meals while it's working!
      </p>

      <SocialMediaLinks />
    </div>
  );
};
