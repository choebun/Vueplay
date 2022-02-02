<template lang="pug">
div.record-list
    ul.record
        li(v-for="(record,rid) in records",
        style="{'animation-delay': rid+'s'}"
        )
            span.cate {{record.cate}}類
            span.date {{record.date}}日
            span.price {{record.price}}金幣
            span.price {{rid}} 我ㄉRID
            button(@click="toggleremove(record)") remove
    h3 統計: {{total}}
</template>

<script>
export default {
    props:["records"],
    data () {
        return {
        }
    },
    methods:{
        toggleremove(record){
            console.log("toggleeventy")
            this.$emit("removeListitem",{record})
        }
    },
    computed:{
        total(){
            return this.records.reduce((total,record)=>total+record.price,0)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='sass'>
@keyframes fadeIn
    0%
        opacity: 0
    100%
        opacity: 1
.record-list
    .record
        li
            display: flex
            border: 2px solid #000
            padding: 5px
            animation: fadeIn 2s
            .cate
                flex: 5
            .date
                flex: 1
</style>
