import { tv } from "tailwind-variants";

export const button = tv({
  base: "text-lg w-fit px-6 py-3 rounded-full duration-300 text-nowrap",
  variants: {
    color: {
      primary: "text-bg bg-white hover:text-primary hover:scale-110 hover:opacity-80",
      secondary: "text-white bg-primary hover:scale-110 hover:opacity-80"
    },
  },
});

export const avatar = tv({
    base: "size-14 rounded-full border-white border-2 -ml-3"
})