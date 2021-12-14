import { replace } from 'lodash';
import numeral from 'numeral';

// ----------------------------------------------------------------------

export function fCurrency(number) {
  return numeral(number).format(Number.isInteger(number) ? '$0,0' : '$0,0.00');
}

export function formatCurrency(e) {
  const value = numeral(e.target.value).format('0,0');
  e.target.value = value;
  return e;
}

export function formatPercent(e) {
  const value = numeral(e.target.value).format('0.0%');
  e.target.value = value;
  return e;
}

export function formatNumber(e) {
  const value = numeral(e.target.value).format();
  e.target.value = value;
  return e;
}

export function fPercent(number) {
  return numeral(number / 100).format('0.0%');
}

export function fNumber(number) {
  return numeral(number).format();
}

export function fShortenNumber(number) {
  return replace(numeral(number).format('0.00a'), '.00', '');
}

export function fData(number) {
  return numeral(number).format('0.0 b');
}
