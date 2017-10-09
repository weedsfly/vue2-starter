/**
 * Created by Webstorm.
 * @author taoqili
 * @date 2017/9/30
 */

// ======================================== //
// 导入pc-admin 布局并导出
import config from './layouts/pc-admin/init.conf'
import layout from './layouts/pc-admin/layout.vue'
// ======================================== //

// ======================================== //
// 导入布局mobile的基础UI库
// import config from './layouts/mobile/init.conf'
// import layout from './layouts/mobile/layout.vue'
// ======================================== //

export const layoutName = config.layoutName
export const template = config.template
export default layout