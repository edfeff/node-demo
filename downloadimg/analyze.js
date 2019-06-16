const cheerio = require('cheerio');
/**
 * 解析dom
 * @param {*} dom 
 * @param {*} callback 
 */
function findImg(dom, callback) {
  let $ = cheerio.load(dom);
  $('img').each(function (i, elem) {
    let imgSrc = $(this).attr('src')
    callback(imgSrc, i);
  })
}

exports.findImg = findImg;