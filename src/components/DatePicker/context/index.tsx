import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { DatePickerContextData } from './types';

export const DatePickerContext = createContext(
  {} as DatePickerContextData.Context
);

type Props = {
  onChange: (date: Date) => void;
  children: React.ReactNode;
};

export function DatePickerProvider({ children, onChange }: Props) {
  const [selectedMonthDate, setSelectedMonthDate] = useState(new Date());
  const [days, setDays] = useState<DatePickerContextData.Day[]>([]);
  const [selectedDayDate, setSelectedDayDate] = useState(new Date());

  const selectPreviousMonth = useCallback(() => {
    setSelectedMonthDate(state => {
      const date = new Date(state);

      date.setMonth(state.getMonth() - 1);

      return date;
    });
  }, []);

  const selectNextMonth = useCallback(() => {
    setSelectedMonthDate(state => {
      const date = new Date(state);

      date.setMonth(state.getMonth() + 1);

      return date;
    });
  }, []);

  const selectDay = useCallback(
    (dayDate: Date) => {
      setSelectedDayDate(dayDate);
      onChange(dayDate);
    },
    [onChange]
  );

  useEffect(() => {
    const start = new Date(selectedMonthDate);
    start.setUTCDate(1);
    start.setUTCHours(0, 0, 0, 0);

    const end = new Date(start);
    end.setUTCMonth(end.getUTCMonth() + 1);
    end.setUTCDate(end.getUTCDate() - 1);

    const daysToSet = Array.from({
      length: end.getUTCDate() + start.getUTCDay(),
    }).map((_, index) => {
      const date =
        index < start.getUTCDay()
          ? null
          : new Date(
              selectedMonthDate.getUTCFullYear(),
              selectedMonthDate.getUTCMonth(),
              index + 1 - start.getUTCDay()
            );

      return {
        key: String(date?.toISOString() ?? index),
        value: date,
      };
    });

    setDays(daysToSet);
  }, [selectedMonthDate]);

  const contextData = useMemo<DatePickerContextData.Context>(
    () => ({
      selectedMonthDate,
      selectNextMonth,
      selectPreviousMonth,
      selectMonth: setSelectedMonthDate,
      daysOfTheMonth: days,
      selectedDayDate,
      selectDay,
    }),
    [
      selectedMonthDate,
      selectNextMonth,
      selectPreviousMonth,
      days,
      selectedDayDate,
      selectDay,
    ]
  );

  return (
    <DatePickerContext.Provider value={contextData}>
      {children}
    </DatePickerContext.Provider>
  );
}
