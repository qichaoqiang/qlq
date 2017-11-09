<template>
	<div class="mp-page">
		<div class="mp-header" ref="detailList">
			<a href="#" class="mp-header-left iconfont">&#xe602;</a>
			<h1 class="mp-header-title">故宫</h1>
		</div>
		<div class="mp-headfigure" v-for="item in headerInfo" :key="item.id">
			<router-link :to="item.link">
			<div class="mp-headfigure-wrap" id="imgcontainer">
				<img class="mp-headfigure-img" :src="item.imgUrl" alt="故宫"/>
			</div>
			<div class="mp-headfeagure-info">
				<div class="mp-headfeagure-title">{{item.place}}</div>
				<div class="mp-imgswipeicon">
					<span class="mp-iconfont iconfont">&#xe625;</span>
					<em class="mp-imgswipeicon-number">{{item.count}}</em>
				</div>
			</div>
            </router-link>
		</div>
		<a class="mp-header-return iconfont">&#xe602;</a>
	</div>
</template>
<script>
	import {mapState} from 'vuex'
	export default {
		data:function(){
			return{
				scrollTop:""
			}
		},
		methods:{
			handleScroll:function(){
				this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				if(this.scrollTop >= 206){
				}else {
					this.$refs.detailList.style.opacity = this.scrollTop/206;
				}
			}
		},
		mounted:function(){
			this.scrollTop = 0;
			window.addEventListener('scroll',this.handleScroll);
		},
		computed:mapState({
			headerInfo(state){
				return state.mplist.headerInfo;
			}
		})
	}
</script>

<style>
	html {
		background:#f7f7f7;
	}
	.mp-page {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		background: #f5f5f5;
	}	
	.mp-header {
		height: .88rem;
		background: #00bcd4;
		z-index: 91;
		position: fixed;
		width: 100%;
		top: 0px;
		left: 0px;
		display: block; 
		opacity:0;
	}	
	.mp-header-left {
		float: left;
		left: 0;
		top: 0;
		width: .4rem;
		height: .88rem;
		padding: 0 .2rem;
		line-height: .88rem;
		font-size: .4rem;
		color: #fff;
	}	
	.mp-header-title {
		overflow: hidden;
		margin: 0 1rem;
		top: .14rem;
		line-height: .88rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: .32rem;
		text-align: center;
		color: #fff;
	}	
	.mp-headfigure-img {
		width: 100%;
		vertical-align: top;
	}
.mp-headfigure-wrap {
    overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom: 55%;
}
	.mp-headfeagure-info {
		position: absolute;
		bottom: .20rem;
		color: #fff;
		left: .2rem;
		right: .2rem;
		height: .4rem;
		line-height: .4rem;
	}
	.mp-headfeagure-title {
		position: relative;
		float: left;
		font-size: .32rem;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.70);
		margin-right: .14rem;
	}
	
	.mp-imgswipeicon {
		float: right;
		width: 1.2rem;
		background: rgba(0, 0, 0, .5);
		border-radius: .2rem;
		font-size: .24rem;
		color: #fff;
		text-align: center;
	}
	
	.mp-iconfont {
		position: absolute;
		right: .6rem;
	}
	
	.mp-imgswipeicon-number {
		font-size: .2rem;
		padding-left: .3rem;
	}
	.mp-header-return{
		position: absolute;
		top: .1rem;
		left: 1.rem;
		font-size: .4rem;
		color:#fff ;
		background:rgba(0,0,0,.3);
		padding: .2rem;
		border-radius: .4rem;
		text-align: center;
		line-height: .4rem;
	}
</style>