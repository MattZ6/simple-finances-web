import { useDatePicker } from '@components/DatePicker/hooks/useDatePicker';

import { DatePickerWeeksHeader, DayButton } from './components';
import { DatePickerContentStyles as Styles } from './styles';

type Props = {
  disabled?: boolean;
};

export function DatePickerContent({ disabled }: Props) {
  const { daysOfTheMonth } = useDatePicker();

  return (
    <Styles.Content>
      <DatePickerWeeksHeader />

      <Styles.DaysContainer>
        {daysOfTheMonth.map(day => (
          <DayButton key={day.key} day={day} disabled={disabled} />
        ))}
      </Styles.DaysContainer>
    </Styles.Content>
  );
}
