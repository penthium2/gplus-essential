// ==UserScript==
// @name        Google+ magnifier
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

    

    function cursorPosition(event)
    {
        posy = event.clientY;
        if (posy > 100) {
            scroll(0, 102);
        }
    }

    function testScroll(event)
    {
        sypos = document.documentElement.scrollTop;
        if ((sypos == 0) && (posy > 100)) {
            scroll(0, 102);
        }
    }

    try
    {
        testScroll;
        window.onscroll = testScroll;
        document.onmousemove = cursorPosition;
        setTimeout(testScroll, 500); 
        setTimeout(gmRemoveCommunities, 500);
    }
    catch (e)
    {
        alert("UserScript exception:\n" + e);
    }
 
})();