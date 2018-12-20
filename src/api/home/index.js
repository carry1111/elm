import ajax from '@/api/ajax.js'

export default{
    getBusinessInfo(){
        return ajax.get('/business_info');
    }
}