// directive
import Vue from 'vue'
// import ScrollAnimation from "../../plugins/directives/scrollanimation";


/*
  Using the IntersectionObserver
  Observers are objects that spots something in real-time.
  And there are different observers, which spots different things, 
  like the MutationObserver, where you can look for changes in the DOM, 
  for example. And we need in this case the IntersectionObserver.
*/

const animatedScrollObserver=new IntersectionObserver(
    (entries,animatedScrollObserver)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add('enter');
                animatedScrollObserver.unobserve(entry.target)
            }
        })
    }
);

// export default{
//     // head: {
//     //     script:  [
//     //         {
//     //             src:
//     //             'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver',
//     //             body: true
//     //         }
//     //     ]
//     // },
//     //only called once
//     bind(el){
//         el.classList.add('before-enter');
//         animatedScrollObserver.observe(el);
//         //observers are objects that spot something in real-time
//         //there are different observers
//         // MutationObserver IntersectionObserver
//     }
// }

Vue.directive('scrollanimation',{
    bind:el=>{
        el.classList.add('before-enter');
        animatedScrollObserver.observe(el);
        //observers are objects that spot something in real-time
        //there are different observers
        // MutationObserver IntersectionObserver
    }
}

)
