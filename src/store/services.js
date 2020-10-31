import Axios from 'axios'
import myService from '../services/MyService'

Axios.defaults.headers.common.Accept = 'application/json'

export default {
    myService: new myService(Axios)
}
