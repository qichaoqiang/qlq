import axios from 'axios'

export default {
	state: {
		swiperInfo: []
	},
	actions: {
		getSwiperInfo(context) {
			console.log(1);
			axios.get('/static/index/index.json')
				.then((response) => {
					if(response.status === 200) {
						const {data} = response.data;
						console.log(data);
						context.commit("changeSwiperInfo", data.swiperInfo);
					}
				})
		}
	},
	mutations: {
		changeSwiperInfo(state, data) {
			state.swiperInfo = data;
			console.log(state.swiperInfo);
		}
	},
	getters: {
		shouldGetData(state) {
			if(!state.swiperInfo.length) {
				return true;
			}else {
				return false;
			}
		}
	}
}
