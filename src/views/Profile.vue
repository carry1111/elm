<template>
  <div class="profile">
      <div class="head clearfix" @click="toLogin">
          <div class="headimg">
              <img class="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg==">
          </div>
          <div class="login">
              <h3>登录/注册</h3>
              <p>登录后享受更多特权</p>
          </div>
      </div>
      <!-- <foot-one></foot-one> -->
  </div>
</template>

<script>
import foot from '@/components/common/foot.vue'
import footOne from '@/components/common/foot_one.vue'
export default {
    name: "profile",
    methods:{
        toLogin(){
            this.$router.push('/login');
        }
    },
    components:{
        foot,
        footOne,
    }
};
</script>

<style lang="scss" scoped>
    .head{
        background-image: linear-gradient(90deg,#0af,#0085ff);
        padding:.6rem;
    }
    .headimg{
        float:left;
        .img{
            width:1.5rem;
            height:1.5rem;
            border-radius: 50%;
        }
    }
    .login{
        float:left;
        color:#fff;
        text-align:left;
        margin-left:.4rem;
        h3{
            font-size:18px;
            font-weight: 700;
            margin:.2rem 0;
        }
    }
</style>

