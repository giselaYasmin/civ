<template>
  <Navbar brand-name="Countries API" />
  <router-view />
</template>

<script>
import Navbar from '../src/components/Navbar/index.vue';

export default({
  components: {
    Navbar
  }
})


</script>
