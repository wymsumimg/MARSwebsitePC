<template>
    <div flex="cross:center main:center" style="margin-top:50px;">
        <div class="leftArrow" style="margin-right:30px;">
            <img src="../common/comImg/leftJian.png" class="leftArrowImg"  @click="prev" />
        </div>  
        <transition name="fade">
            <div @touchend="end" @touchstart="start" @touchmove="move" @mouseover="stop" @mouseleave="play" class="swiper">
                <div @click="chooseItem(item, index)" v-for="(item, index) in imgs" :style="config5[index]" :key="item.cover">
                    <img :src="item.cover" style="width: 100%; height: 100%" />
                </div>
            </div>
        </transition>
        <div class="rightArrow" style="margin-left:30px;">
            
            <img
                src="../common/comImg/leftJian.png"
                class="leftArrowImg"
                @click="next"
                style="transform: rotate(180deg)"
            />
        </div>
    </div>
</template>
<script>
export default {
    name: 'zt',
    data() {
        return {
            loading: true,
            currentIndex: 3, //当前中间imgs数组中index
            centerInfo: '', // 当前中间信息
            startX: '',
            endX: '',
            imgs: [
                {
                    id: '1',
                    index: 0,
                    cover:  require('../common/comImg/banner/b5.jpg'),
                },
                {
                    id: '2',
                    index: 1,
                    cover:  require('../common/comImg/banner/b6.jpg'),
                },
                {
                    id: '3',
                    index: 2,
                    cover:  require('../common/comImg/banner/b7.jpg'),
                },
                {
                    id: '4',
                    index: 3,
                    cover: require('../common/comImg/banner/b8.jpg'),
                },
                {
                    id: '5',
                    index: 4,
                    cover: require('../common/comImg/banner/b9.jpg'),
                },
                {
                    id: '6',
                    index: 5,
                    cover:require('../common/comImg/banner/b10.jpg'),
                },
                {
                    id: '7',
                    index: 6,
                    cover: require('../common/comImg/banner/b11.jpg'),
                },
                {
                    id: '8',
                    index: 7,
                    cover: require('../common/comImg/banner/b12.jpg')
                }
               
            ],
            previous: 0,
            config5: [
                {
                    id: '-A',
                    position: 'absolute',
                    width: '22%',
                    height: '72%',
                    top: '19.2%',
                    left: '-22%',
                    opacity: 0,
                    zIndex: 0,
                    transition: '.4s'
                },
                {
                    id: 'A',
                    position: 'absolute',
                    width: '32%',
                    height: '72%',
                    top: '17%',
                    left: '0%',
                    opacity: 1,
                    zIndex: 1,
                    transition: '.4s'
                },
              
                {
                    id: 'center',
                    position: 'absolute',
                    width: '55%',
                    height: '100%',
                    top: '0px',
                    left: '45%',
                    marginLeft: '-22.5%',
                    opacity: 1,
                    zIndex: 4,
                    transition: '.4s'
                },
                {
                    id: 'E',
                    position: 'absolute',
                    width: '32%',
                    height: '72%',
                    top: '17%',
                    left: '68%',
                    opacity: 1,
                    zIndex: 1,
                    transition: '.4s'
                },
                {
                    id: 'E+',
                    position: 'absolute',
                    width: '22%',
                    height: '72%',
                    top: '19.2%',
                    left: '100%',
                    opacity: 0,
                    zIndex: 0,
                    transition: '.4s'
                }
            ],
            
        };
    },
    mounted(){
        this.play()
    },
    methods: {
        // 获取数据
        async getData() {
            this.$nextTick(() => {
                this.loading = false;
            });
        },
        // 滑动上一个
        prev(index) {
            // this.imgs.unshift(this.imgs.pop());
            this.config5.push(this.config5.shift());
            this.currentIndex = this.currentIndex - 1;
            if (this.currentIndex < 0) {
                this.currentIndex = this.imgs.length - 1;
            }
            this.centerCard();
            this.centerIndex('prev');
        },
        // 滑动下一个
        next() {
            // this.imgs.push(this.imgs.shift());
            this.config5.unshift(this.config5.pop());
            this.currentIndex = this.currentIndex + 1;
            if (this.currentIndex > this.imgs.length - 1) {
                this.currentIndex = 0;
            }
            this.centerCard();
            this.centerIndex('next');
            // console.log(this.currentIndex);
        },
        // 开始移动端滑动屏幕
        start(event) {
            this.startX = event.changedTouches[0].clientX;
            this.startY = event.changedTouches[0].clientY;
        },
        // 连续滑动
        move(event) {
            this.endY = event.changedTouches[0].clientY;
            this.endX = event.changedTouches[0].clientX;
            this.stopDefault(event);
            // 如果是滑动，注解（223行到231行）这段。如果是连续滑动，放开（223行到231行）注解
            this.interval = this.endX - this.startX;
            if (this.interval > 40) {
                this.startX = this.endX;
                this.prev();
            }
            if (this.interval < -40) {
                this.startX = this.endX;
                this.next();
            }
        },
        // 滑动
        end(event) {
            // 如果是滑动，放开（236行到238行）的注解。如果是连续滑动，注解（236行到238行）
            // this.endY = event.changedTouches[0].clientY;
            // this.endX = event.changedTouches[0].clientX;
            // this.formatSwiper();
        },
        formatSwiper() {
            if (this.startX > this.endX) {
                console.log('左边滑动');
                if (this.startX > this.endX + 40) {
                    this.next();
                }
            } else {
                console.log('右边滑动');
                if (this.endX > this.startX + 40) {
                    this.prev();
                }
            }
        },
        // 阻止touchmove的横向默认事件（ios快捷操作会关闭页面）
        stopDefault(event) {
            let differenceY = this.endY - this.startY;
            let differenceX = this.endX - this.startX;
            if (Math.abs(differenceX) > Math.abs(differenceY)) {
                event.preventDefault();
            }
        },
        // 当前imgs在位置上的index（并非img数组的index）
        centerIndex(val) {
            if (val == 'prev') {
                for (let val of this.imgs) {
                    if (val.index == this.imgs.length - 1) {
                        val.index = 0;
                    } else {
                        val.index = val.index + 1;
                    }
                }
            } else {
                for (let val of this.imgs) {
                    if (val.index == 0) {
                        val.index = this.imgs.length - 1;
                    } else {
                        val.index = val.index - 1;
                    }
                }
            }
        },
        // 点击
        chooseItem(item, index) {
            let cycles = item.index;
            if (item.index < 2) {
                for (let i = 0; i < 2 - cycles; i++) {
                    console.log(item.index);
                    this.prev();
                }
            } else if (item.index > 2) {
                for (let i = -1; i < item.index - 2; i++) {
                    this.next();
                }
            } else if (item.index == 2) {
                console.log('中间');
            }
        },
        // 计算中间卡片信息
        centerCard() {
            this.centerInfo = this.imgs[this.currentIndex];
            this.$emit('centerInfo', this.centerInfo);
            // this.$emit('centerInfo', this.centerInfo);
            // console.log(this.imgs[2].id);
        },

        addCardStyle() {
            if (this.imgs.length > 7) {
                let addtime = this.imgs.length - 7;
                for (let i = 0; i < addtime; i++) {
                    console.log('add');
                    this.config5.push({
                        id: 'center',
                        position: 'absolute',
                        width: '45%',
                        height: '100%',
                        top: '0px',
                        left: '50%',
                        marginLeft: '-22.5%',
                        opacity: 0,
                        transition: '.1s'
                    });
                }
            }
        },
        play() {
            if (this.timer) {
                window.clearInterval(this.timer);
                this.timer = null;
            }
            this.timer = window.setInterval(() => {
                this.next();
            }, 3000);
        },
        stop() {
            window.clearInterval(this.timer);
            this.timer = null;
        }
    },
    created() {
        this.getData();
        this.centerCard(); // 获取中间卡片信息
        this.addCardStyle(); // 加入样式位置的index
    }
};
</script>

<style lang="scss" scoped>
.swiper {
    width: 1236px;
    height: 325px;
    position: relative;
    overflow: hidden;
    div {
        opacity: 0;
    }
}

.leftArrowImg {
        width: 50px;
        height: 50px;
    }
</style>
