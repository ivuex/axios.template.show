import './.stable/index.scss';
import Vue from 'vue';
import vclip from './vclip.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
new Vue({
    el: '.vclip',
    render: h=>h(vclip),
}); 
