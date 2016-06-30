<template>
    <div id="app">
        <input v-model="newTodo" @keyup.enter="addTodo()">
        <ul>
            <li v-for="(index,item) in todos">
                <span>{{ index }}.{{ item.text }}</span>
                <button @click="removeTodo(index)">X</button>
            </li>
        </ul>
    </div>
</template>


<script>
    export default{
        replace: false,
        data() {
            return {
                newTodo : '',
                todos : [
                    { text : 'Add some todos'}
                ]
            }
        },
        methods: {
            addTodo : function(){
                var txt = this.newTodo.trim();
                if(txt){
                    this.todos.push({text: txt});
                    this.newTodo = '';
                }
            },
            removeTodo : function(index){
                this.todos.splice(index,1);
            }
        }
    }
</script>