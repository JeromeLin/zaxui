import Color from 'color';

const setPrimaryColor = (color) => {
  document.documentElement.style.setProperty('--theme-primary', color);
  document.documentElement.style.setProperty('--theme-primary-dark', Color(color).darken(0.05));
  document.documentElement.style.setProperty('--button-primary-shadow-color', Color(color).alpha(0.5).lighten(0.0));
};

export default setPrimaryColor;
