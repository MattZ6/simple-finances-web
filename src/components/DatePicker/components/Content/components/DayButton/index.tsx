/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { memo, useMemo } from 'react';

import { DatePickerContextData } from '@components/DatePicker/context/types';
import { useDatePicker } from '@components/DatePicker/hooks/useDatePicker';

import { DayButtonStyles as Styles } from './styles';

type Props = {
  disabled?: boolean;
  day: DatePickerContextData.Day;
};

export const DayButton = memo(({ day, disabled }: Props) => {
  const { selectedDayDate, selectDay } = useDatePicker();

  const isSelected = useMemo(() => {
    if (!day.value) {
      return false;
    }

    return (
      selectedDayDate.getUTCFullYear() === day.value.getUTCFullYear() &&
      selectedDayDate.getUTCMonth() === day.value.getUTCMonth() &&
      selectedDayDate.getUTCDate() === day.value.getUTCDate()
    );
  }, [selectedDayDate, day.value]);

  return (
    <Styles.Container>
      {day.value && (
        <Styles.Button
          selected={isSelected}
          onClick={() => selectDay(day.value!)}
          disabled={disabled}
        >
          {day.value.getUTCDate()}
        </Styles.Button>
      )}
    </Styles.Container>
  );
});
