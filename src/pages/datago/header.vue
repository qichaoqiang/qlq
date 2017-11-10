<template>
	<div>
 		<div class="mp-header" ref="mpheader">
 			<a class="mp-header-left iconfont">&#xe624;</a>
 			<div class="mp-header-title">
 				<a class="mp-linkera">
 					<span class="mp-play">一日游</span>
 				</a>
 			</div>
 			<div class="mp-header-right">
 				<a class="mp-address">搜索</a>
 			</div>
 		</div>
 	</div>	
</template>

<script>
	export default {
		data () {
			return {
				scroll1 : 0,
				scroll2 : 0
			};
		}
	}
</script>

<style>

.mp-header {
	width: 100%;
	height: .88rem;
	background: #00bcd4;
	color: #fff;
	z-index: 2;
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
	overflow: hidden;
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
	margin-right: .05rem;
}

.mp-address {
	position: absolute;
	right: .3rem;
	display: block;
	width: .8rem;
	line-height: .88rem;
	text-align: right;
	color: #fff;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}


</style>