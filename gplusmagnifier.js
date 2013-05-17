// ==UserScript==
// @name        Grant Google+ magnifier
// @namespace   aelys-info.fr
// @include     https://plus.google.com/*
// @include     http://plus.google.com/*
// @version     1
// ==/UserScript==
(function () {
    // Removes an attribute from all occurences of elements whose XPath is provided.
    // (All occurences of this elements are processed.)
    //
    // Example: Remove the bgcolor of all <table>:
    //          removeAttributeOfElement('bgcolor',"//table[@bgcolor]")
    //          Remove the fixed with of all tables or cells::
    //          removeAttributeOfElement('width',"//table[@width]|//td[@width]")
    function removeAttributeOfElement(attributeName,ElementXpath)
    {
        var alltags = document.evaluate(ElementXpath,document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
        for (i=0; i<alltags.snapshotLength; i++)
            alltags.snapshotItem(i).removeAttribute(attributeName);    
    }
    // Set an attribute from all occurences of elements to a specified value.
    // The previous value of this attribute is discarded.
    // (All occurences of this elements are processed.)
    //
    // Example: Set with to 80 columns on all texteareas:
    //          setAttributeOfElement('cols',80,"//textarea")
    function setAttributeOfElement(attributeName,attributeValue,ElementXpath)
    {
        var alltags = document.evaluate(ElementXpath,document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
        for (i=0; i<alltags.snapshotLength; i++)
            alltags.snapshotItem(i).setAttribute(attributeName, attributeValue)
    }

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

    function gmRemoveCommunities()
    {
        injectCSS('.Om { display: none !important;}');
    }

    var posy = 102; 

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
        window.onscroll = testScroll;
        document.onmousemove = cursorPosition;
        //setTimeout(gmModifyAttributes, 1000);
        testScroll;
        setTimeout(gmRemoveCommunities, 1000);   
        
        /*if (sypos <= 1) {
            scroll(0, 102);
        }*/


    }
    catch (e)
    {
        alert("UserScript exception:\n" + e);
    }
})();