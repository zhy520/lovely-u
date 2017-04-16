<template>
	<div class="home">
		<form-preview header-label="付款金额" header-value="¥2400.00" :body-items="list" :footer-buttons="buttons1"></form-preview>
	   	<br/>
	   	<form-preview :header-label="type" class="view2" :header-value="price" :body-items="list" :footer-buttons="buttons2"></form-preview>
		<br/>
		<form-preview header-label="付款金额" header-value="¥2400.00" :body-items="list" :footer-buttons="buttons1"></form-preview>
		<br />
		<form-preview header-label="付款金额" header-value="¥2400.00" :body-items="list" :footer-buttons="buttons1"></form-preview>
		<br />
		<form-preview header-label="付款金额" header-value="¥2400.00" :body-items="list" :footer-buttons="buttons1"></form-preview>
	</div>
</template>
<script>
import mixin from '../libs/mixin'
import { Group, Cell,FormPreview } from 'vux'
import $ from 'jquery'
export default {
  components: {
    Group,
    Cell,
    FormPreview
  },
  mixins: [mixin],
  mounted: function(){
  	this.setDocumentTitle("home")
  },
  data () {
    return {
      msg1: '这就是我的home',
      type:'收款金额',
      price:'$6600.00',
      list: [{
        label: '商品',
        value: '电动打蛋机'
      }, {
        label: '标题标题',
        value: '名字名字名字'
      }, {
        label: '标题标题',
        value: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字'
      }],
      buttons1: [{
        style: 'default',
        text: '辅助操作'
      }, {
        style: 'primary',
        text: '跳转到日期',
        link: '/calendar'
      }],
      buttons2: [{
        style: 'default',
        text: '我的相册',
        link: '/previewer'
      }, {
        style: 'primary',
        text: '挑选色系',
        link: '/colorpicker'
      }]
    }
  }
}
</script>
<style scoped>
	a.weui-form-preview__btn_default{
		color:#0000FF
	}
</style>
