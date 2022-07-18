import { ArrowLeft, ArrowRight } from 'phosphor-react';
import { useMemo } from 'react';

import { formatFullMonth } from '@utils/formatMonth';

import { useDatePicker } from '@components/DatePicker/hooks/useDatePicker';
import { Tooltip } from '@components/Tooltip';

import { DatePickerHeaderStyles as Styles } from './styles';

type Props = {
  disabled?: boolean;
};

export function DatePickerHeader({ disabled }: Props) {
  const { selectNextMonth, selectPreviousMonth, selectedMonthDate } =
    useDatePicker();

  const label = useMemo(() => {
    return formatFullMonth(selectedMonthDate);
  }, [selectedMonthDate]);

  return (
    <Styles.Header>
      <Tooltip content="Mês anterior">
        <Styles.HeaderButton
          type="button"
          onClick={selectPreviousMonth}
          disabled={disabled}
        >
          <ArrowLeft size={20} />
        </Styles.HeaderButton>
      </Tooltip>

      <Styles.HeaderTitle>{label}</Styles.HeaderTitle>

      <Tooltip content="Mês seguinte">
        <Styles.HeaderButton
          type="button"
          onClick={selectNextMonth}
          disabled={disabled}
        >
          <ArrowRight size={20} />
        </Styles.HeaderButton>
      </Tooltip>
    </Styles.Header>
  );
}
