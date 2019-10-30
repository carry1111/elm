<template>
  <div class="parent">
    <div class="left">
      <img :src="food.imgUrl" />
    </div>
    <div class="center">
      <p class="food-name">
        <strong>{{food.name}}</strong>
      </p>
      <p  class="yuanliao">
        <span>主要原料: 鸡肉</span>
      </p>
      <p class="count">
        <span>月售{{food.sellCount}}</span><span>好评率100%</span>
      </p>
      <span class="food-price">
        <i>¥</i>
        <span>{{food.price}}</span>
      </span>
    </div>
    <add-cart
      class="right"
      :food="food"
      :num="num"
      :index1="index1"
      :index2="index2"
      @add="add_cart"
      @reduce="reduce_cart"
    ></add-cart>
  </div>
</template>
<script>
import addCart from "@/pages/home/components/add_cart.vue";
import Bus from "@/assets/js/bus.js";
export default {
  data() {
    return {
      num: 0
    };
  },
  props: ["food", "index1", "index2"],
  methods: {
    add_cart(food, index1, index2) {
      this.num += 1;
      this.$emit("add", food, index1, index2);
    },
    reduce_cart(food, index1, index2) {
      this.num -= 1;
      this.$emit("reduce", food, index1, index2);
    }
  },
  components: {
    addCart
  },
  mounted() {
    Bus.$on("clear_cart_bus", () => {
      this.num = 0;
    }),
      Bus.$on("add_cart", food => {
        if (this.food.id == food.id) {
          this.num += 1;
        }
      });
    Bus.$on("reduce_cart", food => {
      if (this.food.id == food.id) {
        this.num -= 1;
      }
    });
  }
};
</script>
<style lang="scss" scoped>
@import "src/assets/scss/common.scss";
.parent {
  position: relative;
  display: flex;
  height: pxToRem(100);
  padding: .3rem 0 .3rem .3rem;
}
.left {
  margin-right: pxToRem(10);
  img {
    width: pxToRem(100);
    height: pxToRem(100);
    border-radius: pxToRem(2);
  }
}
.center {
  position: relative;
  width: pxToRem(120);
  height: pxToRem(100);
  .food-name {
    @include textflow;
  }
  .count span:not(:first-child) {
    margin-left: pxToRem(6);
  }
  .yuanliao,
  .count {
    color: #999;
    @include textflow;
    font-size: pxToRem(10);
    margin: pxToRem(4) 0;
  }
  .food-price {
    position: absolute;
    bottom: 0;
    color: #ff5339;
    font-size: pxToRem(12);
    span {
      font-size: pxToRem(15);
    }
  }
}
.right {
  right: 0.4rem;
  bottom: 0.3rem;
  position: absolute;
  .reduce {
    display: inline-block;
    width: pxToRem(22);
    height: pxToRem(22);
    background-image: url("./../../../assets/images/reduce.png");
    background-size: pxToRem(22);
  }
  .add {
    display: inline-block;
    width: pxToRem(22);
    height: pxToRem(22);
    background-image: url("./../../../assets/images/add.png");
    background-size: pxToRem(22);
  }
  .num {
    display: inline-block;
    vertical-align: top;
    padding: 0.08rem 0.13rem 0;
  }
}
</style>