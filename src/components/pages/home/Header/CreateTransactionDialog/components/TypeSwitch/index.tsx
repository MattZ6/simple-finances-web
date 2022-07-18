import { KeyboardEvent, memo, useCallback, useEffect } from 'react';

import { TransactionTypeSwitchStyles as Styles } from './styles';

type Type = 'INCOME' | 'OUTCOME';

type ButtonProps = {
  disabled?: boolean;
  type: Type;
  selected: Type;
  onChange: (type: Type) => void;
};

const TypeButton = memo(
  ({ selected, onChange, type, disabled }: ButtonProps) => {
    const toggleType = useCallback(() => {
      const typeToSelect = selected === 'INCOME' ? 'OUTCOME' : 'INCOME';

      onChange(typeToSelect);
    }, [selected, onChange]);

    const handleKeyDown = useCallback(
      (event: KeyboardEvent<HTMLButtonElement>) => {
        const keys: { [key: string]: () => void } = {
          ArrowLeft: () => toggleType(),
          ArrowRight: () => toggleType(),
        };

        const callback = keys[event.code];

        if (!callback) {
          return;
        }

        callback();
      },
      [toggleType]
    );

    return (
      <Styles.Button
        id={type}
        selected={selected === type}
        onClick={() => onChange(type)}
        onKeyDown={handleKeyDown}
        tabIndex={selected === type ? 0 : -1}
        disabled={disabled}
      >
        {type === 'INCOME' ? 'Recebimento' : 'Gasto'}
      </Styles.Button>
    );
  }
);

type Props = {
  disabled?: boolean;
  selected: Type;
  onChange: (type: Type) => void;
};

export function TransactionTypeSwitch({ selected, onChange, disabled }: Props) {
  useEffect(() => {
    const element = document.getElementById(selected);

    if (element) {
      element.focus({ preventScroll: true });
    }
  }, [selected]);

  return (
    <Styles.Container>
      <TypeButton
        selected={selected}
        onChange={onChange}
        type="INCOME"
        disabled={disabled}
      />
      <TypeButton
        selected={selected}
        onChange={onChange}
        type="OUTCOME"
        disabled={disabled}
      />
    </Styles.Container>
  );
}
