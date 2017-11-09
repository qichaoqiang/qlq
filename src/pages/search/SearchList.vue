<template>
	<div class="search-list">
		<div class="mp-header">
			<a class="mp-header-left iconfont">&#xe602;</a>
			<div class="mp-header-title">
				<input class="mp-play-search" type="text" @focus="show = true" @blur="show = false" placeholder="输入城市或景点" ref="searchValue" />
			</div>
			<div class="header-right">
				<div class="header-city-wrapper">
					<span class="header-search" @click="handleSearchClick">
				搜索
			</span>
				</div>
			</div>
		</div>
		<div v-if="show" @click="show = true" class="search-address">
			<div class="mp-hotsearch-head">
				<span class="mp-hotsearch-title">热门搜索</span>
				<span class="mp-hotsearch-refreshoption">
			<span class="text-icon iconfont">&#xe60c;</span>
				<span class="mp-hotsearch-refreshtext" @click="handleChangeClick">换一批</span>
				</span>
			</div>

			<div class="mp-hotsearch-con">
				<div class="mp-hotsearch-group">
					<div class="mp-hotsearch-typecon">
						<div class="mp-hotsearch-typeinner">
							<img src="http://img1.qunarzz.com/piao/fusion/1511/da/8c3405b0e7d493f7.png" class="mp-hotsearch-typeicon">
						</div>
					</div>
					<div class="mp-hotsearch-itemcon mp-sight-maxline">
						<div class="mp-hotsearch-iteminner" ref="change">
							<a v-for="item in searchInfo" :key="item.id" href="#" class="mp-hotsearch-item">{{item.place}}</a>
						</div>
					</div>
				</div>
				<div class="mp-hotsearch-group">
					<div class="mp-hotsearch-typecon">
						<div class="mp-hotsearch-typeinner">
							<img src="http://img1.qunarzz.com/piao/fusion/1511/e8/d46972e07444bbf7.png" class="mp-hotsearch-typeicon">
						</div>
					</div>
					<div class="mp-hotsearch-itemcon mp-region-maxline">
						<div class="mp-hotsearch-iteminner" ref="getChange">
							<a v-for="item in cityInfo" :key="item.id" href="#" class="mp-hotsearch-cityitem">{{item.places}}</a>
						</div>
					</div>
				</div>
				<div class="mp-search-nearbycon">
					<div class="mp-search-nearbybtn">搜索身边的景点</div>
				</div>
			</div>

		</div>

	</div>
</template>
<script src="vue.js"></script>
<script>
	var x = 88,
		i = 1;
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				show: false
			}
		},
		computed: mapState({
			searchInfo(state) {
				return state.search.searchInfo;
			},
			cityInfo(state) {
				return state.search.cityInfo;
			}
		}),
		methods: {
			handleSearchClick: function() {
				var a=this.$refs.searchValue.value;
				this.$refs.searchValue.value = "";
				 console.log(a);

			},
			handleChangeClick: function() {
				if(i < 3) {
					this.$refs.change.style.top = -x * i + "px";
					this.$refs.getChange.style.top = -(x - 50) * i + "px";
					i++;
				} else {
					this.$refs.change.style.top = 0 + "px";
					this.$refs.getChange.style.top = 0 + "px";
				}
			}
		}
	}
</script>

<style>
	html {
		background: #f0f5f6;
	}
	
	.mp-header {
		position: relative;
		width: 100%;
		height: .88rem;
		background: #00bcd4;
		color: #fff;
		overflow: hidden;
	}
	
	.mp-header-left {
		float: left;
		width: .4rem;
		line-height: .88rem;
		padding: 0 .2rem;
		font-size: .5rem;
		color: #fff;
		text-align: left;
	}
	
	.mp-header-title {
		position: absolute;
		top: .14rem;
		left: .8rem;
		right: 1.36rem;
		background: #fff;
		height: .6rem;
		line-height: .6rem;
		border-radius: .06rem;
	}
	
	.mp-play-search {
		position: relative;
		left: .2rem;
		display: block;
		width: 100%;
		height: .4rem;
		line-height: .4rem;
		padding: .1rem 0;
		border: 0;
		font-family: "Microsoft Yahei", Arial;
		font-size: .28rem;
		border-radius: .06rem;
	}
	
	.header-right {
		float: right;
		width: 1.28rem;
		line-height: .88rem;
		text-align: center;
		color: #fff;
	}
	
	.header-city-wrapper {
		position: relative;
		padding-right: .1rem;
	}
	
	.header-search {
		overflow: hidden;
		display: inline-block;
		white-space: nowrap;
		width: 1rem;
		text-overflow: ellipsis;
	}
	
	.search-address {
		height: 1rem;
		width: 100%;
		background: #f0f5f6;
	}
	
	.mp-hotsearch-head {
		height: .64rem;
		line-height: .64rem;
		padding: 0 .2rem;
		background-color: #f0f5f6;
	}
	
	.mp-hotsearch-title {
		font-size: .26rem;
		color: #888;
	}
	
	.mp-hotsearch-refreshoption {
		float: right;
		font-size: .26rem;
		color: #00afc7;
	}
	
	.text-icon {
		font-size: .24rem;
		font-weight: bold;
	}
	
	.mp-hotsearch-group {
		position: relative;
		padding-left: .74rem;
		background-color: #fff;
		border-top: 1px solid #dce5e7;
		border-bottom: 1px solid #dce5e7;
	}
	
	.mp-hotsearch-group:nth-child(1) {
		border-bottom: none;
	}
	
	.mp-hotsearch-typecon {
		position: absolute;
		left: 0;
		top: 0;
		width: .74rem;
		height: 100%;
		overflow: hidden;
		line-height: 100%;
		text-align: center;
	}
	
	.mp-hotsearch-typeinner {
		position: absolute;
		width: .72rem;
		height: 70%;
		top: 15%;
		border-right: 1px solid #dce5e7;
		overflow: hidden;
	}
	
	.mp-hotsearch-typeicon {
		width: .3rem;
		height: .3rem;
		position: relative;
		top: 50%;
		margin-top: -.15rem;
	}
	
	.mp-sight-maxline {
		max-height: 1.8rem;
		overflow: hidden;
	}
	
	.mp-hotsearch-iteminner {
		zoom: 1;
		overflow: hidden;
		position: relative;
		left: 0;
		top: 0;
	}
	
	.mp-hotsearch-item {
		display: block;
		float: left;
		height: .36rem;
		max-width: 2.89rem;
		line-height: .36rem;
		text-align: center;
		display: block;
		padding-left: .3rem;
		padding-right: .3rem;
		border-right: 1px dashed #c9cccd;
		color: #333;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-top: .25rem;
		margin-bottom: .25rem;
	}
	
	.mp-search-nearbycon {
		padding: .2rem;
	}
	
	.mp-search-nearbybtn {
		height: .72rem;
		line-height: .72rem;
		background-color: #fff;
		text-align: center;
		font-size: .26rem;
		color: #333;
		border: 1px solid #dde1e3;
		border-radius: 2px;
	}
	
	.mp-hotsearch-con {
		background: #fff;
	}
	
	.mp-hotsearch-cityitem {
		display: block;
		float: left;
		height: .36rem;
		width: 24.5%;
		line-height: .36rem;
		text-align: center;
		display: block;
		border-right: 1px dashed #c9cccd;
		color: #333;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-top: .25rem;
		margin-bottom: .25rem;
	}
	
	.mp-region-maxline {
		max-height: 1rem;
		overflow: hidden;
	}
</style>