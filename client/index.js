import Vue from 'vue';
import App from '../imports/ui/App.vue'

Vue.config.productionTip = false

/*
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
*/
import VueMeteorTracker from 'vue-meteor-tracker';
Vue.use(VueMeteorTracker);  

import Vuetify from 'vuetify'
Vue.use(Vuetify)
import 'vuetify/dist/vuetify.css'

Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...App,
  });
});
