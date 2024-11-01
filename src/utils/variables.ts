import { createId } from "@paralleldrive/cuid2";

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
