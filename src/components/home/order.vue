<template>
  <div id="order">
    <div class="content">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li
            v-for="(item,index) in goodsList"
            :key="index"
            :class="{li:true,active:index==currentMenuIndex}"
            @click="selectMenu(index,$event)"
          >
            <span>{{item.name}}</span>
            <count :num="itemSelectNumArray[index]" class="itemSelect"></count>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li v-for="(item,index1) in goodsList" :key="index1" class="li" ref="foodsList">
            <div class="item-title">
              <strong class="item-name">{{item.name}}</strong>
              <span class="item-desc" v-show="index1==0">大家喜欢吃,才是真好吃</span>
            </div>
            <ul>
              <li v-for="(food,index2) in item.foods" :key="index2" class="parent">
                <food-item
                  :food="food"
                  :index1="index1"
                  :index2="index2"
                  @add="add_cart"
                  @reduce="reduce_cart"
                ></food-item>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <shop-cart :price="totalPrice" :num="totalNum"></shop-cart>
  </div>
</template>

<script>
import api from "@/api/goods";
import BScroll from "better-scroll";
import shopCart from "@/components/home/shop_cart.vue";
import count from "@/components/basic/count.vue";
import addCart from "@/components/home/add_cart.vue";
import { goods as response } from "@/data/goods.js";
import { mapState, mapActions } from "vuex";
import Bus from "@/assets/js/bus.js";
import foodItem from "@/components/home/food_item.vue";
const ERR_OK = 0;
export default {
  name: "order",
  data() {
    return {
      goodsList: [],
      listHeight: [],
      scrollY: 0,
      totalPrice: 0,
      isShowReduce: false,
      itemSelectNumArray: [],
      totalNum: 0
    };
  },
  computed: {
    ...mapState({
      cartList: state => state.shop_cart.cartList
    }),
    currentMenuIndex() {
      let len = this.listHeight.length;
      for (let i = 0; i < len; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
        }
      }
      return 0;
    }
  },
  methods: {
    ...mapActions(["ADD_CART", "REMOVE_CART"]),
    getGoodsList() {
      api
        .getGoodslist()
        .then(res => {})
        .catch(err => {
          console.error(err);
        });
    },
    initSelectNum() {
      this.goodsList.forEach(value => {
        this.itemSelectNumArray.push(0);
      });
    },
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      });
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        probeType: 3
      });
      this.foodsScroll.on("scroll", pos => {
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    _calculateHeight() {
      let foodsList = this.$refs.foodsList;
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < foodsList.length; i++) {
        let item = foodsList[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    },
    selectMenu(index1, event) {
      var foodsList = this.$refs.foodsList;
      var el = foodsList[index1];
      this.foodsScroll.scrollToElement(el, 300);
    },
    add_cart(food, index1, index2) {
      this.totalPrice += food.price;
      this.itemSelectNumArray[index1] += 1;
      this.totalNum += 1;
      this.ADD_CART({
        id: food.id,
        name: food.name,
        price: food.price,
        num: 1
      });
    },
    reduce_cart(food, index1, index2) {
      this.totalPrice -= food.price;
      this.itemSelectNumArray[index1] -= 1;
      this.totalNum -= 1;
      this.REMOVE_CART({
        id: food.id,
        name: food.name,
        price: food.price,
        num: 1
      });
    }
  },
  created() {
    if (response.error === ERR_OK) {
      this.goodsList = response.goodsList;
      this.$nextTick(() => {
        setTimeout(() => {
          this._initScroll();
          this._calculateHeight();
        }, 0);
      });
    }
    this.initSelectNum();
  },
  mounted() {
    Bus.$on("clear_cart_bus", () => {
      this.itemSelectNumArray = [];
      this.totalNum = 0;
      this.totalPrice = 0;
      this.initSelectNum();
    }),
    Bus.$on("add_cart", food => {
      this.totalNum += 1;
      this.totalPrice += food.price;
      this.goodsList.forEach((value, index) => {
        var len = value.foods.length;
        for (var i = 0; i < len; i++) {
          if (value.foods[i]["id"] === food.id) {
            this.itemSelectNumArray[index] += 1;
          }
        }
      });
    });
    Bus.$on("reduce_cart", food => {
      this.totalNum -= 1;
      this.totalPrice -= food.price;
      this.goodsList.forEach((value, index) => {
        var len = value.foods.length;
        for (var i = 0; i < len; i++) {
          if (value.foods[i]["id"] === food.id) {
            this.itemSelectNumArray[index] -= 1;
          }
        }
      });
    });
  },
  components: {
    shopCart,
    count,
    addCart,
    foodItem
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/common.scss";
#order {
  position: relative;
  // height: 854px;
}
.content {
  display: flex;
  display: -webkit-flex;
  text-align: left;
  // position: absolute;
  // top: 1rem;
  // bottom: 1.3rem;
  height: 100%;
  font-size: pxToRem(16);
  width: 100%;
  overflow: hidden;
  flex: 1;
}
.menu-wrapper {
  flex: 0 0 2.4rem;
  background: #f3f5f7;
  height: pxToRem(580);
  .li {
    height: pxToRem(40);
    line-height: pxToRem(40);
    padding-left: pxToRem(8);
    font-size: pxToRem(12);
    position: relative;
    .itemSelect {
      position: absolute;
      top: 0.1rem;
      right: 0.1rem;
    }
  }
  .active {
    background: #fff;
  }
}
.foods-wrapper {
  flex: 1;
  height: pxToRem(580);
  .item-title {
    font-size: pxToRem(12);
    height: pxToRem(16);
    padding: 0.2rem 0.05rem;
    background-color: #f5f5f5;
    .item-name {
      margin-right: pxToRem(4);
    }
    .item-desc {
      color: #999;
      @include textflow;
    }
  }
}
</style>