<template>
    <div class="paatSearchForm">
        <el-row :gutter="24">
            <el-col class="paatSearchForm__item" :span="8" v-for="item in options">
                <label class="paatSearchForm__label">{{item.label}}</label>
                <div class="paatSearchForm__content" v-if="item.type == 'input'">
                    <el-input v-model="optionsPara[item.dataProp]" placeholder="请输入"></el-input>
                </div>
                <div class="paatSearchForm__content" v-if="item.type == 'select'">
                    <el-select v-model="optionsPara[item.dataProp]" :multiple="item.multiple" :collapse-tags="item.multiple" placeholder="请选择" size="small">
                        <el-option v-for="option in item.originData" 
                            :key="option[item.originDataProp ? item.originDataProp.value : 'value']"
                            :label="option[item.originDataProp ? item.originDataProp.label : 'label']"
                            :value="option[item.originDataProp ? item.originDataProp.value : 'value']"></el-option>
                    </el-select>
                </div>
            </el-col>
            <el-col class="paatSearchForm__item" :span="8 * (3 - options.length%3)">
                <div class="paatSearchForm__content paatSearchForm__content--right" >
                    <el-button type="primary" @click="pushParams">查询</el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
/*
 * @version => test version
 * @description Not ready yet
 * @props.options => Array default []
 * @options see =>

 *    { // Stay tuned Thank you ~ ^^ !

 *        type: '', // [required] [String = {'input'||'select'}] => 设置表单类型 * 以后维护更多类型

 *        label: '', // [required] [String = {'表单名称'}] => 设置表单名称 * 最多5位中文 或 8位英文字母

 *        dataProp: '', // [required] [String = {'serverId'}] => 设置表单查询字段

 *        defaultValue: null, // [at will] [String||Number||Boolean = {'1009'||1009||true}] => 设置表单默认值 * 默认值 ''

 *        multiple: false, // [type select is at will] [Boolean = {true}] => 设置下拉框是否多选 * 默认值 false

 *        originData: [], // [type select is required] [Array = [...{value: '', label: ''}] ] => 设置下拉框列表数据

 *        originDataProp: {}, // [type select is at will but has default] [Object = {value:'value', label: 'label'}] => 设置下拉框数据索引 * 默认值 value label
            
 *    }

 */
export default {
    name: 'PaatSearchForm',
    inject: {},
    props: {
        options: {
            type: Array,
            default: []
        },
    },
    data(){
        return {
            optionsPara: {},

        }
    },
    created: function(){
        this.options.forEach(item => {
            if(item.originData){

            }
            console.log(typeof item.originData);
            this.$set(this.optionsPara, item.dataProp, item.defaultValue || (item.multiple ? [] : '') ) 
        });
    },
    computed: {

    },
    methods: {
        pushParams(evt) {
            this.$emit('getParams', this.optionsPara);
        }
    }
};
</script>
