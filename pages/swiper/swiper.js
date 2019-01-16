// pages/swiper/swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    'name':String,
    'imgUrls':Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 50,
    nextMargin: 50,
    current:0
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    // toParent() {
    //   console.log(1)
    //   this.triggerEvent('fn', 'twins')
    // },
    change(ev){  //change事件，在每张图片滑动结束之后触发
      this.setData({
        current: ev.detail.current
      })
      this.triggerEvent('fn', ev.detail.current)
    }
  }
})
