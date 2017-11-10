import axios from 'axios'

export default {
	state: {
		swiperInfo: [],
		activityInfo: [],
		weekendInfo: []
	},
	actions: {
		getSwiperInfo(context) {
			console.log(1);
			axios.get('/static/index/index.json')
				.then((response) => {
					if(response.status === 200) {
						const {data} = response.data;
						context.commit("changeSwiperInfo", data);
					}
				})
		}
	},
	mutations: {
		changeSwiperInfo(state, data) {
			state.swiperInfo = data.swiperInfo;
			state.activityInfo = data.activityInfo;
			state.weekendInfo = data.weekendInfo;
			console.log(state);
			//console.log(state.swiperInfo)
		}
	},
	getters: {
		shouldGetIndexData(state) {
			if(!state.swiperInfo.length && !state.activityInfo.length && !state.weekendInfo.length) {
				return true;
			}else {
				return false;
			}
		}
	}
}
