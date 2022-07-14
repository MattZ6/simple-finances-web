import { DotsThreeVertical, NotePencil } from 'phosphor-react';

import { Tooltip } from '@components/Tooltip';

import { TransactionMenuStyles as Styles } from './styles';

export namespace TransactionMenu {
  export type Option = 'UPDATE_CATEGORY';
}

type Props = {
  onSelect: (option: TransactionMenu.Option) => void;
};

export function TransactionMenu({ onSelect }: Props) {
  return (
    <Styles.Root>
      <Tooltip content="Mais opções">
        <Styles.Trigger>
          <DotsThreeVertical size={24} weight="bold" />
        </Styles.Trigger>
      </Tooltip>

      <Styles.Content>
        <Styles.Item
          textValue="Editar categoria"
          onSelect={() => onSelect('UPDATE_CATEGORY')}
        >
          <NotePencil size={16} />
          <Styles.ButtonText>Editar categoria</Styles.ButtonText>
        </Styles.Item>
      </Styles.Content>
    </Styles.Root>
  );
}
