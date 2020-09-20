<template>
  <div class="cinema">
    <div class="Screening_criteria">
      <div class="address"><p>全城 <span class="icon"></span></p></div>
      <div class="brand" @click="showAllbrand($event)"><p>品牌 <span class="icon"></span></p></div>

      <div class="characteristic"><p>特色 <span class="icon"></span></p></div>
    </div>
    <div class="All_brand" v-if="isShow">
        <ul>
          <li>全部</li>
          <li>SFC上影影城</li>
          <li>万达影城</li>
          <li>大地影院</li>
          <li>百丽宫影城</li>
          <li>大光明电影院</li>
          <li>橙天嘉禾影城</li>
        </ul>
      </div>
      <div class="zhezhao" v-if="isShow"></div>
    <div class="cinemaLists_wrap">
      <div class="cinemaLists" v-for="item in NewCinemalists">
        <div class="cinemaName"><span>{{item.name}}</span><span class="price_all">{{item.price}}<span>元起</span> </span></div>
        <div class="cinema_address"><span>{{item.address}}</span><span>{{item.distance}}</span></div>
        <div class="discount_wrap">
          <span  v-for="item1 in item.discount" 
          :class="[item1==='小吃'||item1==='折扣卡'?'discount':'label']">{{item1}}</span>
        </div>
        <div class="information"><span class="card">卡</span>{{item.imformation}}</div>        
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      Cinemalists: [],
      isShow: false
    }
  },
  created () {
    this.getCinemalists()

  },
  methods: {
    getCinemalists () {
      let _this = this
       this.$axios.get("/api/goodmovie").then(function(res){       
        _this.Cinemalists = res.data.data.data.cinemaLists
        console.log(_this.Cinemalists)

      })
    },
   sortKey(array, key) {
    return array.sort((a,b)=>{
     let re = /\d+/g
     var val1 = parseFloat(a[key])
     var val2 = parseFloat(b[key])
     return val1 - val2;
    })
   },
   showAllbrand(ev) {
     this.isShow = !this.isShow
 　　if (!this.$refs.msk.contains(ev.target)) {
　　　　　this.isShow = false;
　　　}
   }
  },
  computed: {
    NewCinemalists () {
       return this.sortKey(this.Cinemalists,"distance")
    }
  }
}
</script>
<style>
.cinema {
  clear: both;
}
.Screening_criteria {
  display: flex;
  height: 30px;
  line-height: 30px;
  border-bottom: #ccc solid 1px;
}
.address,.brand,.characteristic {
  width: 33.3%;
  text-align: center;
  font-size: 12px;
}
.address,.brand {
  border-right:#ccc solid 1px; 
}
.icon {
  display: inline-block;
  width: 10px;
  height: 10px;
  background:url("./img/arr_b.png");
  background-size: cover;
}
.cinemaLists {
  padding: 10px 20px;
  border-bottom: #efeeed solid 1px;
}
.cinemaName {
  font-size: 17px;
  margin-bottom: 10px;
}
.price_all {
  font-size: 20px;
  color: red;
}
.price_all span {
  font-size: 14px;
}
.cinema_address span:first-child{
  display: inline-block;
  font-size: 13px;
  color: #7b7b7b;
  width: 250px;
  margin-right: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

}
.cinema_address span:last-child {
   font-size: 14px;
   color: #7b7b7b;
}
.discount_wrap {
  padding: 5px 0;
}
.discount {
  display: inline-block;
  font-size: 10px;
  padding: 1px 2px;
  color: #fabd6d;
  border: #fabd6d solid 1px;
  border-radius: 3px;
  margin-right: 6px;
}
.label {
  font-size: 10px;
  padding: 1px 2px;
  color: #91b6ce;
  border: #91b6ce solid 1px;
  border-radius: 3px;
  margin-right: 6px;  
}
.information {
  font-size: 12px;
  color: #949596;
}
.card {
  display: inline-block;
  width: 15px;
  height: 15px;
  text-align: center;
  line-height: 15px;
  background-color: #48aceb;
  color: #fff;
  border-radius: 2px;
  margin-right: 5px;
  margin-bottom: 10px;
}
.Screening_criteria {
  position: relative;
}
.All_brand {
  width: 100%;
  background-color: #fff;
  z-index: 3;
  position: absolute;
  top:193px;
  left: 0;
}
.All_brand ul li {
  height: 40px;
  line-height: 40px;
  text-indent: 40px;
  border-bottom: #ccc solid 1px;
}
.zhezhao {
  width: 100%;
  height: 100%;
  position: absolute;
  top:0;
  left: 0;
  background-color: rgb(0,0,0,.5);
}
</style>