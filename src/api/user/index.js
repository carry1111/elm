import {ajax,qs} from '../ajax.js'
export default{
    login(params){
       return ajax.post('user.php?action=ajax_user_login',qs.stringify(params))
    },
}