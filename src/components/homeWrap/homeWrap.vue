<template>
  <div class="homeWrap">
  	<div class="title_wrap">
  		 <div class="tab_title">猫眼电影</div>
	     <div class="title">
	        <div class="cat_icon"><img src="./img/caticon.png" alt=""></div>
	        <div class="cat_text">
	          <p>猫眼</p>
	          <p>在线选座，热门影讯，爱上看电影</p>
	        </div>
	     </div>  		
  	</div>
  	<div id="navigation_wrap" :class="searchBarFixed == true ? 'navigation_fixed' :''">
  	  <div class="navigation" ref="navigation">
	  		<span class="address">上海</span>
	  		<div class="tab_list">
		  		<router-link class="tab_item" ref="tab01" to="/wellReceived">
		  		 热映
		  		</router-link>
		  		<router-link class="tab_item" to="/cinema">
		  			影院
		  		</router-link>
		  		<router-link class="tab_item" to="/classicMovies">
		  		  经典电影
		  		</router-link>  			
	  		</div>
      </div>
  	</div>
    <router-view/>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
	data () {
    return {
      searchBarFixed: Boolean,
    }
	},
	created () {
    window.addEventListener('scroll', this.scrollHandle, true)
	},
  mounted () {

  },
  methods: {
    scrollHandle () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // 获取页面滚动距离顶部的高度

      //当距离顶部距离为1901时候， 让tab固定
      if(scrollTop > 40) {
         this.searchBarFixed = true
      }else {
      	this.searchBarFixed = false
      }
    }
  }
}
</script>

<style scoped>
  .tab_title {
  	height: 50px;
  	line-height: 50px;
  	background-color: #f82312;
  	text-align: center;
  	color: #fffdfd;
  	font-size: 18px;
  	position: fixed;
  	left: 0;
  	right: 0;
  	z-index: 100;
  }
  .title_wrap {
  	border-bottom: #ececed solid 1px;
  }
	.title {
	  display: flex;
	  height: 60px;
	  padding-top:15px;
	  padding-top: 60px;
	}
	.cat_icon {
		width: 80px;
	}
	.cat_icon img {
		width: 60%;
		margin-left: 20px;
	}
	.cat_text p:first-child {
		font-size: 18px;
		margin-top: 2px;
		margin-bottom: 8px;
	}
	.cat_text p:last-child {
		font-size: 10px;
		color: #999;
	}
	.navigation {
		display: flex;
		height: 40px;
		line-height: 40px;
		border-bottom: #ccc solid 1px;
	}
	.navigation_fixed {
		height: 40px;
		line-height: 40px;
		border-bottom: #ccc solid 1px;	
		width: 100%;
		background-color: white;	
		position: fixed;
		left: 0;
		top: 40px;
		z-index: 100;
	}
	.address {
		width: 80px;
		text-indent: 10px;
	}
	.tab_list {
		flex: 1
	}
	.tab_item {
    text-decoration: none;
    display: inline-block;
    width:25%;
    font-weight: bold;
    text-align: center;
	}
	.tab_item.router-link-active {
		color: #fc240e;
		border-bottom: #fc240e solid 1px;
	}
	.line {
		display: block;
		width: 20px;
		height: 3px;
		position: relative;
		left: 35%;
		top:-3px;
		background-color: red;
	}

</style>
