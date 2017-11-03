<template>
	<div>
<<<<<<< HEAD
 		<home-header/>
 		<home-section/>
=======
 		<home-header/>		
 		<swiper-content/>
 		<div-content/>
 		<lazy-content/>
 		<weekend-content/>

>>>>>>> f9a33f9622bb272c37bef14586fda3983ae2a2a7
 	</div>
</template>

export default {
	components: {
		"home-header": HeaderComponent,
		"home-section" : SectionComponent
	}
}
<script>

import HeaderComponent from "./Header";
<<<<<<< HEAD
import SectionComponent from "./Section";

export default {
	components: {
		"home-header": HeaderComponent,
		"home-section" : SectionComponent
	}
=======
import DivComponent from "./div";
import SwiperComponent from "./Swiper";
import LazyComponent from "./Lazyload";
import WeenkendComponent from "./Weekend";
export default {
   components: {
		"home-header": HeaderComponent,
        "swiper-content": SwiperComponent,
          "lazy-content":LazyComponent,
        "weekend-content": WeenkendComponent,
		"div-content": DivComponent
    }


//export default {
//	components: {
//		"home-header": HeaderComponent,
//		
//	}
//import WeenkendComponent from "./Weekend";
//
//export default {
// 	components: {
//		"home-header": HeaderComponent,
//      "weekend-content": WeenkendComponent,
//		"swiper-content": SwiperComponent
// 	}
>>>>>>> f9a33f9622bb272c37bef14586fda3983ae2a2a7
}
</script>
<style>
</style>