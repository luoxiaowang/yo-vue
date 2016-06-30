<template>
  <div id="app">
    <ul>
      <li v-for="todo in todos">
        {{ parentMessage }} - {{$index}} - {{ todo.text }}
      </li>
    </ul>
    
    <ul>
      <li v-for="n in 10">{{n}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    replace: false,
    data() {
      return {
        parentMessage : 'plan',
        todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue.js' },
          { text: 'Build Something Awesome' }
        ]
      }
    }
  }
</script>
