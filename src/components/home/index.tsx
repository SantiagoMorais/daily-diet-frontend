import { NavBar } from "@components/navBar";
import { Hero } from "./hero";
import { WebsiteObjectives } from "./websiteObjectives";
import { Footer } from "@components/footer";

export const Home = () => {
  return (
    <div className="flex min-h-full flex-col justify-center gap-10">
      <NavBar />
      <Hero />
      <WebsiteObjectives />
      <Footer />
    </div>
  );
};
