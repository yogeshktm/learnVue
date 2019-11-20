<template>
  <div>
  <div class="posts-list">
    <transition name="fade">
      <div class="edit-input" v-show="showEditInput">
        <input type="text" class="edit-input" v-model="editInputValue"/><button @click="saveEditedItem(index)">Save</button>
      </div>
    </transition>
    <table>
      <tr v-for="post,index in posts" :id="index">
        <td>
          {{post.title}}
        </td>
        <td>{{post.userId}}</td>
        <td><button @click="view(index)">View</button></td>
        <td><button @click="editItem(index)">Edit</button></td>
        <td><button @click="deleteItem(index)">delete</button></td>
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
      editInputValue:"",
      showEditInput:false,
      currentIndex:''
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
    view(index){
      window.eventBus.$emit('listdatas', JSON.stringify(this.posts[index].body));
    },
    editItem(index){
      console.log(index);
      this.currentIndex = index;
      this.showEditInput = true;
      let currentPost = this.posts[index];
      this.editInputValue = currentPost.title;
    },
    saveEditedItem(index){
      console.log(this.currentIndex);
      let currentPost = this.posts[this.currentIndex].id;
      this.posts[this.currentIndex].title = this.editInputValue;
      fetch('https://jsonplaceholder.typicode.com/posts/'+currentPost, {
        method: 'PATCH',
        body: JSON.stringify({
          title: this.editInputValue
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
      .then(response => response.json())
      .then(json => console.log(json))
      this.currentIndex = "";
      this.editInputValue = "";
      this.showEditInput = false;
    },
    deleteItem(index){
      let currentItem = this.posts[index].id;
      fetch('https://jsonplaceholder.typicode.com/posts/'+currentItem, {
        method: 'DELETE'
      })
      this.posts.splice(index,1);
    }
  },
  created(){
    this.loadData();
  }
};

</script>