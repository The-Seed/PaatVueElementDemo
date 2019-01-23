<template>
    <div class="paatSearchForm">
        <el-row :gutter="24">
            <el-col class="paatSearchForm__item" :span="8" v-for="item in searchFormOptions">
                <label class="paatSearchForm__label">{{item.label}}</label>
                <div class="paatSearchForm__content" v-if="item.type == 'input' && Object.prototype.toString.call(item.dataProp) == '[object String]'">
                    <el-input v-model="optionsPara[item.dataProp]" placeholder="请输入"></el-input>
                </div>
                <div class="paatSearchForm__content" v-if="item.type == 'input' && Object.prototype.toString.call(item.dataProp) == '[object Array]'">
                    <div class="paatSearchForm__separator">
                        <el-input v-model="optionsPara[item.dataProp[0]]" placeholder="请输入"></el-input>
                        <span>{{item.separator||'-'}}</span>
                        <el-input v-model="optionsPara[item.dataProp[1]]" placeholder="请输入"></el-input>
                    </div>
                </div>
                <div class="paatSearchForm__content" v-if="item.type == 'select'">
                    <el-select v-model="optionsPara[item.dataProp]" :multiple="item.multiple" :collapse-tags="item.multiple" placeholder="请选择">
                        <el-option v-for="option in item.originData" 
                            :key="option[item.originDataProp ? item.originDataProp.value : 'value']"
                            :label="(item.valuePrefix ? item.valuePrefix : '') + option[item.originDataProp ? item.originDataProp.label : 'label'] + (item.valueSuffix ? item.valueSuffix : '')"
                            :value="option[item.originDataProp ? item.originDataProp.value : 'value']"></el-option>
                    </el-select>
                </div>
                <div class="paatSearchForm__content" v-if="item.type == 'date-picker'">
                    <div class="paatSearchForm__separator">
                        <el-date-picker v-model="optionsPara[item.dataProp[0]]" :type="item.dateType" placeholder="选择日期" :format="item.format||'yyyy-MM-dd'" :value-format="item.valueFormat||'yyyy-MM-dd'"></el-date-picker>
                        <span>{{item.separator||'-'}}</span>
                        <el-date-picker v-model="optionsPara[item.dataProp[1]]" :type="item.dateType" placeholder="选择日期" :format="item.format||'yyyy-MM-dd'" :value-format="item.valueFormat||'yyyy-MM-dd'"></el-date-picker>
                    </div>
                </div>
            </el-col>
            <el-col class="paatSearchForm__item" :span="8 * (3 - searchFormOptions.length%3)">
                <div class="paatSearchForm__content paatSearchForm__content--right" >
                    <el-button type="primary" @click="optionsPara = {...baseOptionsPara}">重置</el-button>
                    <el-button type="primary" @click="pushParams">查询</el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'PaatSearchForm',
    inject: {},
    props: {
        searchFormOptions: { type: Array, default: [] },
    },
    data(){
        return {
            optionsPara: {},
            baseOptionsPara: {},
        }
    },
    created: function(){
        this.searchFormOptions.forEach(item => {
            if(Object.prototype.toString.call(item.dataProp) == '[object Array]'){
                this.$set(this.optionsPara, item.dataProp[0], item.defaultValue ? item.defaultValue[0] : '') 
                this.$set(this.optionsPara, item.dataProp[1], item.defaultValue ? item.defaultValue[1] : '') 
            }else{
                this.$set(this.optionsPara, item.dataProp, item.defaultValue || (item.multiple ? [] : '') ) 
            }
        });
        this.baseOptionsPara = {...this.optionsPara};
        this.pushParams();
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