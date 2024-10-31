import { tv } from "tailwind-variants";

export const button = tv({
  base: "text-lg w-fit px-6 py-3 rounded-full duration-300 text-nowrap",
  variants: {
    color: {
      primary: "text-bg bg-white hover:shadow-allAround hover:text-primary hover:scale-105",
      secondary: "text-white bg-primary hover:shadow-allAround hover:scale-105"
    },
  },
});

export const avatar = tv({
    base: "size-14 rounded-full border-white border-2 -ml-3"
})