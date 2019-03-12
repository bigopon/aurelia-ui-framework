/**
 * @author    : Adarsh Pastakia
 * @version   : 5.0.0
 * @copyright : 2019
 * @license   : MIT
 */
import {
  addMonths,
  addYears,
  endOfDay,
  endOfDecade,
  endOfMonth,
  format,
  isAfter,
  isBefore,
  parseISO,
  startOfDay,
  startOfDecade,
  startOfMonth
} from "date-fns";

export enum CALENDAR_VIEWS {
  DAYS,
  MONTHS,
  YEARS,
  DECADES
}

export enum CALENDAR_NAVIGATION {
  FIRST = "first",
  LAST = "last",
  PREV = "prev",
  NEXT = "next"
}

export enum CALENDAR_GRAIN {
  DAY = "$day",
  WEEK = "$week",
  MONTH = "$month",
  YEAR = "$year"
}

export type IDateDisabled = string[] | (({ date: Date }) => boolean) | undefined;

export interface IDateConfig {
  date?: Date | undefined;
  start?: Date | undefined;
  end?: Date | undefined;

  minDate: Date | undefined;
  maxDate: Date | undefined;

  disabled: IDateDisabled;
}

export interface IHeaderConfig {
  firstDisabled?: boolean;
  prevDisabled?: boolean;
  lastDisabled?: boolean;
  nextDisabled?: boolean;

  firstTooltip?: string;
  lastTooltip?: string;
  prevTooltip?: string;
  nextTooltip?: string;
}

export const getTitle = (month: Date, view: CALENDAR_VIEWS) => {
  if (view === CALENDAR_VIEWS.DAYS) {
    return format(month, "MMMM yyyy");
  }
  if (view === CALENDAR_VIEWS.MONTHS) {
    return format(month, "yyyy");
  }
  if (view === CALENDAR_VIEWS.YEARS) {
    return format(startOfDecade(month), "yyyy") + "-" + format(endOfDecade(month), "yyyy");
  }
  return "-";
};

export const changeMonth = (month: Date, view: CALENDAR_VIEWS, grain: string) => {
  if (view === CALENDAR_VIEWS.DAYS) {
    switch (grain) {
      case CALENDAR_NAVIGATION.FIRST:
        return addMonths(month, -12);
      case CALENDAR_NAVIGATION.LAST:
        return addMonths(month, 12);
      case CALENDAR_NAVIGATION.PREV:
        return addMonths(month, -1);
      case CALENDAR_NAVIGATION.NEXT:
        return addMonths(month, 1);
    }
  }
  if (view === CALENDAR_VIEWS.MONTHS) {
    switch (grain) {
      case CALENDAR_NAVIGATION.PREV:
        return addYears(month, -1);
      case CALENDAR_NAVIGATION.NEXT:
        return addYears(month, 1);
    }
  }
  if (view === CALENDAR_VIEWS.YEARS) {
    switch (grain) {
      case CALENDAR_NAVIGATION.PREV:
        return addYears(month, -10);
      case CALENDAR_NAVIGATION.NEXT:
        return addYears(month, 10);
    }
  }
  return month;
};

export const buildHeaderConfig = (month: Date, view: CALENDAR_VIEWS, config: IDateConfig) => {
  if (view === CALENDAR_VIEWS.DAYS) {
    return {
      firstDisabled: isBeforeMin(month, config.minDate, -12),
      lastDisabled: isAfterMax(month, config.maxDate, 12),
      prevDisabled: isBeforeMin(month, config.minDate, -1),
      nextDisabled: isAfterMax(month, config.maxDate, 1),

      firstTooltip: format(addMonths(month, -12), "MMM yyyy"),
      lastTooltip: format(addMonths(month, 12), "MMM yyyy"),
      prevTooltip: format(addMonths(month, -1), "MMM yyyy"),
      nextTooltip: format(addMonths(month, 1), "MMM yyyy")
    };
  }
  if (view === CALENDAR_VIEWS.MONTHS) {
    return {
      prevDisabled: isBeforeMin(month, config.minDate, -12),
      nextDisabled: isAfterMax(month, config.maxDate, 12),
      prevTooltip: format(addYears(month, -1), "yyyy"),
      nextTooltip: format(addYears(month, 1), "yyyy")
    };
  }
  if (view === CALENDAR_VIEWS.YEARS) {
    const start = startOfDecade(month);
    const end = endOfDecade(month);
    return {
      prevDisabled: isBeforeMin(month, config.minDate, -120),
      nextDisabled: isAfterMax(month, config.maxDate, 120),
      prevTooltip: format(addYears(start, -10), "yyyy")+"-"+format(addYears(start, -1), "yyyy"),
      nextTooltip: format(addYears(end, 1), "yyyy")+"-"+format(addYears(end, 10), "yyyy")
    };
  }
};

export const isBeforeMin = (month: Date, minDate: Date, n: number) => {
  return minDate ? isBefore(addMonths(month, n), startOfMonth(minDate)) : false;
};

export const isAfterMax = (month: Date, maxDate: Date, n: number) => {
  return maxDate ? isAfter(addMonths(month, n), endOfMonth(maxDate)) : false;
};

export const parseDate = (date: Date | string | undefined): Date => {
  return date ? (isString(date) ? parseISO(date.toString()) : (date as Date)) : null;
};

export const isDisabled = (config: IDateConfig, date: Date): boolean => {
  if (config.minDate && isBefore(date, startOfDay(config.minDate))) {
    return true;
  }
  if (config.maxDate && isAfter(date, endOfDay(config.maxDate))) {
    return true;
  }
  if (config.disabled) {
    const { disabled } = config;
    if (isArray(disabled)) {
      return disabled.includes(startOfDay(date).toISOString());
    } else if (isFunction(disabled)) {
      return disabled({ date });
    }
  }
  return false;
};
