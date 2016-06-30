import Vue from 'vue'
import app from './example/computed.vue'

import './styles.css'

Vue.config.debug = process.env.NODE_ENV !== 'production'

const App = new Vue({
  el: 'body',
  components: {
    app
  }
})