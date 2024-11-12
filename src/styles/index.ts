import { tv } from "tailwind-variants";

export const button = tv({
  base: "text-lg w-fit px-6 py-3 duration-300 text-nowrap h-fit",
  variants: {
    color: {
      primary:
        "text-bg bg-gradient-to-br from-white to-zinc-400 hover:text-primary ",
      secondary:
        "text-white bg-gradient-to-br from-primary to-secondary hover:text-bg",
    },
    format: {
      rounded: "rounded-full",
      full: "w-full",
      common: "rounded-lg",
    },
    hoverEffects: {
      scale: "hover:scale-110",
      opacity: "hover:opacity-80",
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

export const summaryListItem = tv({
  base: "flex justify-between items-center text-lg gap-2 w-full md:gap-4",
});

export const title = tv({
  base: "text-lg font-semibold ",
  variants: {
    afterEffect: {
      borderBottom:
        "relative pb-px after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-l after:bg-gradient-to-r after:from-primary after:to-transparent",
    },
  },
});
