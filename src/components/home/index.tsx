import { NavBar } from "@components/navBar";
import { Hero } from "./hero";
import { WebsiteObjectives } from "./websiteObjectives";
import { Footer } from "@components/footer";

export const Home = () => {
  return (
    <div className="flex flex-col justify-center min-h-full gap-10">
      <NavBar />
      <Hero />
      <WebsiteObjectives />
      <Footer />
    </div>
  );
};
