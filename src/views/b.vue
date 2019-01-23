<template>
    <div>
        <h2 class="tem-h2">查询页 : PaatSearchPage => PaatSearchForm + 插槽 + PaatSearchTable</h2>
        <PaatSearchPage
            :searchFormOptions="searchFormOptions"
            :tableDataOptions="tableDataOptions" :tableData="tableData" :tableTotal="tableTotal" :tableCurrentPage="1" :tablePageSize="10"
            @getParams="getParams" />

    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
export default {
    name: 'Home',
    data(){
        return {
            searchFormOptions: [
                {
                    type: 'input',
                    label: 'label 1',
                    dataProp: 'companyId',
                },
                {
                    type: 'input',
                    label: 'label 2',
                    dataProp: ['input1', 'input2'],
                },
                {
                    type: 'select',
                    label: 'label 3',
                    dataProp: 'select',
                    multiple: true,
                    originData: [],
                    valueSuffix: '%',
                    originDataProp: {
                        value: 'codeKey', label: 'codeValue'
                    }
                },
                {
                    type: 'date-picker',
                    label: 'label 4',
                    dataProp: ['start','end'],
                    dateType: 'date'
                },
                {
                    type: 'select',
                    label: 'label 5',
                    dataProp: 'select1',
                    originData: [],
                    originDataProp: {
                        value: 'codeKey', label: 'codeValue'
                    }
                }
            ],
            tableDataOptions: [
                { prop: 'companyId', label: 'label 1' },
                { prop: 'companyId', label: 'label 2' },
                { prop: 'companyId', label: 'label 3' },
                { prop: 'companyId', label: 'label 4' },
                { prop: 'companyId', label: 'label 5' },
                { prop: 'companyId', label: 'label 6' },
                { prop: 'companyId', label: 'label 7' },
                { prop: 'companyId', label: 'label 8' },
                { prop: 'companyId', label: 'label 9' },
                { prop: 'companyId', label: 'label 10' },
                { prop: 'companyId', label: 'label 11' },
                { prop: 'companyId', label: 'label 12' },
                { prop: 'companyId', label: 'label 13' }
            ],
            tableData: [],
            tableTotal: 0,
        }
    },
    mounted: function(){
        this.SET_CODE_TABLE({key: 'NJSBActualTaxRate', that: this, target: this.searchFormOptions[2], select: 'originData'});
        this.SET_CODE_TABLE({key: 'NJSBfpIssueType', that: this, target: this.searchFormOptions[4], select: 'originData'});
    },
    computed: {
        ...mapGetters(['GET_CODE_TABLE']),
    },
    methods: {
        ...mapActions(['SET_CODE_TABLE']),
        getParams(params){
            axios.post('http://users.paat.net/invoice/speTicket/search', params).then(res => {
                this.tableTotal = res.data.recordCount;
            })
            axios.post('http://users.paat.net/invoice/speTicket/goPage', params).then(res => {
                this.tableData =  res.data.resultInfo;
            })
        },
    }
}
</script>
