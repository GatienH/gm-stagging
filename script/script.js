class HeaderBar extends HTMLElement {
  connectedCallback() {
    // *********************************************
    // ALL ABOUT LANGUAGES AND TRANSLATIONS IS BELOW
    // *********************************************
    
      // Languages names and their related languages subfolders names have to be the same (except for the main one (first one in lgs)
      // const lgs = ['default_lg', 'sub_lg1'] 

      const lgs = ['fr', 'en'];

      // The position of each element in the pages array affects their displaying order inside the navigation menu
      // const pages = [
      //   ['page_attribute_value', 
      //      ['page_filename_fr.html', 'nav_page_name_fr'], ['page_filename_en.html', nav_page_name_en']
      // ]

      const pages = [
        ['home',
          ['index.html', 'Accueil'], ['index.html', 'Home page']
        ],
        ['who-am-i',
          ['qui-suis-je.html', 'Qui suis-je ?'], ['who-am-i.html', 'Who am I?']
        ],
        ['page3',
          ['page3_fr.html', 'Page 3 FR'], ['page3_en.html', 'Page 3 EN']
        ],
        ['page4',
          ['page4_fr.html', 'Page 4 FR'], ['page4_en.html', 'Page 4 EN']
        ],
        ['page5',
          ['page5_fr.html', 'Page 5 FR'], ['page5_en.html', 'Page 5 EN']
        ],
        ['contact-us',
          ['contact.html', 'Contactez-nous'], ['contact.html', 'Contact us']
        ]
      ];

    // *********************************************
    // ALL ABOUT LANGUAGES AND TRANSLATIONS IS ABOVE
    // *********************************************

    const lg = this.setLg(lgs);
    const page = this.getAttribute('page');

    // set header and nav structures
    const header = this.setStructure();
    const nav = this.setNav();

    // generate nav menu
    const menu = this.generateMenu(lg, page, lgs, pages);

    // set lg toggle links
    const lgToggleLinks = this.setLgToggle(lg, page, lgs, pages);

    // add menu to nav to header & lgToggle to header to body
    nav.appendChild(menu);
    header.querySelector("#header .right-items .lg-toggle").appendChild(lgToggleLinks);
    header.querySelector("#header").appendChild(nav);
    document.body.prepend(header);

    const menuToggles = document.querySelectorAll(".menu-toggle");

    menuToggles.forEach( e => {
      e.addEventListener('click', e => {
        this.menuToggle();
      });
    });
  }

  setLg(lgs) {
    let lg = this.getAttribute('lg');

    // if lg is defined and exists in lgs, lg = lg else lg = default language = the first language in lgs
    if (lg && lgs.indexOf(lg) !== -1) {
      return lg;
    } else {
      return lgs[0];
    }
  }

  setStructure() {
    // create html elements
    const header = document.createElement('header');
    const headerDiv = document.createElement('div');
    const leftItems = document.createElement('div')
    const brand = document.createElement('div');
    const rightItems = document.createElement('div');
    const lgToggle = document.createElement('div');
    const burger = document.createElement('div');

    // set ids and class
    headerDiv.setAttribute('id', 'header');
    leftItems.setAttribute('class', 'left-items');
    brand.setAttribute('id', 'brand');
    rightItems.setAttribute('class', 'right-items');
    lgToggle.setAttribute('class', 'lg-toggle');
    burger.setAttribute('id', 'burger');
    burger.setAttribute('class', 'menu-toggle');

    // add content and images
    
    // TO DO : add image path for EN
    brand.innerHTML = `<img src="./img/GM_logo.svg" alt="GM Executive search" />`
    burger.innerHTML = `
      <! -- #burger -->
      <svg width="68" height="44" viewBox="0 0 68 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="67.8359" y1="41.6432" x2="-8.04962e-08" y2="41.6432" stroke="#3622B4" stroke-width="3"/>
      <line x1="67.8359" y1="22.0065" x2="-1.02285e-07" y2="22.0065" stroke="#3622B4" stroke-width="3"/>
      <line x1="67.8359" y1="2.36975" x2="-1.02285e-07" y2="2.36974" stroke="#3622B4" stroke-width="3"/>
      </svg>
    `;

    // build structure
    header.appendChild(headerDiv);
    headerDiv.appendChild(leftItems);
    leftItems.appendChild(brand);
    headerDiv.appendChild(rightItems);
    rightItems.appendChild(burger);
    rightItems.appendChild(lgToggle);

    return header;
  }

  setNav() {
    // create html elements
    const nav = document.createElement('nav');
    const closeMenu = document.createElement('div');

    // set ids and class
    nav.setAttribute('class', 'hidden');
    closeMenu.setAttribute('class', 'menu-toggle');

    // add content and images
    closeMenu.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    `;

    // build structure
    nav.appendChild(closeMenu);
    
    return nav;
  }

  generateMenu(lg, page, lgs, pages) {
    // let path = this.setPath(lg, lgs);

    const navList = document.createElement('ul');

    pages.forEach( e => {
      const navElmt = document.createElement('li');
      const navLink = document.createElement('a');

      // navLink.setAttribute('href', `${path}${e[lgs.indexOf(lg) + 1][0]}`);
      navLink.setAttribute('href', e[lgs.indexOf(lg) + 1][0]);
      
      if (page === e[0]) {
        navLink.setAttribute('class', 'active'); 
      }

      navLink.textContent = e[lgs.indexOf(lg) + 1][1];
      navList.appendChild(navElmt).appendChild(navLink);
    });

    return navList;
  }

  setLgToggle(lg, page, lgs, pages) {
    const lgToggleElmt = document.createElement('div');
    let lgToggleLink;

    lgs.forEach( e => {
      if (e === lg) {
        lgToggleLink = document.createElement('span');
      } else {
        let path = this.setPath(e, lg, lgs);

        lgToggleLink = document.createElement('a');
        lgToggleLink.setAttribute('href', `${path}${pages.filter( e => e[0] === page )[0][lgs.indexOf(e) + 1][0]}`);
      }
      
      lgToggleLink.textContent = e.toUpperCase();
      lgToggleElmt.appendChild(lgToggleLink);

      if (lgs.length > 1 && (lgs.indexOf(e) < lgs.length - 1) ) {
        let lgToggleSep = document.createElement('span');
        lgToggleSep.textContent = ' | ';
        lgToggleElmt.appendChild(lgToggleSep);
      }
    });

    return lgToggleElmt;
  }

  setPath(e, lg, lgs) {
    if (lgs.indexOf(lg) === 0) {
      return `./${e}/`;
    } else if (lgs.indexOf(e) === 0) {
      return `../`;
    } else {
      return `../${e}/`;
    }
  }

  menuToggle() {
    const html = document.querySelector("html");
    const body = document.querySelector("body");
    const nav = document.querySelector("nav");

    // check for optims
    html.classList.toggle("overflow-y-hiden");
    body.classList.toggle("overflow-y-hiden");
    nav.classList.toggle("hidden");
  }
}

customElements.define('header-bar', HeaderBar);
