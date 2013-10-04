// ==UserScript==
// @name        Google+ magnifier
// @namespace   aelys-info.fr
// @include     https://plus.google.com/*
// @include     http://plus.google.com/*
// @version     2
// ==/UserScript==
(function () {

    function cursorPosition(event)
    {
        posy = event.clientY;
        var scpos = document.documentElement.scrollTop;
        if ((scpos == 0) && (posy > 100)) {
            scroll(0, 102);
        }
    }

    function testScroll(event)
    {
        var sypos = document.documentElement.scrollTop;
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
    }
    catch (e)
    {
        alert("UserScript exception:\n" + e);
    }
 
})();
