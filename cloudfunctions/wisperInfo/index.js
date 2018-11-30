// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const imgUrls

// 云函数入口函数
exports.main = async (event, context) => {
  db.collection('swiper_info').get({
    success: function (res) {
      imgUrls = res;
    },
    fail: function (error) {
      console.debug(error)
    }
  })
  return {
    imgUrls: imgUrls
  }
}