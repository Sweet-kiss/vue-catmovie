<template>
  <div class="movieDetail">
    <div class="detail_title">猫眼电影>{{getDetail.movie_name}}</div>
    <div class="shortIntroduction_wrap">
    	 <div class="movite_img"><img :src="require('static/movieimg/'+getDetail.imgsrc+'.png')" alt="图片"></div>
    	 <div class="movite_text">
    	 	  <div class="movieTitle">{{getDetail.movie_name}}</div>
    	 	  <ul class="text_wrap">
    	 	  	<li>{{getDetail.theme}}</li>
    	 	  	<li>{{getDetail.toStar}}</li>
    	 	  	<li>{{getDetail.ReleaseTime}}</li>
    	 	  </ul>
    	 	  <div class="btn_w">
    	 	  	 <div class="wantlook">想看</div>
    	 	  	 <div class="looked">看过</div>
    	 	  </div>
    	 </div>
    </div>
    <div class="shrink"><span>简介</span> <span @click="opentext()">{{open_Or_close}}</span></div>
    <div class="Introduction_n" :class="{'shenlue': show_oo}">
    	 {{getDetail.briefIntroduction}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
  	return {
       getDetail: Object,
       open_Or_close:"展开",
       show_oo: true
  	}
  },
  created () {
    console.log(this.$route.query.id,"ll")
    this.getmovieDetails ()
  },
  mounted () {

  },
  methods: {
    getmovieDetails () {
    	 let index =[...(this.$route.query.id)][2]
    	 let _this = this
    	 console.log(index, "nn")
    	this.$axios.get("/api/goodmovie").then((res)=>{
    		 _this.getDetail = res.data.data.data.movieDetail[index-1]
    	})
    },
    opentext () {
    	 this.show_oo = !this.show_oo
       this.open_Or_close[this.show_oo?"展开":"收起"]
    }
  }
}
</script>

<style>
.movieDetail {
	padding-top: 10px;
	background-color: #66292A;
	min-height: 100vh;
}
.detail_title {
	padding: 0 20px;
	height: 40px;
	line-height: 40px;
	color: #ccc;
	font-size: 14px;
}
.shortIntroduction_wrap {
	padding: 0 20px;
	display: flex;	
}
.movite_img {
	width: 100px;
	height: 125px;
	background-color: white;
}
.movite_img img {
	width: 100%;
	height: 100%;
}
.movite_text {
	flex: 1;
	padding: 0 10px;
}
.movieTitle {
	font-size: 22px;
	color: white;
	font-weight: bold;
	margin-top: 3px;
	margin-bottom: 10px;
}
.text_wrap li {
	font-size: 12px;
	margin-bottom: 8px;
	color: #ccc;
	opacity: 0.7
}
.btn_w {
	display: flex;
}
.wantlook,.looked {
	flex: 1;
	width: 80px;
	height: 30px;
	line-height: 30px;
	font-size: 14px;
	border-radius: 5px;
	text-align: center;
	background-color:rgb(255,255,255,0.4);
	color: #fff;
}
.looked {
	margin-left: 10px;
}
.Introduction_n {
	padding: 0 20px;
	margin-top: 10px;
	color: #fff;
	font-size: 15px;
	line-height: 28px;
	height: 140px;
}
.shenlue {
	overflow : hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 5;
	-webkit-box-orient: vertical;	
}

.shrink {
	padding: 0 20px;
	margin-top: 20px;
	font-size: 15px;
	color: #fff;
}
.shrink span:last-child {
	display: inline-block;
	float: right;

	text-align: right;
}
</style>
