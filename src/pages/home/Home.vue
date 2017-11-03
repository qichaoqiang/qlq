<template>
	<div>
 		<home-header/>

 		<swiper-content/>
 		<div-content/>
 		<weekend-content/>

 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import DivComponent from "./div";

import SwiperComponent from "./Swiper";
import WeenkendComponent from "./Weekend";

export default {
   	components: {
		"home-header": HeaderComponent,
        "weekend-content": WeenkendComponent,
		"swiper-content": SwiperComponent,
		"div-content": DivComponent,
   	}
}
</script>

<style>
</style>
