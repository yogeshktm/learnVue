<template>
<div class="todo-wrapper">
<div class="todo-app">
    <h2 class="app-title">ToDoIst</h2>
    <form v-on:submit.prevent="addItem">
        <div class="input-wrapper">
            <input type="text" :placeholder="this.placeHolderText" class="textbox" v-model="inputValue" ref="todoInput"/>
            <transition name="fade" mode="out-in"><input type="submit" class="btn" :value="editMode ? 'Edit' : 'Add'"/></transition>
        </div>
    </form>
    <ul class="list">
        <transition-group name="list" tag="p">
            <li v-for="list,index in todoList" :key="index" :id="index">
                {{list}}
                <div class="list-actions">
                    <a href="#" class="edit-icon" @click="editItem(index)"><i class="fa fa-pencil"></i></a>
                    <a href="#"  class="del-icon" @click="removeItem(index)"><i class="fa fa-times"></i></a>
                </div>
            </li>
        </transition-group>
    </ul>
</div>
</div>
</template>
<script>
export default{
    name:'todoApp',
    data(){
        return{
            todoList:[],
            inputValue:'',
            editMode:false,
            currentIndex:'',
            placeHolderText:'What you want to do?'
        }
    },
    methods:{
        addItem(){
            if(this.editMode){
                if(this.inputValue != ''){
                    this.todoList[this.currentIndex] = this.inputValue;
                    this.editMode = false;
                    this.inputValue = "";
                    this.currentIndex = "";
                    this.$refs.todoInput.focus();
                }
            }
            else{
                if(this.inputValue != ''){
                    this.placeHolderText = 'What you want to do ?';
                    this.todoList.push(this.inputValue);
                    this.inputValue = "";
                    this.$refs.todoInput.focus();
                }
                else{
                    this.placeHolderText = 'Please add something';
                    this.$refs.todoInput.focus();
                }

            }
        },
        removeItem(index){
            console.log(index);
            if(index != 0){
              this.todoList.splice(index,index);
            }
            else{
                this.todoList.splice(index,index + 1);
            }
            this.$refs.todoInput.focus();
        },
        editItem(index){
            console.log(index);
            this.inputValue = this.todoList[index];
            this.currentIndex = index;
            this.editMode = true;
            this.$refs.todoInput.focus();
        }
    }
}
</script>