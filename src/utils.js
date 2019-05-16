const colors = require('colors');

const presetKey = {
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red',
};

const handleColor = (presetObj) => {
  const log = {};
  Object.keys(presetObj).forEach((type) => {
    const color = presetObj[type];
    log[type] = (str) => {
      const colorStr = type === 'normal' ? str : colors[color](str);
      console.log(colorStr);
    };
  });
  return log;
};

exports.log = handleColor(presetKey);
