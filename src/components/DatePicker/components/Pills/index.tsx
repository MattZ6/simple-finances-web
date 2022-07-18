import { memo, useCallback, useMemo } from 'react';

import { useDatePicker } from '@components/DatePicker/hooks/useDatePicker';

import { DatePickerPillsStyles as Styles } from './styles';

type Props = {
  disabled?: boolean;
  label: string;
  value: Date;
};

const Pill = memo(({ label, value, disabled }: Props) => {
  const { selectedDayDate, selectDay, selectMonth } = useDatePicker();

  const isSelected = useMemo(() => {
    return (
      selectedDayDate.getUTCFullYear() === value.getUTCFullYear() &&
      selectedDayDate.getUTCMonth() === value.getUTCMonth() &&
      selectedDayDate.getUTCDate() === value.getUTCDate()
    );
  }, [selectedDayDate, value]);

  const handleSelect = useCallback(() => {
    selectDay(value);
    selectMonth(value);
  }, [value, selectDay, selectMonth]);

  return (
    <Styles.Button
      type="button"
      selected={isSelected}
      onClick={handleSelect}
      disabled={disabled}
    >
      {label}
    </Styles.Button>
  );
});

const now = new Date();

const yesterday = new Date(now);
yesterday.setDate(now.getDate() - 1);

const tomorrow = new Date(now);
tomorrow.setDate(now.getDate() + 1);

const dates = [
  { label: 'Ontem', value: yesterday },
  { label: 'Hoje', value: now },
  { label: 'Amanhã', value: tomorrow },
];

type P = {
  disabled?: boolean;
};

export function DatePickerPills({ disabled }: P) {
  return (
    <Styles.Container>
      {dates.map(date => (
        <Pill
          key={date.label}
          label={date.label}
          value={date.value}
          disabled={disabled}
        />
      ))}
    </Styles.Container>
  );
}
