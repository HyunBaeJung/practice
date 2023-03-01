const bodyContainer = document.querySelector(".container");
const tabButtons = bodyContainer.querySelector(".tabs");
const tabContents = bodyContainer.querySelector(".contents");



tabButtons.addEventListener("click",handleTabButtonsEvent);

function handleTabButtonsEvent(event){
            
    //click event 대상 element 검색
    const targetId = event.target.dataset.tab;
    const targetElement = event.target;
    const targetContents = bodyContainer.querySelector(`#${targetId}`);

    const buttonList = tabButtons.querySelectorAll("div li");

    //tab-list current class 초기화.
    for (const tabButton of buttonList){
        tabButton.classList.remove("current");
    }
    //tab-contents current class 초기화.
    for (const tabContent of tabContents.children){
        tabContent.classList.remove("current");
    }

    targetElement.classList.add("current");
    targetContents.classList.add("current");

} 