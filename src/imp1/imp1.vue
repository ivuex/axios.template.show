<template>
  <div id="imp1"></div>
</template>

<script>
  // import Vue from 'vue';
  // const bus = new Vue();
  export default {
    name: "imp1",
    data() { return {/*d:1,*/} },
    methods: {fn(){},},
    created(){},
    mounted(){},
    coumputed: {
      c: function() {}, // co: { get: function(){ }, set: function(){ }, }
    },
    watch: {w(){}},
    components: {/*importedComponent,*/},
    props: [/*'p',*/],
    // props: { //检测
    //   propA: Number,
    //   propB: [String, Number],
    //   propC: {type: String, required: true},
    //   propD: {type: Number, default: 7},
    //   propE: {type: Object, default: function(){}}
    //   propF: {validator: function(value) { return value > 6; }}
    // },
    model: {},
  }
</script>

<style scoped>

</style>
