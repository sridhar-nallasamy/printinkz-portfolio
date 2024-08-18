function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      ml: -4,
      mt: -2,
      zIndex: 10,
      position: 'absolute',
      minHeight: '100px',
      minWidth: '100px',
      fontSize: 'xx-large',
      border: '2px black solid',
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

export { stringAvatar, stringToColor };
