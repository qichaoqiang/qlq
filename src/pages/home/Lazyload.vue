<template>
	<div class="lazy-load" id="hot-sight">
		<h2 class="mp-modtitle">热销推荐</h2>
		<div class="mp-hot-con">
			<ul mp-role="hotList">
				<li class="mp-hot-prod mp-border-bottom" >
					<div class="mp-hotlist-img image-ready">
						<img src="https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt="故宫">
					</div>
					<div class="mp-hotlist-infos">
						<div class="mp-hotlist-title">故宫111</div>
						<div class="mp-hotlist-desc">东方宫殿建筑代表，世界宫殿建筑典范</div>
					</div>
					<div class="mp-price mp-hotlist-price">¥
						<em class="mp-price-num">40</em>
						<span class="mp-price-text">起</span>
					</div>
				</li>
				<li class="mp-hot-prod mp-border-bottom" >
					<div class="mp-hotlist-img image-ready">
						<img src="https://imgs.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_140x140_97813766.jpg" alt="八达岭长城">
					</div>
					<div class="mp-hotlist-infos">
						<div class="mp-hotlist-title">八达岭长城</div>
						<div class="mp-hotlist-desc">不到长城非好汉</div>
					</div><div class="mp-price mp-hotlist-price">¥
						<em class="mp-price-num">25</em>
						<span class="mp-price-text">起</span>
					</div>
				</li>
				<li class="mp-hot-prod mp-border-bottom" >
					<div class="mp-hotlist-img image-ready">
						<img src="https://imgs.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_140x140_e20be8e0.jpg" alt="颐和园">
					</div>
					<div class="mp-hotlist-infos">
						<div class="mp-hotlist-title">颐和园</div>
						<div class="mp-hotlist-desc">保存完整的一座皇家行宫御苑</div>
					</div><div class="mp-price mp-hotlist-price">¥
						<em class="mp-price-num">1</em>
						<span class="mp-price-text">起</span>
					</div>					
				</li>
				<li class="mp-hot-prod mp-border-bottom" >
					<div class="mp-hotlist-img image-ready">
						<img src="https://imgs.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_140x140_b05eb1df.jpg" alt="北京欢乐谷">
					</div>
					<div class="mp-hotlist-infos">
						<div class="mp-hotlist-title">北京欢乐谷</div>
						<div class="mp-hotlist-desc">七大主题园区带你畅享北京欢乐谷</div>
					</div>
					<div class="mp-price mp-hotlist-price">¥
						<em class="mp-price-num">11</em>
						<span class="mp-price-text">起</span>
					</div>
				</li>
			</ul>
			
			
		</div>
	</div>
</template>

<script>
	export default {
      name: 'Lazyload',
     }
</script>

<style>
.mp-modtitle {
    height: .8rem;
    padding-left: .26rem;
    line-height: .8rem;
    color: #212121;
}
.mp-hot-con {
    background-color: #fff;
}
ul, ol, menu {
    list-style: none;
}
.mp-hot-prod {
    position: relative;
    overflow: hidden;
    height: 1.4rem;
    padding: .24rem;
}
.image-ready {
    background: none !important;
}
.mp-hotlist-img {
    position: absolute;
    top: .24rem;
    left: .24rem;
    background: url(//s.qunarzz.com/piao_topic/image/common/default/140x140.png) no-repeat;
    background-size: contain;
    width: 1.4rem;
    height: 1.4rem;
}	
.image-ready img {
    opacity: 1;
}
.mp-hotlist-img img {
    vertical-align: top;
    opacity: 0;
    transition: opacity 400ms;
    width: 1.4rem;
    height: 1.4rem;
}
.mp-hotlist-infos {
    margin-left: 1.6rem;
}
.mp-hotlist-title {
    overflow: hidden;
    margin-top: .04rem;
    margin-bottom: .1rem;
    color: #212121;
    font-size: .3rem;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mp-hotlist-desc {
    overflow: hidden;
    margin-bottom: .1rem;
    height: .4rem;
    line-height: .4rem;
    color: #9e9e9e;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mp-hotlist-price {
    margin-left: 1.6rem;
    color: #ff8300;
}
.mp-hotlist-price .mp-price-num {
    font-size: .36rem;
    padding: 0 .04rem;
}
.mp-price-text {
    color: #9e9e9e;
    font-size: .24rem;
}
</style>