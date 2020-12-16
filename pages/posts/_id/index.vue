<template>
    <div class="card">
        <h1>descripcion del post</h1>
        <h2>{{post.title}}</h2>
        <p>Id: {{post.id}}</p>
        <p>User:{{post.userId}}</p>
        <p>Content: {{post.body}}</p>
    </div>
</template>
<script>

import axios from 'axios'
export default {
    data(){
        return{
            post:{}
        }
    },
    async created(){
        try{
            const id=this.$route.params.id
            console.log(id)
            const res= await axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
            console.log(res);
            this.post=res.data;
            // this.posts=res.data;
        }catch(e){
            console.log(e)
        }
    }
}
</script>
<style scoped>
    .card{
        border: 1px solid black;
        padding:4rem;
    }
</style>