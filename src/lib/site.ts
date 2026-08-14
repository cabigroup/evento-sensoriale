export const SITE_URL = "https://uniqueparfume.com";
export const SITE_NAME = "Unique Parfume";
export const SITE_TITLE = "Unique Parfume - Profumi personalizzati come omaggio per eventi";
export const SITE_DESCRIPTION =
  "Fragranze personalizzate come omaggio memorabile per aperture, lanci, matrimoni e ricorrenze. Un profumo che resta. Un evento che non si dimentica.";
export const OG_IMAGE = `${SITE_URL}/og-image.jpeg`;

// Data di ultima revisione dei documenti legali (privacy e cookie policy):
// va aggiornata a ogni modifica sostanziale dei testi.
export const LEGAL_UPDATED_AT = "14 agosto 2026";

export const KLAVIYO_COMPANY_ID = "XG8Hu5";
export const KLAVIYO_SRC = `https://static.klaviyo.com/onsite/js/${KLAVIYO_COMPANY_ID}/klaviyo.js?company_id=${KLAVIYO_COMPANY_ID}`;

// Snippet ufficiale Klaviyo: inizializza window.klaviyo (coda proxy) prima che
// klaviyo.js sia caricato, cosi le chiamate fatte subito non vanno perse.
export const KLAVIYO_INIT_SNIPPET = `!function(){if(!window.klaviyo){window._klOnsite=window._klOnsite||[];try{window.klaviyo=new Proxy({},{get:function(n,i){return"push"===i?function(){var n;(n=window._klOnsite).push.apply(n,arguments)}:function(){for(var n=arguments.length,o=new Array(n),w=0;w<n;w++)o[w]=arguments[w];var t="function"==typeof o[o.length-1]?o.pop():void 0,e=new Promise((function(n){window._klOnsite.push([i].concat(o,[function(i){t&&t(i),n(i)}]))}));return e}}})}catch(n){window.klaviyo=window.klaviyo||[],window.klaviyo.push=function(){var n;(n=window._klOnsite).push.apply(n,arguments)}}}}();`;
