var htmlTag = document.querySelector('html');
var bodyTag = document.querySelector('body');
var navTag = document.querySelector('nav');
var asideTag = document.querySelector('aside');
var footerTag = document.querySelector('footer');
var date = new Date();
var year = date.getFullYear();

// Adjusting Document Height based on different browsers' viewing area
function adjustDocumentHeightAndComponents(){
    let windowInnerHeight = window.innerHeight + 'px';
    let contentMargin = window.getComputedStyle( document.querySelector('.container .content')).margin;
    let navHeight = window.getComputedStyle(navTag).height;
    let footerHeight = window.getComputedStyle(footerTag).height;
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
        setTimeout(function(){aside.style.opacity = 1},200);
        document.querySelector('.menu').innerHTML = "<i class=\"fas fa-times\"></i>";
    }else{
        aside.style.opacity = 0;
        setTimeout(function(){aside.style.display = "none"},1000);
        document.querySelector('.menu').innerHTML = "<i class=\"fas fa-bars\"></i>";
    }
}
function smoothScroller ( scrollDistance , newScrollPosition , diff ){
    if( scrollDistance != 0 && diff != 0 ){
        if(diff < 2 && diff > 0) 
            diff = 3;
        else if( diff < 0 && diff > -3 )
            diff = -3;
        new Promise( (resolve,reject) => {
            if( Math.abs(scrollDistance) > Math.abs(diff) ){
                scrollDistance = scrollDistance - diff;
                newScrollPosition = newScrollPosition + diff;
            }else{
                newScrollPosition = newScrollPosition + scrollDistance;
                scrollDistance = scrollDistance - scrollDistance;
            }
            console.log("Diff: ", diff);
            console.log("New Scroll Distance: ", scrollDistance);
            console.log("New Scroll Position: ", newScrollPosition)
            document.querySelector('.content').scrollTo(0, newScrollPosition )
            resolve(scrollDistance)
        } ).then(newScrollDist => {
                // document.querySelector('.content').style.transition = "offsetTop 1s";
                if( newScrollDist != 0 ){
                    setTimeout( function(){
                        smoothScroller(newScrollDist, document.querySelector('.content').scrollTop , diff)
                    } , diff)
                }
        })
    }
    
}

function smoothScroll(scrollDist, currentScrollPosition){
    console.log("I am called");
    let diff = 400;
    let scrollDistance = scrollDist;
    let newScrollPosition = currentScrollPosition;
    diff = Math.ceil(Math.abs(scrollDistance) / diff);
    if(scrollDistance < 0)
        diff = diff * (-1)
    smoothScroller(scrollDistance, newScrollPosition , diff);
}

function scrollToSection(id){
    if(id !== "undefined"){
        id = id.replace("#",'');
        let offsetTopOfSection = document.getElementById(id).offsetTop;
        let currentScrollPosition = document.querySelector('.content').scrollTop;
        let scrollDistance = offsetTopOfSection - currentScrollPosition - 120 ;
        // console.log("Target Position: ",offsetTopOfSection);
        // console.log("Current Scroll Position", currentScrollPosition);
        // console.log("Current Distance", scrollDistance);
        smoothScroll(scrollDistance, currentScrollPosition)
        toggleAsideMenu();
    }
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
        document.querySelectorAll('.menu_items ul li').forEach( li => { 
            li.addEventListener('click',function(){ 
                scrollToSection(this.getAttribute('target'))
            })
        })
    }
}

window.onresize = function(){
    adjustDocumentHeightAndComponents()
}