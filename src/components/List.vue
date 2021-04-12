<template>
    <b-container class="pt-5">
        <b-table hover :items="products" :fields="fields">
            <template #cell(deleteProducto)="row">
                <b-button size="sm" @click="deleteProduct(row.index)" class="btn btn-danger">X</b-button>
            </template>
            <template #cell(isPaid)="row">
                <b-button size="sm" @click="updatePaid(row.index)" class="btn btn-success">X</b-button>
            </template>
        </b-table>
    </b-container>
</template>

<script>
import {mapState,mapMutations} from 'vuex';

export default {
    data(){
        return {
            fields:[{
                key:'deleteProducto', label:'Eliminar', sortable: false, thStyle:'width:10%'
            },{
                key:'description', label:'Descripción', sortable: false, thStyle:'width:50%', class:'text-left'
            },{
                key:'price', label:'Precio', sortable:false, thStyle:'width:20%'
            },{
                key:'isPaid', label:'¿Pagado?', sortable:false, thStyle:'width:20%'
            }]
        }},
    name: 'List',
    computed:{
        ...mapState(['products'])
    },
    methods:{
        ...mapMutations(['updatePaid','deleteProduct'])
    }
}
</script>