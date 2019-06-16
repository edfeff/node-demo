const request = require('request')
const path = require("path")
const config = require("./config")
const analyze = require("./analyze")
const fs = require('fs')
/**
 * 请求网址，解析dom，下载img
 */
function start() {
  request(config.url, function (err, res, body) {
    if (!err && res) {
      console.log('start')
      analyze.findImg(body, download)
    }
  })
}
/**
 * 下载
 * @param {*} imgUrl 
 * @param {*} i 
 */
function download(imgUrl, i) {
  let ext = imgUrl.split(".").pop();
  let fileName = path.join(config.imgDir, i + "." + ext);
  console.log(imgUrl)
  //http://cdn.jandan.net/static/ss/recreate-games.gif
  request('http:' + imgUrl)
    .pipe(fs.createWriteStream(fileName, { encoding: 'utf-8' }));
}
/**
 * 运行
 */
start();