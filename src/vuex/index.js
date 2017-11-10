import Vue from 'vue'
import Vuex from 'vuex'
import home from '../pages/home/module.js'
import view from '../pages/scenic/module.js'
import datago from '../pages/datago/datago.js'
import mplist from '../pages/detail/module.js'
import detailSwiper from  '../pages/detailSwiper/module.js'
import search from '../pages/search/module.js'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		home: home,
		view: view,
		datago: datago,
		mplist: mplist,
		detailSwiper: detailSwiper,
		search: search
	}
})
