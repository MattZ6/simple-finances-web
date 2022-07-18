export namespace DatePickerContextData {
  export type Day = {
    key: string;
    value: Date | null;
  };

  export type Context = {
    selectedMonthDate: Date;
    selectPreviousMonth: () => void;
    selectNextMonth: () => void;
    selectMonth: (date: Date) => void;
    daysOfTheMonth: Day[];
    selectedDayDate: Date;
    selectDay: (date: Date) => void;
  };
}
