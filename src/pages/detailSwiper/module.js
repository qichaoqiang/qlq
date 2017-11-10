import axios from 'axios'
export default {
	state:{
		detailSwiperInfo:[]	
	},
	actions:{
		getSwiperInfo(context){
			axios.get('./static/detail-swiper.json')
			.then((response) =>{
				if(response.status ===200){
					const {data} = response.data;
					context.commit("changeSwiper",data);
					console.log(data);
				}else{
					console.log(123);
				}
			});
		}
	},
	mutations:{
		changeSwiper(state,data){
			state.detailSwiperInfo = data.detailSwiperInfo;	
		}
	},
	getters:{
		shouldGetDetailData(state){
			if(!state.detailSwiperInfo.length){
				return true
			}else{
				return false;
			}
		}
	}
}
