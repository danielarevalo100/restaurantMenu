export const numberFormat = (amount, decimalCount = 8, decimal = '.', thousands = ',') => {
  const negativeSign = amount < 0 ? '-' : '';
  let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
  let j = (i.length > 3) ? i.length % 3 : 0;
  let formatted = negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : '');
  return formatted;
}

export const nFormatter = (num, digits = 1) => {
  if( !num ) return ''
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup.slice().reverse().find((item) => {
    return num >= item.value;
  });
  return numberFormat((num / item.value).toFixed(digits).replace(rx, '$1'), 2) + ' ' + item.symbol;
}

export const ordinalSuffix = (i, onlySuffix = false) => {
  let j = i % 10, k = i % 100;
  if( j == 1 && k != 11 ) {
    if( onlySuffix == true ) return 'st';
    return i + 'st';
  }
  if( j == 2 && k != 12 ) {
    if( onlySuffix == true ) return 'nd';
    return i + 'nd';
  }
  if( j == 3 && k != 13 ) {
    if( onlySuffix == true ) return 'rd';
    return i + 'rd';
  }
  if( onlySuffix == true ) return 'th';
  return i + 'th';
}
