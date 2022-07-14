import { TooltipStyles as Styles } from './styles';

type Props = {
  children: React.ReactNode;
  content: string;
};

export function Tooltip({ children, content }: Props) {
  return (
    <Styles.Root>
      <Styles.Trigger asChild>{children}</Styles.Trigger>

      <Styles.Content>
        {content}
        <Styles.Arrow />
      </Styles.Content>
    </Styles.Root>
  );
}
