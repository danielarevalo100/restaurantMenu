export const setCookie = (name, value) => {
  document.cookie = name + '=' + (value || '') + '; path=/ ; domain='+window.location.hostname+';secure';
}

export const getCookie = (name) => {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export const deleteCookie = (name) => {
  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/ ; domain='+window.location.hostname+';secure';
}
