<template>
  <div class="home">
    <NavLogoAuth />
  </div>
</template>

<script>
// @ is an alias to /src
import NavLogoAuth from "@/components/NavLogoAuth.vue";

export default {
  name: "HomeView",
  components: {
    NavLogoAuth,
  },
};
</script>
