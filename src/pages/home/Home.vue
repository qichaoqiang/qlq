<template>
	<div>
 		<home-header/>
 		
 		<swiper-content/>
 		<lazy-content/>
 		<weekend-content/>
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";

import LazyComponent from "./Lazyload";
import WeenkendComponent from "./Weekend";
export default {
   components: {
		"home-header": HeaderComponent,
        "swiper-content": SwiperComponent,
          "lazy-content":LazyComponent,
        "weekend-content": WeenkendComponent
        
       }


//export default {
//	components: {
//		"home-header": HeaderComponent,
//		
//	}
}
</script>
<style>
</style>
