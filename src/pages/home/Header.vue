<template>
 	<div>
 		<div class="mp-header">
 			<a class="mp-header-left iconfont">&#xe624;</a>
 			<div class="mp-header-title">
 				<a class="mp-linkera">
 					<span class="mp-play">输入城市/景点/游玩主题</span>
 				</a>
 			</div>
 			<div class="mp-header-right">
 				<a class="mp-address">北京fsdj</a>
 				<span class="mp-sanjiao"></span>
 			</div>
 		</div>
 	</div>	
</template>

<script>
export default {
  name: 'Home',
//data () {
//  return {
//    msg: 'Welcome to Your Vue.js App'
//  }
//}
}
</script>

<style scoped>

@import "../../../font/iconfont.css";

.mp-header {
	position: relative;
	width: 100%;
	height: .88rem;
	background: #00bcd4;
	color: #fff;
}

.mp-header-left {
	float: left;
	width: .4rem;
	line-height: .88rem;
	padding: 0 .2rem;
	font-size: .36rem;
	font-weight: bold;
	color: #fff;
	text-align: left;
}

.mp-header-title {
	position: absolute;
	top: .14rem;
	left: .8rem;
	background: #fff;
	height: .6rem;
	line-height: .6rem;
	border-radius: .06rem;
}

.mp-linkera {
	display: block;
	height: 100%;
	width: 5.4rem;
}

.mp-play {
	color: #ccc;
	display: block;
	height: 100%;
	text-indent: .4rem;
}

.mp-header-right {
	float: right;
	position: relative;
}

.mp-address {
	position: absolute;
	right: .3rem;
	display: block;
	width: .9rem;
	line-height: .88rem;
	text-align: right;
	color: #fff;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}

.mp-sanjiao {
	position: absolute;
	right: .04rem;
	width: 0;
	height: 0;
	display: block;
	border: .14rem transparent solid;
	border-top-color: #fff;
	margin-top: .4rem;
}

/*
.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}*/

/*.icon-fanhui:before { content: "\e624"; }*/

</style>
