window.onload = window.onscroll = function() {
    var scrollY = window.scrollY;
    var logo = document.getElementById('logo');
    var nav = document.getElementById('navbar');
    var submenus = document.querySelectorAll('.submenu');

    var navHeight = nav.offsetHeight; // 현재 nav의 높이를 가져옴

    if (scrollY > 100) {
        logo.style.fontSize = '4rem';
        nav.style.height = '100px';
        nav.style.padding = '10px 20px';
    } else {
        logo.style.fontSize = '6rem';
        nav.style.height = '150px';
        nav.style.padding = '20px 20px';
    }

    // 부메뉴를 항상 nav 아래에 위치하도록 설정
    submenus.forEach(submenu => {
        submenu.style.top = `${nav.offsetHeight}px`; 
    });
};

// 창 크기 변경 시 다시 적용 (태블릿 & 데스크 환경 대응)
window.onresize = function() {
    var nav = document.getElementById('navbar');
    var submenus = document.querySelectorAll('.submenu');

    submenus.forEach(submenu => {
        submenu.style.top = `${nav.offsetHeight}px`;
    });
};


document.querySelectorAll('.navbar_logo > li > a').forEach(menu => {
    menu.addEventListener('click', function(event) {
        event.preventDefault();
        let submenu = this.nextElementSibling;
        if (submenu && submenu.classList.contains('submenu')) {
            submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
        }
    });
});



document.getElementById('search-icon').addEventListener('click', function() {
    var searchBar = document.getElementById('search-bar');
    searchBar.style.display = (searchBar.style.display === 'block') ? 'none' : 'block';
});


//네비


//컨테이너 이미지 자동슬라이드


const images = document.querySelectorAll(".image-container img");
let currentIndex = 0;

function updateImage() {
    images.forEach((img, index) => {
        img.classList.remove("active");
        if (index === currentIndex) {
            img.classList.add("active");
        }
    });
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function autoSlide() {
    nextImage();
}

setInterval(autoSlide, 3000);

//수동슬라이드 new화장품섹션
let index = 0;
const images1 = document.querySelectorAll(".slider1 img");
const slider = document.getElementById("slider1");
const totalImages = images1.length;
const visibleCount = 4;
const maxClicks = 4; // 총클릭횟수 

function nextSlide() {
    index += visibleCount;
    if (index >= totalImages) {
        index = 0;
    }
    slider.style.transform = `translateX(-${index * 25}%)`;
}



// 서브메뉴토글
document.querySelectorAll('.navbar_logo > li > a').forEach(menu => {
menu.addEventListener('click', function(event) {
event.preventDefault(); // 기본동작막기
let submenu = this.nextElementSibling;
if (submenu && submenu.classList.contains('submenu')) {
    submenu.classList.toggle('active'); // 클래스추가/삭제방식으로 변경
}
});
});

// 클릭시다른 서브메뉴 닫기
document.addEventListener('click', function(event) {
if (!event.target.closest('.navbar_logo > li')) {
document.querySelectorAll('.submenu').forEach(submenu => {
    submenu.classList.remove('active'); // 클릭시 다른메뉴 닫기
});
}
});

// 검색 아이콘 클릭시 검색바 토글
document.getElementById('search-icon').addEventListener('click', function() {
var searchBar = document.getElementById('search-bar');
searchBar.style.display = (searchBar.style.display === 'block') ? 'none' : 'block';
});

// 햄버거 메뉴클릭시 네비게이션토글
document.getElementById('menu-icon').addEventListener('click', function() {
var navMenu = document.getElementById('nav-menu'); 
navMenu.classList.toggle('active'); 
});

document.addEventListener('click', function(event) {
const menu = document.querySelector('.navbar_logo');
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('#navbar');

// 클릭된 요소가 메뉴 아이콘이 아니고,메뉴도아니면 메뉴 닫기
if (!navbar.contains(event.target) && !menu.contains(event.target)) {
menu.classList.remove('active');
}
});




//fillters
// script.js

// script.js
// 필터 버튼을 가져옵니다.
const colorButtons = document.querySelectorAll('#color-filter .filter-button');
const textureButtons = document.querySelectorAll('#texture-filter .filter-button');
const lipstickItems = document.querySelectorAll('.lipstick-item');

// 색상 버튼 클릭 시 필터링
colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedColor = button.getAttribute('data-color');
        filterLipsticks(selectedColor, null); 
    });
});

// 텍스처 버튼 클릭 시 필터링
textureButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedTexture = button.getAttribute('data-texture');
        filterLipsticks(null, selectedTexture); 
    });
});

// 색상 및 텍스처를 조합해서 필터링
function filterLipsticks(color, texture) {
    lipstickItems.forEach(item => {
        const itemColor = item.getAttribute('data-color');
        const itemTexture = item.getAttribute('data-texture');
        
        // 색상 필터가 있고, 아이템의 색상과 맞지 않으면 숨김
        const colorMatch = !color || itemColor === color;
        
        // 텍스처 필터가 있고, 아이템의 텍스처와 맞지 않으면 숨김
        const textureMatch = !texture || itemTexture === texture;
        
        // 색상과 텍스처 모두 맞아야 표시
        if (colorMatch && textureMatch) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
        
        
        if (color === 'all' || itemColor === color) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}


const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');

// 아이콘 클릭 시 검색창 표시/숨기기
searchIcon.addEventListener('click', (event) => {
    event.stopPropagation(); // 클릭 이벤트 전파 방지 /서치바 닫히지 않도록
    if (searchBar.style.display === 'block') {
        searchBar.style.opacity = 0;
        setTimeout(() => {
            searchBar.style.display = 'none';
        }, 300); // 애니메이션 후 검색창 숨기기
    } else {
        searchBar.style.display = 'block';
        setTimeout(() => {
            searchBar.style.opacity = 1;
        }, 10); // 애니메이션 시작
    }
});

// 화면의 다른 곳을 클릭하면 서치바 숨기기
document.addEventListener('click', (event) => {
    if (!searchBar.contains(event.target) && event.target !== searchIcon) {
        searchBar.style.opacity = 0;
        setTimeout(() => {
            searchBar.style.display = 'none';
        }, 300); // 애니메이션 후 검색창 숨김
    }
});

// 서치바 자체 클릭 시 서치바 닫히지 않게
searchBar.addEventListener('click', (event) => {
    event.stopPropagation(); // 서치바 클릭 시 닫히지 않도록
});







