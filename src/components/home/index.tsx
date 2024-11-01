import { NavBar } from "@components/navBar";
import { Hero } from "./hero";
import { WebsiteObjectives } from "./websiteObjectives";

export const Home = () => {
  return (
    <div className="flex flex-col justify-center md:h-full md:max-h-full">
      <NavBar />
      <Hero />
      <WebsiteObjectives />
    </div>
  );
};
