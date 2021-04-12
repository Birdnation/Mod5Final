<template>
    <b-container>
        <b-list-group>
            <b-list-group-item class="text-danger">
                <h5>Por pagar ${{pagar}}</h5>
            </b-list-group-item>
        </b-list-group>
        <b-list-group>
            <b-list-group-item class="text-success">
                <h5>Pagado ${{pagado}}</h5>
            </b-list-group-item>
        </b-list-group>
        <b-list-group>
            <b-list-group-item class="text-primary">
                <h5>Total ${{total}}</h5>
            </b-list-group-item>
        </b-list-group>
    </b-container>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'Footer',
    computed:{
        ...mapState(['total','pagar','pagado'])
    }
}
</script>