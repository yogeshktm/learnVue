<template>
  <div v-show="datas">
    {{datas}}
  </div>
</template>
<script>
export default {
  name: 'ViewPost',
  props: {
   
  },
  data() {
    return {
      datas:[]
    };
  },
  methods:{
   
  },
  created(){
    window.eventBus.$on('listdatas', (val) => {
      this.datas = val
    });
  }
};

</script>