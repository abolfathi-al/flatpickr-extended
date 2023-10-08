/* Farsi (Persian) locals for flatpickr */
import { CustomLocale } from "../types/locale";
import { FlatpickrFn } from "../types/instance";

const fp =
  typeof window !== "undefined" && window.flatpickr !== undefined
    ? window.flatpickr
    : ({
      l10ns: {},
    } as FlatpickrFn);

export const Persian: CustomLocale = {
  weekdays: {
    shorthand: ["1ش", "۲ش", "۳ش", "۴ش", "۵ش", "ج", "ش"],
    longhand: [
      "یک‌شنبه",
      "دوشنبه",
      "سه‌شنبه",
      "چهارشنبه",
      "پنج‌شنبه",
      "جمعه",
      "شنبه",
    ],
  },
  months: {
    shorthand: [
      "فَر",
      "اُر",
      "خُر",
      "تیر",
      "مُر",
      "شَه",
      "مهر",
      "آب",
      "آذر",
      "دی",
      "بَه",
      "اِس",
    ],
    longhand: [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ],
  },
  firstDayOfWeek: 6,
  daysInMonth: [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30],
  ordinal: () => {
    return "";
  },
  rangeSeparator: "\u200E تا \u200E",
  // weekAbbreviation: "Wk",
  // scrollTitle: "Scroll to increment",
  // toggleTitle: "Click to toggle",
  amPM: ["صبح", "بعدازظهر"],
  yearAriaLabel: "سال",
  monthAriaLabel: "ماه",
  hourAriaLabel: "ساعت",
  minuteAriaLabel: "دقیقه",
  time_24hr: false,
};

fp.l10ns.fa = Persian;

export default fp.l10ns;
