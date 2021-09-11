export const isDev = () => {
  return window.location.hostname === 'localhost' ? true : false;
}

export const shuffleArray = (array) => {
  for( var i = array.length - 1; i > 0; i-- ) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

export const languages = () => {
  return ['en', 'de', 'es', 'fr', 'id', 'it', 'ja', 'ko', 'pt', 'ru', 'th', 'tr', 'vi', 'zh-CN'];
}

export const getFlag = (locale) => {
  return { 'en': '🇺🇲', 'de': '🇩🇪', 'es': '🇪🇸', 'fr': '🇫🇷', 'id': '🇮🇩', 'it': '🇮🇹', 'ja': '🇯🇵', 'ko': '🇰🇷', 'pt': '🇵🇹', 'ru': '🇷🇺', 'th': '🇹🇭', 'tr': '🇹🇷', 'vi': '🇻🇳', 'zh-CN': '🇨🇳' }[locale];
}

export const getCountryFromLocale = (locale) => {
  if( !locale ) return 'US';
  return locale.split('_')[1];
}

export const getLanguage = () => {
  var locale = window.navigator.userLanguage || window.navigator.language;
  locale = locale.substring(0, 2);
  switch (locale) {
  case 'en':
    return 'en';
  case 'es':
    return 'es';
  case 'fr':
    return 'fr';
  case 'pt':
    return 'pt';
  case 'ja':
    return 'ja';
  case 'ko':
    return 'ko';
  case 'zh':
    return 'zh';
  case 'ar':
    return 'ar';
  default:
    return 'en';
  }
}

export const bgColors = [
  'linear-gradient(180deg, rgba(209,226,250,1) 0%, rgba(109,162,237,1) 100%)',
  'linear-gradient(0deg, #d1e2fa, #fbf8ff )',
  'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(234,243,255,1) 100%)'
]

export const scrollTo = (pos, time) => {
  let currentPos = Math.abs(window.customPageY);
  let start = null;
  if( time == null ) time = 500;
  pos = +pos, time = +time;
  const elem = document.getElementById('app');
  elem?.requestAnimationFrame(function step(currentTime) {
    start = !start ? currentTime : start;
    let progress = currentTime - start;
    if ( currentPos < pos ) {
      elem.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
    } else {
      elem.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
    }
    if ( progress < time ) {
      elem.requestAnimationFrame(step);
    } else {
      elem.scrollTo(0, pos);
    }
  });
}
