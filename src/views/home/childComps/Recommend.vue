<template>
  <div class="recommend">
    <div v-for="(item, index) in recommend" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>

  export default {
    name:'Recommend',
    props:{
      recommend:{
        type: Array,
        default(){
          return []
        }
      }
    },
    components: {}
  }

</script>
<style less scoped>
.recommend{
  display: flex;
  width: 100%;
  font-size: 12px;
  margin-bottom: 10px;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.recommend-item{
  flex: 1;
  text-align: center;
}
.recommend-item img{
   width: 70px;
  height: 70px;
}
</style>