<template>
	<div>
 		<home-header/>		
 		<swiper-content/>
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
}
</script>
<style>
</style>