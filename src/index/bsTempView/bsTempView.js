import './.stable/index.scss';
import Vue from 'vue';
import bsTempView from './bsTempView.vue';
new Vue({
    el: '#bs-temp-view',
    render: h=>h(bsTempView),
}); 
