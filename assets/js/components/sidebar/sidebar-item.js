export class SidebarItem extends HTMLDivElement {
  /**
   * @typedef {Object} Item
   * @property {string} name
   * @property {string} id
   * @property {string} icon specifie le chemin absolue de l'icon
   */
  /**
   * Constructeur de l'objet
   * @param {Item} item
   */
  constructor(item) {
    super();

    this.item = item;
    this.classList.add("sidebar-item");
    this.id = this.item.id;
    this.innerHTML = `
      <img src="${this.item.icon}" class="side-item-icon">
      <span class="side-item-name">${this.item.name}</span>
    `;
  }
}

customElements.define("side-item", SidebarItem, { extends: "div" });
