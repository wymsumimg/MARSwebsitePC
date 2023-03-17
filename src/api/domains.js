let domainsFuc = (env) => {
  let domain,domain2, bucket, uri = location.host;
  if (uri.includes('test')) {
    domain = 'https://pretest.i31.com/AIR/CRM'
    bucket = ''
    
  } else {  
    domain = 'https://m.balpu.com/AIR/CRM';
    bucket = ''
  }
  
  // domain = 'http://192.168.21.222:8017/APi/' //测试平台
  domain = 'https://api.wfjar.com/APi/' //正式平台
  // console.log("domain",domain)
  // domain2 = 'http://192.168.21.222:8013/APi/'  //测试上传文件接口
  domain2 = 'https://img.wfjar.com/APi/'  //正式上传文件接口
  
  return {
    domain: domain,
    domain2:domain2,
    ossBucket: bucket,
    ossDomain: '', 
    
    ossRegion: "",
  }
};
export default domainsFuc
