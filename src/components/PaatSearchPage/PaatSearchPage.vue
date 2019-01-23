<template>
    <div class="paatSearchPage">
        <PaatSearchForm v-if="searchFormOptions.length > 0" :searchFormOptions="searchFormOptions" @getParams="pushParams" />
        <div class="paatSearchPage__menu">
            <div class="paatSearchPage__menu--left"><slot name="left"></slot></div>
            <div class="paatSearchPage__menu--right"><slot name="right"></slot></div>
        </div>
        <div class="paatSearchPage__alert"><slot name="alert"></slot></div>
        <PaatSearchTable :tableDataOptions="tableDataOptions" :tableData="tableData" :tableTotal="tableTotal" />
        <el-pagination
            v-if="tableTotal > params.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :current-page.sync="params.currentPage" :page-size.sync="params.pageSize" :total="tableTotal" :page-sizes="[10, 20, 50, 100, 200, 300]"
            @size-change="sizeChange" @current-change="currentChange"
            background></el-pagination><!-- default el pagination -->
    </div>
</template>
<script>
export default {
    name: 'PaatSearchPage',
    props: {
        searchFormOptions: { type: Array, default: [] },
        tableDataOptions: { type: Array, default: [] },
        tableData: { type: Array, default: [] },
        tableTotal: { type: Number, default: 0 },
        tableCurrentPage: { type: Number, default: 1 },
        tablePageSize: { type: Number, default: 10 }
    },
    components: {
        'PaatSearchForm': () => import('./PaatSearchForm.vue'),
        'PaatSearchTable': () => import('./PaatSearchTable.vue'),
    },
    data(){
        return {
            params: {
                currentPage: 1,
                pageSize: 10,
            },
            emptyText: '',
        }
    },
    created: function(){
        this.params.currentPage = this.tableCurrentPage;
        this.params.pageSize = this.tablePageSize;
    },
    methods: {
        pushParams(params) {
            this.params.currentPage = 1;
            this.params = {...params, pageNumb: this.params.currentPage, pageSize: this.params.pageSize};
            this.$emit('getParams', this.params);
        },
        sizeChange(val){
            this.params.pageSize = val;
            this.params.currentPage = 1;
            this.$emit('getParams', this.params);
        },
        currentChange(val){
            this.params.pageNumb = val;
            this.$emit('getParams', this.params);
        },
    }
};
</script>
