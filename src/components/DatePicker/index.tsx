import { DatePickerContent } from './components/Content';
import { DatePickerHeader } from './components/Header';
import { DatePickerPills } from './components/Pills';
import { DatePickerProvider } from './context';
import { DatePickerStyles as Styles } from './styles';

type Props = {
  disabled?: boolean;
  onChange: (date: Date) => void;
};

export function DatePicker({ onChange, disabled }: Props) {
  return (
    <DatePickerProvider onChange={onChange}>
      <Styles.Container>
        <DatePickerHeader disabled={disabled} />
        <DatePickerContent disabled={disabled} />
        <DatePickerPills disabled={disabled} />
      </Styles.Container>
    </DatePickerProvider>
  );
}
