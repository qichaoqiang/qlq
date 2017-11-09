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
import HeaderComponent from "./Header";
import DivComponent from "./div";
import SwiperComponent from "./Swiper";
import LazyComponent from "./Lazyload";
import WeenkendComponent from "./Weekend";
import SectionComponent from "./Section";
export default {
   components: {
		"home-header": HeaderComponent,
        "swiper-content": SwiperComponent,
          "lazy-content":LazyComponent,
        "weekend-content": WeenkendComponent,
		"div-content": DivComponent,
		"home-section" : SectionComponent
   }
}
</script>
<style>
</style>