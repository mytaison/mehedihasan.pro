var htmlTag = document.querySelector('html');
var bodyTag = document.querySelector('body');
var navTag = document.querySelector('nav');
var asideTag = document.querySelector('aside');
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
    asideTag.style.top = `${navHeight}`;
    asideTag.style.height = `calc(${window.innerHeight}px - ${navHeight})`;
}

function toggleAsideMenu(){
    let aside = document.querySelector('aside');
    let visibility = window.getComputedStyle(aside).display;
    if( visibility == "none" ){
        aside.style.display = "flex";
        document.querySelector('.menu').innerHTML = "<i class=\"fas fa-times\"></i>";
    }else{
        aside.style.display = "none";
        document.querySelector('.menu').innerHTML = "<i class=\"fas fa-bars\"></i>";
    }
}

function scrollToSection(){
    alert("HI");
}

document.onreadystatechange = function () {
    if( document.readyState == "complete" ){
        // adjusting heights
        adjustDocumentHeightAndComponents()
        // detecting copyright year
        document.querySelector('.copyright').innerHTML = "&copy Mehedi " + year;
        // adding menu icon even
        document.querySelector('.menu').addEventListener('click',toggleAsideMenu)
        // adding event to menu items
        document.querySelectorAll('.menu_items ul li').forEach( li => { li.addEventListener('click',scrollToSection) })
    }
}

window.onresize = function(){
    adjustDocumentHeightAndComponents()
}