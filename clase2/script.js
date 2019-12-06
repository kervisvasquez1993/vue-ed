Vue.component('shows', {
    template : `
        <div>
        <h2>Componente global </h2>
        <h3>Shows tv maze</h3>
        <ul>
            <li v-for="show in shows"> {{show.name}}</li>
        </ul>

        </div>
    `,
    mounted(){
        axios.get('http://api.tvmaze.com/shows').then(res=>{
            console.log(res)
            this.shows = res.data
        })       
    },
     data(){
        return{
            shows: []
        } 
     }

})
 const startwarsCharacters= {
     template : `
        <div>
            <h2>Componente local </h2>
            <h3> personajes de start wars</h3>
            <ul>
                <li v-for="character in characters"> 
                    {{character.name}}
                </li>
            </ul>
        </div>
     
     `,
     mounted(){
         axios.get('https://swapi.co/api/people/').then(res=>{
             console.log(res)
             this.characters = res.data.results
         })
     },
     data(){
         return{
             characters:[]
         }
     }

 }

const mv = new Vue({
    el: '#app',
    //los componentes locales se declaran dentro de la instancia 
    component:{
        'startwars ' : startwarsCharacters
    }
})