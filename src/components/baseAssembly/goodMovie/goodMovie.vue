<template>
  <div id="goodMovie">
   <div class="movie_wrap" ref="movie_wrap">
   	 <ul class="movieList" ref="movieList">
   	 	 <li class="movie_list" v-for="(item, index) in movieList">
   	 	 	 <img :src="require('static/movieimg/'+item.imgsrc+'.png')" alt="图片">
   	 	 	 <p>{{item.movieName}}</p>
   	 	 </li>
   	 </ul>
   </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
  name: 'goodMovie',
  data () {
  	return {

  	}
  },
  props: {
  	movieList: {
  		type: Array
  	}
  },
  created () {
  	console.log(this.movieList,"传值")
    this.$nextTick(() => {
       this.movieScroll()
    })
  },
  methods: {
    movieScroll () {
       //默认又10个元素， 每个元素的宽度为85px;
       let width = 10 * 85 + 140
       this.$refs.movieList.style.width = width + "px";
       console.log(this.$refs.movieList.style.width)
       // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
      this.$nextTick(() => {
        if(!this.scroll) {
           this.scroll = new BScroll(this.$refs.movie_wrap, {
              startX: 0,
              click: true,
              scrollX: true,
              scrollY: false,
              eventPassthrough: "vertucal"
           })
         } else {
            this.scroll.refresh()
         }
      })
    }
  }
}
</script>

<style>
.goodMovie {
  z-index: -1;
}
.movie_wrap {
  width: 370px;
  overflow: hidden;
}
.movie_wrap ul {
  white-space: nowrap;
  padding-left: 15px;
}
.movie_wrap ul li {
  display: inline-block;
  width: 85px;
  height: 50px;
  margin-right: 15px;
}
.movie_wrap ul li img {
  width: 100%;
  height: 120px;
  overflow: hidden;
}
.movie_wrap ul li p {
  width: 100%;
  font-size: 10px;
  height: 20px;
  line-height:20px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
