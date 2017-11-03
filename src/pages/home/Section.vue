<template>
	<swiper :options="swiperOption" ref="mySwiper">
    	<swiper-slide>
    		<div class="swiper-img-con">
    			<ul class="swiper-img">
    				<li>
		     			<a>
			     			<img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" />
			     			<p>景点门票</p>
		     			</a>
		     		</li>
		     		<li>
		     			<a>
			     			<img src="http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png"/>
			     			<p>动植物园</p>
		     			</a>
		     		</li>
		     		<li>
		     			<a>
			     			<img src="http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png"/>
			     			<p>景点门票</p>
		     			</a>
		     		</li>
		     		<li>
		     			<a>
			     			<img src="http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png" />
			     			<p>一日游</p>
		     			</a>
		     		</li>
		     		<li>
		     			<a>
			     			<img src="http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png" />
			     			<p>必游榜单</p>
		     			</a>
		     		</li>
		     		<li>
		     			<a>
			     			<img src="http://img1.qunarzz.com/piao/fusion/1611/6d/ee9eb965690ce402.png" />
			     			<p>秋色美</p>
		     			</a>
		     		</li>
		     		<li>
		     			<a>
			     			<img src="http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png" />
			     			<p>游乐榜</p>
		     			</a>
		     		</li>
		     		<li>
		     			<a>
			     			<img src="http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png" />
			     			<p>泡温泉</p>
		     			</a>
		     		</li>
		 		</ul>
    		</div>
    	</swiper-slide>
   		<swiper-slide>
   			<div class="swiper-img-con">
   				<ol class="swiper-img">
   					<li>
		     			<a>
			     			<img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" />
			     			<p>景点门票</p>
		     			</a>
		     		</li>
		     		<li>
		     			<a>
			     			<img src="http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png"/>
			     			<p>动植物园</p>
		     			</a>
		     		</li>
		     		<li>
		     			<a>
			     			<img src="http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png"/>
			     			<p>景点门票</p>
		     			</a>
		     		</li>
		     		<li>
		     			<a>
			     			<img src="http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png" />
			     			<p>一日游</p>
		     			</a>
		     		</li>
		     		<li>
		     			<a>
			     			<img src="http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png" />
			     			<p>必游榜单</p>
		     			</a>
		     		</li>
		     		<li>
		     			<a>
			     			<img src="http://img1.qunarzz.com/piao/fusion/1611/6d/ee9eb965690ce402.png" />
			     			<p>秋色美</p>
		     			</a>
		     		</li>
		     		<li>
		     			<a>
			     			<img src="http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png" />
			     			<p>游乐榜</p>
		     			</a>
		     		</li>
		     		<li>
		     			<a>
			     			<img src="http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png" />
			     			<p>泡温泉</p>
		     			</a>
		     		</li>
		 		</ol>
   			</div>
   		</swiper-slide>
    	<div class="swiper-pagination"  slot="pagination"></div>
	</swiper>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
  	export default {
    	data() {
			return {
				swiperOption: {
          			direction: 'horizontal',
         			autoHeight: true,
          			pagination: '.swiper-pagination',
        			observeParents: true,
        		}
      		} 
    	},
    	components: {
      		swiper,
    		swiperSlide
		}
	}
</script>

<style>
	.swiper-pagination-bullet {
		background: orange;
	}
</style>

<style scoped>
	
	.swiper-img-con {
		width: 100%;
		height: 0;
		padding-bottom: 50.25%;
		float: left;
	}
	.swiper-img {
		width: 100%;
	}
	.swiper-img li{
		float: left;
		width:25%;
		margin-top:.3rem;
		height:1.3rem;
	}
	.swiper-img a{
		width:100%;
		display: block;
		height:1.3rem;
		text-align: center;
		color: #000000;
	}
	.swiper-img img{
		width:.66rem;
		height:.66rem;
	}
	.swiper-img p{
		margin-top:.3rem;
	}
</style>
