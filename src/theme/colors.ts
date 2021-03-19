/**
 * App Theme - Colors
 */

/* eslint-disable spellcheck/spell-checker */

function ColorLuminance(hex, lum) {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // convert to decimal and change luminosity
  let rgb = '#';
let c;
let i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
    rgb += (`00${c}`).substr(c.length);
  }
  return rgb;
}

function hexToRgbA(hex, opacity) {
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = `0x${c.join('')}`;
        return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')},${opacity})`;
    }
    throw new Error('Bad Hex');
}

let colorsTheme = {};

const colorsGeneral = {
    blue: '#3052FF',
    orange: '#F8BF4C',
    green: '#3BDC96',
    red: '#FF5B5B',

    black: '#000000',
    white: '#ffffff',

    grey: '#606885',
    silver: '#ACB1C1',
    // light: '#F8FAFD',
    light: '#F3F6FA',

    themeLight: '#ffffff',
    themeDark: '#000000',
    themeMoonlight: '#181A21',
    themeRoyal: '#030B36',

    transparent: 'transparent',

    brandBithomp: '#3fa3b5',
    brandXrplns: '#3767CE',
    brandXrpscan: '#004a7c',
    brandPayid: '#38D39F',
};

const colorMutations = {
    // testBlue: ColorLuminance(colorsGeneral.blue, -0.5),
    // lightBlue: ColorLuminance(colorsGeneral.blue, -0.5),
    lightBlue: hexToRgbA(colorsGeneral.blue, 0.06),
    lightOrange: hexToRgbA(colorsGeneral.orange, 0.06),
    lightGreen: hexToRgbA(colorsGeneral.green, 0.06),
    lightRed: hexToRgbA(colorsGeneral.red, 0.06),
    lightGrey: hexToRgbA(colorsGeneral.grey, 0.06),
    backdrop: hexToRgbA(colorsGeneral.grey, 0.40),
    transparentBlack: hexToRgbA(colorsGeneral.black, 0.7),
    transparentMoonlight: hexToRgbA(colorsGeneral.themeMoonlight, 0.7),
    transparentBlue: hexToRgbA(colorsGeneral.blue, 0.7),
    transparentGrey: hexToRgbA(colorsGeneral.grey, 0.6),
    darkGrey: ColorLuminance(colorsGeneral.grey, 0.15),
    // darkGrey: ColorLuminance(colorsGeneral.grey, -0.75),
};

if (global.theme === 'light') {
    colorsTheme = {
        background: colorsGeneral.white,
        tint: colorsGeneral.light,
        contrast: colorsGeneral.black,
        textContrast: colorsGeneral.black,
        textPrimary: colorsGeneral.black,
        textSecondary: colorsGeneral.grey,
    };
}
if (global.theme === 'dark') {
    colorsTheme = {
        // THEME Dark
        background: colorsGeneral.black,
        tint: ColorLuminance(colorsGeneral.grey, -0.75),
        contrast: colorsGeneral.white,
        textContrast: colorsGeneral.black,
        textPrimary: colorsGeneral.white,
        textSecondary: colorsGeneral.silver,

        lightBlue: hexToRgbA(colorsGeneral.blue, 0.22),
        lightOrange: hexToRgbA(colorsGeneral.orange, 0.22),
        lightGreen: hexToRgbA(colorsGeneral.green, 0.22),
        lightRed: hexToRgbA(colorsGeneral.red, 0.22),
        lightGrey: hexToRgbA(colorsGeneral.grey, 0.22),
    };
}
if (global.theme === 'moonlight') {
    colorsTheme = {
        // THEME Moonlight
        background: colorsGeneral.themeMoonlight,
        tint: ColorLuminance(colorsGeneral.grey, -0.65),
        contrast: colorsGeneral.white,
        textContrast: colorsGeneral.black,
        textPrimary: colorsGeneral.white,
        textSecondary: colorsGeneral.silver,

        lightBlue: hexToRgbA(colorsGeneral.blue, 0.17),
        lightOrange: hexToRgbA(colorsGeneral.orange, 0.17),
        lightGreen: hexToRgbA(colorsGeneral.green, 0.17),
        lightRed: hexToRgbA(colorsGeneral.red, 0.17),
        lightGrey: hexToRgbA(colorsGeneral.grey, 0.17),
    };
}
if (global.theme === 'royal') {
    colorsTheme = {
        // THEME Dark
        background: colorsGeneral.themeRoyal,
        tint: ColorLuminance(colorsGeneral.blue, -0.70),
        contrast: colorsGeneral.white,
        textContrast: colorsGeneral.black,
        textPrimary: colorsGeneral.white,
        textSecondary: colorsGeneral.silver,

        lightBlue: hexToRgbA(colorsGeneral.blue, 0.17),
        lightOrange: hexToRgbA(colorsGeneral.orange, 0.17),
        lightGreen: hexToRgbA(colorsGeneral.green, 0.17),
        lightRed: hexToRgbA(colorsGeneral.red, 0.17),
        lightGrey: hexToRgbA(colorsGeneral.grey, 0.17),
    };
}
if (global.theme === 'wtf') {
    colorsTheme = {
        // THEME Dark
        background: '#cccccc',
        tint: '#aaaaaa',
        contrast: '#FFF000',
        textContrast: '#6E33FF',
        textPrimary: '#000000',
        textSecondary: '#CCCCCC',

        lightBlue: hexToRgbA(colorsGeneral.blue, 0.17),
        lightOrange: hexToRgbA(colorsGeneral.orange, 0.17),
        lightGreen: hexToRgbA(colorsGeneral.green, 0.17),
        lightRed: hexToRgbA(colorsGeneral.red, 0.17),
        lightGrey: hexToRgbA(colorsGeneral.grey, 0.17),
    };
}

const colors = { ...colorsGeneral, ...colorMutations, ...colorsTheme };

export default {
    ...colors,
};
