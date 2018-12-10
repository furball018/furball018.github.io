var app = new Vue({
    el: '#app',
    data:{
        quienesPagaron:[
            {
                name: 'Mati',
                type: 'bebida',
                total: 130,
                showDetails: false
            },
            {
                name: 'Lichi',
                type: 'carne',
                total: 500,
                showDetails: false
            },
            {
                name: 'Eve',
                type: 'snacks',
                total: 210,
                showDetails: false
            }
        ],
        results:{
            total: 0
        }
    },
    methods:{
        removePerson: function(index){
            this.quienesPagaron.splice(index,1);
        },
        addPayPerson: function(){
            this.quienesPagaron.push({
                name: 'Nombre',
                type: 'select',
                total: 0,
                showDetails: false
            });
        }
    },
    computed:{
        calcTotal: function(){
            var t = 0;
            this.quienesPagaron.forEach(person => {
                t += person.total;
            });
            this.results.total = t;
            return t;
        }
    }

})