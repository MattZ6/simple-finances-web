import { styled } from '@styles/stitches.config';

export namespace FormFieldStyles {
  export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
  });

  export const Field = styled('label', {
    display: 'flex',
    alignItems: 'center',

    position: 'relative',

    borderRadius: '$normal',

    color: '$defaultTextLoContrastColor',

    '> svg': {
      zIndex: 1,
      position: 'absolute',
      left: '$small',

      userSelect: 'none',
      pointerEvents: 'none',
    },

    '&:not(:focus-within):hover': {
      '> div > input': {
        borderColor: '$defaultElementHoverBorder',
      },
    },

    '&:focus-within': {
      color: '$brandSolidBackground',

      '> div > input': {
        borderColor: '$brandSolidBackground',
      },
    },

    variants: {
      hasError: {
        true: {
          color: '$errorSolidBackground',

          '> div > input': {
            borderColor: '$errorSolidBackground',
          },

          '&:not(:focus-within):hover': {
            color: '$errorSolidHoverBackground',

            '> div > input': {
              borderColor: '$errorSolidHoverBackground',
            },
          },
        },
      },
    },
  });

  export const InputContainer = styled('div', {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',

    borderRadius: 'inherit',

    position: 'relative',
  });

  export const Label = styled('small', {
    fontSize: '$small',
    lineHeight: '$normal',
    fontWeight: '500',
    color: '$defaultTextLoContrastColor',

    pointerEvents: 'none',
    userSelect: 'none',
  });

  export const Input = styled('input', {
    paddingLeft: '$normal',
    paddingRight: '$normal',
    paddingTop: '$small',
    paddingBottom: '$small',

    color: '$defaultTextHiContrastColor',
    fontSize: '$normal',
    lineHeight: '$normal',

    borderRadius: 'inherit',

    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '$defaultElementBorder',

    outline: 'none',

    '&::placeholder': {
      color: '$defaultTextLoContrastColor',
    },

    position: 'relative',

    '&[type="date"]::-webkit-inner-spin-button,&[type="date"]::-webkit-calendar-picker-indicator,&[type="time"]::-webkit-inner-spin-button,&[type="time"]::-webkit-calendar-picker-indicator':
      {
        position: 'absolute',
        background: 'transparent',
        color: 'transparent',

        width: '100%',
        height: '100%',
        cursor: 'pointer',
        left: 0,

        outline: 'none',
        border: 'none',
        boxShadow: 'none',
      },

    variants: {
      withLeading: {
        true: {
          paddingLeft: '$large',
        },
      },
    },
  });

  export const ErrorContainer = styled('div', {
    display: 'flex',

    paddingLeft: '$normal',
    paddingRight: '$normal',
    minHeight: '20px',
  });

  export const Error = styled('output', {
    fontSize: '$small',
    lineHeight: '$small',
    fontWeight: '500',
    color: '$errorSolidBackground',
  });
}
