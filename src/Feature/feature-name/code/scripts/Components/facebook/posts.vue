<template>
  <div>
  <div class="posts-list">
    <table>
      <tr v-for="post in posts">
        <td>{{post.title}}</td>
        <td><a href="#" @click="filterPosts">{{post.userId}}</a></td>
        <td><button>edit</button></td>
      </tr>
    </table>
  </div>
  </div>
</template>
<script>
export default {
  name: 'posts',
  props: {
   
  },
  data() {
    return {
      posts:[],
      userPosts:[]
    };
  },
  methods:{
    loadData(){
      let apiUrl = "https://jsonplaceholder.typicode.com/posts"
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
            .then(data => this.posts = data)
    },
    filterPosts(){
      this.userPosts = this.posts.filter(post => post.userId === 1);
      console.log(this.userPosts);
      let b = this.posts.filter(this.onlyUnique);
      console.log('b',b);
    }
  },
  created(){
    this.loadData();
  }
};

</script>