<template>
    <b-container>
        <b-table striped hover :items="products" :fields="fields"></b-table>
    </b-container>
</template>

<script>
import {mapState,mapMutations} from 'vuex';

export default {
    name: 'List',
    data(){
        fields:[
            {
                key: '',
                sortable: false
            },
            {
                key: 'Producto',
                sortable: true
            },
            {
                key: 'Precio',
                sortable: true
            },
            {
                key: '',
                sortable:false
            }
        ]
    },
    computed:{
        ...mapState(['products'])
    },
    methods:{
        ...mapMutations(['updatePaid','deleteProduct'])
    }
}
</script>