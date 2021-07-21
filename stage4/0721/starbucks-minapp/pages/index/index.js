// index.js
// 获取应用实例
const app = getApp();

Page({
  data: {
    swiperCurrent: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    circular: true,
    //祝好运页面卡片图片和内容
    cardUrlsandDes: [
      { url: "../../image/list1.png", des: "高考加油" },
      { url: "../../image/list2.png", des: "你最棒" },
      { url: "../../image/list3.png", des: "第一名是你" },
      { url: "../../image/list4.png", des: "一起玩耍" },
      { url: "../../image/list5.png", des: "酷爽一下" },
      { url: "../../image/list6.png", des: "放松一下" },
      { url: "../../image/list7.png", des: "有你真好" },
      { url: "../../image/list8.png", des: "生快" },
    ],
    links: ["../user/user", "../user/user", "../user/user"],
  },

  //轮播图的切换事件
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current,
    });
  },
  //点击指示点切换
  chuangEvent: function (e) {
    this.setData({
      swiperCurrent: e.currentTarget.id,
    });
  },
  //点击图片触发事件
  swipclick: function (e) {
    console.log(this.data.swiperCurrent);
    wx.switchTab({
      url: this.data.links[this.data.swiperCurrent],
    });
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: "../logs/logs",
    });
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true,
      });
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: "展示用户信息", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res);
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        });
      },
    });
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e);
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    });
  },
});
