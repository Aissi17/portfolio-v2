import Vue from 'vue'
import App from './App.vue'

import "@/assets/css/main.css";

/* import the fontawesome core */
import {
  library
} from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import {
  faUserSecret
} from '@fortawesome/free-solid-svg-icons'

import brands from "@fortawesome/fontawesome-free-brands";
/* import font awesome icon component */
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faUserSecret, brands)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')