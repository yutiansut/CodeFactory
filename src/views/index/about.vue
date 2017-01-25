<style>
    .about-container {
        text-align: center;
    }
    .github-box {
        position: relative;
        display: inline-block;
        background-color: #fff;
        height: 16rem;
        width: 30rem;
        border-top: 2px solid #d26911;
        padding: 2rem;
        box-sizing: border-box;
        text-align: left;
    }
    .github-box  a {
        text-decoration: blink;
    }
    .github-link {
        font-size: 1.8rem;
        color: #4078c0;
    }
    .github-description {
        margin: 1rem 0;
    }
    .github-star {
        position: absolute;
        bottom: 2rem;
        text-align: center;
        right: 0;
        left: 0;
        font-size: 1.4rem;
    }
</style>

<template>
    <div class="about-container">
         <div class="github-box">
            <a href="https://github.com/hilongjw">
                <span class="github-link">yutiansut</span>
            </a>
            <span> / </span>
            <a href="https://github.com/hilongjw/vue-zhihu-daily">
                <span class="github-link">quantaxisDC</span>
            </a>
            <br>
            <p class="github-description">QUANTAXIS 数据可视化</p>
            <a href="https://github.com/yutiansut/quantaxisDC">
                <p class="github-star">还不给我star？o(╥﹏╥)o</p>
            </a>
         </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            author: 'yutiansut'
        }
    }
}
</script>
