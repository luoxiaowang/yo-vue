<template>
    <div>
        <input type="text" v-model="firstName"> +
        <input type="text" v-model="lastName"> =
        <input type="text" v-model="fullName">
    </div>
</template>


<script>
    export default {
        replace: false,
        data() {
            return {
                firstName : '',
                lastName : ''
            }
        },
        computed:{
            /*fullName : function(){
                return this.firstName + " " +this.lastName;
            },*/
            fullName : {
                get: function(){
                    return this.firstName + " " +this.lastName;
                },
                set: function(newValue){
                    var names = newValue.split(" ");
                    this.firstName = names[0];
                    this.lastName = names[names.length -1];
                }
            }
        }
    }
</script>