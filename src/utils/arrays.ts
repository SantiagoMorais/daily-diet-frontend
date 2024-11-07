import { createId } from "@paralleldrive/cuid2";
import cardImage1 from "@assets/imgs/meal-1.png";
import cardImage2 from "@assets/imgs/meal-2.png";
import cardImage3 from "@assets/imgs/meal-3.png";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faAt,
  faCarrot,
  faHandFist,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { emailLink, githubLink, linkedinLink, whatsAppLink } from "./variables";

interface INavbarLinks {
  name: string;
  link: string;
  id: string;
  logged?: boolean;
}

export const navbarLinks: INavbarLinks[] = [
  { id: createId(), link: "/", name: "Home" },
  { id: createId(), link: "/meals", name: "Register Meals" },
  { id: createId(), link: "/profile", name: "Profile", logged: true },
];

export interface IInfoCards {
  title: string;
  description: string;
  id: string;
  img: string;
  icon: IconDefinition;
}

export const infoCards: IInfoCards[] = [
  {
    id: createId(),
    title: "Registry your meals",
    img: cardImage1,
    description:
      "Before to enjoy your meal, registry it here and set its title, description and if it is in your diet objectives 🥗, or not 🍔...",
    icon: faCarrot,
  },
  {
    id: createId(),
    title: "Verify the summary",
    img: cardImage2,
    description:
      "Verify statistics about how many meals have you registered, how many is in your diet and your best diet sequency. 🍴",
    icon: faUtensils,
  },
  {
    id: createId(),
    title: "Start right now!",
    img: cardImage3,
    description:
      "Every here is to help you to keep on focus, but relax, all we need to break rules sometimes and eat your favorite snack. Start right now and enjoy! 😄",
    icon: faHandFist,
  },
];

interface ISocialMedia {
  icon: IconDefinition;
  link: string;
  title: string;
}

export const socialMediaLinks: ISocialMedia[] = [
  {
    icon: faAt,
    link: emailLink,
    title: "Email",
  },
  {
    icon: faLinkedin,
    link: linkedinLink,
    title: "Linkedin",
  },
  {
    icon: faGithub,
    link: githubLink,
    title: "Github",
  },
  { icon: faWhatsapp, link: whatsAppLink, title: "Whatsapp" },
];

export const welcomeBannerButtons: { title: string; link: string; id: string }[] = [
  { title: "Register Meals", link: "/meals", id: createId() },
  { title: "Profile", link: "/profile", id: createId() },
];
