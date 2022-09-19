// HAMBURGER MENU

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

const showMenu = () => {
    menu.classList.toggle('showmenu');
};

hamburger.addEventListener('click', showMenu);

// MENU BUTTONS

const homeButton = document.getElementById('home');
const tourButton = document.getElementById('tour');
const aboutButton = document.getElementById('about');
const whoButton = document.getElementById('who');
const historyButton = document.getElementById('history');
const performanceButton = document.getElementById('performance');
const membersButton = document.getElementById('members');
const tavenuButton = document.getElementById('tavenu');
const photoButton = document.getElementById('photos');
const contactButton = document.getElementById('contact');
const privacyButton = document.getElementById('privacy');

function clearMenu() {
    homeButton.classList.remove('active');
    tourButton.classList.remove('active');
    aboutButton.classList.remove('active');
    photoButton.classList.remove('active');
    contactButton.classList.remove('active');
    privacyButton.classList.remove('active');
};


// SLIDESHOW

const main = document.getElementById('main');

function makeSlideshow() {
    const newSlideshow = document.createElement('div');
    newSlideshow.classList.add('slideshow');
    for(i=0; i<slideData.length; i++) {
        const newSlide = document.createElement('div');
        newSlide.classList.add('slideshow__mySlides');
        newSlide.classList.add('fade');
        const newImg = document.createElement('img');
        newImg.src = slideData[i].photo;
        newSlide.appendChild(newImg);
        const newTitle = document.createElement('div');
        newTitle.classList.add('slideshow__mySlides--title');
        newTitle.innerText = slideData[i].title;
        newSlide.appendChild(newTitle);
        const newText = document.createElement('div');
        newText.classList.add('slideshow__mySlides--text');
        newText.innerText = slideData[i].text;
        newSlide.appendChild(newText);
        newSlideshow.appendChild(newSlide);
    };
    main.appendChild(newSlideshow);
};

makeSlideshow();

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slideshow__mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    };
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    };  
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); // Change image every 5 seconds
};


// HOMEGRID

function makeHomegrid() {
    const newGrid = document.createElement('div');
    newGrid.classList.add('homegrid');
    for(i=0; i<3; i++) {
        const newBlock = document.createElement('div');
        newBlock.classList.add('homegrid__block');
        const newImg = document.createElement('img');
        newImg.src = gridData[i].photo;
        newBlock.appendChild(newImg);
        const newTitle = document.createElement('div');
        newTitle.classList.add('homegrid__block--title');
        newTitle.innerText = gridData[i].title;
        newBlock.appendChild(newTitle);
        const newSub = document.createElement('div');
        newSub.classList.add('homegrid__block--sub');
        newSub.innerText = gridData[i].sub;
        newBlock.appendChild(newSub);
        const newButton = document.createElement('div');
        newButton.classList.add('homegrid__block--button');
        newButton.id = gridData[i].id;
        newButton.innerText = gridData[i].button;
        newBlock.appendChild(newButton);
        newGrid.appendChild(newBlock);
    };
    main.appendChild(newGrid);  
    const tourbtn = document.getElementById('tourbtn');
    tourbtn.addEventListener('click', makeTourschema);
    const whobtn = document.getElementById('whobtn');
    whobtn.addEventListener('click', makeWhoPage);
    const membersbtn = document.getElementById('membersbtn'); 
    membersbtn.addEventListener('click', makeMusicians);     
};

makeHomegrid();


// HOME BUTTON

function makeHomepage() {
    clearMenu();
    homeButton.classList.add('active');
    main.innerHTML = "";
    makeSlideshow();
    let slideIndex = 0;
    showSlides();
    makeHomegrid();
};

homeButton.addEventListener('click', makeHomepage);


// TOUR BUTTON

function makeTourschema() {
    clearMenu();
    tourButton.classList.add('active');
    main.innerHTML = "";
};

tourButton.addEventListener('click', makeTourschema);


// WIE ZIJN WIJ

function makeWhoPage() {
    clearMenu();
    aboutButton.classList.add('active');
    main.innerHTML = "";
};

whoButton.addEventListener('click', makeWhoPage);


// GESCHIEDENIS

function makeHistory() {
    clearMenu();
    aboutButton.classList.add('active');
    main.innerHTML = "";
};

historyButton.addEventListener('click', makeHistory);


// OPTREDENS

function makePerformance() {
    clearMenu();
    aboutButton.classList.add('active');
    main.innerHTML = "";
};

performanceButton.addEventListener('click', makePerformance);


// MUZIKANTEN

function makeMusicians() {
    clearMenu();
    aboutButton.classList.add('active');
    main.innerHTML = "";
};

membersButton.addEventListener('click', makeMusicians);


// TAVENU

function makeTavenu() {
    clearMenu();
    aboutButton.classList.add('active');
    main.innerHTML = "";
};

tavenuButton.addEventListener('click', makeTavenu);


// FOTO's

function makePhotoPage() {
    clearMenu();
    photoButton.classList.add('active');
    main.innerHTML = "";
};

photoButton.addEventListener('click', makePhotoPage);


// CONTACT

function makeContactPage() {
    clearMenu();
    contactButton.classList.add('active');
    main.innerHTML = "";
};

contactButton.addEventListener('click', makeContactPage);
const footerContactLink = document.getElementById('footercontact');
footerContactLink.addEventListener('click', makeContactPage);


// PRIVACY

function makePrivacyPage() {
    clearMenu();
    privacyButton.classList.add('active');
    main.innerHTML = "";
    const newArticle = document.createElement('article');
    newArticle.classList.add('privacy');
    const newDiv = document.createElement('div');
    newDiv.classList.add('privacy__title');
    newDiv.innerText = "Privacy beleid";
    newArticle.appendChild(newDiv);
    for(i=0; i<2; i++) {
        const newSection = document.createElement('section');
        newSection.classList.add('privacy__section');
        newSection.innerText = privacyData[i];
        newArticle.appendChild(newSection);
    };
    const newUl = document.createElement('ul');
    newUl.classList.add('privacy__list');
    for(i=0; i<6; i++) {
        const newLi = document.createElement('li');
        newLi.innerText = privacyData[2][i];
        newUl.appendChild(newLi);
    };
    newArticle.appendChild(newUl);
    const lastSection = document.createElement('section');
    lastSection.classList.add('privacy__section');
    lastSection.innerText = privacyData[3];
    newArticle.appendChild(lastSection);
    main.appendChild(newArticle);    
};

privacyButton.addEventListener('click', makePrivacyPage);
