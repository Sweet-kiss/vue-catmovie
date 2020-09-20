<template>
  <div class="setSelect">
     <p class="cinema"><span class="back_arrow"@click='prev'><</span>万画影城</p>
     <div class="screen">2号厅银幕</div>
     <div class="screen_nn"></div>

   	 <div class="seat" style="margin-top: 20px;">
       <div class="row" v-for="(item,i) in setList">
       	 <div class="sit" style="margin-right:10px;float: left;">{{i+1}}</div>
         <div style="float: left;" v-for="(item1,j) in item" :class="['sit',{'bg-temp':item1==3}, {'bg-sited':item1==2},{'bg-sit':item1==1},{'bg-nosit':item1==0}]" @click="selectSeat(item1,i,j)">
         	
         </div>
       </div>
   	 </div>

     <div class="TipsWrap">
     	 <div class="optional"><span></span>可选</div>
     	 <div class="sold"><span></span>选中</div>
     	 <div class="mustnot"><span></span>不可售</div>
     </div>
     <div class="buyTicket_information">
     	 <div class="moviteTitle">花木兰 <span class="price">{{filmPrice}}</span></div>
     	 <div class="ShowTime">今天 9月19日 22:25-00:20 <span>中文配音3D</span></div>
     	 <div class="buy_msg"  v-for="sit in msg">
     	 	  <span class="setMsg">{{sit|f3}}</span>
     	 </div>
     	 <div class="totalPrice">合计： <span>￥{{filmPrice*msg.length|price}}</span></div>
     </div>
     <div class="btnWrap">{{sel_msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'setSelect',
  data() {
  	return {
  		setList:[
  		  [1, 1, 2, 2, 1, 0, 1, 2, 1, 1],
				[1, 1, 2, 2, 1, 2, 1, 2, 1, 0],
				[1, 1, 2, 2, 1, 0, 1, 2, 1, 1],
				[1, 1, 2, 0, 1, 0, 1, 2, 1, 1],
				[0, 1, 2, 2, 1, 0, 1, 2, 1, 2],
				[0, 1, 2, 2, 1, 0, 1, 2, 1, 0],
				[0, 1, 2, 2, 1, 2, 1, 2, 1, 1],
				[1, 1, 2, 2, 1, 2, 1, 2, 1, 0]
  		],
  		filmPrice: "35.8",
  		isSelected: false,
  		activeIndex: null,
  		// 已选座位数
			msgCount: 0,
			// 选座信息
			msg: [],
			sel_msg: "请先选座"
  	}
  },
  methods: {
  	prev(){
		  this.$router.go(-1)

		},
  	selectSeat(data,x,y){
      console.log(data,x,y,"信息")
      if(data==1 && this.msgCount <= 3) {
      	this.$set(this.msg, this.msgCount++, [x, y]);
      	this.setList[x][y] = 3;
      	console.log(this.setList,"jj")
      }else if (data == 3) {
      	// 用于记录要删除的座位下标
      	console.log(this.msg,"bbb")
      	let temp = null;
      	for(let i=0; i<this.msg.length; i++) {
				  if (this.msg[i][0] == x && this.msg[i][1] == y) {
				  	  temp = i;
							break;
					}
      	}
      	this.msgCount--;
				this.$delete(this.msg, temp);
				this.setList[x][y] = 1;
      }else {
					if (this.msgCount == 4) {
					alert("最多只能订4张票！");
					// alert("最多只能订4张票！")
				}
			}
  	}
  },
	// 过滤器
	filters: {
		// 选座信息过滤器
		f3(data) {
			return (data[0] + 1) + "排 | " + (data[1] + 1) + "座";
		},
		// 价格过滤器,数字保留两位小数
		price(data) {
			let price = parseFloat(data);
			return price.toFixed(2);
		}
	},
	watch: {
		msgCount(val) {
			if(this.msgCount){
				this.sel_msg = "确认选票"
			}else {
				this.sel_msg = "请先选座"
			}
			
			// this.msgCount?this.sel_msg = "确认选票":"请先选座"
		}
	}
}
</script>

<style>
.back_arrow {
	position: absolute;
	left: 10px;
	top:0;
}
.setSelect {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: #f6f6f7;
}
.cinema {
	text-align: center;
	height: 50px;
	line-height: 50px;
	font-size: 20px;
	background-color: red;
	color: #fff;
	margin-bottom: 10px;
}
.row {
	clear: both;
}
.screen {
	font-size: 12px;
	text-align: center;
}
.screen_nn {
	width: 98%;
	height: 2px;
	background-color: #ccc;	
	margin:0 auto;
	margin-top: 10px;
}
.sit_wrap {
	display: flex;
	margin-top: 30px;
}
.RowNumber ul {
	width: 20px;
	background-color: #ccc;
	padding: 5px 0;
	padding-bottom: 10px;
	margin-left: 8px;
	border-radius: 10px;
}
.seat {
	flex: 1;
	padding-left: 15px;
	padding-right: 5px;
}
.RowNumber ul li {
	text-align: center;
	margin-top:10px; 
	color: white;
}
.seatClass {
	width: 20px;
	height: 20px;
	background-color: white;
	border-radius: 3px;
	float: left;
	margin-left: 9px;
	margin-top: 5px;
}
.TipsWrap {
	clear: both;
  padding: 20px 0;
  display: flex;
}
.optional,.sold,.mustnot {
	flex: 1;
	padding-left: 23px;
}
.optional span,.sold span,.mustnot span{
	display: inline-block;
	width: 20px;
	height: 20px;
	border-radius: 3px;
	margin-right: 10px;
	vertical-align: top; 
}
.optional span {
  background: url('./img/bg-sit.png');
  background-size: cover;
}
.sold span {
	background-image: url('./img/bg-temp.png');
	background-size: cover;
}
.mustnot span {
	background-image: url('./img/bg-sited.png');
	background-size: cover;	
}

/*几种座位状态*/
.sit {	
	height: 20px;
	width: 20px;
	min-height: 10px;
	min-width: 10px;
	margin: 4px 4px 4px 4px;
	background-size: cover;
	/* border: 1px solid black; */
}
.bg-sit {
	 background-image: url('./img/bg-sit.png');
}
/* 已售座位 */
.bg-sited {
	/* background-color: red; */
	background-image: url('./img/bg-sited.png');
}
/* 已选座位 */
.bg-temp {
	cursor: pointer;
	background-image: url('./img/bg-temp.png');
}			

.mustnot span {
	background-color: #eeeeee;
}
.buyTicket_information {
	width: 90%;
	background-color: #fff;
	margin:0 auto;
	border-radius: 5px;
	padding-bottom: 8px;
}
.moviteTitle {
	padding-top: 12px;
	padding-left: 10px;
	padding-bottom: 10px;
	font-size: 18px;
}
.ShowTime {
	font-size: 10px;
	padding-left: 10px;
}
.ShowTime span {
	background-color: #eeeeee;
}
.btnWrap {
	width: 95%;
	margin: 0 auto;
	margin-top: 10px;
	text-align:center;
	height: 40px;
	line-height: 40px;
	background-color: #fdb10f;
	color: white;
	border-radius: 20px;
}
.selectedColor {
	background-color: green !important;
}
.setMsg {
  display:block;
  float: left;
  overflow: hidden;
	font-size: 15px;
	border: #fdb10f solid 1px;
  padding: 3px 5px;
  margin-top: 10px;
  margin-left: 5px;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #fae7bf;
}
.price {
	font-size: 15px;
	color: red;
}
.totalPrice {
	clear: both;
	margin-top: 8px;
	padding-left: 10px;
	font-size: 15px;
}
.totalPrice span {
	font-size: 20px;
	color: red;
}
</style>
