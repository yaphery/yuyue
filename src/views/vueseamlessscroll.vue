<template>
  <div class="vueseamlessscroll">
    <ul>
      <vue-seamless-scroll
        :data="data"
        :class-option="defaultOption"
        class="scroll"
      >
        <li v-for="(item, index) in data" :key="index">
          {{ item }}
        </li>
      </vue-seamless-scroll>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  computed: {
    defaultOption() {
      return {
        step: 0.5, // 数值越大速度滚动越快
        limitMoveNum: 6, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 112, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
      };
    },
  },
  methods: {
    getData() {
      for (let i=0;i<100;i++) {
        this.data.push(i + 1);
      }
    },
  },
  created(){
      this.getData()
  }
};
</script>

<style scoped>
.vueseamlessscroll {
  height: 500px;
}
.vueseamlessscroll > ul {
  height: 100%;
}
.vueseamlessscroll ul li {
  line-height: 1.8;
  border: 1px solid red;
}
.scroll {
  height: 100%;
  overflow: hidden;
}
</style>
