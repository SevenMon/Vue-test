import Vue from 'vue'
import Vuex from 'vuex'
import api from './modules/api'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		api
	},
	mutations: {
		addnum(state, num) {
			state.totalnumber += num;
		},
		addprice(state, price) {
			state.totalprice += price;
		}
	}
})