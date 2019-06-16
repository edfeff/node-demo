const request = require('request')
const path = require("path")
const config = require("./config")
const analyze = require("./analyze")
const fs = require('fs')

function start() {
  request(config.url, function (err, res, body) {
    if (!err && res) {
      console.log('start')
      analyze.findImg(body, download)
    }
  })
}
function download(imgUrl, i) {
  let ext = imgUrl.split(".").pop();
  let fileName = path.join(config.imgDir, i + "." + ext);
  console.log(imgUrl)
  //http://cdn.jandan.net/static/ss/recreate-games.gif
  request('http:' + imgUrl)
    .pipe(fs.createWriteStream(fileName, { encoding: 'utf-8' }));
}
start();