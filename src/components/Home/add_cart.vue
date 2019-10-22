<template>
  <div class="add-cart">
    <i class="reduce" @click="reduce_cart(food,index1,index2)" v-show="num>0"></i>
    <span class="num" v-show="num>0">{{num}}</span>
    <i class="add" @click="add_cart(food,index1,index2)"></i>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import Bus from "@/assets/js/bus.js";
export default {
  name: "add-cart",
  data() {
    return {
      selfNum: 0
    };
  },
  props: {
    food: {
      type: Object,
      default() {
        return {};
      }
    },
    index1: {
      type: Number,
      default() {
        return 0;
      }
    },
    index2: {
      type: Number,
      default() {
        return 0;
      }
    },
    num: {
      type: Number,
      default() {
        return 0;
      }
    }
  },
  methods: {
    ...mapActions(["ADD_CART", "REMOVE_CART"]),
    reduce_cart(food, index1, index2) {
      this.$emit("reduce", food, index1, index2);
    },
    add_cart(food, index1, index2) {
      this.$emit("add", food, index1, index2);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "src/assets/scss/common.scss";
.add-cart {
  .reduce {
    display: inline-block;
    width: pxToRem(22);
    height: pxToRem(22);
    background-image: url("./../../assets/images/reduce.png");
    background-size: pxToRem(22);
  }
  .add {
    display: inline-block;
    width: pxToRem(22);
    height: pxToRem(22);
    background-image: url("./../../assets/images/add.png");
    background-size: pxToRem(22);
  }
  .num {
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 0.08rem;
  }
}
</style>