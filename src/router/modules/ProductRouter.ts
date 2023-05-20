export default {
  path: "/",
  component: () => import("layouts/ProductLayout.vue"),
  children: [
    {
      path: "",
      component: () => import("pages/product/index.vue"),
    },
    {
      path: "product/edit/:id",
      props: true,
      component: () => import("pages/product/edit.vue"),
    },
    {
      path: "product/create",
      component: () => import("pages/product/create.vue"),
    },
   
  ],
};
