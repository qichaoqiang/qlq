<template>
	<detail-swiper />
</template>

<script>
	import SwiperComponent from "./Swiper"
	export default {
		data() {
			return {
				detailSwiperInfo: []
			}
		},
		components: {
			"detail-swiper": SwiperComponent
		},
		mounted(){
			this.$store.dispatch("getSwiperInfo");
		}
	}
</script>

<style>

</style>