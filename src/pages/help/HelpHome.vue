<template>
  <div class="help">
    <div class="toc">
      <h3>问题</h3>
      <h4
        v-for="(toc, index) in tocList"
        :key="index"
        :class="{active: activeIndex === index}"
        @click="activeIndex = index"
      >{{toc}}</h4>
    </div>
    <div class="viewer">
      <div class="search">
        <input type="text" placeholder="搜索">
        <img src="@/assets/images/ic_avatar_bot.png" alt="avatar_bot">
      </div>
      <div class="content">
        <h2>监控系统开发工程师</h2>
        <br>
        <p>
          HTML没有1.0，因为关于它的初版存在争议，1995年HTML 2.0面世，1997年由国际官方组织W3C推出了HTML 3.2以及HTML
          <a>4.0标准，后面W3C(万维网联盟)也渐渐变成Web技术领域的权威，经过漫长的演变，2014年，HTML 5标准最终面世。</a>
          <br>HTML 2.0——1995年11月，RFC 1866发布
          <br>HTML 3.2——1997年1月14日，W3C发布推荐标准
          <br>HTML 4.0——1997年12月18日，W3C发布推荐标准
          <br>HTML 4.01——1999年12月24日，W3C发布推荐标准
          <br>HTML 5——2014年10月28日，W3C发布推荐标准
          <br>HTML结构
          <br>
          <br>HTML的结构一般包括&lt;head&gt;标签和&lt;body&gt;标签，&lt;head&gt;和&lt;body&gt;这2个标记符分别表示网页的头部和正文。头部中可包含页面的标题、关键词、描述说明等内容，它本身不作为内容来显示，但影响网页显示的效果。
          &lt;body&gt;&lt;/body&gt;当中是网页实际显示的内容，正文标记符又被称为实体标记。页面当中通常包含有很多指向其他相关页面或其他节点的指针，通过点击，可以很方便地获取新的网页，这是HTML获得广泛推广运用最重要的原因之一，而由这些相互之间存在关联的页面组成的有机集合便是网站。
          究竟HTML为什么会被普及?这就要归功于互联网的高速发展，对于编程语言的需求直线上升。而HTML5具有超集方式的简易性、运用广泛的可拓展性、灵活应变的平台适应性以及简单的通用性。凭借着这些特性，HTML越来越受到人们的喜爱。
          HTML5编辑规范
          <br>
          <br>1、文件拓展名默认使用htm，便于操作系统或者程序辨认文件，而图片则基本上存为gif或jpg
          <br>2、浏览器默认忽视回车符，不过为了方便阅览，人们还是会习惯地在写完一段代码后进行回车
          <br>3、标记符号用尖括号括起来，带斜杠的元素表示该标记说明结束，大多数标记符必须成对使用，用以说明起始和结束。
          <br>4、必须使用半角而不是全角字符
          <br>5、HTML注释&lt;!--注释内容--&gt;的内容不给予显示。
          <br>除了这本手册，你还可以参
          <br>《HTML参考手册》
          <br>开始学习HTML
          <br>
          <br>接下来，你可以打开这本教程，先了解html的基本概念，然后一个一个地掌握HTML标签、HTML语法、HTML注释、HTML框架的用法，并且参考借鉴一些优秀的网站，通过浏览器的“查看源代码”功能来了解别人写的HTML代码结构。
          HTML对于系统环境配置要求一点也不高，基本上，你只需要有一台电脑就够了。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tocList: [
        "监控系统开发工程师-Python",
        "高级系统运维工程师",
        "Python高级开发工程师",
        "大数据运维工程师",
        "分布式存储高级工程师",
        "大数据高级工程师",
        "云平台PHP高级工程师",
        "linux后台工程师",
        "容器云高级开发工程师",
        "运维产品经理"
      ],
      activeIndex: -1
    };
  }
};
</script>

<style lang="scss" scoped>
.help {
  display: flex;
  flex: auto;
  .toc {
    width: 334px;
    background-color: #f1f5f8;
    h3 {
      margin: 0;
      background: linear-gradient(#dee7f3, #e9eff4);
      font-weight: bold;
      color: #43475f;
    }
    h4 {
      margin: 0;
      color: #888888;
      font-weight: normal;
      cursor: pointer;
      &:hover {
        background-color: white;
      }
      &.active {
        background-color: white;
      }
    }
    h3,
    h4 {
      font-size: 16px;
      padding: 16px 34px;
    }
  }
  .viewer {
    flex: auto;
    .search {
      width: 100%;
      display: flex;
      padding: 24px 32px 40px;
      border-bottom: 1px solid black;
      input {
        width: 184px;
        height: 30px;
        margin-top: 0;
        border-radius: 4px;
        padding-right: 10px;
        padding-left: 44px;
        font-size: 12px;
        font-weight: 300;
        border: none;
        border: 1px solid #eef0f6;
        background: white url("~@/assets/images/ic_search_grey.png") no-repeat
          10%;
      }
      img {
        margin-left: 15px;
      }
    }
    .content {
      padding: 30px 34px;

      h2 {
        font-size: 24px;
        font-weight: normal;
        margin: 0;
        padding: 0;
      }
      p {
        width: 762px;
        word-break: break-all;
        font-size: 12px;
        line-height: 26px;
        color: #4f6473;
        a {
          color: #397bf9;
        }
      }
    }
  }
}
</style>