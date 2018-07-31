const urlPath = '//localhost:3333';
export const get = (url: string) => {
  return fetch(urlPath + url, {
    method: 'post',
    credentials: 'include',
    headers: {
      accept: 'application/json'
    }
  }).then((res: any) => res.json());
};
export const post = (url: string, data: any = {}) => {
  return fetch(urlPath + url, {
    method: 'post',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res: any) => res.json());
};