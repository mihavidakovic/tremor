import { BaseColors, DeltaTypes, getColorClassNames, colorPalette } from "lib";

import {
  ArrowDownIcon,
  ArrowDownRightIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowUpRightIcon,
} from "assets";

export type BadgeProportionTypes = {
  paddingX: string;
  paddingY: string;
  fontSize: string;
};

export const badgeProportionsIconOnly: {
  [char: string]: BadgeProportionTypes;
} = {
  xs: {
    paddingX: "px-2",
    paddingY: "py-0.5",
    fontSize: "text-xs",
  },
  sm: {
    paddingX: "px-2.5",
    paddingY: "py-1",
    fontSize: "text-sm",
  },
  md: {
    paddingX: "px-3",
    paddingY: "py-1.5",
    fontSize: "text-md",
  },
  lg: {
    paddingX: "px-3.5",
    paddingY: "py-1.5",
    fontSize: "text-lg",
  },
  xl: {
    paddingX: "px-3.5",
    paddingY: "py-1.5",
    fontSize: "text-xl",
  },
};

export const badgeProportionsWithText: {
  [char: string]: BadgeProportionTypes;
} = {
  xs: {
    paddingX: "px-2",
    paddingY: "py-0.5",
    fontSize: "text-xs",
  },
  sm: {
    paddingX: "px-2.5",
    paddingY: "py-0.5",
    fontSize: "text-sm",
  },
  md: {
    paddingX: "px-3",
    paddingY: "py-0.5",
    fontSize: "text-md",
  },
  lg: {
    paddingX: "px-3.5",
    paddingY: "py-0.5",
    fontSize: "text-lg",
  },
  xl: {
    paddingX: "px-4",
    paddingY: "py-1",
    fontSize: "text-xl",
  },
};

export const iconSizes: {
  [size: string]: {
    height: string;
    width: string;
  };
} = {
  xs: {
    height: "h-4",
    width: "w-4",
  },
  sm: {
    height: "h-4",
    width: "w-4",
  },
  md: {
    height: "h-4",
    width: "w-4",
  },
  lg: {
    height: "h-5",
    width: "w-5",
  },
  xl: {
    height: "h-6",
    width: "w-6",
  },
};

export type ColorTypes = {
  bgColor: string;
  textColor: string;
};

export const colors: { [key: string]: ColorTypes } = {
  [DeltaTypes.Increase]: {
    bgColor: getColorClassNames(BaseColors.Emerald, colorPalette.background).bgColor,
    textColor: getColorClassNames(BaseColors.Emerald, colorPalette.text).textColor,
  },
  [DeltaTypes.ModerateIncrease]: {
    bgColor: getColorClassNames(BaseColors.Emerald, colorPalette.background).bgColor,
    textColor: getColorClassNames(BaseColors.Emerald, colorPalette.text).textColor,
  },
  [DeltaTypes.Decrease]: {
    bgColor: getColorClassNames(BaseColors.Rose, colorPalette.background).bgColor,
    textColor: getColorClassNames(BaseColors.Rose, colorPalette.text).textColor,
  },
  [DeltaTypes.ModerateDecrease]: {
    bgColor: getColorClassNames(BaseColors.Rose, colorPalette.background).bgColor,
    textColor: getColorClassNames(BaseColors.Rose, colorPalette.text).textColor,
  },
  [DeltaTypes.Unchanged]: {
    bgColor: getColorClassNames(BaseColors.Orange, colorPalette.background).bgColor,
    textColor: getColorClassNames(BaseColors.Orange, colorPalette.text).textColor,
  },
};

export const deltaIcons: { [key: string]: React.ElementType } = {
  [DeltaTypes.Increase]: ArrowUpIcon,
  [DeltaTypes.ModerateIncrease]: ArrowUpRightIcon,
  [DeltaTypes.Decrease]: ArrowDownIcon,
  [DeltaTypes.ModerateDecrease]: ArrowDownRightIcon,
  [DeltaTypes.Unchanged]: ArrowRightIcon,
};
