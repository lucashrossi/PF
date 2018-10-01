import Vue from 'vue'

import NC from '~/components/NC.vue'
import NCC from '~/components/NCC.vue'
// import pdf from 'vue-pdf'
// import VuePDFViewer from 'vue-pdf-viewer'
// import pdfshower from 'vue-pdf-shower'
// import pdf from 'pdfvuer'
import tabla from '~/components/tabla.vue'
import FISC from '~/components/FISC.vue'
import PBF from '~/components/PBF.vue'
import Radar from '~/components/Radar.vue'

Vue.component('NC', NC)
Vue.component('NCC', NCC)
// Vue.component('pdf', pdf)
// Vue.component('VuePDFViewer', VuePDFViewer)
// Vue.component('pdfshower', pdfshower)
Vue.component('tabla', tabla)
Vue.component('FISC', FISC)
Vue.component('PBF', PBF)
Vue.component('Radar', Radar)
