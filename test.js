var restoreIpAddresses = function (s) {
  const resList = [],
    list = [];
  if (s.length < 4) return resList;

  copyAddress(s, 0, 3, list, resList);
  return resList;
};

const copyAddress = function (str, start, end, list, resList) {
  if (list.length === 4) {
    if (isValid(list, str)) {
      const str = list.slice().join('.');
      if (!resList.includes(str)) resList.push(str);
    }
    return;
  }

  for (let i = start; i < end && i < str.length; i++) {
    const curStr = str.slice(start, i + 1);
    if (curStr != null) {
      list.push(Number.parseInt(curStr));
      copyAddress(str, i + 1, i + 4, list, resList);
      list.pop();
    }
  }
};

const isValid = (list, str) => {
  const filterList = list.filter((item) => item <= 255);
  return filterList.join('').length === str.length;
};

console.log(restoreIpAddresses('25525511135'));
