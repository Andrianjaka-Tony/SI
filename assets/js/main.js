import { Sidebar } from "./components/sidebar/sidebar.js";

let userJSON = {
  id_user: "user00001",
  name: "Tony Rakotondrazaka",
};
let sidebarJSON = [
  {
    name: "Société",
    id: "societe-item",
    icon: "/assets/icon/societe.png",
  },
  {
    name: "Journal",
    id: "journal-item",
    icon: "/assets/icon/journal.png",
  },
  {
    name: "Plan comptable",
    id: "plan-comptable-item",
    icon: "/assets/icon/plan-comptable.png",
  },
  {
    name: "Plan tiers",
    id: "plan-tiers-item",
    icon: "/assets/icon/plan-tiers.png",
  },
  {
    name: "Grand livre",
    id: "grand-livre-item",
    icon: "/assets/icon/livre.png",
  },
  {
    name: "Balance",
    id: "balance-item",
    icon: "/assets/icon/balance.png",
  },
];

document.body.appendChild(new Sidebar(sidebarJSON, userJSON));
