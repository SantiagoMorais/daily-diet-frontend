import { NavBar } from "@components/navBar";
import { Hero } from "./hero";
import { WebsiteObjectives } from "./websiteObjectives";
import { Footer } from "@components/footer";

export const Home = () => {
  return (
    <div className="flex min-h-full flex-col justify-center gap-10">
      <NavBar />
      <div className="flex flex-1 flex-col items-center justify-center">
        <Hero />
        <WebsiteObjectives />
      </div>
      <Footer />
    </div>
  );
};
