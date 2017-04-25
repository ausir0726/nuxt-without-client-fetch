<template lang="pug">
section
  h1 this is index page
  ul
    li(v-for="item in list") 
      a(:href="`post/${item.id}`") {{item.title}}

</template>

<script>
import axios from 'axios';

export default {
  async asyncData({ isServer }) {
    const obj = {};
    if (isServer) {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
      obj.list = data;
    }
    return obj;
  },
  head() {
    return {
      title: 'sitename',
    };
  },
};
</script>

<style lang="stylus" scoped>

</style>
