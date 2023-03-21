<template>
  <NavLogoAuth></NavLogoAuth>
  <slot />
</template>

<script>
import NavLogoAuth from "@/components/NavLogoAuth.vue";
export default {
  components: {
    NavLogoAuth,
  },
};
</script>
