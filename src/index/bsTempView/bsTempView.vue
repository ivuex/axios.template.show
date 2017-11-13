<template>
    <div class="wrap">
        <div class="wrap-head">
            <p v-text="shortCut" class="short-cut"></p>
            <div class="util-bar">
                <vclip class="cp" :cpText="shortCut">
                    <i slot="icon"  class="glyphicon glyphicon-copy"></i>
                </vclip>
                <vclip class="cp" :cpText="sourceStr">
                    <i slot="icon"  class="glyphicon glyphicon-paste"></i>
                </vclip>
                <span><i class="glyphicon glyphicon-download"></i></span>
            </div>
        </div>

        <div class="wrap-body">
            <div class="view-box">
                <span>
                    <div v-html="renderStr"></div>
                </span>
            </div>
        </div>
        
        <div class="wrap-footer">
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
    import Vclip from '../vclip/vclip.vue';
    import JsBase64 from 'js-base64';
    const base64 = JsBase64.base64;
    export default {
        name: "bsTempView",
        props: [
            'uri',
        ],
        data() {
            return {
                tempStr: '',
                renderStr: '',
                sourceStr: 'I am sourceStr in data, bsTempView.vue',
                shortCut: '短指令: ',
                base: 'http://localhost:17002',
                hackedUri: '',
            }
        },
        created() {
            this.tempStr = 'loading ...'
            this.shortCut = this.writeShortCut(); //填入真正的短指令文本；
            if(this.uri){
                this.hackedUri = this.base + '/' + encodeURIComponent(this.uri);
            }else{
                this.hackedUri = '<ul class="list-group"> <li class="list-group-item"> <span class="badge">5</span> Item 1 </li> <li class="list-group-item"> <span class="badge">1</span> Item 2 </li> <li class="list-group-item"> <span class="badge">25</span> Item 3 </li> </ul>';
            }
            console.log(this.hackedUri);
            console.log('above is the hackedUri outputed is created, is it right?');
        },
        components: {
            Vclip,
        },
        methods: {
            writeShortCut(){
                let short =  this.uri.match(/\/([^\/]+)\.bs\.html$/)[1] ;
                return short;
            },
            assignRenderStr(){
                axios.get(this.hackedUri).then(res => {
                    const str = res.data;
                    if (/(?:\.ttf|woff|woff2)$/.test(str)) {
                    }
                    this.sourceStr = str;
                    this.renderStr = str.replace(/<link\s.*>/g, '');
                }, err => {
                    throw err;
                })
            }
        },
        watch: {
            tempStr() {
                this.assignRenderStr();
            },
        }

    }
</script>

<style scoped>

</style>