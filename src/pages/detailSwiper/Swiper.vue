<template>
	<div>
		<swiper :options="swiperOption" ref="mySwiper">
			<swiper-slide  v-for="item in detailSwiperInfo" :key="item.id">
				<router-link :to="item.link">
					<div class="swiper-img-con">
						<img class="swiper-img" :src="item.imgUrl">
					</div>
					<div class="swiper-pagination">
					<div class="swiper-page">{{item.id}}</div>
					<div class="swiper-count">/{{detailSwiperInfo.length}}</div>
					</div>
					<!--<div class="swiper-pagination" slot="pagination">{{item.id}}</div>-->
				</router-link>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				swiperOption: {
					direction: 'horizontal',
					pagination: '.swiper-pagination',
					observeParents: true
				}
			}
		},
		components: {
			swiper,
			swiperSlide
		},
		computed: mapState({
			detailSwiperInfo(state) {
				return state.detailSwiper.detailSwiperInfo;
			}
		})
	}
</script>

<style>
</style>

<style scoped>
	.swiper-container {
		background: #000;
	}
	.swiper-img-con {
		/*让高度自动变为宽度的31.25%,只能用padding实现*/
		overflow: hidden;
		width: 100%;
		height: 100%;
		padding-bottom: 50%;
		float: left;
		padding-top: 31%;
	}
	.swiper-img {
		width: 100%;
		height: 100%;
		display: block;
	}
	.swiper-pagination{
	position: absolute;
    bottom: 2rem;
    width:100%;
    text-align: center;
    color: #fff;
    left: 45%;
    font-size: .36rem;
    font-weight: normal;
	}
	.swiper-page{
		float: left;
	}
	.swiper-count{
		float: left;
	}
</style>