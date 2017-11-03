<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<weekend-content/>
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
import WeenkendComponent from "./Weekend";

export default {
   	components: {
		"home-header": HeaderComponent,
        "weekend-content": WeenkendComponent,
		"swiper-content": SwiperComponent
   	}
}
</script>

<style>
</style>
