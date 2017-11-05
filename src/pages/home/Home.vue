<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<home-section/>
 		<div-content/>
 		<lazy-content/>
 		<weekend-content/>
 		<div class="xxx" v-if="show"></div>
 	</div>
</template>

<script>
import HeaderComponent from "./Header";
import DivComponent from "./div";
import SwiperComponent from "./Swiper";
import LazyComponent from "./Lazyload";
import WeenkendComponent from "./Weekend";
import SectionComponent from "./Section";
export default {
	data: function() {
		return {
			scrollTop1: "",
			scrollTop2: "",
			show: ""
		}
	},
  	components: {
		"home-header": HeaderComponent,
        "swiper-content": SwiperComponent,
          "lazy-content":LazyComponent,
        "weekend-content": WeenkendComponent,
		"div-content": DivComponent,
		"home-section" : SectionComponent
   	},
   	methods: {
   		handleScroll: function() {
   			this.scrollTop1 = this.scrollTop2;  
		  	this.scrollTop2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
		  	if(this.scrollTop1 <= this.scrollTop2) {
		  		this.show = false;
		  	}else {
		  		this.show = true;
		  	}
		  	console.log(this);
		},
	},
	mounted: function() {
		this.scrollTop1 = 0;
		window.addEventListener('scroll', this.handleScroll);
		  	
	}
}
</script>
<style>
	.xxx {
		width: 100%;
		height: 1rem;
		position: fixed;
		bottom:0;
		background: red;
	}
</style>