<template>

    <!-- se ira a _id.vue -->
    <!-- <nuxt-link to="/"> -->
    <nuxt-link :to="'/posts/'+id">
        <div class="post" v-scrollanimation>
            <p>{{id}}.{{name}}</p>
            <p>{{content}}</p>
        </div>
    </nuxt-link>
</template>
<script>
export default {
    name:'Post',
    props:['id','name','content']
}
</script>

<style scoped>
    .post{
        padding:1rem;
        /* border: 1px solid whitesmoke; */
        border: 1px solid black;
        margin: 1rem 0;
    }
    .post:hover{
        background:#2d3436;
        border: 1px solid #6c5ce7;
        cursor: pointer;
    }
    a{
        text-decoration: none;
        /* color:whitesmoke */
    }
    a:hover{
        color:#6c5ce7;
    }
    /* div{
    transition-delay: .1s;
} */
.before-enter{
    opacity:0;
    transform: translateY(100px);
    transition: all 1s ease-out;
    /* transform: scale(.5) rotate(-25deg);
    transition: all 1s ease-out; */
    /* transform: translateX(100px);
    transform: all 1s cubic-bezier(.41,0.01,0.57,1.61); */
}
.enter{
    opacity: 1;
    transform: translateY(0px);
    /* transform: scale(1) rotate(0deg); */
    /* transform: translateX(0px); */
}
</style>
