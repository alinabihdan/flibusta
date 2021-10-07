import Vue from "vue";
import Router from "vue-router";
import BookSearch from "@/components/BookSearch.vue";
import Cart from "@/components/cart/Cart.vue";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/flibusta",
      name: "bookSearch",
      component: BookSearch,
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
