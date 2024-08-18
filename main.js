

let body = document.querySelector("body");
let sidebar = document.getElementById("sidebarr");

let nav = document.createElement('div');
nav.classList.add("nav")
nav.innerHTML = `

      <a class = "divLogo" href="/">
        <img class="logo" src="images/logoshawarmaji.png" alt="" />
      </a>
      <ul>
        <li>
          <a class="chefA" href="about.html">
            <i class="chef lni lni-chef-hat"></i>
            <span class="about">About</span>
          </a>
        </li>
        <li>
            <a href="menu.html">
                <i class="fa-solid fa-utensils"></i>
              <span class="menu">Menu</span>
            </a>
          </li>
          <li>
            <a href="contact.html">
                <i class="fa-solid fa-phone"></i>
              <span class="contact">Contact</span>
            </a>
          </li>
      </ul>
    
    
`;
document.body.append(nav);
