import axios from 'axios'

export default {
	state: {
		ViewInfo: []
	},
	actions: {
		getViewInfoData(context) {
			console.log(1);
			axios.get('/static/scenic/viewList.json')
			.then((response) => {
				const {data} = response.data;
				context.commit('changeViewInfoData', data);
			})
		}
	},
	mutations: {
		changeViewInfoData(state, data) {
			state.ViewInfo = data.viewList;
			state.allKindInfo = data.allKind;
		}
	},
	getters: {
		shouldGetViewData(state) {
			if(!state.ViewInfo.length) {
				return true;
			}else {
				return false;
			}
		}
	}
}
