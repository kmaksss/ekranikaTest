export default function Tabs(options){

	let tabs = document.querySelector(options.el);
	let initCalled = false;
	let tabNavigation = tabs.querySelector(".c-tabs-nav");
	let tabNavigationLinks = tabs.querySelectorAll(".c-tabs-nav__link");
	let tabContentContainers = tabs.querySelectorAll(".c-tab");
	let marker = options.marker ? createNavMarker() : false;
	let activeIndex = 0;

  function init(){
		if (!initCalled){
			initCalled = true;

			for (let i = 0; i < tabNavigationLinks.length; i++){
    			let link = tabNavigationLinks[i];
    			clickHandlerSetup(link, i)
    		}

    		if (marker){
    			setMarker(tabNavigationLinks[activeIndex]);
    		}
		}
	}

	function clickHandlerSetup(link, index){
    	link.addEventListener("click", function(e){
    		e.preventDefault();
    		goToTab(index);
    	})
    }

    function goToTab(index){
    	if (index >= 0 && index != activeIndex && index <= tabNavigationLinks.length){
    		tabNavigationLinks[activeIndex].classList.remove('is-active');
    		tabNavigationLinks[index].classList.add('is-active');

    		tabContentContainers[activeIndex].classList.remove('is-active');
    		tabContentContainers[index].classList.add('is-active');

    		if (marker){
    			setMarker(tabNavigationLinks[index]);
    		}

    		activeIndex = index;
    	}
    }

    function createNavMarker(){
    	let marker = document.createElement("div");
    	marker.classList.add("c-tab-nav-marker");
    	tabNavigation.appendChild(marker);
    	return marker;
    }

    function setMarker(element){
        marker.style.left = element.offsetLeft +"px";
        marker.style.width = element.offsetWidth + "px";
    }

    return {
    	init: init,
    	goToTab: goToTab
    }
}