<template>
	<div class="body">
	<div class="lazy-load" id="hot-sight">
		<h2 class="mp-modtitle">热销推荐</h2>
		<div class="mp-hot-con">
			<ul mp-role="hotList">
				<li  v-for="lazy in activityInfo" :key="lazy.id" class="mp-hot-prod mp-border-bottom" >
					<router-link to="/mplist">
					<div class="mp-hotlist-img image-ready">
						<img :src="lazy.imgUrl"/>
					</div>
					<div class="mp-hotlist-infos">
						<div class="mp-hotlist-title">{{lazy.mphotlistTitle}}</div>
						<div class="mp-hotlist-desc">{{lazy.mphotlistDesc}}</div>
					</div>
					<div class="mp-price mp-hotlist-price">¥
						<em class="mp-price-num">{{lazy.mppriceNum}}</em>
						<span class="mp-price-text">{{lazy.mppriceText}}</span>
					</div>
					</router-link>
				</li>
			</ul>
		</div>
	 </div>
	</div>
</template>

<script>
	export default {
      computed: {
      	activityInfo() {
      		return this.$store.state.home.activityInfo;
      	}
      }
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
    border-top:1px solid #f2f2f2;
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