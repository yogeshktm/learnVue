<template>
  <div class="my-profile">
    <h2><strong>{{name}}</strong></h2>
    <p>@{{twitterHandle}}</p>
    <a :href="twitterUrl + '/' + twitterHandle">Go to my twitter profile</a>
  </div>
</template>
<script>
export default {
  name: 'profile',
  props: {
    name: {
      type: String,
      required: true
    },
    alias: {
      type: String,
      required: false
    },
    twitterHandle: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      twitterUrl:'https://www.twitter.com'
    };
  },
};

</script>