// ==UserScript==
// @name        Grant Google+ magnifier
// @namespace   aelys-info.fr
// @include     https://plus.google.com/*
// @include     http://plus.google.com/*
// @version     1
// ==/UserScript==
(function () {
        // Inject your own CSS in the page.
        // Example: Do not underline link:
        //          injectCSS("a{text-decoration: none;}")
        function injectCSS(cssdata)
        {
            head = document.getElementsByTagName("head")[0];
            style = document.createElement("style");
            style.setAttribute("type", 'text/css');
            style.innerHTML = cssdata;
            head.appendChild(style);
        }
        
        function scrollDown()
        {
            var sypos = document.body.style.top;
            if (sypos <= 1) {
                scroll(0, 102);
            }
        }
     
        try
        {
            setInterval(scrollDown,5000);
            injectCSS('.Om { display: none !important;}');
            
        }
        catch (e)
        {
            alert("UserScript exception:\n" + e);
        }
     
    })();