<template>
  <div id="app">
  	<loading v-model="isLoading"></loading>
   <view-box ref="viewBox">
	     <!--<x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"></x-header>-->
	     <!--<transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">-->
        <router-view
        	class="router-view"></router-view>
      <!--</transition>-->
 			<tabbar slot="bottom" v-show="!showBottom">
	      <tabbar-item :link="{path:'/home'}">
	      	<span slot="icon"><img src="../assets/heart-18.png"/></span>
	        <span slot="label">HOME</span>	      	
	      </tabbar-item>
	      <tabbar-item :link="{path:'/'}">
	       	<span slot="icon"><img src="../assets/heart-19.png"/></span>
	        <span slot="label">HELLO</span>
	      </tabbar-item>
	      <tabbar-item :link="{path:'/txt'}">
	      	<span slot="icon"><img src="../assets/heart-11.png"/></span>
	        <span slot="label">TXT</span>
	      </tabbar-item>
 			</tabbar>
   </view-box>
  </div>
</template>
<script>
import {  ViewBox, Tabbar, TabbarItem } from 'vux'
import Loading from '../components/loading/index.vue'
import { mapState } from 'vuex'
export default {
  name: 'app',
  components: {
  	ViewBox,
  	Tabbar,
  	TabbarItem,
  	Loading
  },
	computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading,
      route: state => state.route,
      path: state => state.route.path
    }),
    showBottom () {
      return /hideFooter/.test(this.route.path)
    },
  }
}
</script>

<style lang="less">
#app .weui-tabbar{
	position:fixed
}
</style>
