<template>
    <div class="temps">
        <bs-temp-view v-for="(bsUri, index) in bsHtmls" :uri="bsUri" :key="index">
        </bs-temp-view>
    </div>
</template>

<script>
    import bsTempView from './bsTempView/bsTempView.vue';
    // import bs3TemplatesListObj from '../../data/bs3.templates.list.obj.js'
    import bsHtmlAry from '../../data/bs.html.ary.js'
    // console.log(bs3TemplatesListObj);
    console.log(bsHtmlAry);
    let bsHtmls = bsHtmlAry.reduce((prev, next) => {
        // console.log(prev, next);
        return prev.concat(next);
    }, []);
    console.log(bsHtmls);
    bsHtmls = bsHtmls.map(item => {
        const base = 'http://localhost:7786/bs-template';
        return item.replace(/^\.\/(.*)$/, function () {
            if(arguments && arguments[1]){
              return base + '/' + arguments[1];
            }else{
              console.log('No correct path matched.');
              return void 0;
            }
        });
    });
    console.log(bsHtmls);

    export default {
        name: "index",
        data() {
            return {
                bsHtmls,
            }
        },

        components: {
            bsTempView,
        },
    }
</script>

<style scoped>

</style>
