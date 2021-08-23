<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  watch: {
    $route(to) {
      (document.title = to.meta.title ),
        (document.description = to.meta.description);
    },
  },
};
</script>
