import Vue from "vue";
import Router from "vue-router";
import BookSearch from "@/components/BookSearch.vue";
import Cart from "@/components/cart/Cart.vue";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "bookSearch",
      component: BookSearch,
      props: true,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
      props: true,
    },
  ],
});

export default router;
