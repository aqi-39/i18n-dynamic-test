import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import locale from './pkg.json'

Vue.use(VueI18n)
const i18n = new VueI18n({
	locale: 'zh-CN',
	messages: {
		'zh-CN': locale,
	},
});
new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
