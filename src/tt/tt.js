import 'bootstrap/dist/css/bootstrap.min.css';
import './.stable/index.scss';
import Vue from 'vue';
import tt from './tt.vue';
new Vue({
    el: '#tt',
    render: h=>h(tt),
}); 
