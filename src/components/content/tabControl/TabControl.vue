<template>
  <div class="tab-control">
    <div v-for="(item,index) in title" 
        :key="index" class="tab-control-item" 
        :class="{active: currtIndex == index}"
        @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>

  export default {
    name:'TabControl',
    props:{
      title:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data() {
      return {
        currtIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.currtIndex = index
      }
    }
  }

</script>
<style less scoped>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 15px;
  line-height: 40px;
  background-color: #fff;
}
.tab-control-item{
  flex:1;
}
.tab-control-item span{
  padding: 5px;
}
.active{
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>