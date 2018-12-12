var app = new Vue({
    el: '#app',
    data:{
        types: [
            'bebida',
            'alcohol',
            'comida',
            'carne',
            'verduras',
            'snacks',
            'entradas',
            'transporte',
            'otrxs'
        ],
        usedTypes: [],
        quienesPagaron:[],
        quienesNoPagaron:[],
        results:{
            total: 0
        }
    },
    methods:{
        removePayPerson: function(index){
            this.quienesPagaron.splice(index,1);
        },
        removeNoPayPerson: function(index){
            this.quienesNoPagaron.splice(index,1);
        },
        addPayPerson: function(){
            this.quienesPagaron.push({
                name: '',
                type: '',
                total: 0,
                debt: 0,
                showDetails: false,
                exclude: []
            });
        },
        addNoPayPerson: function(){
            this.quienesNoPagaron.push({
                name: '',
                debt: 0,
                showDetails: false,
                exclude: []
            });
        },
        calcUsedTypes: function(){
            this.usedTypes = [];
            this.quienesPagaron.forEach(person => {
                this.usedTypes.push(person.type);
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