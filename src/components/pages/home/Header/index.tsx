import { Plus } from 'phosphor-react';
import { memo, useMemo, useState } from 'react';

import { useAuth } from '@hooks/useAuth';

import { PageHeader } from '@components/PageHeader';

import { CreateTransactionDialog } from './CreateTransactionDialog';
import { HomePageHeaderStyles as Styles } from './styles';

function Component() {
  const { profile } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const title = useMemo(() => {
    if (!profile) {
      return 'Olá';
    }

    return `Olá, ${profile.first_name}`;
  }, [profile]);

  return (
    <>
      <PageHeader
        title={title}
        subtitle="Acompanhe o resumo mensal de suas contas"
      >
        <Styles.CreateTransactionButton
          type="button"
          onClick={() => setIsOpen(true)}
        >
          <Plus size={24} />
        </Styles.CreateTransactionButton>
      </PageHeader>

      {isOpen && (
        <CreateTransactionDialog onCloseRequested={() => setIsOpen(false)} />
      )}
    </>
  );
}

export const HomePageHeader = memo(Component);
