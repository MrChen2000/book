<template>
  <div class="rankings-wrap">
    <h2 class="rankings-title">图书排行榜</h2>
    <div class="rankings-list">
      <div class="rankings-card">
        <div class="rankings-card-head">
          <h1 class="title">长篇连载榜</h1>
          <h2 class="desc">作品三日内有更新，按周热度排行</h2>
        </div>
        <div class="rankings-card-content" @mouseleave="restoreActive()">
          <ol>
            <li
              class="rankings-item"
              v-for="(item, index) in bookList"
              :key="index"
              @mouseover="addActive(item, index)"
              @mouseleave="removeActive(item, index)"
            >
              <div class="rankings-item-nubmer">{{ item.number }}</div>
              <div class="rankings-item-content">
                <div
                  :class="[
                    item.isShow
                      ? 'rankings-works-derailed'
                      : 'rankings-works-simple',
                  ]"
                >
                  <div class="info">
                    <h3 class="title">
                      <router-link :to="{name:'BookDetail',params:{id:item.number}}" :title="item.bookName">{{ item.bookName }}</router-link>
                    </h3>
                    <div class="author">
                      <a href="#">{{ item.author }}</a>
                    </div>
                    <div class="extra-info">
                      <span class="info-item"
                        ><a href="#">{{ item.category }}</a></span
                      >
                      <span class="info-item more">
                        <span class="line"></span>
                        <a href="#">{{ item.tag }}</a>
                      </span>
                    </div>
                  </div>
                  <div class="cover">
                    <router-link :to="{name:'BookDetail',params:{id:item.number}}" class="pic">
                      <div class="box"></div>
                      <img :src="item.cover" alt="" />
                    </router-link>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>
        <div class="rankings-card-footer">
          <a href="#">查看详情</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
/* 最外层容器 */
.rankings-wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 60px;
  /* 排行榜标题 */
  .rankings-title {
    margin-bottom: 30px;
  }
    /* 排行榜列表 */
  .rankings-list {
    margin: 0 0 20px;
    /* 排行榜卡片 */
    .rankings-card {
      display: inline-block;
      box-sizing: border-box;
      width: calc(25% - 16px);
      background-color: #fff;
      padding: 20px;
      margin-right: 10px;
      /* 排行榜卡片头部 */
      .rankings-card-head {
        margin-bottom: 20px;
        .title {
          color: #bb996d;
          font-size: 18px;
          line-height: 22px;
        }
        .desc {
          margin-top: 2px;
          color: gray;
          font-weight: normal;
          font-size: 12px;
        }
      }
      /* 排行榜卡片内容 */
      .rankings-card-content {
        ol {
          list-style: none;
          .rankings-item {
            display: flex;
            padding-bottom: 15px;
            &:nth-child(1) .rankings-item-nubmer {
              color: #fa595f;
            }
            .rankings-item-nubmer {
              flex: 1;
              color: #f9c300;
            }
            .rankings-item-content {
              flex: 8;
              a {
                color: #000;
                text-decoration: none;
              }
              /* 显示图书详情 */
              .rankings-works-derailed {
                display: flex;
                .info {
                  flex: 4;
                  .title {
                    font-size: 14px;
                    font-weight: normal;
                    line-height: 1.3;
                    overflow: hidden;
                    margin-bottom: 5px;
                  }
                  .author {
                    font-size: 12px;
                    margin-bottom: 15px;
                    a {
                      color: #666;
                    }
                  }
                  .extra-info {
                    a {
                      color: #666;
                      font-size: 12px;
                    }
                    .info-item {
                      .line {
                        display: inline-block;
                        margin: 0 10px;
                        width: 1px;
                        height: 10px;
                        background-color: #ccc;
                        vertical-align: -1px;
                      }
                    }
                  }
                }
                .cover {
                  flex: none;
                  width: 80px;
                  height: 120px;
                  margin-left: 5px;
                  border-radius: 5px;
                  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
                  overflow: hidden;

                  .pic {
                    position: relative;
                    .box {
                      position: absolute;
                      left: 0;
                      right: 0;
                      width: 80px;
                      height: 120px;
                      background-color: rgba(0, 0, 0, 0.3);
                      display: none;
                    }
                    &:hover {
                      .box {
                        display: block;
                      }
                    }
                    img {
                      width: 100%;
                    }
                  }
                }
              }
              /* 隐藏图书详情 */
              .rankings-works-simple {
                display: flex;
                .info {
                  flex: 4;
                  display: flex;
                  .title {
                    flex: 5;
                    font-size: 14px;
                    font-weight: normal;
                    line-height: 1.3;
                    overflow: hidden;
                    margin-bottom: 5px;
                  }
                  .author {
                    display: none;
                  }
                  .extra-info {
                    flex: 1;
                    a {
                      color: #666;
                      font-size: 12px;
                    }
                    .info-item.more {
                      display: none;
                    }
                  }
                }
                .cover {
                  display: none;
                }
              }
            }
          }
        }
      }
      /* 排行榜卡片底部 */
      .rankings-card-footer {
        text-align: center;
        a {
          text-decoration: none;
          color: #389eac;
        }
      }
    }
  }
}
</style>
<script>
// 导入api文件
import { bookList } from "@/api/book";
export default {
  data() {
    return {
        // 图书列表
      bookList: [],
    };
  },
  created() {
    //   获取图书列表数据
    this.getBookList();
  },
  methods: {
    //   获取图书列表
    getBookList() {
      // 发送http请求获取图书列表数据
      bookList().then((res) => {
        var data = res.data.data.bookList;
        data.forEach((item, index) => {
            // 给每一项数据加上一个isShow属性，用于控制是否显示图书详情，第一条数据默认显示图书详情
          if (index == 0) {
            item.isShow = true;
          } else {
            item.isShow = false;
          }
        });
        // 把遍历后的数据赋值给data定义的数组
        this.bookList = data;
      });
    },
    // 当鼠标移出卡片第一条数据默认显示图书详情
    restoreActive() {
      this.bookList[0].isShow = true;
    },
    // 鼠标经过显示图书详情
    addActive(item, index) {
      if (index !== 0) {
        this.bookList[0].isShow = false;
      }
      item.isShow = true;
    },
    // 鼠标移出隐藏图书详情
    removeActive(item) {
      item.isShow = false;
    },
  },
};
</script>