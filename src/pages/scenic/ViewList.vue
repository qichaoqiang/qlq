<template>
	<div>
		<div class="mp-ticket-con">
			<ul class="mp-ticket-list">
				<li class="mp-ticket-box" v-for="ticket in arr" :key="ticket">
					<div class="mp-ticket-info-box">
						<div class="mp-ticket-info">
							<div class="mp-ticket-pic-box">
								<img class="mp-ticket-pic" :src="ticket.pic">
							</div>
							<div class="mp-ticket-detail">
								<h3 class="mp-ticket-name">{{ticket.name}}</h3>
								<span class="mp-ticket-hot">{{ticket.hot}}</span>
								<span class="mp-ticket-minPrice-box">
									¥
									<span class="mp-ticket-minPrice">{{ticket.minPrice}}</span>
									<span class="mp-ticket-minPrice-qi">起</span>
								</span>
								<div class="mp-ticket-comments">
									<span class="mp-starlevel">
										<span class="mp-starlevel-gain iconfont mp-iconfont" :width="ticket.width">&#xe606;&#xe606;&#xe606;&#xe606;&#xe606;</span>
										<span class="mp-starlevel-total iconfont mp-iconfont">&#xe606;&#xe606;&#xe606;&#xe606;&#xe606;</span>
									</span>
									<span class="mp-ticket-totalnum">{{ticket.totalnum}}评论</span>
								</div>
								<div class="mp-ticket-location">
									<span class="mp-ticket-address">{{ticket.address}}</span>
								</div>
							</div>
						</div>
						<div class="mp-ticket-item mp-border-top">
							<h4 class="mp-ticket-name1">{{ticket.name1}}</h4>
							<span class="mp-ticket-price1">¥<em>{{ticket.price1}}</em></span>
						</div>
						<div class="mp-ticket-item mp-border-top">
							<h4 class="mp-ticket-name1">{{ticket.name2}}</h4>
							<span class="mp-ticket-price1">¥<em>{{ticket.price2}}</em></span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>	
</template>

<script>
	export default {
		data: function() {
			return {
				arr: [
					{
						pic: "http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_110x110_e23a9143.jpg",
						name: "北京欢乐谷(4A)",
						hot: "热",
						minPrice: 15,
						width: "100%",
						totalnum: 48175,
						address: "北京·朝阳区",
						name1: "【活动票】北京欢乐谷金面王朝演出成人票",
						price1: 15,
						name2: "【活动票】北京欢乐谷日场成人票",
						price2: 111,
					},
					{
						pic: "http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_110x110_e23a9143.jpg",
						name: "北京欢乐谷(4A)",
						hot: "热",
						minPrice: 15,
						width: "100%",
						totalnum: 48175,
						address: "北京·朝阳区",
						name1: "【活动票】北京欢乐谷金面王朝演出成人票",
						price1: 15,
						name2: "【活动票】北京欢乐谷日场成人票",
						price2: 111,
					},
					{
						pic: "http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_110x110_e23a9143.jpg",
						name: "北京欢乐谷(4A)",
						hot: "热",
						minPrice: 15,
						width: "100%",
						totalnum: 48175,
						address: "北京·朝阳区",
						name1: "【活动票】北京欢乐谷金面王朝演出成人票",
						price1: 15,
						name2: "【活动票】北京欢乐谷日场成人票",
						price2: 111,
					},
					{
						pic: "http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_110x110_e23a9143.jpg",
						name: "北京欢乐谷(4A)",
						hot: "热",
						minPrice: 15,
						width: "100%",
						totalnum: 48175,
						address: "北京·朝阳区",
						name1: "【活动票】北京欢乐谷金面王朝演出成人票",
						price1: 15,
						name2: "【活动票】北京欢乐谷日场成人票",
						price2: 111,
					},
					{
						pic: "http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_110x110_e23a9143.jpg",
						name: "北京欢乐谷(4A)",
						hot: "热",
						minPrice: 15,
						width: "100%",
						totalnum: 48175,
						address: "北京·朝阳区",
						name1: "【活动票】北京欢乐谷金面王朝演出成人票",
						price1: 15,
						name2: "【活动票】北京欢乐谷日场成人票",
						price2: 111,
					},
					{
						pic: "http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_110x110_e23a9143.jpg",
						name: "北京欢乐谷(4A)",
						hot: "热",
						minPrice: 15,
						width: "100%",
						totalnum: 48175,
						address: "北京·朝阳区",
						name1: "【活动票】北京欢乐谷金面王朝演出成人票",
						price1: 15,
						name2: "【活动票】北京欢乐谷日场成人票",
						price2: 111,
					},
				]
			}
		}
	}
</script>

<style>
	.mp-ticket-con {
		background: #eee;
	}
	.mp-ticket-box {
		background: #fff;
		margin-bottom: .2rem;
	}
	.mp-ticket-info {
		padding: .2rem;	
	}
	.mp-ticket-pic-box {
		float: left;
	}
	.mp-ticket-pic {
		width: 1.6rem;
		height: 1.6rem;
	}
	.mp-ticket-detail {
		position: relative;
		overflow: hidden;
		padding-left: .2rem;
		height: 1.6rem;
	}
	.mp-ticket-name {
		float: left;
		font-weight: normal;
		overflow: hidden;
		max-width: 60%;
		color: #212121;
		font-size: .32rem;
		line-height: .36rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.mp-ticket-hot {
		display: inline-block;
		margin-left: .06rem;
		width: .3rem;
		height: .3rem;
		background: #ff1200;
		color: #fff;
		font-size: .24rem;
		line-height: .3rem;
		text-align: center;
	}
	.mp-ticket-minPrice-box {
		position: absolute;
		top: 0;
		right: 0;
		height: .36rem;
		color: #ff8300;
		font-size: .2rem;
	}
	.mp-ticket-minPrice {
		font-size: .36rem;
		font-style: normal;
	}
	.mp-ticket-minPrice-qi {
		font-size: .2rem;
		color: #9e9e9e;
	}
	.mp-ticket-comments {
		margin-top: .38rem;
		height: .64rem;
		line-height: .64rem;
	}
	.mp-starlevel {
		width: 1.6rem;
		height: .24rem;
		font-size: .24rem;
		display: inline-block;
		position: relative;
	}
	.mp-starlevel-gain {
		overflow: hidden;
		position: absolute;
		top: 0;
		left: 0;
		color: #00bcd4;
		z-index: 2;
	}
	.mp-iconfont {
		font-family: 'mpiconfont';
		speak: none;
		font-style: normal;
		font-weight: normal;
		font-variant: normal;
		text-transform: none;
		line-height: 1;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	.mp-starlevel-total {
		color: #ddd;
		overflow: hidden;
		position: absolute;
		top: 0;
		left: 0;
	}
	.mp-ticket-totalnum {
		position: relative;
		top: -.04rem;
		margin-left: .06rem;
		color: #9e9e9e;
		font-size: .24rem;
		line-height: .64rem;
	}
	.mp-ticket-location {
		position: absolute;
		bottom: 0;
		color: #9e9e9e;
		font-size: 0;
		white-space: nowrap;
	}
	.mp-ticket-address {
		font-size: .24rem;
	}
	.mp-ticket-item {
		position: relative;
		height: .9rem;
		margin: 0 .2rem;
	}
	.mp-border-top::before {
		border-top: 1px dashed #c9cccd;
	}
	.mp-ticket-name1 {
		overflow: hidden;
		margin-right: 1.2rem;
		color: #212121;
		font-size: .28rem;
		line-height: .9rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.mp-ticket-price1 {
		overflow: hidden;
		position: absolute;
		top: 0;
		right: 0;
		width: 1.2rem;
		height: .9rem;
		color: #ff8300;
		font-size: .2rem;
		line-height: .9rem;
		text-align: right;
	}
	.mp-ticket-price1 em {
		font-size: .36rem;
	}
</style>