<template>
  <div class="quotes-app" :style="{'background':'url('+ randomQuote.background +') no-repeat'}">
  <div class="quoteWrapper">
     <h3>{{randomQuote.title}}</h3>
     <h2>"{{randomQuote.quote}}"</h2>
     <p class="author">-{{randomQuote.author}}</p>
   </div>
  </div>
</template>
<script>
export default {
  componentName: 'quotes',
  props: {
   
  },
  data() {
    return {
      randomQuote:[]
    };
  },
  methods:{
    loadData(){
      let apiUrl = "http://quotes.rest/qod.json"
      fetch(apiUrl)
            .then(function(response) {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject({
                        status: response.status,
                        statusText: response.statusText
                    });
                }
            })
            .then(data => this.randomQuote = data.contents.quotes[0])
    }
  },
  beforeCreate(){
    console.log("Before create");
  },
  created(){
    this.loadData();
    console.log("created")
  },
  beforeMount(){
    console.log("before mount");
  },
  mounted(){
    console.log("mounted");
  },
  beforeUpdate(){
    console.log("before update");
  },
  updated(){
    console.log("updated");
  },
  beforeDestroy(){
    console.log("Before destroyed");
  }, 
  destroyed(){
    console.log("destroyed");
  }
};

</script>