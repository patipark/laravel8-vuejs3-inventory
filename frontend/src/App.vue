<template>
  <router-view />
</template>

<script>
let brand = " | Inventory Vue SPA" //ใส่ brand page 
export default {
  name: "App",
  watch: {
    $route(to) {
      (document.title = to.meta.title + brand ),
        (document.description = to.meta.description);
    },
  },
};
</script>
