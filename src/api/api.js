import fetch from './request'

/****************new****************/
// 登录
// export function userLogin(params) {
//   return fetch.post('/login/pwd', params);
// }
// // 修改密码
// export function updatePwd(params) {
//   return fetch.post('/login/update/pwd', params);
// }
// // 发送--短信验证码
// export function smsSend(params) {
//   return fetch.get('/sms/send', {params});
// }
// // 退出接口
// export function logout(params) {
//   return fetch.get('/exit', {params});
// }
// //获取ossToken
// export const getOssToken=(params)=> {
//   return fetch.get('/oss/token',{
//     params
//   })
// };

// 登录接口
export function employeeClientLogin(params) {
  return fetch.post('Employee/ClientLogin', params);
}
// 左侧菜单，查询，权限
export function getRoleMenu(params) {
  return fetch.post('Employee/getRoleMenu', params);
}

// 角色-按钮权限-登录查询
export const GetRoleBtn=(params)=> {
  return fetch.get('Employee/GetRoleBtn',{
    params
  })
};
// 角色按钮权限，新增
export function AddEditRoleBtn(params) {
  return fetch.post('Employee/AddEditRoleBtn', params);
}

