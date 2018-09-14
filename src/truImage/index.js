/**
 * Created by Trubasa 1141521502@qq.com on 2018/9/14.
 */
import truImage from './truImage'
const plugins={
  install(Vue,options){
    Vue.component(truImage.name,truImage);
  }
}

if(typeof window !=='undefined' && window.Vue){
  window.Vue.use(plugins);
}

export default plugins
