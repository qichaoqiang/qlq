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
<<<<<<< HEAD
import HeaderComponent from "./Header";
import DivComponent from "./div";
import SwiperComponent from "./Swiper";
import LazyComponent from "./Lazyload";
import WeenkendComponent from "./Weekend";
import SectionComponent from "./Section";
export default {
   components: {
=======
import HeaderComponent from "./components/Header";
import DivComponent from "./components/div";
import SwiperComponent from "./components/Swiper";
import LazyComponent from "./components/Lazyload";
import WeenkendComponent from "./components/Weekend";
import SectionComponent from "./components/Section";
export default {
  	components: {
>>>>>>> 283ece6f5a7ce23a374e2cd7cfc3b56ed36f1fce
		"home-header": HeaderComponent,
        "swiper-content": SwiperComponent,
          "lazy-content":LazyComponent,
        "weekend-content": WeenkendComponent,
		"div-content": DivComponent,
		"home-section" : SectionComponent
<<<<<<< HEAD
   }
}
</script>
<style>
=======
   	},
	mounted() {
		if (this.$store.getters.shouldGetData) {
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
>>>>>>> 283ece6f5a7ce23a374e2cd7cfc3b56ed36f1fce
</style>