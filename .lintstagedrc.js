// https://www.npmjs.com/package/lint-staged
module.exports = {
  'src/**/*.{js,ts,tsx,vue}': ['prettier --write','eslint --cache --fix'],
  'src/**/*.{vue,htm,html,css,sss,less,scss}': ['stylelint --fix'],
};
