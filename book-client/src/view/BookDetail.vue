<template>
  <div class="wrap">
    <!-- 背景图 -->
    <div class="bg" :style="bg"></div>
    <div class="container">
      <!-- 头部导航 start -->
      <nav class="header-nav">
        <a class="yczp" href="#"><span></span>原创作品</a>&gt;
        <a href="#">女性小说</a>&gt;
        <a href="#">三十而骊</a>
      </nav>
      <!-- 头部导航 end -->
      <!-- 头部信息 start -->
      <header class="header-info">
        <h1 class="title">{{ book.bookName }}</h1>
        <div class="author-info">
          <img class="cover" :src="book.avatar" alt="" />
          <div class="name">{{ book.author }}</div>
        </div>
        <div class="notice">{{ book.notice }}</div>
        <div class="desc">{{ book.desc }}</div>
        <div class="badges"><label>签约作品</label><label>已定价</label></div>
        <div class="appraise">
          <span class="stars"></span>
          <span class="score">{{ book.score }}</span>
          <span class="amount"><a href="#">25人评价</a></span>
        </div>
        <div class="kinds-tags">
          <span class="cate">{{ book.category }}</span>
          <span class="tags">
            <span
              class="tags-item"
              v-for="(item, index) in book.tag"
              :key="index"
              >{{ item }}</span
            >
          </span>
        </div>
        <div class="count-group">
          <span class="count">
            <div class="label">字数</div>
            <div class="text">{{ book.count | numberFilter }}</div>
          </span>
          <span class="count"
            ><div class="label">阅读</div>
            <div class="text">{{ book.read | numberFilter }}</div></span
          >
          <span class="count"
            ><div class="label">加入书架</div>
            <div class="text">{{ book.add | numberFilter }}</div></span
          >
          <span class="count"
            ><div class="label">月推荐票</div>
            <div class="text">{{ book.ytjp | numberFilter }}</div></span
          >
          <span class="count"
            ><div class="label">累计推荐票</div>
            <div class="text">{{ book.ljtjp | numberFilter }}</div></span
          >
        </div>
      </header>
      <!-- 头部信息 end -->
      <!-- 图书简介 start -->
      <section class="intro">
        <div class="intro-head">简介</div>
        <div class="intro-content">
          <p v-for="(item, index) in book.intro" :key="index">{{ item }}</p>
        </div>
      </section>
      <!-- 图书简介 end -->
      <!-- 图书目录 start -->
      <section class="catalogue">
        <div class="catalogue-head">
          <span class="text">目录（56）</span>
          <span class="catalogue-head-right">
            <span><input type="checkbox" v-model="isNew" />最新发表在前</span>
            <span><input type="checkbox" v-model="showDesc" />显示简介</span>
          </span>
        </div>
        <div class="last-news">
          <span class="news-left">
            <span class="tag">最新</span>
            <span class="text">56 幻灭</span>
          </span>
          <span class="news-time">8分钟前</span>
        </div>
        <div class="catalogue-content">
          <ul>
            <li
              class="item"
              v-for="(item, index) in book.catalogue"
              :key="index"
            >
              <a href="#">
                <h3 class="title">{{ item.title }}</h3>
                <div class="content" v-if="showDesc">
                  <div class="desc">
                    {{ item.intro }}
                  </div>
                  <div class="meta">
                    <div class="meta-left">{{ item.data }}</div>
                    <div class="meta-right">
                      <span class="read">阅读{{ item.read | numberFilter }}</span>
                      <span class="comment">讨论{{ item.comment | numberFilter }}</span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li class="lnk-more">
              <a href="#" class="text">查看全部目录</a>
            </li>
          </ul>
        </div>
      </section>
      <!-- 图书目录 end -->
      <!-- 图书评论 start -->
      <div class="comment">
        <div class="comment-head">评论（911）</div>
        <div class="comment-content">
          <ul>
            <li
              class="comment-item"
              v-for="(item, index) in book.comment"
              :key="index"
            >
              <div class="comment-item-head">
                <a href="#" class="avatar"><img :src="item.avatar" alt="" /></a>
                <span class="more-info">
                  <h3 class="nickname">{{ item.nickname }}</h3>
                  <span class="time">{{ item.addtime }}</span
                  ><span class="text">参与讨论</span>
                </span>
              </div>
              <div class="comment-item-content">
                <p class="text">
                  {{ item.content }}
                </p>
                <div class="more">
                  <span class="chapter"
                    >章节<a href="#">{{ item.chapter }}</a></span
                  >
                  <span class="btn"><a href="#">写回复</a></span>
                </div>
              </div>
            </li>
            <li class="lnk-more">
              <a href="#" class="text">查看更多评论</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 图书评论 end -->
      <!-- 相关图书推荐 start -->
      <div class="correlation">
        <div class="correlation-head">喜欢这本书的人也喜欢</div>
        <ul>
          <li
            class="correlation-item"
            v-for="(item, index) in book.correlation"
            :key="index"
          >
            <a href="#" class="cover"><img :src="item.cover" alt="" /></a>
            <a href="#" class="title">{{ item.bookName }}</a
            ><a href="#" class="author">{{ item.author }}</a>
          </li>
        </ul>
      </div>
      <!-- 相关图书推荐 end -->
    </div>
  </div>
</template>
<style lang="less" scoped>
/* 最外层容器 */
.wrap {
  min-width: 1200px;
  margin: 0 auto;
  position: relative;
  font-size: 13px;
  /* 背景图 */
  .bg {
    position: absolute;
    width: 100%;
    right: 0;
    left: 0;
    z-index: -1;
    height: 300px;
    background-position: center;
    background-size: cover;
    &:after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(
        to top,
        #f8f9f9 0,
        rgba(255, 255, 255, 0) 100%
      );
      content: "";
    }
  }
  /* 内容的容器 */
  .container {
    width: 66%;
    margin: 0 auto;
    /* 头部导航栏 */
    .header-nav {
      padding-top: 20px;
      .yczp {
        padding-left: 32px;
        position: relative;
      }
      span {
        position: absolute;
        left: 12px;
        top: 4px;
        width: 16px;
        height: 16px;
        background: url("../assets/img/yczp.png") no-repeat;
      }
      a {
        font-size: 13px;
        margin: 0 5px 0 0;
        text-decoration: none;
        display: inline-block;
        padding: 0 12px;
        height: 26px;
        border-radius: 26px;
        background-color: rgba(255, 255, 255, 0.5);
        color: #333;
        line-height: 26px;
        &:hover {
          background-color: rgba(255, 255, 255, 0.8);
        }
      }
      .title {
        text-align: center;
      }
    }
    /* 头部信息 */
    .header-info {
      text-align: center;
      padding-top: 60px;
      font-size: 13px;
      .title {
        font-size: 40px;
        margin-bottom: 30px;
      }
      .author-info {
        .cover {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        .name {
          color: #333;
          font-weight: 600;
          font-size: 13px;
        }
      }
      .notice {
        margin-top: 30px;
        color: #ff9e2c;
        font-size: 13px;
        &:before {
          width: 16px;
          height: 16px;
          margin-right: 5px;
          background: url("../assets/svg/notice.svg");
          content: "";
          display: inline-block;
          vertical-align: -3px;
        }
      }
      .desc {
        margin-top: 30px;
      }
      .badges {
        margin-top: 20px;
        label {
          margin-right: 10px;
          display: inline-flex;
          align-items: center;
          color: #777;
          &:before {
            content: "";
            margin-right: 3px;
            width: 12px;
            height: 12px;
            background: url("../assets/svg/end.svg");
          }
        }
      }
      .appraise {
        margin-top: 15px;
        font-size: 13px;
        .stars {
          width: 66px;
          height: 13px;
          &:before {
            content: "";
            background: url("../assets/svg/star.svg");
            height: 13px;
            width: 66px;
            display: inline-block;
            vertical-align: -2px;
          }
        }
        .score {
          color: #fa595f;
        }
        .amount {
          margin-left: 5px;
          a {
            text-decoration: none;
            color: #389eac;
          }
        }
      }
      .kinds-tags {
        margin-top: 15px;
        margin-left: 5px;
        color: #fff;
        vertical-align: top;
        font-size: 12px;
        display: inline-block;
        &:before {
          content: "";
          width: 12px;
          height: 12px;
          background: url("../assets/svg/cate.svg");
          display: inline-block;
          vertical-align: -2px;
        }
        .cate {
          margin-left: 5px;
          background-color: #389eac;
          border-radius: 20px;
          display: inline-block;
          height: 20px;
          line-height: 20px;
          padding: 0 9px;
          &:hover {
            background-color: #108899;
          }
        }
        .tags {
          &:before {
            content: "";
            width: 12px;
            height: 12px;
            background: url("../assets/svg/tag.svg");
            display: inline-block;
            vertical-align: -2px;
            margin-right: 5px;
          }
          .tags-item {
            height: 20px;
            display: inline-block;
            line-height: 20px;
            background-color: #389eac;
            border-radius: 20px;
            padding: 0 9px;
            margin-right: 5px;
            &:hover {
              background-color: #108899;
            }
          }
        }
      }
      .count-group {
        margin-top: 20px;
        .count {
          display: inline-block;
          background-color: #fff;
          padding: 5px 30px;
          margin-right: 5px;
          border-radius: 5px;
          .label {
            height: 20px;
            line-height: 20px;
          }
          .text {
            color: #333;
            font-weight: 600;
            line-height: 20px;
          }
        }
      }
    }
    /* 图书简介 */
    .intro {
      margin-top: 20px;
      .intro-head {
        padding: 10px 15px;
        color: #333;
        font-weight: 600;
        background-color: #ebf0f2;
      }
      .intro-content {
        padding: 20px 20px;
        p {
          height: 30px;
          line-height: 30px;
          color: #333;
          font-size: 13px;
        }
      }
    }
    /* 图书目录 */
    .catalogue {
      font-size: 13px;
      .catalogue-head {
        background-color: #ebf0f2;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        .text {
          font-weight: 600;
        }
        .catalogue-head-right {
          span {
            margin-left: 10px;
            input {
              vertical-align: -2px;
              margin-right: 5px;
            }
          }
        }
      }
      .last-news {
        background-color: #ffffe8;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        .news-left {
          .tag {
            background-color: #ff9e2c;
            color: #ffff;
            padding: 2px;
            border-radius: 3px;
            font-weight: 600;
            margin-right: 5px;
          }
          .text {
          }
        }
        .news-time {
          color: #bbb;
        }
      }
      .catalogue-content {
        ul {
          list-style: none;
          .item {
            border-bottom: 1px solid #ccc;
            padding: 20px 10px;
            &:hover {
              background-color: #ebf0f2;
            }
            a {
              text-decoration: none;
              .title {
                color: #333;
              }
              .desc {
                display: -webkit-box;
                overflow: hidden;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                margin: 5px 0 7px;
                height: 36px;
                color: #333;
              }
              .meta {
                color: #bbb;
                font-size: 12px;
                display: flex;
                justify-content: space-between;
                .meta-left {
                }
                .meta-right {
                  .read {
                    margin-right: 10px;
                  }
                  .comment {
                  }
                }
              }
            }
          }
          .lnk-more {
            margin: 15px;
            text-align: center;
            cursor: pointer;

            a {
              &:hover {
                color: #108899;
              }
              color: #389eac;
              text-decoration: none;
            }
          }
        }
      }
    }
    /* 图书评论 */
    .comment {
      margin-top: 20px;
      .comment-head {
        background-color: #ebf0f2;
        padding: 10px 13px;
        font-weight: 600;
        color: #333;
      }
      .comment-content {
        ul {
          list-style: none;
          .comment-item {
            padding: 20px 0;
            .comment-item-head {
              display: flex;
              .avatar {
                margin-right: 10px;
                img {
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                }
              }
              .more-info {
                .nickname {
                }
                .time {
                  line-height: 20px;
                  color: #bbb;
                }
                .text {
                  color: #bbb;
                  margin-left: 5px;
                }
              }
            }
            .comment-item-content {
              padding-left: 40px;

              .text {
                margin: 15px 20px 10px 12px;
                line-height: 20px;
              }
              .more {
                margin: 10px 20px 0 12px;
                height: 30px;
                line-height: 30px;
                display: flex;
                justify-content: space-between;
                position: relative;
                &:after {
                  bottom: -10px;
                  left: 0;
                  width: 100%;
                  height: 0;
                  border-bottom: 1px solid #ddd;
                  transform: scaleY(0.5);
                  transform-origin: 0 bottom;
                  content: "";
                  position: absolute;
                }
                .chapter {
                  color: #bbb;
                  a {
                    text-decoration: none;
                    margin-left: 10px;
                    color: #389eac;
                    &:hover {
                      color: #108899;
                    }
                  }
                }
                .btn {
                  background-color: #fff;
                  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
                  border-radius: 4px;
                  //   padding: 10px 20px;
                  display: flex;
                  align-items: center;
                  a {
                    color: #333;
                    text-decoration: none;
                    padding: 0 14px;
                    &:hover {
                      background: #389eac;
                      box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);
                      border-radius: 4px;
                      color: #fff;
                    }
                  }
                }
              }
            }
          }
          .lnk-more {
            margin: 15px;
            text-align: center;
            cursor: pointer;

            a {
              color: #389eac;
              text-decoration: none;
              &:hover {
                color: #108899;
              }
            }
          }
        }
      }
    }
    /* 相关图书 */
    .correlation {
      margin-bottom: 100px;
      .correlation-head {
        padding: 10px 13px;
        background-color: #ebf0f2;
        font-weight: 600;
        margin-bottom: 20px;
      }
      ul {
        list-style: none;
        white-space: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        overflow: hidden;
        .correlation-item {
          a {
            text-decoration: none;
          }
          display: inline-block;
          width: 115px;
          margin-right: 20px;

          .cover {
            width: 80px;
            height: 120px;
            border-radius: 5px;
            overflow: hidden;
            box-shadow: 1px 1px 2px #aaa;
            display: flex;
            margin-bottom: 10px;
            position: relative;
            img {
              width: 100%;
              height: 100%;
            }
            &:after {
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background-color: #000;
              content: "";
              opacity: 0;
              transition: opacity 0.1s ease-in;
            }
            &:hover:after {
              opacity: 0.2;
            }
          }
          .title {
            display: flex;
            color: #333;
          }
          .author {
            color: #bbb;
            line-height: 20px;
          }
        }
      }
    }
  }
}
</style>
<script>
// 导入api文件
import { bookDetail } from "@/api/book";
export default {
  data() {
    return {
      bg: {
        backgroundImage: "url(" + require("@/assets/img/bg.jpg") + ")",
      },
      //   是否显示章节描述
      showDesc: true,
      isNew: false,
      //   图书详情
      book: {},
    };
  },
  created() {
    this.getBookDetail();
  },
  filters: {
    // 数字过滤器
    numberFilter(number) {
      let counter = 0;
      let result = "";
      for (let j = number.length - 1; j >= 0; j--) {
        counter++;
        result = number.charAt(j) + result;
        if (!(counter % 3) && j != 0) {
          result = "," + result;
        }
      }

      return result;
    },
  },
  methods: {
    getBookDetail() {
      bookDetail().then((res) => {
        this.book = res.data.data;
      });
    },
  },
};
</script>