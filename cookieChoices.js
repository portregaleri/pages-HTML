//<![CDATA[
  document.addEventListener('DOMContentLoaded', function(event) {
    window.cookieChoices && cookieChoices.showCookieConsentBar && cookieChoices.showCookieConsentBar(
        (window.cookieOptions && cookieOptions.msg) || 'İçeriği ve reklamları kişiselleştirmek, sosyal medya özellikleri sunmak ve trafiği analiz etmek için çerezler kullanıyoruz.',
        (window.cookieOptions && cookieOptions.close) || 'Kabul Ediyorum',
        (window.cookieOptions && cookieOptions.learn) || 'Ayrıntıları inceleyin',
        (window.cookieOptions && cookieOptions.link) || 'https://www.blogger.com/go/blogspot-cookies');
  });
//]]>