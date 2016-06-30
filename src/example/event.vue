<template>
	<div id="example">
	  <button v-on:click="greet">Greet</button>
	  <button v-on:click="say('hi',$event)">Say Hi</button>
	</div>
</template>


<script>
  export default {
    replace: false,
    data() {
      return {
        name : 'luoxiao'
      }
    },
    methods:{
    	greet : function(event){
    		// 方法内 `this` 指向 vm
		    alert('Hello ' + this.name + '!')
		    // `event` 是原生 DOM 事件
		    alert(event.target.tagName)
    	},
    	say: function (msg,event) {
    		// 现在我们可以访问原生事件对象
    		event.preventDefault();
	      	alert(msg)
	    }
    }
  }
</script>