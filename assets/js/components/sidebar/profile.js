import { site_url } from "../../use/utility.js";

export class Profile extends HTMLDivElement {
  /**
   * @typedef {Object} User
   * @property {string} id_user
   * @property {string} name
   */
  /**
   * Construction de l'objet
   * @param {User} user
   */
  constructor(user) {
    super();

    this.user = user;
    this.classList.add("sidebar-profile");
    this.innerHTML = `
      <img src="${site_url()}assets/image/user.png" class="profile-image">
      <span class="user-name">${this.user.name}</span>
    `;
  }
}

customElements.define("profile-user", Profile, { extends: "div" });
