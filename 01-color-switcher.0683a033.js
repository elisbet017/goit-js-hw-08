const t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};let e=null;function n(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}function o(t,e){t.setAttribute("disabled",""),e.removeAttribute("disabled","")}t.btnStop.setAttribute("disabled",""),t.btnStart.addEventListener("click",(function(){document.body.style.backgroundColor=n(),e=setInterval((()=>{document.body.style.backgroundColor=n()}),1e3),o(t.btnStart,t.btnStop)})),t.btnStop.addEventListener("click",(function(){clearInterval(e),o(t.btnStop,t.btnStart)}));
//# sourceMappingURL=01-color-switcher.0683a033.js.map