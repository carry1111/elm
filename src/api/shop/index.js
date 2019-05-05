import ajax from './../ajax.js'
export default{
    getShoplist(){
        return ajax.get('/getShoplist')
    }
}