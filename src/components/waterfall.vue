<template>
  <div style="height: 100vh">
    <ul class="waterfallUl" ref="waterfallUlId" id="waterfallUlId">
      <li
        v-for="(item, index) in data"
        :key="index"
        :style="{ width: liWidth }"
        :ref="'waterfall' + index"
        v-show="waterfallShow"
      >
        <img
          :src="item.img"
          :style="{ width: imgWidth }"
          :width="imgWidth"
          alt=""
        />
        <p class="contP">{{ item.txt }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "water-fall",
  props: {
    itemObj: {
      default() {
        return {
          margin: 15,
          padding: 6,
        };
      },
    },
  },
  data() {
    return {
      column: 3,
      data: [
        {
          img: "http://wlog.cn/demo/waterfall/images/001.jpg",
          txt: "http://wlog.cn/demo/waterfall/images/001.jpghttp://wlog.cn/demo/waterfall/images/001.jpghttp://wlog.cn/demo/waterfall/images/001.jpg",
        },
        {
          img: "http://wlog.cn/demo/waterfall/images/002.jpg",
          txt: "http://wlog.cn/demo/waterfall/images/002.jpg",
        },
        {
          img: "http://wlog.cn/demo/waterfall/images/003.jpg",
          txt: "http://wlog.cn/demo/waterfall/images/003.jpg",
        },
        {
          img: "http://wlog.cn/demo/waterfall/images/004.jpg",
          txt: "http://wlog.cn/demo/waterfall/images/004.jpghttp://wlog.cn/demo/waterfall/images/004.jpghttp://wlog.cn/demo/waterfall/images/004.jpg",
        },
        {
          img: "http://wlog.cn/demo/waterfall/images/009.jpg",
          txt: "http://wlog.cn/demo/waterfall/images/009.jpg",
        },
        {
          img: "http://wlog.cn/demo/waterfall/images/006.jpg",
          txt: "http://wlog.cn/demo/waterfall/images/006.jpg",
        },
        {
          img: "http://wlog.cn/demo/waterfall/images/007.jpg",
          txt: "http://wlog.cn/demo/waterfall/images/007.jpg",
        },
          {
          img: "http://wlog.cn/demo/waterfall/images/009.jpg",
          txt: "http://wlog.cn/demo/waterfall/images/009.jpg",
        },
        {
          img: "http://wlog.cn/demo/waterfall/images/006.jpg",
          txt: "http://wlog.cn/demo/waterfall/images/006.jpg",
        },
        {
          img: "http://wlog.cn/demo/waterfall/images/007.jpg",
          txt: "http://wlog.cn/demo/waterfall/images/007.jpg",
        },
      ],
      waterfallShow: false,
    };
  },
  methods: {
    waterFallFn() {
      let _this = this;
      function getHeight(num) {
        var lh = 0;
        for (let i = 0; i < Math.floor(num / _this.column); i++) {
          let _i = num - _this.column * (i + 1);
          lh += _this.$refs["waterfall" + _i][0].offsetHeight;
        }
        return { lh };
      }
      this.data.map((d, i) => {
        let { lh } = getHeight(i);
        let pce = (100 / this.column) * (i % this.column);
        this.$refs["waterfall" + i][0].style.left = `calc( ${pce}% + ${
          this.itemObj.margin / 2
        }px )`;

        this.$refs["waterfall" + i][0].style.top =
          lh + this.itemObj.margin * Math.floor(i/this.column) + "px";
      });
    },
  },
  computed: {
    liLife() {
      let pce = 100 / this.column;
      let width = `calc( ${pce}% + ${this.itemObj.margin / 2}px )`;
      return width;
    },
    liWidth() {
      let pce = 100 / this.column;
      let width = `calc( ${pce}% - ${this.itemObj.padding * 2}px )`;

      return width;
    },
    imgWidth() {
      let pce = 100;
      //   let pce = 100 / this.column;
      let width = `calc( ${pce}% - ${this.itemObj.padding * 2}px )`;

      return width;
    },
  },
  mounted() {
    this.waterfallShow = true;

    setTimeout(() => {
      this.waterFallFn();
    }, 1000);
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.waterfallUl {
  /* display: flex;
  flex-wrap: wrap; */
}
.waterfallUl li {
  list-style: none;
  border: 1px solid red;
  /* margin-top: 10px; */
  height: fit-content;
  position: absolute;
  /* padding: 10px; */
}
.waterfallUl li:nth-child(2n) {
  /* margin-left: 10px; */
}
.contP {
  width: 100%;
  word-break: break-all;
}
</style>
