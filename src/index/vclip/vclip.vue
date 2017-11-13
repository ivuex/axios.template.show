<template>
  <div class="vclip">
    <span
            v-clipboard="cpText"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
    >
    <slot name="icon"></slot>
    </span>
    <!--If you need to comstomize the copy tips, comment next line.-->
    <!---<div class="tip" v-if="copyTipping">Copied: {{cpText.slice(0, 20)}} ...</div>-->
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';

  import VueClipboard from 'vue-clipboard2';

  Vue.use(VueClipboard);

  export default {
    props: {
      cpText: {
        validator: function(s){
          console.log(arguments[0]);
          console.log('above is the someStr passed in , is it right?');
          return true;
        }
      }
    },
    data() {
      return {
        copyTipping: false,
      }
    },
    methods: {
      onCopy: function (e) {
        alert('You just copied: ' + e.text)
        this.copyTipping = true;
        setTimeout(()=>{
          this.copyTipping = false;
        }, 2000);
      },
      onError: function (e) {
        alert('Failed to copy texts')
      },
    }
  }

</script>

<style scoped>

</style>
