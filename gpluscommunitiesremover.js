// ==UserScript==
// @name        Google+ Communities remover
// @namespace   aelys-info.fr
// @include     https://plus.google.com/*
// @include     http://plus.google.com/*
// @version     1
// ==/UserScript==
(function () {
    function injectCSS(cssdata)
    {
        head = document.getElementsByTagName("head")[0];
        style = document.createElement("style");
        style.setAttribute("type", 'text/css');
        style.innerHTML = cssdata;
        head.appendChild(style);
    }

    var posy = 102;

    function gmRemoveCommunities()
    {
        injectCSS('.Om { display: none !important;}');
    }

    try
    {
        setTimeout(gmRemoveCommunities, 500);
    }
    catch (e)
    {
        alert("UserScript exception:\n" + e);
    }
 
})();
