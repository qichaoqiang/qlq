<template>
	<div class="lazy-load" id="weekend-trip">
		<h2 class="mp-modtitle">周末去哪儿</h2>
	    <div weekend-box>	    	
	    	<div class="mp-product-item">
	    		<div class="product-imgcontainer image-ready">
	    			<img src="https://imgs.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg" alt="北京温泉排行榜">
	    		</div>
		    	<div class="mp-product-info">
		    		<p class="product-name">北京温泉排行榜</p>
		    		<p class="product-desc">细数北京温泉，温暖你的冬天</p>
		    	</div>
	        </div>
	        
	        <div class="mp-product-item">
	        	<div class="product-imgcontainer image-ready">
	        		<img src="https://imgs.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg" alt="寻找北京的皇城范儿">
	        	</div>
	        	<div class="mp-product-info">
	        		<p class="product-name">寻找北京的皇城范儿ds</p>
	        		<p class="product-desc">数百年的宫廷庙宇，至今依旧威严霸气</p>
	        	</div>	
	        </div>
	        <div class="mp-product-item" >
	        	<div class="product-imgcontainer image-ready">
	        		<img src="https://imgs.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg" alt="北京必游TOP10">
	        	</div>
	        	<div class="mp-product-info">
	        		<p class="product-name">北京必游TOP10</p>
	        		<p class="product-desc">来北京必去的景点非这些地方莫属</p>
	        	</div>
	        </div>
	        <div class="mp-product-item">
	        	<div class="product-imgcontainer image-ready">
	        		<img src="https://imgs.qunarzz.com/sight/source/1509/81/0412da9c4db66a.jpg_r_640x214_8e23871e.jpg" alt="登高望远秋色佳">
	        	</div>
	        	<div class="mp-product-info">
	        		<p class="product-name">登高望远秋色佳</p>
	        		<p class="product-desc">山顶满眼彩色，此情此景醉了</p>
	        	</div>
	        	
	        </div>
	        <div class="mp-product-item" >
	        	<div class="product-imgcontainer image-ready">
	        		<img src="https://imgs.qunarzz.com/sight/source/1509/28/1bb74b851279e6.jpg_r_640x214_64ebf0ee.jpg" alt="秋高气爽去礼佛">
	        	</div>
	        	<div class="mp-product-info">
	        		<p class="product-name">秋高气爽去礼佛</p>
	        		<p class="product-desc">秋风伴着美妙经声，品尝秋的另一番滋味</p>
	        	</div>      	
	        </div>
	        
	    </div>
	</div>
</template>

<script>
	export default {
      name: 'Weekend',
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