<template>
  <div class="about">
    <div class="wrapper" ref="wrapper">
      <ul class="uls">
        <li class="lis" v-for="(item,index) in getList" :key="index+'key'">{{item.name}}</li>
        <div
          v-if="loadText"
          style="color:#ccc;"
          class="loadText"
          @click="getPullListData"
        >{{loadText}}</div>
      </ul>
    </div>
    <div class="loading" v-show="show">{{loadingText}}</div>
  </div>
</template>
<script>
const list1 = [{ name: '列表数据1' }, { name: '列表数据2' }, { name: '列表数据3' }, { name: '列表数据4' }, { name: '列表数据5' }, { name: '列表数据6' }, { name: '列表数据7' }, { name: '列表数据8' }, { name: '列表数据9' }, { name: '列表数据10' }, { name: '列表数据11' }, { name: '列表数据12' }, { name: '列表数据13' }, { name: '列表数据14' }, { name: '列表数据15' }, { name: '列表数据12' }, { name: '列表数据12' }, { name: '列表数据12' }, { name: '列表数据12' }, { name: '列表数据12' }, { name: '列表数据16' }, { name: '列表数据17' }, { name: '列表数据18' }, { name: '列表数据19' }, { name: '列表数据20' }, { name: '列表数据21' }, { name: '列表数据22' }, { name: '列表数据23' }];

const list2 = [{ name: '下拉加载数据1' }, { name: '下拉加载数据2' }, { name: '下拉加载数据3' }, { name: '下拉加载数据4' }, { name: '下拉加载数据5' }]

let timer = null;
let timer2 = null;

import BScroll from 'better-scroll'
export default {
  data () {
    return {
      loadText: '上拉加载更多',
      getList: [],
      pagenum: 1,
      pagesize: 5,
      total: 0,
      scroll: 0,
      show: false,
      loadingText: '加载中...'
    }
  },
  created () {
    this.getList = list1;
  },
  mounted () {
    this.scroll = new BScroll('.wrapper', {
      scrollY: true,
      click: true,
      probeType: 1
    });
    // 监听滚动事件
    this.scroll.on('touchEnd', (position) => {
      if (position.y < this.scroll.maxScrollY - 30) {
        this.getPullListData()
      }
      if (position.y > 80) {
        this.getDownListData();
      }
    });
  },
  methods: {
    getPullListData () {
      this.$nextTick(() => {
        if (this.loadText === '上拉加载更多') {
          this.show = true;
          timer = setTimeout(() => {
            this.getList = [...this.getList, ...list2];
            this.show = false;
          }, 1000)
          this.loadText = '上拉加载更多'
        }
      })
    },
    getDownListData () {
      this.$nextTick(() => {
        this.show = true;
        this.loadingText = '刷新中...'
        timer2 = setTimeout(() => {
          this.getList = [...list1];
          this.show = false;
        }, 1000)
      })
    }
  },
  destroyed () {
    clearTimeout(timer2);
    clearTimeout(timer);
  }
}
</script>
<style>
.wrapper {
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  font-size: 100px;
  text-align: center;
}

.uls {
  width: 100%;
}
.uls .lis {
  width: 100%;
  margin-top: 150px;
  margin-bottom: 150px;
}
.loadText {
  padding-bottom: 150px;
}

.loading {
  width: 500px;
  height: 300px;
  line-height: 300px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  margin: 0 auto;
  text-align: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 100px;
  border-radius: 30px;
}
</style>