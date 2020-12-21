//app.js
App({
  onLaunch: function () {
    wx.login({
      success (res) {
        console.log(res.code);return;
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://ganfanren.ll1.top/index.php/index/index/login',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'linglema-4g784qcj4b378b72',
        traceUser: true,
      })
    }

    this.globalData = {}
  }
})
