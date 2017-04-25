/**
 * Snifferjs https://github.com/wilddeer/Sniffer
 * @Ausir 2017/3/25
 * this plugin will add class at html class browser name and major version (prefix v word)
 * example <html class="chrome v57"></html>
 * and you can defined what version is outdate then kick to outdate browser
 * go to github find all of the browser name .
 */
const Sniff = process.BROWSER_BUILD ? require('snifferjs') : '';

if (process.BROWSER_BUILD) {
  const sniff = Sniff(window.navigator.userAgent);
  window.document.querySelector('html').className += `${sniff.browser.name} v${sniff.browser.majorVersion}`;
  switch (sniff.browser.name) {
    case 'ie':
      if (sniff.browser.majorVersion < 10) window.location.href = 'outdatebroswer.html';
      break;
    case 'safari':
      if (sniff.browser.majorVersion < 7) window.location.href = 'outdatebroswer.html';
      break;
    default :
      break;
  }
}
