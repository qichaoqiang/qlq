import Vue from 'vue'
import Vuex from 'vuex'

import mplist from '../pages/mplist/module.js'
import detailSwiper from  '../pages/detailSwiper/module.js'
import search from '../pages/search/module.js'

Vue.use(Vuex);
export default new Vuex.Store({
	modules:{
		mplist:mplist,
		detailSwiper:detailSwiper,
		search:search
	}
})
