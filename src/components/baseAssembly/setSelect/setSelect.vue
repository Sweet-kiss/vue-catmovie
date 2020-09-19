<template>
  <div class="setSelect">
     <p class="cinema">万画影城</p>
     <p><img src="" alt=""></p>
     <div class="screen">2号厅银幕</div>
     <div class="sit_wrap">
     	 <div class="RowNumber">
     	 	  <ul>
     	 	  	<li>1</li>
     	 	  	<li>2</li>
     	 	  	<li>3</li>
     	 	  	<li>4</li>
     	 	  	<li>5</li>
     	 	  	<li>6</li>
     	 	  	<li>7</li>
     	 	  	<li>8</li>
     	 	  	<li>9</li>
     	 	  </ul>
     	 </div>
     	 <div class="seat">
     	 	 <ul>
     	 	 	<li v-for="item in setList"></li>
     	 	 </ul>
     	 </div>
     </div>
     <div class="TipsWrap">
     	 <div class="optional"><span></span>可选</div>
     	 <div class="sold"><span></span>已售</div>
     	 <div class="mustnot"><span></span>不可售</div>
     </div>
     <div class="buyTicket_information">
     	 <div class="moviteTitle">花木兰</div>
     	 <div class="ShowTime">今天 9月19日 22:25-00:20 <span>中文配音3D</span></div>
     </div>
     <div class="btnWrap">请先选座</div>
  </div>
</template>

<script>
export default {
  name: 'setSelect',
  data() {
  	return {
  		setList:[{"seat_id":"001"},{"seat_id":"002"},{"seat_id":"003"},{"seat_id":"004"},{"seat_id":"005"},{"seat_id":"006"},{"seat_id":"007"},{"seat_id":"008"},{"seat_id":"009"},{"seat_id":"010"},{"seat_id":"011"},{"seat_id":"012"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"},{"seat_id":"013"}]
  	}
  }
}
</script>

<style>
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
}
.screen {
	font-size: 12px;
	text-align: center;
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
.seat ul li {
	width: 20px;
	height: 20px;
	background-color: white;
	border-radius: 3px;
	float: left;
	margin-left: 9px;
	margin-top: 10px;
}
.TipsWrap {
  margin-top: 20px;
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
	background-color:white;
	margin-right: 10px;
	vertical-align: top; 
}
.sold span {
	background-color: #f7ada1
}
.mustnot span {
	background-color: #eeeeee;
}
.buyTicket_information {
	width: 90%;
	height: 70px;
	background-color: #fff;
	margin:0 auto;
	margin-top: 20px;
	border-radius: 5px;
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
</style>
