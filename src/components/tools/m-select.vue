<template>
    <div :class="{'select-wrapper':true,'unable':disabled}"
    v-document-click="documentClick"
    @click="handelClick">
        <div class="choose">
            {{selectValue.name|| selectValue || type}}
            <i class="el-icon-caret-bottom icon" />
        </div>
        <div class="list"
        v-show="flag&&active">
            <h3>{{type}}</h3>
            <div class="list-col"
            v-for="(item,index) in renderList"
            :key="index">
                <span 
                :class="{'active':tag == activeTag}"
                v-for="(tag,tagIndex) in item"
                :key="tagIndex"
                @click="tagClick(tag,$event)">
                {{tag.name || tag}}
                </span>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
            activeTag:'',
            flag:false,
            selectValue:''
        }
    },
    props:['type','list','active','disabled'],
    computed:{
        renderList:function () {
            let data = this.list
            let Nlist = []
            let col = Math.ceil( data.length / 12);
            for(let i = 0; i < col; i++) {
                Nlist.push( data.slice(i*12,i*12+12) )
            }
            return Nlist
        },
    },
    methods:{
        handelClick(e){
            if(this.disabled == true){
                return 
            }
            e.stopPropagation();
            this.flag = true;
            this.$emit('active')
            
        },
        documentClick(){
            this.flag = false;
        },
        tagClick(val,e) {
            e.stopPropagation();
            this.flag = false;
            this.selectValue = val;
            this.activeTag = val;
            this.$emit('changeProvince',this.activeTag);
            this.$emit('changeCity',this.activeTag)
        }
    },
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/tools/m-select.scss';
</style>>