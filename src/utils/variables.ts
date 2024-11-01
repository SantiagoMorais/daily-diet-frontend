import { createId } from "@paralleldrive/cuid2";
import cardImage1 from "@assets/imgs/meal-1.png";
import cardImage2 from "@assets/imgs/meal-2.png";
import cardImage3 from "@assets/imgs/meal-3.png";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faCarrot,
  faHandFist,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

interface INavbarLinks {
  name: string;
  link: string;
  id: string;
  logged?: boolean;
}

export const navbarLinks: INavbarLinks[] = [
  { id: createId(), link: "/", name: "Home" },
  { id: createId(), link: "/about-us", name: "About Us" },
  { id: createId(), link: "/profile", name: "Profile", logged: true },
];

interface IInfoCards {
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
