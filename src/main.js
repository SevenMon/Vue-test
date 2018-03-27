// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import router from './router'
import store from './store'

import Layout from './components/layout'

Vue.use(VueResource);

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {
		Layout
	},
	template: '<Layout/>'
})