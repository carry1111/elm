import ajax from '@/api/ajax.js'

export default{
    getGoodsList(){
        return ajax.get('/goods_list');
    }
}