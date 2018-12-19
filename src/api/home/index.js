import ajax from '@/api/ajax.js'

export default{
    apitest(){
        return ajax.get('/news/test');
    }
}