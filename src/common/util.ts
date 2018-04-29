const pre = 'F-';
export default {
  storageKey: {
    scrollTop: pre + 'scrollTop'
  },
  setStorage: (key: string, value: any) => {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    sessionStorage.setItem(key, value);
  },
  getStorage: (key: string) => {
    let value: any = sessionStorage.getItem(key) || '';
    if ((value.startsWith('{') && value.endsWith('}')) || (value.startsWith('[') && value.endsWith(']'))) {
      value = JSON.parse(value);
    }
    return value;
  }
};