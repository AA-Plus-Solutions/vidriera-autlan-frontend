<template>
    <div>
        <h1>posts</h1>
        <!-- <Post title="hello world" id="1"/>
        <ul>
            <li v-for="post of posts">{{post.title}}</li>
        </ul> -->
        <Post
            v-for="post of posts"
            v-bind:key="post.id"
            :name="post.title"
            :id="post.id"
            :content="post.body"
        />
    </div>
  
</template>
<script>
import axios from 'axios'
import Post from '../../components/Post.vue'

export default {
    components:{
        Post
    },
    //objeto que pueda acceder en cualquier parte de interfaz
    data(){
        return{
            posts:[]
        }
    },
    async created(){
        try{
            const res= await axios.get('https://jsonplaceholder.typicode.com/posts')
            console.log(res);
            this.posts=res.data;
        }catch(e){
            console.log(e)
        }
    }
}
</script>
