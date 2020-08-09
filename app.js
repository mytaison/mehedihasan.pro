var htmlTag = document.querySelector('html');
var bodyTag = document.querySelector('body');
var navTag = document.querySelector('nav');
var footerTag = document.querySelector('footer');
var date = new Date();
var year = date.getFullYear();

// Adjusting Document Height based on different browsers' viewing area
function adjustDocumentHeightAndComponents(){
    var windowInnerHeight = window.innerHeight + 'px';
    var contentMargin = window.getComputedStyle( document.querySelector('.container .content')).margin;
    var navHeight = window.getComputedStyle(navTag).height;
    var footerHeight = window.getComputedStyle(footerTag).height;
    document.querySelector('.container').style.gridTemplateRows = `${navHeight} calc(${windowInnerHeight} - (${navHeight} + ${footerHeight}) ) ${footerHeight}`;
    document.querySelector('.container .content section').style.minheight = `calc(${windowInnerHeight} - (${navHeight} + ${footerHeight} - (${contentMargin}) * 2 )} )`;
    htmlTag.style.height = window.innerHeight + "px";
    bodyTag.style.height = window.innerHeight + "px";
}

document.onreadystatechange = function () {
    if( document.readyState == "complete" ){
        adjustDocumentHeightAndComponents()
        document.querySelector('.copyright').innerHTML = "&copy Mehedi " + year;
        // const scroll = new SmoothScroll('a[href*="#"]', {
        //     speed: 300
        // });
    }
}

window.onresize = function(){
    adjustDocumentHeightAndComponents()
}