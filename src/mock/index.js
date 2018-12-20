// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;

// mock一组数据
const produceNewsData = function() {
    let articles = [];
    for (let i = 0; i < 100; i++) {
        let newArticleObject = {
            title: Random.csentence(5, 8), //  Random.csentence( min, max )
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }
 
    return {
        articles: articles
    }
}

//模拟商家数据
const business_info = ()=>{
    return {
        business_name:'肯德基宅急送(鹤龙店)',
        score:'4.3',
        monthly_sales_volume:401,
        delivery_time:30,
    }
}



// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/test', 'get', produceNewsData);
Mock.mock('/business_info', 'get', business_info);
