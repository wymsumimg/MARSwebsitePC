<template>
    <div class="header">
        <div class="header-right" style="font-weight:600;">
            <div class="header-user-con">
                <p class="aboutUs headerWrapper" @click="toCompanyPage">
                    <img src="../common/screenshots/homeImg/companyIcon.png" class="headerImg">
                    {{Comp_Name}}
                    <span style="color:#000;margin-left:15px">|</span></p>
                <p  style="margin-right:10px;font-size:16px" class="headerWrapper">
                    <img src="../common/screenshots/homeImg/userIcon.png" class="headerImg">
                    {{userName}}
                </p>
                <div style="cursor:pointer;font-size:16px" @click="loginOut()">{{$t('menu.loginOut')}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import bus from '../common/bus';
// import {getCompanyInfo} from '@/api/api1.js'
export default {
    data() {
        return {
            companyInfo:[],
            collapse: true,
            fullscreen: false,
            name: 'linxin',
            message: 2,
            userName:localStorage.getItem('TrueName'),
            Comp_Name:''
            
        };
    },
    computed: {
        username() {
            let username = localStorage.getItem('ms_username');
            return username ? username : this.name;
        }
    },
    created(){
        // this.getCompanyInfoFn()
    },
    methods: {
        toCompanyPage(){
            if(this.$route.path=='/factoryMess'){
                return false
            }
            this.$router.push('factoryMess');
        },
        //获取公司信息
        // getCompanyInfoFn(){
        //         let params={
        //             ID:localStorage.getItem('Company_ID')
        //         }
        //         getCompanyInfo(params).then(res=>{
        //             const {ReturnCode,Data}=res
        //             if(ReturnCode==200){
        //                 this.companyInfo=Data;
        //             }      
        //     })
        // },
        loginOut(){
            
            localStorage.removeItem('ms_username');
            localStorage.removeItem('Comp_Name');
            localStorage.removeItem('userName');
            localStorage.removeItem('m_Company_Role_Name');
            localStorage.removeItem('memberToken');
            localStorage.removeItem('Company_ID');
            localStorage.removeItem('TrueName');
            localStorage.removeItem('m_Company_Role_ID');
            localStorage.removeItem('isEmp_Add_Del')

            // localStorage.clear()
            if(localStorage.getItem('autoLoginBack')){
                console.log(localStorage.getItem('autoLoginBack'),"localStorage.getItem('autoLoginBack')")
                let autoBack=localStorage.getItem('autoLoginBack')
                //  window.location.href =autoBack
                window.location.replace(autoBack)
                localStorage.removeItem('autoLoginBack')
            }else{
                this.$router.push('/login');
            }

            
           
        },
        // 用户名下拉菜单选择事件
        // handleCommand(command) {
        //     if (command == 'loginout') {
        //         // localStorage.removeItem('facCode')
        //         // localStorage.removeItem('username')
        //         // localStorage.removeItem('password')

        //         localStorage.removeItem('ms_username');
        //         this.$router.push('/login');
        //     }
        // },
        // 侧边栏折叠
        collapseChage() {
            this.collapse = !this.collapse;
            bus.$emit('collapse', this.collapse);
        },
        // 全屏事件
        handleFullScreen() {
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        }
    },
    mounted() {
        if(localStorage.getItem('lang')=='ch'){
            this.$i18n.locale = 'ch'
        }else if(localStorage.getItem('lang')=='jp'){
            this.$i18n.locale = 'jp'
        }
        if (document.body.clientWidth < 1500) {
            this.collapseChage();
        }
         this.Comp_Name=localStorage.getItem('Comp_Name')?localStorage.getItem('Comp_Name'):''
    }
};
</script>
<style scoped lang='scss'>
.headerWrapper{display:flex;align-items: center;}
.headerImg{width:16px;height:16px;margin-right:5px;}
.aboutUs{cursor:pointer;font-size:16px;padding-right:15px;}
.header {
    position: relative;
    box-sizing: border-box;
    // width: 100%;
    // height: 70px;
    // line-height: 70px;
    font-size: 22px;
    color: #000;
    background: transparent;
    margin-left: 240px;
    height: 70px;
    line-height: 70px;
    z-index: 8;
}
.collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
}
.header .logo {
    float: left;
    width: 320px;
    // line-height: 70px;
}
.header-right {
    float: right;
    padding-right: 50px;
}
.header-user-con {
    display: flex;
    // height: 70px;
    align-items: center;
}
.btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
}
.btn-bell-badge {
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
}
.btn-bell .el-icon-bell {
    color: #fff;
}
.user-name {
    margin-left: 10px;
}
.user-avator {
    margin-left: 20px;
}
.user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.el-dropdown-link {
    color: #fff;
    cursor: pointer;
}
.el-dropdown-menu__item {
    text-align: center;
}
</style>
