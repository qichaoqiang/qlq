<template>
	<div>
 		<home-header/>
<<<<<<< HEAD
 		<weekend-content/>
=======
 		<swiper-content/>
>>>>>>> dfcd6f5bc30d54e52405aa2661a95aaf0b023469
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
<<<<<<< HEAD
import WeenkendComponent from "./Weekend";
export default {
   components: {
		"home-header": HeaderComponent,
        "weekend-contend": WeenkendComponent
=======
import SwiperComponent from "./Swiper";

export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent
>>>>>>> dfcd6f5bc30d54e52405aa2661a95aaf0b023469
	}
}
</script>

<style>
</style>
