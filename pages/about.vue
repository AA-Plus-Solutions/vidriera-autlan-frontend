<template>
    <h1>
        about page
    </h1>
</template>


<script>
export default {
    head(){
        //aqui esta la metainfo
        return{
            title:'Vidriera Autlan | About',
            meta:[
                {
                    hid:"description",
                    name:"description",
                    content:"Website about Vidriera"
                }
            ],
            htmlAttrs:{
                lang:"en"
            }
        }
    }
}
</script>