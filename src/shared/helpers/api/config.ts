export const baseUrl = 'https://nitha-kids-server-v9sor.ondigitalocean.app/api/';
// export const baseUrl = 'http://0.0.0.0:80/api/';
export const baseHeaders = function () {
  let token = '';
  if (typeof window !== "undefined") {
    if (window.localStorage) {
      // @ts-ignore
      const ls = JSON.parse(window.localStorage.getItem('nithaAuth'));
      token = ls.token;
    }
  }
  return {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
  };
};
export const unAuthedBaseHeaders = function () {
    return {
        'Content-Type': 'application/json',
    };
};
