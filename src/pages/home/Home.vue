<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<home-section/>
 		<div-content/>
 		<lazy-content/>
 		<weekend-content/>
 	</div>
</template>

<script>
import HeaderComponent from "./components/Header";
import DivComponent from "./components/div";
import SwiperComponent from "./components/Swiper";
import LazyComponent from "./components/Lazyload";
import WeenkendComponent from "./components/Weekend";
import SectionComponent from "./components/Section";
export default {
  	components: {
		"home-header": HeaderComponent,
        "swiper-content": SwiperComponent,
          "lazy-content":LazyComponent,
        "weekend-content": WeenkendComponent,
		"div-content": DivComponent,
		"home-section" : SectionComponent
   },
	mounted() {
		if (this.$store.getters.shouldGetIndexData) {
			this.$store.dispatch("getSwiperInfo");
		}  	
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