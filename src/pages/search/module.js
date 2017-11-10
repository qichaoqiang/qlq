import axios from 'axios'
export default{
	state:{
		searchInfo:[],
		cityInfo:[]
	},
	actions:{
		getSearchInfo(context){
			axios.get('./static/search.json')
			.then((response) => {
				if(response.status === 200){
					const {data} = response.data;
					context.commit("changeSearchInfo",data);
				}
			})
		}
	},
	mutations:{
	changeSearchInfo(state,data){
		state.searchInfo = data.searchInfo;
		state.cityInfo = data.cityInfo;
	}
	},
	getters:{
		shouldGetSearchData(state){
			if(!state.searchInfo.length &&!state.cityInfo.length){
				return true
			}else{
				return false;
			}
		}
	}
}
