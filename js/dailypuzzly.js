function csoDailyPuzzle(e) { 
    var t = document.getElementById("csoDpCon"), l = document.createElement("iframe"); 
    l.id = "csoDp", l.style.border = "none", l.style.width = "100%", l.style.minWidth = "300px"; 
    var d = null != e.width ? e.width : 420; isNaN(d) ? d = 420 : (300 > d && (d = 300), d > 660 && (d = 660)), l.style.maxWidth = d + "px", l.style.height = d + 60 + "px"; var i = null != e.boardStyle ? e.boardStyle : "default", o = null != e.pieceStyle ? e.pieceStyle : "uscf", s = "true"; e.showCoordinates === !1 && (s = "false"); 
    var n = "https://www.chessstrategyonline.com/widgets/daily-puzzle/" + i + "/" + o + "?coords=" + s + "&width=" + (d - 20); l.setAttribute("src", n), t.parentNode.replaceChild(l, t), window.addEventListener("resize", function () { var e = document.getElementById("csoDp"), t = e.offsetWidth; e.style.height = t + 60 + "px" }) } 
    
function csoPlayVsComputer(e) { 
    var t = document.getElementById("csoPvcCon"), l = document.createElement("iframe"); 
    l.id = "csoPvc", l.style.border = "none", l.style.width = "100%", l.style.minWidth = "300px"; 
    var d = null != e.width ? e.width : 420; isNaN(d) ? d = 420 : (300 > d && (d = 300), d > 660 && (d = 660)), l.style.maxWidth = d + "px", l.style.height = d + 90 + "px"; 
    var i = null != e.boardStyle ? e.boardStyle : "default", o = null != e.pieceStyle ? e.pieceStyle : "uscf", s = "true"; e.showCoordinates === !1 && (s = "false"); 
    var n = "https://www.chessstrategyonline.com/widgets/play-vs-computer/" + i + "/" + o + "?coords=" + s + "&width=" + (d - 20); 
    l.setAttribute("src", n), t.parentNode.replaceChild(l, t), window.addEventListener("resize", 
    
    function () { var e = document.getElementById("csoPvc"), t = e.offsetWidth; e.style.height = t + 90 + "px" }) 

}