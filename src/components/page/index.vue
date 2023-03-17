<template>
    <div class="indexBox">
        <div class="rightFixed">
            <!-- <div class="rightFixedLange">
                EN
            </div> -->
            <div class="editFanKui" flex="dir:top" v-show="titleNum == 2">
                <img src="../common/comImg/edit.png" alt="" />
                <span>文档反馈</span>
            </div>
            <div class="rightFixedphone" v-show="titleNum == 0 || titleNum == 3">
                <img src="../common/comImg/phone.png" alt="" />
            </div>
            <div class="rightFixedTop" v-show="toTopShow" @click="TopBotton">
                <i class="el-icon-arrow-up"></i>
            </div>
        </div>
        <div class="gaosiMoHu"></div>
        <div class="topFixed" id="topFixed">
            <div class="banXin marginAuto topTitle" flex="cross:center">
                <div flex="cross:center">
                    <img class="logoImg" src="../common/comImg/yblogo.png" alt="" />
                    <span class="logoText">云笔智能</span>
                </div>
                <div class="topTab">
                    <ul flex="cross:center">
                        <li
                            id="no0"
                            @click="titleClick(0)"
                            @mouseenter="NoOneEnter(0)"
                            @mouseleave="NoOneLeave(0)"
                            :style="{
                                color: num == 0 ? '#' + themecolor : '#000',
                                borderBottomWidth: '2px',
                                borderBottomStyle: 'solid',
                                borderBottomColor: num == 0 ? '#' + themecolor : 'transparent'
                            }"
                            flex="cross:center"
                        >
                            <span class="chanPro">产品介绍</span>
                            <span
                                class="el-icon-arrow-down iconSizeUp"
                                :style="{ transform: num == 0 ? 'rotate(180deg)' : '', transition: ' all .5s' }"
                            ></span>
                        </li>
                        <li
                            id="no1"
                            @click="titleClick(1)"
                            @mouseenter="NoOneEnter(1)"
                            @mouseleave="NoOneLeave(1)"
                            :style="{
                                color: num == 1 ? '#' + themecolor : '#000',
                                borderBottomWidth: '2px',
                                borderBottomStyle: 'solid',
                                borderBottomColor: num == 1 ? '#' + themecolor : 'transparent'
                            }"
                            flex="cross:center"
                        >
                            <span class="chanPro">解决方案</span>
                            <span
                                class="el-icon-arrow-down iconSizeUp"
                                :style="{ transform: num == 1 ? 'rotate(180deg)' : '', transition: ' all .5s' }"
                            ></span>
                        </li>
                        <li
                            id="no2"
                            @click="titleClick(2)"
                            @mouseenter="NoOneEnter(2)"
                            @mouseleave="NoOneLeave(2)"
                            :style="{
                                color: num == 2 ? '#' + themecolor : '#000',
                                borderBottomWidth: '2px',
                                borderBottomStyle: 'solid',
                                borderBottomColor: num == 2 ? '#' + themecolor : 'transparent'
                            }"
                            flex="cross:center"
                        >
                            <span class="chanPro">支持与服务</span>
                            <span
                                class="el-icon-arrow-down iconSizeUp"
                                :style="{ transform: num == 2 ? 'rotate(180deg)' : '', transition: ' all .5s' }"
                            ></span>
                        </li>
                        <li
                            id="no3"
                            @click="titleClick(3)"
                            @mouseenter="NoOneEnter(3)"
                            @mouseleave="NoOneLeave(3)"
                            :style="{
                                color: num == 3 ? '#' + themecolor : '#000',
                                borderBottomWidth: '2px',
                                borderBottomStyle: 'solid',
                                borderBottomColor: num == 3 ? '#' + themecolor : 'transparent'
                            }"
                            flex="cross:center"
                        >
                            <span class="chanPro">了解云笔</span>
                            <span
                                class="el-icon-arrow-down iconSizeUp"
                                :style="{ transform: num == 3 ? 'rotate(180deg)' : '', transition: ' all .5s' }"
                            ></span>
                        </li>
                    </ul>
                </div>
                <transition name="move" mode="out-in">
                    <div class="topTab_content" v-show="num >= 0 && nums">
                        <div v-show="num == 0 && nums" @mouseenter="NoOneEnter(0)" @mouseleave="NoOneLeave(0)">
                            <ul flex="cross:center" :style="{ left: leftDis - 20 + 'px' }">
                                <li>MarOS管理平台</li>
                                <li>远程协助</li>
                                <li>远程核验</li>
                                <li>作业指导</li>
                                <li>作业sop</li>
                                <li>在线培训</li>
                            </ul>
                        </div>

                        <div v-show="num == 1 && nums" @mouseenter="NoOneEnter(1)" @mouseleave="NoOneLeave(1)">
                            <ul flex="cross:center" style="left: 590px" :style="{ left: leftDis - 20 + 'px' }">
                                <li>模具行业解决方案</li>
                                <li>磁业解决方案</li>
                                <li>外贸类解决方案</li>
                                <li>其他</li>
                            </ul>
                        </div>
                        <div v-show="num == 2 && nums" @mouseenter="NoOneEnter(2)" @mouseleave="NoOneLeave(2)">
                            <ul flex="cross:center" style="left: 785px" :style="{ left: leftDis - 20 + 'px' }">
                                <li>功能文档</li>
                                <li>建议反馈</li>
                                <li>联系我们</li>
                            </ul>
                        </div>
                        <div v-show="num == 3 && nums" @mouseenter="NoOneEnter(3)" @mouseleave="NoOneLeave(3)">
                            <ul flex="cross:center" style="left: 1000px" :style="{ left: leftDis - 20 + 'px' }">
                                <li>相关介绍</li>
                            </ul>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="lange" flex="cross:center">
                <div class="changeLang">
                    <div @click="qieLang" style="border-left: 1px solid #ddd">
                        <span style="margin-right: 11px">{{ bandLangLabel }}</span>
                        <span
                            class="el-icon-arrow-down iconSizeUp"
                            :style="{ transform: showlanguage ? 'rotate(180deg)' : '', transition: ' all .5s' }"
                        ></span>
                    </div>
                    <div v-show="showlanguage" class="langLi">
                        <ul>
                            <li
                                v-for="(item, index) in language"
                                :key="index"
                                @click="chLange(item)"
                                :style="{ background: bandLangValue == item.value ? '#' + themecolor : '' }"
                            >
                                {{ item.label }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="login">
                    <!-- 登录 -->
                    {{ $t('menu.login') }}
                </div>
            </div>
        </div>
        <!-- 大屏 -->
        <div class="chanPinJieShao" v-show="titleNum == 0">
            <!-- 轮播 -->
            <div class="zoumaDeng" style="width: 100%; overflow: hidden" :style="{ height: windowHeight + 'px' }">
                <el-carousel :interval="3000" arrow="always" :height="windowHeight+'px'">
                    <el-carousel-item v-for="item in lunBo" :key="item">
                        <img :src="item" style="width:100%;" alt="">
                    </el-carousel-item>
                </el-carousel>

                <!-- <div class="swiper-container"> 
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="item in lunBo" :key="item">
                            <img :src="item" style="width: 100%" alt="" />
                        </div>
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div> -->
            </div>
            <!-- 核心优势 -->
            <div class="serve">
                <div class="pro_title">
                    <div class="title_one">核心优势</div>
                    <div class="title_heng"></div>
                </div>
                <div class="banXin marginAuto hexin">
                    <ul flex="main:justify cross:center" flex-wrap>
                        <li class="liBg" flex="dir:top cross:center main:center">
                            <span><img src="../common/comImg/hx01.png" class="hxImg" alt="" /></span>
                            <span class="liBg_zhText">低成本</span>
                            <span class="liBg_enText">lOW COST</span>
                        </li>
                        <li class="liNoBg" flex="dir:top cross:center main:center">
                            <span class="liNoBg_title">02</span>
                            <span class="liBg_zhText">TWO</span>
                        </li>
                        <li class="liBg" flex="dir:top cross:center main:center">
                            <span><img src="../common/comImg/hx03.png" class="hxImg" alt="" /></span>
                            <span class="liBg_zhText">安全性</span>
                            <span class="liBg_enText">SECYRITY</span>
                        </li>
                        <li class="liNoBg" flex="dir:top cross:center main:center">
                            <span class="liNoBg_title">04</span>
                            <span class="liBg_zhText">FOUR</span>
                        </li>
                        <li class="liBg" flex="dir:top cross:center main:center">
                            <span><img src="../common/comImg/hx05.png" class="hxImg" alt="" /></span>
                            <span class="liBg_zhText">可编辑</span>
                            <span class="liBg_enText">EDITABLE</span>
                        </li>
                        <li class="liNoBg" flex="dir:top cross:center main:center">
                            <span class="liNoBg_title">06</span>
                            <span class="liBg_zhText">SIX</span>
                        </li>
                        <!-- next -->
                        <li class="liNoBg" flex="dir:top cross:center main:center">
                            <span class="liNoBg_title">01</span>
                            <span class="liBg_zhText">ONE</span>
                        </li>
                        <li class="liBg" flex="dir:top cross:center main:center">
                            <span><img src="../common/comImg/hx02.png" class="hxImg" alt="" /></span>
                            <span class="liBg_zhText">上线快</span>
                            <span class="liBg_enText">ONLINE FAST</span>
                        </li>
                        <li class="liNoBg" flex="dir:top cross:center main:center">
                            <span class="liNoBg_title">03</span>
                            <span class="liBg_zhText">THREE</span>
                        </li>
                        <li class="liBg" flex="dir:top cross:center main:center">
                            <span><img src="../common/comImg/hx04.png" class="hxImg" alt="" /></span>
                            <span class="liBg_zhText">云端管理</span>
                            <span class="liBg_enText">CLOUD MANAGEMENT</span>
                        </li>
                        <li class="liNoBg" flex="dir:top cross:center main:center">
                            <span class="liNoBg_title">05</span>
                            <span class="liBg_zhText">FIVE</span>
                        </li>
                        <li class="liBg" flex="dir:top cross:center main:center">
                            <span><img src="../common/comImg/hx06.png" class="hxImg" alt="" /></span>
                            <span class="liBg_zhText">高兼容</span>
                            <span class="liBg_enText">HIGH COMPATIBILITY</span>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 产品介绍 -->
            <div class="product">
                <div class="pro_title">
                    <div class="title_one">产品介绍</div>
                    <div class="title_heng"></div>
                </div>
                <lunbo></lunbo>
                <!-- <div class="marginAuto lbPro" style="width: 1236px">
                    <div class="leftArrow">
                        <img src="../common/comImg/leftJian.png" class="leftArrowImg" @click="arrowClick('left')" />
                    </div>  
                    <el-carousel
                        :autoplay="true"
                        indicator-position="none"
                        :interval="3000"
                        type="card"
                        height="298px"
                        arrow="never"
                        ref="cardShow"
                    >
                        <el-carousel-item v-for="item in productLunBo" :key="item">
                            <img :src="item" style="width: 100%" alt="" />
                        </el-carousel-item>
                    </el-carousel>
                    <div class="rightArrow">
                        <img
                            src="../common/comImg/leftJian.png"
                            class="leftArrowImg"
                            @click="arrowClick('right')"
                            v-if="pageLength !== currentPage + 1"
                            style="transform: rotate(180deg)"
                        />
                    </div>
                </div> -->
                <div class="lbProtext">AR眼镜一体机，趋势与挑战</div>
            </div>
            <!-- 服务行业 -->
            <div class="serve">
                <div class="pro_title">
                    <div class="title_one">服务行业</div>
                    <div class="title_heng"></div>
                </div>
                <div class="banXin marginAuto serveli">
                    <ul flex="main:justify cross:center">
                        <li v-for="(item, index) in serveList" :key="index">
                            <img :src="item.img" class="shili" alt="" />
                            <div style="margin-top: 39px" flex="cross:center main:center">
                                <span style="font-size: 24px; color: #171717">{{ item.name }}</span>
                                <div class="circleRight">
                                    <i class="el-icon-arrow-right"></i>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 服务业务 -->
            <div class="serve">
                <div class="pro_title">
                    <div class="title_one">服务业务</div>
                    <div class="title_heng"></div>
                </div>
                <div class="yewu">
                    <div class="banXin marginAuto yewuLi">
                        <ul flex="main:justify cross:center">
                            <li v-for="(item, index) in yewuList" :key="index">
                                <div class="libg" :style="{ 'background-image': 'url(' + item.bg + ')' }">
                                    <img :src="item.img" class="shili" alt="" />
                                    <div class="hy_gang"></div>
                                    <div class="ywName">{{ item.name }}</div>
                                    <div class="yeRemark">{{ item.remark }}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 服务客户 -->
            <div class="serve serveKh">
                <div class="pro_title">
                    <div class="title_one">服务客户</div>
                    <div class="title_heng"></div>
                </div>
                <div class="banXin marginAuto svKeHu" flex="cross:center main:justify">
                    <div class="svOne">
                        <ul flex flex-wrap>
                            <li style="border-bottom: 1px solid #ccc; border-right: 1px solid #ccc" flex="cross:center main:center dir:top">
                                <div class="svNum"><countTo :startVal="0" :endVal="300" :duration="3000" ref="count1"></countTo>+</div>
                                <div class="svHuo">合作伙伴</div>
                            </li>
                            <li style="border-bottom: 1px solid #ccc" flex="cross:center main:center dir:top">
                                <div class="svNum"><countTo :startVal="0" :endVal="10" :duration="3000" ref="count2"></countTo>+</div>
                                <div class="svHuo">合作伙伴</div>
                            </li>
                            <li style="border-right: 1px solid #ccc" flex="cross:center main:center dir:top">
                                <div class="svNum"><countTo :startVal="0" :endVal="300" :duration="3000" ref="count3"></countTo>+</div>
                                <div class="svHuo">合作伙伴</div>
                            </li>
                            <li flex="cross:center main:center dir:top">
                                <div class="svNum"><countTo :startVal="0" :endVal="10" :duration="3000" ref="count4"></countTo>+</div>
                                <div class="svHuo">合作伙伴</div>
                            </li>
                        </ul>
                    </div>
                    <div class="svTwo" flex="cross:bottom dir:top">
                        <img src="../common/comImg/ditu.png" alt="" />
                        <div class="dtsh" flex="cross:center ">
                            <div class="dott"></div>
                            <div class="dituShuoMing">合作客户范围</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 解决方案 -->
        <div class="zhiChiYuFuWu jieJueFangAn" v-show="titleNum == 1">
            <div class="zcyw_top" flex="cross:center">
                <div class="jjfaTitle indexBox banXin marginAuto" flex=" main:center dir:top">
                    <div class="ljTitle">解决方案</div>
                    <div class="ljContent">解决方案分为:磁业解决方案、模具行业解决方案、外贸解决方案、其他解决方案</div>
                </div>
            </div>
            <div class="jieJueFangAnText">
                <div class="pro_title">
                    <div class="title_one">解决方案</div>
                    <div class="title_heng"></div>
                </div>

                <div class="ciLiLunBo marginAuto lbPro" style="width: 1436px">
                    <div class="leftArrow">
                        <img src="../common/comImg/leftJian.png" class="leftArrowImg" @click="arrowClick('left')" />
                    </div>
                    <el-carousel :autoplay="true" indicator-position="outside" :interval="3000" height="451px" arrow="never" ref="cardShow">
                        <el-carousel-item>
                            <div style="width: 100%" flex>
                                <img :src="require('../common/comImg/banner/b5.jpg')" style="width: 682px" alt="" />
                                <div style="width: 754px">
                                    <div>磁业解决方案</div>
                                </div>
                            </div>
                        </el-carousel-item>
                        <el-carousel-item>
                            <div style="width: 100%" flex>
                                <img :src="require('../common/comImg/banner/b6.jpg')" style="width: 682px" alt="" />
                                <div style="width: 754px">
                                    <div>磁业解决方案</div>
                                </div>
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                    <div class="rightArrow">
                        <img
                            src="../common/comImg/leftJian.png"
                            class="leftArrowImg"
                            @click="arrowClick('right')"
                            v-if="pageLength !== currentPage + 1"
                            style="transform: rotate(180deg)"
                        />
                    </div>
                </div>
            </div>
        </div>
        <!-- 支持与服务 -->
        <div class="zhiChiYuFuWu" v-show="titleNum == 2">
            <div class="zcyw_top" flex="cross:center main:center">
                <div class="zcyw_chan">产品文档</div>
                <div class="zcyw_search">
                    <div class="zcyw_searchTop" flex="cross:center">
                        <input type="text" placeholder="请输入关键词进行搜索，如作业指导使用说明" />
                        <button class="searchBtn">搜索</button>
                    </div>
                    <div class="zcyw_searchBottom">
                        <span class="reci">热词推荐：</span>
                        <span class="reciText"
                            ><span class="zhidao">作业指导使用说明</span><span>|</span><span class="zhidao">在线培训使用说明</span
                            ><span>|</span><span class="zhidao">远程验货使用说明</span></span
                        >
                    </div>
                </div>
            </div>
            <!-- 操作手册 -->
            <div class="threeCaoZuo">
                <div class="threeTitle" flex="main:center">
                    <ul flex>
                        <li
                            @click="caoZuo(0)"
                            @mouseenter="caoZuoEnter(0)"
                            @mouseleave="caoZuoLeave(0)"
                            id="caoZuo0"
                            :style="{ background: caoZuoNum == 0 ? '#fff' : '#F7F7F7', color: caoZuoNum == 0 ? '#181818' : '#999' }"
                        >
                            产品白皮书
                        </li>
                        <li
                            @click="caoZuo(1)"
                            @mouseenter="caoZuoEnter(1)"
                            @mouseleave="caoZuoLeave(1)"
                            id="caoZuo1"
                            :style="{ background: caoZuoNum == 1 ? '#fff' : '#F7F7F7', color: caoZuoNum == 1 ? '#181818' : '#999' }"
                        >
                            操作手册
                        </li>
                        <li
                            @click="caoZuo(2)"
                            @mouseenter="caoZuoEnter(2)"
                            @mouseleave="caoZuoLeave(2)"
                            id="caoZuo2"
                            :style="{ background: caoZuoNum == 2 ? '#fff' : '#F7F7F7', color: caoZuoNum == 2 ? '#181818' : '#999' }"
                        >
                            常见问题
                        </li>
                    </ul>
                </div>
                <div class="banXin marginAuto threeBody">
                    <div class="chanPinBaiPi" v-show="caoZuoNum == 0">
                        <!-- 产品白皮书 -->
                        1111产品白皮书
                    </div>
                    <div class="chanPinBaiPi caoZuoShouCe" v-show="caoZuoNum == 1" flex>
                        <!-- 操作手册 -->
                        <div class="leftCao">
                            <div class="caoZuoShouCe">
                                <div class="caoZuoShouCe_th">操作手册</div>
                                <ul>
                                    <li>作业SOP使用说明</li>
                                    <li>远程协助使用说明</li>
                                    <li>作业指导使用说明</li>
                                    <li>MarOS使用说明</li>
                                    <li>远程验货使用说明</li>
                                    <li>在线培训使用说明</li>
                                </ul>
                            </div>
                        </div>
                        <div class="centerCao">
                            <div class="centerCao1">
                                <!-- 1 -->
                                <div class="cc1">
                                    <div class="cc1_title">
                                        <div class="cc1_Top">作业SOP使用说明</div>
                                        <div class="cc1_time">更新时间：2021-4-2</div>
                                    </div>
                                    <div class="step">
                                        <div class="step1">
                                            <div class="step1_title" id="qidong1">1.启动</div>
                                            <div class="step1_body">
                                                <div class="sb_content">打开APP进入登陆界面，输入帐号与密码，在我的应用中启动标准sop</div>
                                                <div class="sbImg">
                                                    <img src="../common/comImg/banner/b1.jpg" style="width: 540px; height: 304px" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="step">
                                        <div class="step1">
                                            <div class="step1_title" id="qidong2">2.启动</div>
                                            <div class="step1_body">
                                                <div class="sb_content">
                                                    打开APP进入登陆界面，输入帐号与密码，在我的应用中启动标准sop打开APP进入登陆界面，输入帐号与密码，在我的应用中启动标准
                                                    sop打开APP进入登陆界面，输入帐号与密码，在我的应用中启动标准sop
                                                </div>
                                                <div class="sbImg">
                                                    <img src="../common/comImg/banner/b1.jpg" style="width: 540px; height: 304px" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="step">
                                        <div class="step1">
                                            <div class="step1_title" id="qidong3">3.启动</div>
                                            <div class="step1_body">
                                                <div class="sb_content">
                                                    打开APP进入登陆界面，输入帐号与密码，在我的应用中启动标准sop打开APP进入登陆界面，输入帐号与密码，在我的应用中启动标准
                                                    sop打开APP进入登陆界面，输入帐号与密码，在我的应用中启动标准sop
                                                </div>
                                                <div class="sbImg">
                                                    <img src="../common/comImg/banner/b1.jpg" style="width: 540px; height: 304px" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="step">
                                        <div class="step1">
                                            <div class="step1_title" id="qidong4">4.启动</div>
                                            <div class="step1_body">
                                                <div class="sb_content">
                                                    打开APP进入登陆界面，输入帐号与密码，在我的应用中启动标准sop打开APP进入登陆界面，输入帐号与密码，在我的应用中启动标准
                                                    sop打开APP进入登陆界面，输入帐号与密码，在我的应用中启动标准sop
                                                </div>
                                                <div class="sbImg">
                                                    <img src="../common/comImg/banner/b1.jpg" style="width: 540px; height: 304px" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rightCao">
                            <!-- 右边 -->
                            <div class="rightCaoRelative">
                                <div class="rightCaoAbs">
                                    <div class="rcrTop">本页目录</div>
                                    <ul>
                                        <li><a href="#qidong1"> 1. 启动</a></li>
                                        <li><a href="#qidong2"> 2. 启动</a></li>
                                        <li><a href="#qidong3"> 3. 启动</a></li>
                                        <li><a href="#qidong4"> 4. 启动</a></li>
                                        <li><a href="#"> 1. 启动</a></li>
                                        <li><a href="#"> 1. 启动</a></li>
                                        <li><a href="#"> 1. 启动</a></li>
                                        <li><a href="#"> 1. 启动</a></li>
                                        <li><a href="#"> 1. 启动</a></li>
                                        <li><a href="#"> 1. 启动</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="chanPinBaiPi caoZuoShouCe changJianWenTi" v-show="caoZuoNum == 2">
                        <!-- 常见问题 -->
                        33常见问题
                    </div>
                </div>
            </div>
            <!-- 建议反馈 -->
            <div class="jianYiFanKui">
                <div class="indexBox banXin marginAuto">
                    <div class="pro_title">
                        <div class="title_one">建议反馈</div>
                        <div class="title_heng"></div>
                    </div>
                    <div class="jianYiForm">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
                            <div flex="main:justify">
                                <el-form-item label="姓名：" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="联系电话：">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                            </div>
                            <div flex="main:justify">
                                <el-form-item label="公司名称：" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="邮箱：" prop="name">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                            </div>

                            <el-form-item label="反馈内容：" prop="desc" style="position: relative">
                                <el-input type="textarea" :rows="13" maxlength="500" resize="none" v-model="ruleForm.desc"></el-input>
                                <span style="position: absolute; right: 21px; bottom: 21px; font-size: 14px; color: #999999">
                                    最多500字
                                </span>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" class="tiJiao" @click="submitForm('ruleForm')">提交</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
        <!-- 了解云笔 -->
        <div class="zhiChiYuFuWu liaiJieYunBi" v-show="titleNum == 3">
            <div class="zcyw_top" flex="cross:center main:center dir:top">
                <div class="ljTitle">了解云笔</div>
                <div class="ljContent">技术服务:人工智能科技、多媒体技术、智能硬件、</div>
                <div class="ljContent">网络信息技术、云计算技术、电子技术、计算机软硬件及辅助设备、通讯设备</div>
            </div>
            <div class="gongSiJianJie">
                <div class="indexBox banXin marginAuto">
                    <div class="pro_title">
                        <div class="title_one">公司简介</div>
                        <div class="title_heng"></div>
                    </div>
                    <div class="gsjjText">
                        <p>
                            杭州云笔智能科技有限公司是专注于增强现实（AR）服务引擎和制造业增强现实SaaS平台提供商，是专于AR制造业服务平台的人工智能企业。
                        </p>
                        <p style="text-indent: 30px; line-height: 30px">
                            公司前身是中国科学技术大学先进技术研究院新媒体研究院，拥有自主知识产权的工业级计算机视觉、智能交互、深度学习、增强现实（AR）服务引擎等先进技术。通过软硬件深度整合及融合、人机交互、深度数据挖掘，构建平台级制造业服务体系，致力于制造业智能化升级及赋能。
                        </p>
                        <p style="text-indent: 30px">
                            公司产品及服务已在<span style="color: #e9461f">中国、日本、美国</span>投入应用，并取得客户的高度认可。
                        </p>
                    </div>
                    <div class="gsjjImg" flex="main:justify">
                        <div>
                            <img src="../common/comImg/liaoJieYunbi/company1.png" alt="" />
                        </div>
                        <div>
                            <img src="../common/comImg/liaoJieYunbi/company2.png" alt="" />
                        </div>
                        <div>
                            <img src="../common/comImg/liaoJieYunbi/company3.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="gongSiRongYu">
                <div class="pro_title">
                    <div class="title_one">公司荣誉</div>
                    <div class="title_heng"></div>
                </div>
                <div class="gsry_zhengShu" flex="main:center">
                    <div flex="main:justify" flex-wrap>
                        <img src="../common/comImg/liaoJieYunbi/zheng1.png" alt="" />
                        <img src="../common/comImg/liaoJieYunbi/zheng2.png" alt="" />
                        <img src="../common/comImg/liaoJieYunbi/zheng3.png" alt="" />
                        <img src="../common/comImg/liaoJieYunbi/zheng4.png" alt="" />
                        <img src="../common/comImg/liaoJieYunbi/zheng5.png" alt="" />
                        <img src="../common/comImg/liaoJieYunbi/zheng6.png" alt="" />
                    </div>
                </div>
            </div>
            <div class="faZhanLiShi">
                <div class="pro_title">
                    <div class="title_one">发展历史</div>
                    <div class="title_heng"></div>
                </div>
                <div class="fzls_nianFen">
                    <div class="nianfen_num" flex="main:center">
                        <span>2018</span>
                        <span>2019</span>
                        <span>2020</span>
                        <span>2021</span>
                    </div>
                    <div class="nianfen_Img" flex="main:center">
                        <img src="../common/comImg/liaoJieYunbi/nian1.png" alt="" />
                        <img src="../common/comImg/liaoJieYunbi/nian1.png" alt="" />
                        <img src="../common/comImg/liaoJieYunbi/nian1.png" alt="" />
                        <img src="../common/comImg/liaoJieYunbi/nian2.png" alt="" />
                    </div>
                </div>
                <div class="jinDu indexBox banXin marginAuto" flex="main:center ">
                    <div class="jdLeft">
                        <div class="div1">2021</div>
                        <div class="div2">2020</div>
                        <div class="div3">2019</div>
                        <div class="div4">2018</div>
                    </div>
                    <div class="jdCenter">
                        <img src="../common/comImg/liaoJieYunbi/jindu.png" alt="" />
                    </div>
                    <div class="jdRight">
                        <div class="jdRightul1">
                            <div class="jdRight_top">年盈利1000万，企业规模扩大</div>
                            <div class="jdRight_bottom">公司产品及服务已在中国、日本、美国投入应用，并取得客户的高度认可。</div>
                        </div>
                        <div class="jdRightul2">
                            <div class="jdRight_top">荣获省级5G产业联盟会员单位</div>
                            <div class="jdRight_bottom">浙江5G产业联盟会员单位</div>
                        </div>
                        <div class="jdRightul2">
                            <div class="jdRight_top">公司规模增加</div>
                            <div class="jdRight_bottom">公司产品及服务已在中国、日本、美国投入应用，并取得客户的高度认可。</div>
                        </div>
                        <div class="jdRightul2">
                            <div class="jdRight_top">公司成立</div>
                            <div class="jdRight_bottom">
                                是国内全息虚拟互动技术领先的科技公司，专注于虚拟交互技术研发和积累，为诸多行业客户提供了先进的技术产品和解决方案。
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 底部版权 -->
        <div class="footer">
            <div class="marginAuto banXin footer_top">
                <div class="ft_title" flex>
                    <ul class="ft_title_1">
                        <div class="liTitle">功能文档</div>
                        <li>查看文档</li>
                        <li>查看教程</li>
                    </ul>
                    <ul class="ft_title_1">
                        <div class="liTitle">了解云笔</div>
                        <li>公司简介</li>
                        <li>相关介绍</li>
                    </ul>
                    <ul class="ft_title_1">
                        <div class="liTitle">联系我们</div>
                        <li>电话：182-3821-9223</li>
                        <li>邮箱：wuning@yunmars.com</li>
                        <li>地址：杭州市余杭区文一西路中国（杭州） <br />5G创新园314室</li>
                    </ul>
                    <ul>
                        <li>
                            <img src="../common/comImg/weixin.jpg" style="width: 120px; height: 120px" alt="" />
                            <div class="guanWei">官方微信</div>
                        </li>
                    </ul>
                </div>
                <div class="ftBottom indexBox banXin" flex="cross:center">
                    <div class="jianyi">建议反馈：留下您的建议和反馈</div>
                    <div class="xieJianyi" style="margin-left: 42px">
                        <i class="el-icon-edit"></i>
                        <span style="margin-left: 9px">写建议</span>
                    </div>
                </div>
            </div>
            <div class="footer_bottom">
                <div class="footerText">@2021 杭州云笔智能科技有限公司 版权所有</div>
            </div>
        </div>
    </div>
</template>

<script>
import { toggleClass } from '../../utils/index';
import countTo from 'vue-count-to';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import lunbo from './lunbo.vue'

export default {
    
    name: '',
    data() {
        return {
            themecolor: 'E9461F',
            activeIndex: '1',
            num: 0,
            nums: false,
            leftDis: -1,
            language: [
                {
                    value: 'ch',
                    label: '简体中文'
                },
                {
                    value: 'jp',
                    label: '日本語'
                },
                {
                    value: 'en',
                    label: 'English'
                }
            ],
            selectLang: 'ch',
            showlanguage: false,
            bandLangLabel: '简体中文',
            bandLangValue: 'ch',
            lunBo: [
                // require('../common/comImg/banner/b1.jpg'),
                require('../common/comImg/banner/b2.jpg'),
                // require('../common/comImg/banner/b3.jpg'),
                require('../common/comImg/banner/b4.jpg'),
                require('../common/comImg/banner/b5.jpg'),
                require('../common/comImg/banner/b6.jpg'),
                require('../common/comImg/banner/b7.jpg'),
                require('../common/comImg/banner/b8.jpg'),
                require('../common/comImg/banner/b9.jpg'),
                require('../common/comImg/banner/b10.jpg'),
                require('../common/comImg/banner/b11.jpg'),
                require('../common/comImg/banner/b12.jpg')
            ],
            productLunBo: [
                require('../common/comImg/banner/b5.jpg'),
                require('../common/comImg/banner/b6.jpg'),
                require('../common/comImg/banner/b7.jpg'),
                require('../common/comImg/banner/b8.jpg'),
                require('../common/comImg/banner/b9.jpg'),
                require('../common/comImg/banner/b10.jpg'),
                require('../common/comImg/banner/b11.jpg'),
                require('../common/comImg/banner/b12.jpg')
            ],

            windowWidth: null,
            windowHeight: null,
            currentPage: 0,
            pageLength: 0,
            serveList: [
                { id: 0, img: require('../common/comImg/serviceHY/shili01.png'), name: '模具行业' },
                { id: 1, img: require('../common/comImg/serviceHY/shili02.png'), name: '磁业' },
                { id: 2, img: require('../common/comImg/serviceHY/shili03.png'), name: '外贸行业' },
                { id: 3, img: require('../common/comImg/serviceHY/shili04.png'), name: '家具业' }
            ],
            yewuList: [
                {
                    id: 0,
                    img: require('../common/comImg/hy001.png'),
                    bg: require('../common/comImg/hy01.png'),
                    name: '行业解决方案',
                    remark: '行业解决方案'
                },
                {
                    id: 1,
                    img: require('../common/comImg/hy002.png'),
                    bg: require('../common/comImg/hy02.png'),
                    name: '行业解决方案',
                    remark: '行业解决方案'
                },
                {
                    id: 2,
                    img: require('../common/comImg/hy003.png'),
                    bg: require('../common/comImg/hy03.png'),
                    name: '行业解决方案',
                    remark: '行业解决方案'
                },
                {
                    id: 3,
                    img: require('../common/comImg/hy004.png'),
                    bg: require('../common/comImg/hy04.png'),
                    name: '行业解决方案',
                    remark: '行业解决方案'
                }
            ],
            toTopShow: false,
            scollNum: true,
            titleNum: 0,
            caoZuoNum: 1,
            ruleForm: {
                name: '',
                desc: ''
            },
            rules: {
                name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
                desc: [{ required: true, message: '请填写反馈内容', trigger: 'blur' }]
            }
        };
    },
    components: {
        countTo,
        lunbo
    },
    computed: {},

    mounted() {
        console.log(this.themecolor, 'curcolor1');
        toggleClass(document.body, 'custom-' + this.themecolor);
        this.$store.commit('setThemeColor', this.themecolor);
        let curcolor = this.$store.state.themecolor;
        console.log(curcolor, 'curcolor');
        // 根据全局换肤 得到全局颜色
        localStorage.setItem('themeColor', this.themecolor);

        this.windowWidth = window.innerWidth || document.body.clientWidth;
        this.windowHeight = window.innerHeight || document.body.clientHeight;
        console.log(this.windowWidth, ';this.windowWidth');
        console.log(this.windowHeight, ';this.windowHeight');

        window.addEventListener('scroll', this.handleScroll);

        new Swiper('.swiper-container', {
            direction: 'horizontal', //滑动方向，可设置水平(horizontal)或垂直(vertical)。
            loop: true, // 设置为true 则开启loop模式
            autoplay: 3000, // 自动切换时间
            slidesPerView: 'auto', // 设置slider容器能够同时显示的slides数量(carousel模式)。类型：number or auto
            centeredSlides: true, // 设定为true时，active slide会居中，而不是默认状态下的居左。
            spaceBetween: 10, // 在slide之间设置距离（单位px）。
            loopAdditionaSlider: 0, // loop模式下会在slides前后复制若干个slide,，前后复制的个数不会大于原总个数。
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            on: {
                slideChangeTransitionEnd: function () {
                    let that = this;
                    if (this.activeIndex === 8 || this.activeIndex === 4) {
                        that.bannerIndex = 1;
                        that.bannerTxt = '手写的处方';
                    } else {
                        that.bannerIndex = this.activeIndex - 3;
                        that.bannerTxt = '机打的处方';
                    }
                }
            }
            // on: {
            //     progress: function () {
            //         for (i = 0; i < this.slides.length; i++) {
            //             var slide = this.slides.eq(i);
            //             var slideProgress = this.slides[i].progress;
            //             modify = 1;
            //             if (Math.abs(slideProgress) > 1) {
            //                 modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
            //             }
            //             translate = slideProgress * modify * 260 + 'px';
            //             scale = 1 - Math.abs(slideProgress) / 5;
            //             zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
            //             slide.transform('translateX(' + translate + ') scale(' + scale + ')');
            //             slide.css('zIndex', zIndex);
            //             slide.css('opacity', 1);
            //             if (Math.abs(slideProgress) > 3) {
            //                 slide.css('opacity', 0);
            //             }
            //         }
            //     },
            //     setTransition: function (transition) {
            //         for (var i = 0; i < this.slides.length; i++) {
            //             var slide = this.slides.eq(i);
            //             slide.transition(transition);
            //         }
            //     }
            // }
        });
    },

    created() {},
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        TopBotton() {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            let timer = setInterval(() => {
                scrollTop -= 100;
                window.scrollTo(0, scrollTop);
                if (scrollTop <= 0) {
                    clearInterval(timer);
                }
            }, 16.7);
        },
        handleScroll() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop <= 200) {
                document.querySelector('#topFixed').style.background = '';
                this.toTopShow = false;
            } else {
                document.querySelector('#topFixed').style.background = '#fff';
                this.toTopShow = true;
            }
            if (scrollTop >= 3313 && this.scollNum) {
                this.$refs.count1.start();
                this.$refs.count2.start();
                this.$refs.count3.start();
                this.$refs.count4.start();
                this.scollNum = false;
            }
        },
        NoOneEnter(num) {
            this.num = num;
            this.nums = true;
            var obj = document.getElementById('no' + num);
            this.getOffsetLeft(obj);
        },
        NoOneLeave() {
            this.num = this.titleNum;
            this.nums = false;
        },
        getOffsetLeft(obj) {
            var tmp = obj.offsetLeft;
            var val = obj.offsetParent;
            while (val != null) {
                tmp += val.offsetLeft;
                val = val.offsetParent;
            }
            this.leftDis = tmp;
        },
        qieLang() {
            if (this.showlanguage == false) {
                this.showlanguage = true;
            } else {
                this.showlanguage = false;
            }
        },
        chLange(item) {
            console.log(item, 'item');
            this.bandLangLabel = item.label;
            this.bandLangValue = item.value;
            this.showlanguage = false;

            if (this.bandLangValue == 'ch') {
                this.$i18n.locale = 'ch';
            } else if (this.bandLangValue == 'jp') {
                this.$i18n.locale = 'jp';
            } else if (this.bandLangValue == 'en') {
                this.$i18n.locale = 'en';
            }
        },
        arrowClick(val) {
            if (val === 'right') {
                this.$refs.cardShow.next();
            } else {
                this.$refs.cardShow.prev();
            }
        },
        titleClick(titleNum) {
            this.titleNum = titleNum;

            this.num = titleNum;
            this.nums = true;
        },
        caoZuo(caoZuoNum) {
            console.log(caoZuoNum, 'caoZuoNum');
            this.caoZuoNum = caoZuoNum;
        },
        caoZuoEnter(num) {
            if (this.caoZuoNum != num) {
                document.getElementById('caoZuo' + num).style.background = '#E9E9E9';
                document.getElementById('caoZuo' + num).style.color = '#333';
            }
        },
        caoZuoLeave(num) {
            if (this.caoZuoNum != num) {
                document.getElementById('caoZuo' + num).style.background = '#F7F7F7';
                document.getElementById('caoZuo' + num).style.color = '#999';
            }
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
};
</script>
<style lang='scss'>
.zoumaDeng {
    .el-carousel__arrow {
        width: 50px;
        height: 50px;
        font-size: 28px;
    }
}
</style>

<style scoped lang='scss'>
.logoImg {
    width: 70px;
    height: 50px;
}
.logoText {
    font-size: 28px;
    font-weight: 400;
    color: #181818;
    line-height: 80px;
    margin-left: 11px;
}
.topTitle {
    height: 88px;
}
.gaosiMoHu {
    width: 100%;
    height: 88px;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.2);
    filter: blur(2px);
    z-index: 8;
}
.topFixed {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
    // background: rgba(255, 255, 255, 0.2);
}
.topFixed:hover {
    background: #fff;
    box-shadow: 0px 2px 26px 1px rgba(4, 7, 15, 0.03);
}
.topTab {
    height: 100%;

    ul {
        margin-left: 168px;
        height: 100%;
        li {
            box-sizing: border-box;
            cursor: pointer;
            margin-right: 90px;
            height: 100%;
            // border-bottom: 2px solid #000;

            .chanPro {
                margin-right: 11px;
                font-size: 20px;
                font-family: Microsoft YaHei;
                font-weight: 400;
            }
            .iconSizeUp {
                font-size: 12px;
            }
        }
    }
}
.topTab_content {
    width: 100%;
    height: 80px;
    line-height: 80px;
    background: #f1f1f1;
    position: absolute;
    left: 0;
    right: 0;
    top: 88px;

    ul {
        position: absolute;

        li {
            cursor: pointer;
            margin-right: 0;
            padding: 0 20px;
            font-size: 20px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #181818;
        }
        li:hover {
            color: #e9461f;
        }
    }
}
.lange {
    position: absolute;
    right: 0;
    top: 0;

    .changeLang {
        width: 160px;
        height: 88px;
        line-height: 88px;
        text-align: center;
        cursor: pointer;
    }
    .login {
        width: 160px;
        height: 88px;
        line-height: 88px;

        text-align: center;
        background: #e9461f;
        font-size: 20px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #ffffff;
        cursor: pointer;
    }
    .langLi {
        ul {
            li {
                background: rgba(255, 255, 255, 0.2);
                color: #fff;
            }
            li:hover {
                background: rgba(255, 255, 255, 0.5);
            }
        }
    }
}

.product {
    width: 100%;
    height: 716px;
    background: #e9e9e9;
}
.lbPro {
    position: relative;
    margin-top: 80px;
    .leftArrow {
        position: absolute;
        left: -80px;
        top: 135px;
    }
    .rightArrow {
        position: absolute;
        right: -80px;
        top: 135px;
    }
    .leftArrowImg {
        width: 50px;
        height: 50px;
    }
}
.lbProtext {
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #181818;
    text-align: center;
    margin-top: 16px;
}
.pro_title {
    padding-top: 120px;
    text-align: center;
    width: 100%;
    .title_one {
        font-size: 40px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #171717;
    }
    .title_heng {
        width: 40px;
        height: 3px;
        background: #e9461f;
        margin: 20px auto 0;
    }
}
.serve {
    width: 100%;
    // height: 854px;
    background-color: #fff;
}
.serveli {
    margin-top: 80px;
    ul {
        li:hover img {
            transform: scale(1.05, 1.05);
            box-shadow: 2px 3px 9px 0px rgba(44, 44, 44, 0.4);
            transition: all 0.6s;
        }

        li {
            // margin: auto;
            // text-align: center;
            .shili {
                width: 346px;
                height: 261px;
                cursor: pointer;
            }
            .shiliText {
                width: 346px;

                margin-top: 40px;
            }
            .sltText {
                font-size: 24px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #171717;
            }
            .tiaoRight {
                display: block;
                width: 28px;
                height: 28px;
                line-height: 30px;
                text-align: center;
                background: rgba(0, 0, 0, 0.2);
                box-shadow: 0px 5px 14px 0px rgba(180, 180, 180, 0.2);
                border-radius: 50%;
                margin-left: 19px;
                cursor: pointer;
                .el-icon-arrow-right {
                    font-size: 16px;
                    color: #fff;
                }
            }
        }
    }
}
.yewu {
    width: 100%;
    height: 430px;
    background: #242424;
    margin-top: 80px;
    .yewuLi {
        ul {
            .libg {
                width: 100%;
                height: 100%;
                background-size: cover;
            }

            li {
                width: 310px;
                height: 430px;
                overflow: hidden;
                text-align: center;
                cursor: pointer;

                .shili {
                    width: 60px;
                    height: 60px;
                    margin-top: 134px;
                }
                .hy_gang {
                    width: 20px;
                    height: 2px;
                    background: #fff;
                    margin: 20px auto 32px;
                }
                .ywName {
                    font-size: 24px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #fff;
                }
                .yeRemark {
                    font-size: 14px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #ffffff;
                    margin-top: 9px;
                }
            }
            .libg:hover {
                transform: scale(1.05, 1.05);
                transition: all 0.6s;
                .ywName {
                    color: #e9461f;
                }
                .hy_gang {
                    background: #e9461f;
                }
            }
        }
    }
}
.serveKh {
    height: 714px;
}
.svKeHu {
    margin-top: 80px;
    box-sizing: border-box;
    .svOne {
        ul {
            width: 682px;

            li {
                width: 341px;
                height: 171px;
                box-sizing: border-box;
                .svNum {
                    font-size: 60px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #e9461f;
                }
                .svHuo {
                    font-size: 14px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #666666;
                }
            }
        }
    }
    .svTwo {
        img {
            width: 593px;
            height: 376px;
        }
        .dtsh {
            margin-top: 21px;
            .dott {
                width: 12px;
                height: 12px;
                background: #e9461f;
                border-radius: 50%;
                margin-right: 11px;
            }
            .dituShuoMing {
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #a0a0a0;
            }
        }
    }
}
.footer {
    width: 100%;

    background: #242424;
    .footer_top {
        height: 373px;
        // width:1436px;
        // background-color: pink;
        // margin:auto;
        .ft_title {
            padding-top: 114px;
            .ft_title_1 {
                margin-right: 171px;

                .liTitle {
                    font-size: 24px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #74767a;
                    margin-bottom: 36px;
                }
                li {
                    font-size: 18px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #ffffff;
                    margin-bottom: 18px;
                }
                li:hover {
                    color: #e9481d;
                    cursor: pointer;
                }
            }
        }
        .guanWei {
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #74767a;
            text-align: center;
        }
        .ftBottom {
            .jianyi {
                font-size: 18px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #74767a;
            }
            .xieJianyi {
                font-size: 18px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #ffffff;
            }
        }
    }
    .footer_bottom {
        height: 101px;
        line-height: 101px;
        border-top: 2px solid #626363;
        .footerText {
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #74767a;
            text-align: center;
        }
    }
}
.circleRight {
    margin-left: 20px;
    width: 28px;
    height: 28px;
    line-height: 30px;
    background: rgba(0, 0, 0, 0.2);
    box-shadow: 0px 5px 14px 0px rgba(180, 180, 180, 0.2);
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
    .el-icon-arrow-right {
        font-size: 18px;
        color: #fff;
    }
}
.rightFixed {
    position: fixed;
    right: 27px;
    bottom: 216px;
    z-index: 10;
    .rightFixedLange {
        width: 56px;
        height: 56px;
        background: #ffffff;
        box-shadow: 0px 5px 14px 0px rgba(180, 180, 180, 0.5);
        border-radius: 50%;
        line-height: 56px;
        text-align: center;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #000000;
        cursor: pointer;
    }
    .rightFixedphone {
        margin-top: 21px;
        width: 56px;
        height: 56px;
        background: #ffffff;
        box-shadow: 0px 5px 14px 0px rgba(180, 180, 180, 0.5);
        border-radius: 50%;
        line-height: 66px;
        text-align: center;
        cursor: pointer;
        img {
            width: 24px;
            height: 24px;
        }
    }
    .editFanKui {
        width: 56px;
        height: 130px;
        background: #ffffff;
        box-shadow: 0px 5px 14px 0px rgba(180, 180, 180, 0.5);
        border-radius: 28px;
        padding: 20px;
        box-sizing: border-box;
        cursor: pointer;
        img {
            width: 20px;
            height: 20px;
        }
        span {
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #e9461f;
        }
    }
    .rightFixedTop {
        margin-top: 60px;
        width: 56px;
        height: 56px;
        background: #e9461f;
        box-shadow: 0px 5px 14px 0px rgba(253, 137, 105, 0.5);
        border-radius: 50%;
        line-height: 56px;
        text-align: center;
        cursor: pointer;
        .el-icon-arrow-up {
            font-size: 18px;
            color: #fff;
        }
    }
}
.hexin {
    padding: 79px 0 121px;
    .hxImg {
        width: 50px;
        height: 50px;
    }
    ul {
        width: 100%;
        li {
            width: 239px;
            height: 240px;
        }
        .liBg {
            background: #3d3d3d;
            .liBg_zhText {
                font-size: 28px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #ffffff;
                margin: 15px 0 9px;
            }
            .liBg_enText {
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #ffffff;
            }
        }
        .liNoBg {
            background-color: #fff;
            .liNoBg_title {
                font-size: 60px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #e9461f;
            }
            .liBg_zhText {
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #333333;
            }
        }
    }
}
.zhiChiYuFuWu {
    .zcyw_top {
        height: 460px;
        background-image: url('../common/comImg/zhiChiBg.png');
        background-size: 100%;
        background-repeat: no-repeat;
        .zcyw_chan {
            font-size: 40px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #ffffff;
        }
        .zcyw_search {
            margin: 41px 0 0 103px;
        }
        .zcyw_searchTop {
            input {
                border: none;
                width: 570px;
                height: 50px;
                background: #ffffff;
                padding-left: 20px;
            }
            input:-ms-input-placeholder {
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #999999;
            }
        }
        .zcyw_searchBottom {
            margin-top: 20px;
            .reci {
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #cccccc;
                margin-left: 20px;
            }
            .reciText {
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #999999;
            }
            .zhidao {
                margin: 0 10px 0 10px;
            }
        }
        .searchBtn {
            border: none;
            width: 152px;
            height: 50px;
            background: #e9461f;
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #ffffff;
        }
    }
    .threeCaoZuo {
        .threeTitle {
            width: 100%;
            background: #f7f7f7;
            ul {
                li {
                    text-align: center;
                    width: 394px;
                    height: 70px;
                    line-height: 70px;
                    font-size: 18px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #999999;
                    cursor: pointer;
                }
                li:hover {
                    color: #333333;
                    background: #e9e9e9;
                }
            }
        }
    }
}
.threeBody {
    margin: 40px auto;
}
.caoZuoShouCe {
    .leftCao {
        .caoZuoShouCe {
            width: 248px;
            background: #f7f7f7;
            .caoZuoShouCe_th {
                height: 80px;
                border-bottom: 1px solid #dbddde;
                font-size: 20px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #181818;
                line-height: 80px;
                text-align: center;
            }
            ul {
                padding: 17px 0;
                li {
                    height: 57px;
                    line-height: 57px;
                    text-align: center;
                    font-size: 16px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #181818;
                    cursor: pointer;
                }
                li:hover {
                    color: #e9461f;
                }
            }
        }
    }
    .centerCao {
        margin: 0 40px;
        .centerCao1 {
            width: 854px;
            .cc1_title {
                height: 115px;
                border-bottom: 1px solid #dbddde;
                padding: 20px 0;
                box-sizing: border-box;
                .cc1_Top {
                    font-size: 32px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #181818;
                }
                .cc1_time {
                    margin-top: 14px;
                    font-size: 12px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #999999;
                }
            }
            .step {
                .step1_title {
                    margin-top: 40px;
                    font-size: 20px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #181818;
                }
                .sb_content {
                    margin-top: 23px;
                    font-size: 14px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #181818;
                    line-height: 27px;
                }
                .sbImg {
                    margin-top: 20px;
                }
            }
        }
    }
    .rightCao {
        .rightCaoRelative {
            position: relative;
            width: 250px;
            height: 300px;
            border-left: 6px solid #eaecec;
            .rightCaoAbs {
                width: 250px;
                position: absolute;
                left: -6px;
                top: 0;
                .rcrTop {
                    padding-left: 17px;
                    height: 44px;
                    line-height: 44px;
                    font-size: 16px;
                    font-family: Microsoft YaHei;
                    font-weight: bold;
                    color: #181818;
                }
                ul {
                    height: 256px;
                    overflow-y: auto;
                    box-sizing: border-box;
                    li {
                        padding-left: 17px;
                        height: 44px;
                        line-height: 44px;
                        font-size: 16px;
                        font-family: Microsoft YaHei;
                        font-weight: bold;

                        a {
                            color: #666666;
                        }
                    }
                    li:hover {
                        border-left: 6px solid #e9461f;
                    }
                }
            }
        }
    }
}
//滚动条样式
.rightCaoAbs ul::-webkit-scrollbar {
    width: 4px;
}
/* 垂直滚动条的滑动块 */
.rightCaoAbs ul::-webkit-scrollbar-thumb:vertical {
    background-color: #b9b9b9;
}
.jianYiFanKui {
    background-color: #f7f7f7;
    height: 1127px;
    .jianYiForm {
        box-sizing: border-box;
        margin-top: 80px;
        width: 100%;
        height: 748px;
        background: #fff;
        padding: 60px 120px;
    }
}
.tiJiao {
    width: 96px;
    height: 40px;
    background: #e9461f;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffffff;
}
.liaiJieYunBi {
    .zcyw_top {
        background-image: url('../common/comImg/liaoJieYunbi/banner.png');
        .ljTitle {
            margin-bottom: 46px;
            font-size: 40px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #ffffff;
            text-align: center;
        }
        .ljContent {
            margin-bottom: 12px;
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #ffffff;
            text-align: center;
        }
    }
    .gongSiJianJie {
        height: 885px;
        box-sizing: border-box;
        .gsjjText {
            margin-top: 80px;
            p {
                font-size: 18px;
                font-family: Microsoft YaHei;
                font-weight: bold;
                color: #666666;
                margin-bottom: 29px;
                letter-spacing: 2px;
            }
        }
        .gsjjImg {
            margin-top: 70px;
            div {
                width: 432px;
                height: 291px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .gongSiRongYu {
        height: 1746px;
        background: #e9e9e9;
        .gsry_zhengShu {
            margin-top: 80px;
        }
        .gsry_zhengShu {
            box-sizing: border-box;
            div {
                width: 999px;
                img {
                    width: 458px;
                    margin-bottom: 60px;
                }
            }
        }
    }
    .faZhanLiShi {
        background: #fff;
        box-sizing: border-box;
        .fzls_nianFen {
            margin-top: 80px;
            .nianfen_num {
                span {
                    width: 186px;
                    text-align: center;
                    font-size: 20px;
                    color: #333333;
                }
            }
            .nianfen_Img {
                margin-top: 20px;
                img {
                    width: 186px;
                }
            }
        }
        .jinDu {
            margin: 55px 0 0 385px;
            height: 772px;
            background-image: url('../common/comImg/liaoJieYunbi/nianBg.png');
            background-size: 100%;
            background-repeat: no-repeat;
            .jdLeft {
                div {
                    font-size: 20px;
                    color: #e9461f;
                }
                .div1 {
                    margin-bottom: 133px;
                }
                .div2 {
                    margin-bottom: 159px;
                }
                .div3 {
                    margin-bottom: 159px;
                }
                .div4 {
                    margin-bottom: 159px;
                }
            }
            .jdCenter {
                margin: 0 40px 0 38px;
                img {
                    width: 23px;
                    height: 604px;
                }
            }
            .jdRight {
                .jdRightul1 {
                    margin-bottom: 73px;
                }
                .jdRightul2 {
                    margin-bottom: 104px;
                }

                .jdRight_top {
                    font-size: 24px;
                    color: #181818;
                }
                .jdRight_bottom {
                    margin-top: 27px;
                    font-size: 16px;
                    color: #666666;
                }
            }
        }
    }
}
.jieJueFangAn {
    .zcyw_top {
        background-image: url('../common/comImg/jieJueFangAn/banner.png');
        .jjfaTitle {
            width: 780px;
            padding-left: 217px;
            .ljTitle {
                font-size: 40px;
                font-family: Microsoft YaHei;
                font-weight: bold;
                color: #ffffff;
            }
            .ljContent {
                margin-top: 46px;
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: bold;
                color: #ffffff;
            }
        }
    }
    .jieJueFangAnText {
        .ciLiLunBo {
        }
    }
}
</style>
<style  lang='scss'>
.jianYiForm .el-form-item__label {
    float: none;
    font-size: 20px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #171717;
    line-height: 60px;
    // margin-bottom: 18px;
}
.jianYiForm .el-form-item__content {
    margin-left: 0 !important;
    // line-height: 60px;
    .el-input__inner {
        width: 562px;
        height: 40px;
        border-radius: 0;
    }
    .el-input__inner:focus {
        border: 1px solid #181818;
    }
    .el-textarea__inner:focus {
        border: 1px solid #181818;
    }
}
</style>
<style>
.swiper-container {
    width: 600px;
    height: 300px;
}
</style>

<style lang="scss" scoped>
.examples {
    position: absolute;
    top: 44px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    overflow: auto;
    background-color: #f5f0f0;
    font-size: 14px;
    .tips {
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 46px;
        background-color: #b5654d;
        text-align: center;
        img {
            width: 12px;
            height: 14px;
            position: absolute;
            top: 7.5px;
            left: 12vw;
            color: #fff;
        }
        p {
            width: 240px;
            text-align: left;
            color: #fff;
            font-size: 12px;
            position: absolute;
            left: 18vw;
            top: 7px;
            line-height: 16px;
        }
    }
}
.bannerTxt {
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #666666;
    font-size: 15px;
}
.bannerIndex {
    line-height: 40px;
    text-align: center;
    color: #666666;
    font-size: 15px;
    text-align: center;
    span {
        color: #b5654d;
    }
}
.bannerBox {
    position: relative;
    height: 300px;
}
.swiper-container {
    width: 100%;
    //   height: 100%;
    height: 340px;
}
.swiper-container .swiper-wrapper .swiper-slide {
    width: 80% !important;
    overflow: hidden;
    display: flex;
    align-items: center;
}
.swiper-container .swiper-wrapper .swiper-slide img {
    width: 100%;
    height: 340px;
    border-radius: 5px;
}
.swiper-container .swiper-wrapper .swiper-slide-prev,
.swiper-container .swiper-wrapper .swiper-slide-next {
    height: 298px !important;
    margin-top: 20px;
}
.swiper-container .swiper-wrapper .swiper-slide-prev img,
.swiper-container .swiper-wrapper .swiper-slide-next img {
    width: 100%;
    height: 100%;
}
</style>