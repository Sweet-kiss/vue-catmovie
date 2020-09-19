<template>
  <div id="wellReceived" ref="wellReceived">
    <div class="movie_content" ref="movie_content">
       <div class="goodMovie">最受好评电影</div>
       <good-movie :movieList="movieList"></good-movie>
       <div class="wellReceived_wrap" ref="wellReceived_wrap">
         <ul>
           <li class="movie_lists" v-for="(item, index) in getList" :key="item.id" @click="gotoMovieDetail(item.id)">
            <div class="movieImg"><img :src="require('static/movieimg/'+item.imgsrc+'.png')" alt="图片"></div>
            <div class="movie_text">
              <p class="movie_title">{{item.movie_name}}<span><img src="" alt=""></span></p>
              <p class="score">观众评<span>{{item.score}}</span></p>
              <p class="toStar">{{item.toStar}}</p>
              <p class="Screening">今天<span>{{item.Number_of_cinemas}}</span>家影院放映<span>{{item.Field_number}}</span>场</p>
            </div>
            <div class="BuyTickets" @click.stop="BuyTickets(item.id)">购票</div>            
           </li>
           <div v-if="loadText" class="loadText" @click="getPullListData">{{loadText}}</div>
         </ul>
       </div>
       <div class="loading" v-show="show">{{loadingText}}</div>
    </div>
  </div>
</template>

<script>
let timer = null;
let timer2 = null;
import BScroll from "better-scroll"
import GoodMovie from '@/components/baseAssembly/goodMovie/goodMovie'
export default {
  name: 'wellReceived',
  data () {
   return {
   	 movieList: Array,
     wellReceived: Array,
     loadText: "上拉加载更多。。。" ,
     show: false,
     loadingText: '加载中...',
     getList: [],
     getList2:[]//加载数据集合
   }
  },
  components: {
  	GoodMovie
  },
  mounted () {
    this.scroll = new BScroll('.wellReceived_wrap',{
      scrollY: true,
      click: true,
      probeType: 1
    })
    // 监听滚动事件
    this.scroll.on('touchEnd',(position)=>{
      if(position.y < this.scroll.maxScrollY - 20) {
        this.getPullListData()
      }
      if (position.y > 80) {
        this.getDownListData();
      }
    })
  },  
  created(){ 	
    this.getMovieList()
    let _this = this
    this.$axios.get("/api/goodmovie").then(function(res){ 
      let wellList = res.data.data.data.wellReceived    
      _this.getList = wellList.slice(0,5)
    })

  },
  methods: {
    BuyTickets(id) {
       this.$router.push({path:'/setSelect',query: { id: id }})
    },
    gotoMovieDetail(id) {
       this.$router.push({path:'/movieDetail',query: { id: id }})
    },
    getMovieList() {
      let _this = this
      this.$axios.get("/api/goodmovie").then(function(res){       
        _this.movieList = res.data.data.data.goodMovie
      })      
    },
    wellReceivedList(a,b) {
      this.$axios.get("/api/goodmovie").then(function(res){ 
        let wellList = (res.data.data.data.wellReceived).slice(a,b)    
        return wellList
      })
    },
    getPullListData(){
      this.$nextTick(()=>{
        if(this.loadText === '上拉加载更多。。。'){
          this.show = true;
          let _this = this
          console.log(_this.getList.length,_this.getList.length+5,"jjjj")
          let start = _this.getList.length
          let end = _this.getList.length+5

          this.$axios.get("/api/goodmovie").then(function(res){           
             let response = res.data.data.data.wellReceived 
              console.log(start,end)
             console.log(response.slice(start,end),"mmmmmvvvv")

            _this.getList2 = response.slice(start,end) 
            console.log(_this.getList2,"bbb")              
         })

          // this.getlist2 = this.wellReceivedList(this.getList.length,this.getList.length+6)
           console.log(this.getList,"xxxxxsss")
           console.log(this.getlist2,"vvvvvvvv")
          this.getList = [...this.getList, ...this.getlist2];

          this.show = false;           
          
          console.log(this.getList,"ll")
          this.loadText = '上拉加载更多。。。'
        }
      })
    }
  }
}
</script>

<style>
.goodMovie {
	height: 40px;
	line-height: 40px;
	font-size: 13px;
	text-indent: 20px;
}
.wellReceived_wrap {
  margin-top: 10px;
}
.movie_lists {
  display: absolute;
  display: flex;
  padding: 5px;
}
.BuyTickets {
  position: relative;
  right: 10px;
  top: 20px;
  width: 45px;
  height:28px;
  line-height: 28px;
  text-align: center;
  font-size: 12px;
  border-radius: 5px;
  background-color: red;
  color: white;
  z-index: 1000;
}
.movieImg {
  width: 100px;
  text-align: center;
}
.movieImg img {
  width: 70px;
  height: 90px;
}
.movie_text {
  flex: 1;
 border-bottom:#ccc solid 1px;
}
.movie_title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}
.score {
  font-size: 13px;
  color: #7d7b7b;
}
.score span {
  margin-left: 5px;
  color: #f8661e;
  font-weight: bold;
}
.toStar {
  margin-top: 8px;
  font-size: 13px;
  margin-bottom: 8px;
  color: #7d7b7b;
}
.Screening {
  font-size: 13px;
  color: #7d7b7b;
}

.loadText {
  padding: 10px;
  text-align: center;
}
</style>
