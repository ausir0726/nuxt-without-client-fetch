<template lang="pug">
section
  h1 this is post page
  h2 {{data.title}}
  pre {{data.body}}

</template>

<script>
import axios from 'axios';

export default {
  async asyncData({ isServer, params }) {
    const obj = {};
    if (isServer) {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
      obj.data = data;
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
