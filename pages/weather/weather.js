//index.js
//这里只获取了实况天气信息，没有用预测信息
//获取应用实例
const app = getApp()

Page({
  data: {
    adcode:'',
    city:'',
    humidity:'',
    province:'',
    reporttime:'',
    temperature:'',
    weather:'',
    winddirection:'',
    windpower:'',
  },

  onLoad:function(){
    var self = this;
    wx.request({
      url: 'https://restapi.amap.com/v3/weather/weatherInfo',
      data:{
        'key': 'ee83d9611abbe7401caa23b55e0d3663',//改为自己申请的Key
        'city': '120102',
        'extensions': 'base'
      },
      header:{
        'content-type': 'application/json'
      },
      success:function(res){
        console.log(res.data);
        self.setData({
          adcode: res.data.lives[0].adcode,
          city: res.data.lives[0].city,
          humidity: res.data.lives[0].humidity,
          province: res.data.lives[0].province,
          temperature: res.data.lives[0].temperature,
          reporttime: res.data.lives[0].reporttime,
          weather: res.data.lives[0].weather,
          winddirection: res.data.lives[0].winddirection,
          windpower: res.data.lives[0].windpower
        })
      }
    })
  }
})
