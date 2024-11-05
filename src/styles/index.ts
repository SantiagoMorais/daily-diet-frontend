import { tv } from "tailwind-variants";

export const button = tv({
  base: "text-lg w-fit px-6 py-3 rounded-full duration-300 text-nowrap h-fit",
  variants: {
    color: {
      primary:
        "text-bg bg-gradient-to-br from-white to-zinc-400 hover:text-primary hover:scale-110 hover:opacity-80",
      secondary:
        "text-white bg-gradient-to-br from-primary to-secondary hover:scale-110 hover:opacity-80",
    },
  },
});

export const avatar = tv({
  base: "size-14 rounded-full border-white border-2 -ml-3",
});

export const afterHover = tv({
  base: "absolute left-0 top-0 z-0 h-full w-full origin-right scale-x-0 bg-secondary transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100",
});

export const errorMessage = tv({
  base: "text-sm text-primary pt-1",
});
