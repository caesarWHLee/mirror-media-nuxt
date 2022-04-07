import Vue from 'vue'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vuelidate from 'vuelidate'
import VueObserveVisibility from 'vue-observe-visibility'
import GptAd from './gpt-ad'
import { ENV, GPT_MODE, IS_AD_DISABLE } from '~/configs/config'

console.log('ENV:', ENV)
console.log('GPT_MODE:', GPT_MODE)

export default function ({ store }) {
  Vue.use(VueAwesomeSwiper)

  console.log('ENV:', ENV)
  console.log('GPT_MODE:', GPT_MODE)

  Vue.use(GptAd, {
    adNetwork: '40175602',
    mode: GPT_MODE,
    isAdDisable:
      IS_AD_DISABLE || store.getters['membership-subscribe/isPremiumMember'],
  })

  Vue.use(Vuelidate)
  Vue.use(VueObserveVisibility)
}
