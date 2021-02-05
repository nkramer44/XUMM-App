/**
 * App Theme - Colors
 */

/* eslint-disable spellcheck/spell-checker */

/*
function ColorLuminance(hex, lum) {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
  }
  lum = lum || 0;

  // convert to decimal and change luminosity
  var rgb = "#", c, i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i*2,2), 16);
    c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
    rgb += ("00"+c).substr(c.length);
  }
  return rgb;
}
*/

function hexToRgbA(hex, opacity){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length === 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',' + opacity + ')';
    }
    throw new Error('Bad Hex');
}

var  colorsTheme = {};

const colorsGeneral = {
    blue: '#3052FF',
    orange: '#F8BF4C',
    green: '#3BDC96',
    red: '#FF5B5B',

    white: 'white',
    black: 'black',

    grey: '#EDEFF6',

    transparent: 'transparent',
    transparentBlack: 'rgba(0, 0, 0, 0.7)',

    brandBithomp: '#3fa3b5',
    brandXrplns: '#3767CE',
    brandXrpscan: '#004a7c',
    brandPayid: '#38D39F',
};

const colorMutations = {
    // testBlue: ColorLuminance(colorsGeneral.blue, -0.5),
    lightBlue: hexToRgbA(colorsGeneral.blue, 0.06),
    lightOrange: hexToRgbA(colorsGeneral.orange, 0.06),
    lightGreen: hexToRgbA(colorsGeneral.green, 0.06),
    lightRed: hexToRgbA(colorsGeneral.red, 0.06),
    lightGrey: hexToRgbA(colorsGeneral.grey, 0.06),
}

if(global.theme === 'light'){
    colorsTheme = {
        white: '#FFFFFF',
        black: '#000000',
        light: '#F8FAFD',
        // grey: '#EDEFF6',
        // grey: '#606885',
        // greyDark: '#848DB8',
        // grey: '#888EA3',
        greyDark: '#606885',
        // greyDark: 'red',
    };
}
if(global.theme === 'dark'){
    colorsTheme = {
        // THEME Dark
        themeDark: '#000000',
        themeDarkText: '#ffffff',

        white: '#000000',
        black: '#ffffff',
        light: '#181A21',
        grey: '#262934',
        greyDark: '#222530',
    };
}
if(global.theme === 'moonlight'){
    colorsTheme = {
        // THEME Moonlight
        themeMoonlight: '#262934',
        themeMoonlightText: '#848CB8',

        // white: ColorLuminance(colorsGeneral.red, -0.5),
        // black: hexToRgbA(colorsGeneral.red, 1),

        white: '#181A21',
        black: '#ffffff',
        light: '#232630',
        grey: '#262934',
        greyDark: '#222530',
        // greyDark: 'red',

        // lightGrey: '#0F1114',
        // lightBlue: '#F0F3FF',
        // lightOrange: '#FFF9ED',
        // lightOrange: 'rgba(248, 191, 76, 0.06)',
        // lightOrange: 'rgba(' + colorsGeneral.orange + ', 0.5)',
        // lightGreen: '#E6FAF2',
        // lightRed: '#FFF9F9',
    };
}
if(global.theme === 'royal'){
    colorsTheme = {
        // THEME Dark
        themeDark: '#000000',
        themeDarkText: '#ffffff',
        white: '#030B36',
        black: '#ffffff',
        light: hexToRgbA('#606885', 0.22),
    };
}

var colors = { ...colorsGeneral, ...colorMutations, ...colorsTheme }

export default {
    ...colors
};
