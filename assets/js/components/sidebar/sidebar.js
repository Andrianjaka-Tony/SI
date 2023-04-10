import { site_url } from "../../use/utility.js";
import { Profile } from "./profile.js";
import { SidebarItem } from "./sidebar-item.js";

export class Sidebar extends HTMLDivElement {
  /**
   * @typedef {Object} Item
   * @property {string} name
   * @property {string} id
   * @property {string} icon specifie le chemin absolue de l'icon
   */
  /**
   * @typedef {Object} User
   * @property {string} id_user
   * @property {string} name
   */
  /**
   * Constructeur de l'objet
   * @param {Item[]} items
   * @param {User} user
   */
  constructor(items, user) {
    super();

    this.items = items;
    this.user = user;
    this.classList.add("side-bar");
    this.innerHTML = `
      ${this._linkStyle()}
    `;
    this.appendChild(this._closeButton());
    this._appendProfile();
    this._appendItems();
    this._reveal();
  }

  /**
   * Pour creer un icon de fermeture
   * @return {HTMLDivElement}
   */
  _closeButton() {
    let result = document.createElement("div");
    result.classList.add("close-sidebar");
    result.innerHTML = `
      <img src="${site_url()}assets/icon/close.png" class="close-btn">
    `;

    result.addEventListener("click", () => {
      this._hide();
    });

    return result;
  }

  /**
   * Ajout du profil dans la sidebar
   */
  _appendProfile() {
    let profile = new Profile(this.user);
    this.appendChild(profile);
  }

  /**
   * Ajout des sidebar-items dans le sidebar
   * @return {void}
   */
  _appendItems() {
    this.items.forEach((item) => {
      let sidebarItem = new SidebarItem(item);
      this.appendChild(sidebarItem);
    });
  }

  /**
   * Definit le CSS que la sidebar importe
   * @return {string}
   */
  _linkStyle() {
    return `<link rel="stylesheet" href="${site_url()}assets/css/components/sidebar/sidebar.css">`;
  }

  /**
   * Fonction pour animer la sidebar qaand elle va apparaitre
   * @return {void}
   */
  _reveal() {
    let toggleBtn = document.querySelector(".hamburger-icon");
    toggleBtn.addEventListener("click", () => {
      let keyframes = [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ];
      let options = {
        duration: 200,
        delay: 450,
        fill: "forwards",
      };

      // Rendre la sidebar visible
      this.classList.add("reveal");

      // rendre le profil visible
      let profile = document.querySelector(".sidebar-profile");
      profile.animate(keyframes, options);

      // rendre le sidebar-item visible
      let items = document.querySelectorAll(".sidebar-item");
      items.forEach((item) => {
        options.delay += 50;
        item.animate(keyframes, options);
      });
    });
  }

  /**
   * Fonction pour masquer la sidebar
   * @return {void}
   */
  _hide() {
    let keyframes = [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ];
    let options = {
      duration: 200,
      delay: 0,
      fill: "forwards",
    };

    // rendre le sidebar-item invisible
    let items = document.querySelectorAll(".sidebar-item");
    for (let i = items.length - 1; i >= 0; i--) {
      items[i].animate(keyframes, options);
      options.delay += 50;
    }

    // rendre le profil invisible
    let profile = document.querySelector(".sidebar-profile");
    profile.animate(keyframes, options);

    // masquer la sidebar
    window.setTimeout(() => {
      this.classList.remove("reveal");
    }, 700);
  }
}

customElements.define("side-bar", Sidebar, { extends: "div" });
