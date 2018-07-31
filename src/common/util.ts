const pre = 'F-';
const isEmptyObject = (obj: Object) => JSON.stringify(obj) === '{}';
const utils = {
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
  },
  formatJson: (json: any, options: any) => {
    let reg = null,
      formatted = '',
      pad = 0,
      PADDING = '    ';
      options = options || {};
      options.newlineAfterColonIfBeforeBraceOrBracket = !!options.newlineAfterColonIfBeforeBraceOrBracket;
      options.spaceAfterColon = !!options.spaceAfterColon;
    if (typeof json !== 'string') {
      json = JSON.stringify(json);
    } else {
      json = JSON.parse(json);
      json = JSON.stringify(json);
    }
    reg = /([\{\}])/g;
    json = json.replace(reg, '\r\n$1\r\n');
    reg = /([\[\]])/g;
    json = json.replace(reg, '\r\n$1\r\n');
    reg = /(\,)/g;
    json = json.replace(reg, '$1\r\n');
    reg = /(\r\n\r\n)/g;
    json = json.replace(reg, '\r\n');
    reg = /\r\n\,/g;
    json = json.replace(reg, ',');
    if (!options.newlineAfterColonIfBeforeBraceOrBracket) {
      reg = /\:\r\n\{/g;
      json = json.replace(reg, ':{');
      reg = /\:\r\n\[/g;
      json = json.replace(reg, ':[');
    }
    if (options.spaceAfterColon) {
      reg = /\:/g;
      json = json.replace(reg, ':');
    }
    (json.split('\r\n')).forEach(function (node: any, index: any) {
      let i = 0,
        indent = 0,
        padding = '';

      if (node.match(/\{$/) || node.match(/\[$/)) {
        indent = 1;
      } else if (node.match(/\}/) || node.match(/\]/)) {
        if (pad !== 0) {
          pad -= 1;
        }
      } else {
        indent = 0;
      }
      for (i = 0; i < pad; i++) {
        padding += PADDING;
      }
      formatted += padding + node + '\r\n';
      pad += indent;
    });
    return formatted;
  },
  getQueryString: (params: any) => {
    let str = '';
    if (params && !isEmptyObject(params)) {
      str += '?';
      for (const p in params) {
        str += `${p}=${params[p]}&`
      }
      str = str.slice(0, -1);
    }
    return str;
  },
  getParamsString: (params: any) => {
    let str = '';
    if (params && !isEmptyObject(params)) {
      for (const p in params) {
        str += `/${params[p]}`
      }
    }
    return str;
  }
};
export default {
  ...utils,
  isEmptyObject,
};