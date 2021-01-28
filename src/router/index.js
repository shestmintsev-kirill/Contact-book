import Vue from "vue";
import VueRouter from "vue-router";
import ContactList from "../views/ContactList.vue";
import ContactInfo from "../views/ContactInfo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ContactList",
    component: ContactList
  },
  {
    path: "/info/:id",
    name: "ContactInfo",
    component: ContactInfo
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
