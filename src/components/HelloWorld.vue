<template lang="pug">
#app
  h1 記帳城市
  hr
  Recordlist(v-bind:records="records"
            @removeListitem="list1removeitem")
  h1 第二個人
  Recordlist(v-bind:records="records2"
            @removeListitem="list2removeitem")
  hr
  input(v-model="newRecord.cate", placeholder="家cate啦")
  input(v-model="newRecord.date", placeholder="家date啦")
  input(v-model.number="newRecord.price", placeholder="家price啦")
  button(@click="addrecord") 送出
</template>

<script>
// import ggg from './nice.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      newRecord:{

      },
      records:[
        {
          date:"2087/8/9",
          price:500,
          cate:"pork"
        },
        {
          date:"2087/8/9",
          price:300,
          cate:"beaf"
        },
        {
          date:"2087/8/9",
          price:200,
          cate:"milk"
        },
        {
          date:"2087/8/9",
          price:200,
          cate:"milk"
        }
      ],
      records2:[
        {
          date:"2077/8/9",
          price:500,
          cate:"pork"
        },
        {
          date:"2487/8/9",
          price:300,
          cate:"beaf"
        }
      ]
    }
  },
  // components:{
  //   Recordlist:ggg
  // },
  methods:{
    list1removeitem(obj){
      console.log(obj)
      console.log("app reveive event from child")
      this.records=this.records.filter(item=>item!==obj.record)
    },
    list2removeitem(obj){
      console.log(obj)
      console.log("app reveive event from child")
      this.records2=this.records2.filter(item=>item!==obj.record)
    },
    addrecord(){
      this.records.push(this.newRecord)
    }
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='sass'>

</style>
