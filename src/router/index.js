import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: function (resolve) {
		    require(['../pageComponents/Hello.vue'], resolve)
		  }
    },
    {
      path: '/home',
      component: function (resolve) {
		    require(['../pageComponents/Home.vue'], resolve)
		  }
    },
    {
      path: '/txt',
      component: function (resolve) {
		    require(['../pageComponents/Txt.vue'], resolve)
		  }
    },
    {
      path: '/colorpicker',
      component: function (resolve) {
		    require(['../pageComponents/ColorPicker.vue'], resolve)
		  }
    },
    {
      path: '/calendar',
      component: function (resolve) {
		    require(['../pageComponents/Calendar.vue'], resolve)
		  }
    },
    {
      path: '/panel',
      component: function (resolve) {
		    require(['../pageComponents/Panel.vue'], resolve)
		  }
    },
    {
      path: '/previewer',
      component: function (resolve) {
		    require(['../pageComponents/Previewer.vue'], resolve)
		  }
    }
  ]
})
