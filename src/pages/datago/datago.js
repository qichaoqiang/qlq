import axios from 'axios';

export default{
	state : {
		datagoInfo : []
	},
	actions: {
		getDataInfo(context){
			axios.get("./static/datago/datago.json")
				.then(function(res){
					if(res.status === 200){
						const {data} = res;
						context.commit("changeDataInfo",data.data)
					}
				})
		}
	},
	mutations: {
		changeDataInfo(state,data) {
			state.datagoInfo = data.datagoInfo;
		},
		refreshInfo(state,data) {
			state.datagoInfo.push(state.datagoInfo)
		}
	},
	getters: {
		getDatago(state){
			if(!state.datagoInfo.length){
   				return true
   			}else{
   				return false
   			}
		}
	}
}
