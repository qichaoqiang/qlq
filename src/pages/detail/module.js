import axios from 'axios'
export default {
	state:{
		headerInfo:[],
		baseInfo:[],
		commentsInfo:[],
		evaluateInfo:[],
		openInfo:[]
		
	},
	actions:{
		getDetailInfo(context){
			axios.get('/static/detail.json')
			.then((response) =>{
				if(response.status ===200){
					const {data} = response.data;
					context.commit("changeDetailInfo",data);
				}
			});
		}
	},
	mutations:{
		changeDetailInfo(state,data){
			state.headerInfo = data.headerInfo;
			state.baseInfo = data.baseInfo;
			state.commentsInfo = data.commentsInfo;
			state.evaluateInfo = data.evaluateInfo;
			state.openInfo = data.openInfo;
		}
	},
	getters:{
		shouldGetData(state){
			if(!state.headerInfo.length &&
			!state.baseInfo.length &&
			!state.commentsInfo.length &&
			!state.evaluateInfo.length &&
			!state.openInfo.length){
				return true
			}else{
				return false;
			}
		}
	}
}
