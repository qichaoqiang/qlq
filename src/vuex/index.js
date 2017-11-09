import Vue from 'vue'
import Vuex from 'vuex'
import home from '../pages/home/module.js'
import view from '../pages/scenic/module.js'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		home: home,
		view: view
	}
})
