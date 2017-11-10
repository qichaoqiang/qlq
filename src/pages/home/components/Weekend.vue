<template>
	<div class="body">
	<div class="lazy-load" id="weekend-trip">
		<h2 class="mp-modtitle">周末去哪儿</h2>
	    <div weekend-box>	    	
	    	<div v-for="xxx in weekendInfo" :key="xxx.id" class="mp-product-item">
	    		<div class="product-imgcontainer image-ready">
	    			<img :src="xxx.imgUrl" alt="北京温泉排行榜">
	    		</div>
	    	  <div class="mp-product-info">
	    		<p class="product-name">{{xxx.productName}}</p>
	    		<p class="product-desc">{{xxx.productDesc}}</p>
	    	  </div>
	       </div>
	    </div>
	</div>
	</div>
</template>

<script>
	export default {
	   computed:{
	   	  weekendInfo() {
	   	  	return this.$store.state.home.weekendInfo;
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
.mp-product-item {
    position: relative;
    margin-bottom: .1rem;
    background: #fff;
}.mp-product-item .product-imgcontainer {
    overflow: hidden;
    height: 0;
    padding-bottom: 37.4375%;
    background: url(//s.qunarzz.com/piao_topic/image/common/default/640x266.jpg) no-repeat center #dcdcdc;
    background-size: 100% 100%;
}
.image-ready img {
	width:100%;
    opacity: 1;
}
.mp-product-item .mp-product-info {
    position: relative;
    padding: .14rem .2rem .2rem .2rem;
}
.mp-product-item .product-name {
    overflow: hidden;
    padding-right: 1.4rem;
    color: #212121;
    font-size: .28rem;
    line-height: .48rem;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mp-product-item .product-desc {
    overflow: hidden;
    padding-right: 1.4rem;
    color: #616161;
    font-size: .24rem;
    line-height: .42rem;
    white-space: nowrap;
    text-overflow: ellipsis;
}
	
</style>