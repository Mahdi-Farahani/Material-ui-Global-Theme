//authure: MAHDI FARAHANI----> iLARAWEB.ir
//git rep: https://github.com/Mahdi-Farahani/Material-ui-Global-Theme
//--------------------------------------------------------------------

import tinycolor from 'tinycolor2';

//Color
const primary = '#fffff';
const secondary = '#cd5d7d';
const warning = '#FFC260';
const success = '#3CD4A0';
const info = '#9013FE';

const lightenRate = 7.5;
const darkenRate = 15;

export default {
  direction: 'rtl',
  palette: {
    primary: {
      main: primary,
      light: tinycolor(primary).lighten(lightenRate).toHexString(),
      dark: tinycolor(primary).darken(darkenRate).toHexString(),
    },
    secondary: {
      main: secondary,
      light: tinycolor(secondary).lighten(lightenRate).toHexString(),
      dark: tinycolor(secondary).darken(darkenRate).toHexString(),
      contrastText: '#FFFFFF',
    },
    warning: {
      main: warning,
      light: tinycolor(warning).lighten(lightenRate).toHexString(),
      dark: tinycolor(warning).darken(darkenRate).toHexString(),
    },
    success: {
      main: success,
      light: tinycolor(success).lighten(lightenRate).toHexString(),
      dark: tinycolor(success).darken(darkenRate).toHexString(),
    },
    info: {
      main: info,
      light: tinycolor(info).lighten(lightenRate).toHexString(),
      dark: tinycolor(info).darken(darkenRate).toHexString(),
    },
    text: {
      primary: '#fffff',
      secondary: tinycolor(primary),
      hint: '#B9B9B9',
    },
    background: {
      default: '#15202B',
      light: '#fffff',
    },
  },
  customShadows: {
    widget:
      '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A',
    widgetDark:
      '0px 3px 18px 0px #4558A3B3, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A',
    widgetWide:
      '0px 12px 33px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A',
  },

  //overrides Methods
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: '#22303c',
      },
    },
    MuiFormLabel: {
      root: {
        color: '#cd5d7d',
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 15,
      },
    },
    MuiInputBase: {
      input: {
        color: '#ffff',
      },
    },
    MuiTableCell: {
      root: {
        color: '#ffff',
      },
    },

    MuiTypography: {
      root: {
      
        color: '#ffff',
      },
    },

    MuiButtonBase: {
      root: {
        color: '#cd5d7d',
      },
    },
  },
};
