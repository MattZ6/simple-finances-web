import { IconProps } from 'phosphor-react';
import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react';

import { FormFieldStyles as Styles } from './styles';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  error?: string;
  icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
};

const PrimitiveFormField: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { name, label, icon: Icon, error, ...rest },
  ref
) => {
  return (
    <Styles.Container>
      {label && <Styles.Label>{label}</Styles.Label>}

      <Styles.Field htmlFor={name} hasError={!!error}>
        {Icon && <Icon size={20} />}

        <Styles.InputContainer>
          <Styles.Input
            ref={ref}
            id={name}
            name={name}
            withLeading={!!Icon}
            {...rest}
          />
        </Styles.InputContainer>
      </Styles.Field>

      <Styles.ErrorContainer>
        {error && <Styles.Error>{error}</Styles.Error>}
      </Styles.ErrorContainer>
    </Styles.Container>
  );
};

export const FormField = forwardRef(PrimitiveFormField);
