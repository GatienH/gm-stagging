class HeaderBar extends HTMLElement {
  constructor() {
    super();
  }  

  connectedCallback() {
    const header = document.createElement('header');

    const headerDiv = document.createElement('div');
    headerDiv.setAttribute('id', 'header');

    const leftItems = document.createElement('div')
    leftItems.setAttribute('class', 'left-items');
    leftItems.textContent = '.left-items';

    const brand = document.createElement('div');
    brand.setAttribute('id', 'brand');
    brand.textContent = '#brand';

    const rightItems = document.createElement('div');
    rightItems.setAttribute('class', 'right-items');
    rightItems.textContent = '.right-items';

    const lgToggle = document.createElement('div');
    lgToggle.setAttribute('class', 'lg-toggle');
    lgToggle.textContent = '.lg-toggle';

    const burger = document.createElement('div');
    burger.setAttribute('id', 'burger');
    burger.setAttribute('class', 'menu-toggle');
    burger.innerHTML = `
      #burger
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>
    `;

    const nav = document.createElement('nav');
    nav.setAttribute('class', 'hidden');

    const closeMenu = document.createElement('div');
    closeMenu.setAttribute('class', 'menu-toggle');
    closeMenu.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    `;

    const navList = document.createElement('ul');
    
    // check templates and slots for li / a creation
    const navElmt1 = document.createElement('li');
    const navLink1 = document.createElement('a');
    navLink1.setAttribute('href', '#1');
    const navElmt2 = document.createElement('li');
    const navLink2 = document.createElement('a');
    navLink2.setAttribute('href', '#2');
    const navElmt3 = document.createElement('li');
    const navLink3 = document.createElement('a');
    navLink3.setAttribute('href', '#3');
    const navElmt4 = document.createElement('li');
    const navLink4 = document.createElement('a');
    navLink4.setAttribute('href', '#4');
    const navElmt5 = document.createElement('li');
    const navLink5 = document.createElement('a');
    navLink5.setAttribute('href', '#5');
    const navElmt6 = document.createElement('li');
    const navLink6 = document.createElement('a');
    navLink6.setAttribute('href', '#6');

    // FOR NAV NAMING UPDATES SEE BELOW

    navLink1.textContent = 'Page 1';
    navLink2.textContent = 'Page 2';
    navLink3.textContent = 'Page 3';
    navLink4.textContent = 'Page 4';
    navLink5.textContent = 'Page 5';
    navLink6.textContent = 'Page 6';

    // FOR NAV NAMING UPDATES SEE ABOVE

    document.body.prepend(header);
    
    header.appendChild(headerDiv);
    headerDiv.appendChild(leftItems);
    leftItems.appendChild(brand);

    headerDiv.appendChild(rightItems);
    rightItems.appendChild(lgToggle);
    rightItems.appendChild(burger);

    headerDiv.appendChild(nav);
    nav.appendChild(closeMenu);
    nav.appendChild(navList);

    navList.appendChild(navElmt1).appendChild(navLink1);
    navList.appendChild(navElmt2).appendChild(navLink2);
    navList.appendChild(navElmt3).appendChild(navLink3);
    navList.appendChild(navElmt4).appendChild(navLink4);
    navList.appendChild(navElmt5).appendChild(navLink5);
    navList.appendChild(navElmt6).appendChild(navLink6);

    const menuToggles = document.querySelectorAll(".menu-toggle");

    menuToggles.forEach( e => {
      e.addEventListener('click', e => {
        this.menuToggle();
      });
    });
  }

  menuToggle() {
    const html = document.querySelector("html");
    const body = document.querySelector("body");
    const nav = document.querySelector("nav");
    html.classList.toggle("overflow-y-hiden");
    body.classList.toggle("overflow-y-hiden");
    nav.classList.toggle("hidden");
  }
}

customElements.define('header-bar', HeaderBar);
