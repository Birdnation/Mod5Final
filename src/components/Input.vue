<template>
    <b-container>
        <b-row>
            <b-col cols="8">
                <h5 class="text-left ml-5">Descripción</h5>
            </b-col>
            <b-col cols="2">
                <h5>Precio</h5>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="8">
                <b-form-input class="form-description" v-model="product.description" placeholder="Ingrese ítem"></b-form-input>
            </b-col>
            <b-col cols="2">
                <b-form-input class="form-price" v-model="product.price" placeholder="valor"></b-form-input>
            </b-col>
            <b-col cols="2">
                <b-button pill variant="success" @click="addProduct" class="form-add-btn">Agregar</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
    name:'Input',
    computed:{
        ...mapState(['product'])
    },
    methods:{
        ...mapMutations(['addProduct'])
    }

}
</script>