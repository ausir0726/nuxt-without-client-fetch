<template lang="pug">
.container
  .row
    h1 FINPO nuxt starter
  .row
    ul
      li
        a(href="/") Home
      //- li
      //-   nuxt-link(to="/about") About
  nuxt
  my-footer
</template>

<script>
import MyFooter from '~components/Footer.vue';

export default {
  components: {
    MyFooter,
  },
};
</script>

<style lang="stylus">

</style>
