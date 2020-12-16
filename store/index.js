import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)
const url='http://vidrieraautlan.com/wp-json/wp/v2/pages/?slug=nosotros'
export const state=()=> ({
    count: 0,
    homePage:[],
    // wpProjects:['bla','bla'],
    wpProjects:['bla','bla'],
    user:'Oscar'
})

export const  actions={
    async getwpProjects({state,commit}){

        if(state.wpProjects.length) return

        try{
            let wpProjects=await fetch(
                url
            ).then((res)=>res.json)
            wpProjects=wpProjects.filter((el)=>el.status==='publish')
            wpProjects=wpProjects.map(({ACF,title,slug})=>{
                ACF,title,slug
            })
            commit('updatewpProjects',wpProjects);
        }catch(err){

        }
    }
}
const store = new Vuex.Store({
//   state: {
//     count: 0,
//     homePage:[],
//     wpProjects:[],
//     user:'Oscar'
//   },
    state,
    mutations: {
        increment (state) {
        state.count++
        }
    },
    actions
})


store.commit('increment');
console.log(store.state.count);
