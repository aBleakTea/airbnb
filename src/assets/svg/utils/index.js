function styleStrToObject(str) {
  return str.split(';').reduce((acc, style) => {
    const [key, value] = style.split(':');
    if (key && value) {
      const camelCaseKey = key
        .trim()
        .replace(/-([a-z])/g, (match, p1) => p1.toUpperCase());
      acc[camelCaseKey] = value.trim();
    }
    return acc;
  }, {});
}

export default styleStrToObject;
