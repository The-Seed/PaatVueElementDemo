<template>
    <div class="paatSearchTable">
        <el-table ref="multipleTable" :emptyText="emptyText" :data="tableData" border>
            <el-table-column v-for="item in tableDataOptions" :prop="item.prop" :label="item.label"></el-table-column>
        </el-table><!-- default el table -->
    </div>
</template>
<script>
export default {
    name: 'PaatSearchTable',
    inject: {},
    props: {
        tableDataOptions: { type: Array, default: [] },
        tableData: { type: Array, default: [] },
    },
    data(){
        return {
            emptyText: '',
        }
    },
    created: function(){

    },
    computed: {

    },
    methods: {

    }
};
</script>