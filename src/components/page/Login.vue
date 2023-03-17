<template>
    <div class="login-wrap">
        <div class="titlePosi">
            <div class="titleQi" :style="{'fontSize':fontSize+'px'}">模具企业协同制造平台</div>
            <div class="titleQiEn">Collaborative manufacturing platform for Mould Enterprises</div>
        </div>
        <div class="ms-login">
            <div class="jiaoBiao1">
                <img class="jbImg1" src="../common/comImg/loginBgRight.png" alt="">
            </div>
            <div class="jiaoBiao2">
                <img class="jbImg1" src="../common/comImg/loginBgRight.png" alt="">
            </div>
            <div class="jiaoBiao3">
                <img class="jbImg1" src="../common/comImg/loginBgRight.png" alt="">
            </div>
            <div class="jiaoBiao4">
                <img class="jbImg1" src="../common/comImg/loginBgRight.png" alt="">
            </div>
            <div class="ms-title" >
                    <!-- 用户登录 -->
                <div class="title_left">{{$t('menu.userLogin')}}</div>
                <div class="title_right"  style="width:110px">
                    <el-select v-model="value" :placeholder="$t('menu.pSelect')" @change="tabLang()" :popper-append-to-body="true"
           popper-class="operateDropOption" >
                        <el-option
                        v-for="item in options" 
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </div>
            </div>
            <el-form :model="param" :rules="rules" v-show="flag==1" ref="param" label-width="0px" class="ms-content">
                <div class="loginInput">
                    <el-form-item prop="username" class="form_container"  style="position:relative;"
                        :rules="[{ required:true, message: this.$t('menu.slDeparPlace'), trigger:'blur'}]"
                    >
                        <img class="topDing" src="../common/comImg/user.png" alt="">   
                        <el-input v-model="param.username" :placeholder="$t('menu.userName')">  
                        </el-input>
                    </el-form-item>
                    
                    <el-form-item prop="password"
                    style="position:relative;"
                    class="form_container"
                        :rules="[{ required:true, message: this.$t('menu.pwPlace'), trigger:'blur'}]"
                    >
                        <img class="topDing" src="../common/comImg/password.png" alt="">  
                        <el-input
                            type="password"
                            :placeholder="$t('menu.password')"
                            v-model="param.password"
                            @keyup.enter.native="submitForm('param')"
                        >
                        </el-input>
                    </el-form-item>
                </div>
                

                <div flex="main:justify cross:center">
                    <div class="keepLo" style="text-align:right;" >
                        <el-checkbox v-model="keepLogin"  v-if="flag==1"><span style="color:#46A6DC;">{{$t('menu.keepLogin')}}</span></el-checkbox>
                    </div>
                    <div style="text-align:right;">
                        <div style="text-align:right;color: #00BEF7;font-size: 17px;">V.2.1.6</div>
                        <!-- <el-button type="text" :style="flag==2?'display:none':''"  @click="checkLogin(2)">{{$t('menu.tpLogin')}}</el-button> -->
                    </div>
                </div>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('param')" >{{$t('menu.login')}}</el-button>
                </div>
                
                
                
            </el-form>
            
        </div>
    </div>
</template>

<script>
import {TokenKeys} from '@/utils/variable'
// import {employeeClientLogin,employeeSendValiCode,employeePhoneLogin} from '@/api/api1.js'
import CusBase64 from '@/utils/base64'
import {toggleClass} from '../../utils/index'
export default {
    data: function() {
        return {
            isRules:{},
            // 验证码
            disabled:false,
            time:5,
            // 发送验证码
            btntxt:this.$t('menu.sendCode'),


            param: {
                
            },
            param2: {
                
            },
            flag:1,
            keepLogin:false,
            rules: {
                // 请输入用户名
                // username: [{ required: true, message: this.$t('menu.slDeparPlace'), trigger: 'blur' }],
                // 请输入密码
                // password: [{ required: true, message: this.$t('menu.pwPlace'), trigger: 'blur' }],
            },
            rules2:{
                // 请输入手机号码
                 phone: [{ required: true, message: this.$t('menu.importPhone'), trigger: 'blur' }],
                //  请输入验证码
                verificationCode:[{ required: true, message: this.$t('menu.importCode'), trigger: 'blur' }],
            },
            value:"ch",
            options: [
                {
                value: 'ch',
                label: '简体中文'
                }, {
                value: 'jp',
                label: '日本語'
                }, 
                // {
                // value: 'la',
                // label: '拉丁语'
                // }
            ],

            themecolor:'E9461F',//默认颜色蓝色 409eff
            fontSize:53
        };
    },
    // computed:{
    //     themecolor:{
    //         get(){
    //             return this.$store.state.themecolor
    //         },
    //         set(val){
    //             this.$store.commit('setThemeColor',val)
    //         }
    //     }
    // },
    // watch:{
    //     themecolor:{
    //         handler(){
    //             toggleClass(document.body,'custom-'+this.themecolor)
    //         }
    //     }
    // },
    mounted() {
        if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { //判断iPhone|iPad|iPod|iOS 安卓
            this.fontSize=28
        }else { //pc
            this.fontSize=53
        };
        console.log(this.themecolor,'curcolor1')
        toggleClass(document.body,'custom-'+this.themecolor)
        this.$store.commit('setThemeColor',this.themecolor)
        let curcolor=this.$store.state.themecolor
        console.log(curcolor,'curcolor')
        // 根据全局换肤 得到全局颜色
        localStorage.setItem('themeColor',this.themecolor)


        if(localStorage.getItem('lang')=='ch'){
            this.$i18n.locale = 'ch'
            this.value='ch'
        }else if(localStorage.getItem('lang')=='jp'){
            this.$i18n.locale = 'jp'
            this.value='jp'
        }else if(localStorage.getItem('lang')=='la'){
            this.$i18n.locale = 'la'
            this.value='la'
        }
        if(localStorage.getItem('keepLogin')){
            let kplo=localStorage.getItem('keepLogin')
            this.keepLogin=eval(kplo.toLowerCase())
        }
        
    },
    methods: {
        //转换登录方式
        checkLogin(index){
            this.flag=index;
        },
        //切换语言
        tabLang(){
            if(this.value=='ch'){
                this.$i18n.locale = 'ch'
            }else if(this.value=='jp'){
                this.$i18n.locale = 'jp'
            }else if(this.value=='la'){
                this.$i18n.locale = 'la'
            }
        },
        
       //点击登录  
        submitForm(formName) {
             this.$refs[formName].validate((valid) => {
                if (valid) {
                    let Domain=document.location.host;
                    //用户名密码登录
                    if(this.flag==1){
                        const rLoading = this.openLoading();
                            let params={
                            "Name":this.param.username,
                            "Domain":Domain,
                            "PassWord":this.param.password
                        }
                        employeeClientLogin(params).then(res=>{
                                const {ReturnCode,Data}=res
                                if(ReturnCode==200){
                                    rLoading.close();
                                    localStorage.setItem(TokenKeys.emp_ID, res.Data.ID);//公司名称
                                    localStorage.setItem(TokenKeys.Comp_Name, res.Data.Comp_Name);//公司名称
                                    localStorage.setItem(TokenKeys.userName, res.Data.Name);//用户名
                                    localStorage.setItem(TokenKeys.m_Company_Role_Name, res.Data.m_Company_Role_Name);//角色名称
                                    localStorage.setItem('ms_username', Data.Company_ID);
                                    localStorage.setItem(TokenKeys.memberToken, res.Data.Token);
                                    localStorage.setItem(TokenKeys.Company_ID, res.Data.Company_ID);
                                    // localStorage.setItem(TokenKeys.WorkCode, res.Data.WorkCode);
                                    localStorage.setItem(TokenKeys.TrueName, res.Data.TrueName);
                                    localStorage.setItem(TokenKeys.m_Company_Role_ID, res.Data.m_Company_Role_ID);
                                    localStorage.setItem(TokenKeys.keepLogin,this.keepLogin)
                                    this.$router.push('/index');          
                                }else{
                                     rLoading.close();
                                }  
                            }) 
                   
                    }
                        
                } else {
                    return false;
                }
            })
            if(this.$i18n.locale == 'ch'){
                    localStorage.setItem('lang','ch')
            }else if(this.$i18n.locale == 'jp'){
                    localStorage.setItem('lang','jp')
            } else if(this.$i18n.locale == 'la'){
                    localStorage.setItem('lang','la')
            } 
            
            
        },
        
    },
};
</script>
<style lang='scss'>

.keepLo .el-checkbox{
    color:#bebebf;
}
/* .el-input-group__append, .el-input-group__prepend{
    padding: 0 12px !important;
} */
.el-input-group__prepend{
    padding: 0 12px !important;
}
.loginInput .el-input__inner{
    padding-left: 37px;
    border: 1px solid #1B7FC0;
    background-color: #256899;
    color: #fff;
}
.keepLo .el-checkbox__inner{
    border: 1px solid #46A6DC;
    background: transparent;
}
.form_container input::-webkit-input-placeholder { 
/* WebKit browsers */ 
color: #46A6DC; 
} 
.form_container input:-moz-placeholder { 
/* Mozilla Firefox 4 to 18 */ 
color: #46A6DC; 
} 
.form_container input::-moz-placeholder { 
/* Mozilla Firefox 19+ */ 
color: #46A6DC; 
} 
.form_container input:-ms-input-placeholder { 
/* Internet Explorer 10+ */ 
color: #46A6DC; 
}
.title_right .el-input__inner{
        
        background: rgba(70, 166, 220, .5) !important;
        color: #46A6DC;
        border: none;
    }
     .operateDropOption{
        background: rgba(70, 166, 220, .5) !important;
        ul{
            li{
                color: #fff;
            }
            .el-select-dropdown__item.hover, .el-select-dropdown__item:hover{
                    background-color:#46A6DC;
            }
        }
    }
</style>

<style  scoped>

.login-wrap {
    position: relative;
    /* width: 100%; */
    height: 100%;
    background:100% url(../../assets/img/login-bg.png);
    /* background-size: 100%; */
}
.ms-title {
    width: 100%;
    line-height: 50px;
    font-size: 20px;
    color: #00BEF7;
    border: 2px solid #065C9A;
    border-bottom: none;
    padding: 15px 30px 0;
    overflow: hidden;
    box-sizing: border-box;
}
.title_left{
    float: left;
}
.title_right{
    float: right;
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    background: rgba(11, 161, 248, .22);    
    overflow: hidden;
    
}
.ms-content {
    border: 2px solid #065C9A;
    border-top: none;
    padding: 10px 30px 30px;
}
.login-btn {
    text-align: center;
    margin-top: 10px;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
 
</style>
<style lang="scss" scoped>
    .titlePosi{
        padding-top: 7%;
        .titleQi{
            text-align: center;
            // font-size: 53px;
            font-family: 缁忓吀缁嗗渾绠€;
            font-weight: 400;
            background: linear-gradient(to right,  #009DF4 0%, #00E9D0 100%);
            -webkit-background-clip: text;
            color: transparent;
        }
        .titleQiEn{
            text-align: center;
            font-size: 17px;
            font-family: FZLTXHJW;
            font-weight: normal;
            background: linear-gradient(to right, #009DF4 0%, #00E9D0 100%);
            -webkit-background-clip: text;
            color: transparent;
        }

    }
    .jiaoBiao1{
        position: absolute;
        left: 0px;
        top: 0px;
        width: 36px;
        height: 36px;
        
        .jbImg1{
            
            width: 100%;
            transform: rotate(270deg);
        }
    }
    .jiaoBiao2{
        position: absolute;
        right: 0px;
        top: 0px;
        width: 36px;
        height: 36px;
        .jbImg1{
            width: 100%;
        }
    }
    .jiaoBiao3{
        position: absolute;
        
        width: 36px;
        height: 36px;
        left: 0px;
        bottom: 0px;
        .jbImg1{
            
            width: 100%;
            transform: rotate(180deg);
        }
    }
    .jiaoBiao4{
        position: absolute;
        
        width: 36px;
        height: 36px;
        right: 0px;
        bottom: 0px;
        .jbImg1{
            
            width: 100%;
            transform: rotate(90deg);
        }

    }
    .topDing{
        position: absolute;
        left: 12px;
        top: 7px;
        z-index: 22;
        width: 17px;
    }
</style> 