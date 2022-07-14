import {
  Barricade,
  Car,
  CirclesThree,
  Coins,
  FirstAid,
  ForkKnife,
  Wrench,
  House,
  Crown,
  PawPrint,
  Receipt,
  Scroll,
  ShoppingCart,
  TShirt,
} from 'phosphor-react';
import { memo } from 'react';

type Props = {
  label: string;
  size: number;
};

export const TransactionCategoryIcon = memo(({ label, size }: Props) => {
  if (label === 'feed') {
    return <ForkKnife size={size} />;
  }

  if (label === 'transportation') {
    return <Car size={size} />;
  }

  if (label === 'tools') {
    return <Wrench size={size} />;
  }

  if (label === 'savings') {
    return <Coins size={size} />;
  }

  if (label === 'cloth') {
    return <TShirt size={size} />;
  }

  if (label === 'pet') {
    return <PawPrint size={size} />;
  }

  if (label === 'health') {
    return <FirstAid size={size} />;
  }

  if (label === 'market') {
    return <ShoppingCart size={size} />;
  }

  if (label === 'home') {
    return <House size={size} />;
  }

  if (label === 'make') {
    return <Crown size={size} />;
  }

  if (label === 'subscription') {
    return <CirclesThree size={size} />;
  }

  if (label === 'buildings') {
    return <Barricade size={size} />;
  }

  if (label === 'taxes') {
    return <Scroll size={size} />;
  }

  return <Receipt size={size} />;
});
