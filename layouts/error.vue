<template lang="pug">
section.container
  h1 {{ error.statusCode }}
  h2 {{ error.message }}
  nuxt-link(to="/", v-if="error.statusCode === 404") Home

</template>

<script>
export default {
  props: ['error'],
};
</script>

<style scoped>

</style>
