<template>
  <div class="login">
      <div class="title">
          <img src="//shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png" class="title-img">
      </div>
      <div>
          <form>
              <section class="section1">
                  <input type="tel" maxlength="11" placeholder="手机号">
                  <button class="btn1">获取验证码</button>
              </section>
              <section class="section1">
                  <input type="num" maxlength="6" placeholder="验证码">
              </section>
              <section class="section2">
                  新用户登录即自动注册，并表示已同意《用户服务协议》
              </section>
              <button class="btn">登录</button>
          </form>
          <router-link class="link" to="about">关于我们</router-link>
      </div>
  </div>
</template>

<script>
export default {
    name: "login",
    methods:{
    },
    mounted(){
    }
};
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/common.scss';
    .login{
        width:300px;
        margin:0 auto;
        padding-top:1rem;
    }
    .title-img{
        width:3.6rem;
        height:1.5rem;
    }
    form{
        margin-top:16px;
    }
    form .section1{
        height:48px;
        margin-bottom:16px;
        position: relative;
    }
    form .section1 .btn1{
        position:absolute;
        top:50%;
        right:10px;
        transform: translateY(-50%);
        border:none;
        background-color:#fff;
        color:#ccc;
    }
    form .section1>input{
        box-sizing: border-box;
        width:100%;
        height:100%;
        padding-left:10px;
        // border-radius:4px;
    }
    form .section2{
        font-size:16px;
        text-align:left;
    }
    form .btn{
        width:100%;
        height:1rem;
        line-height: 1rem;
        background:#4cd96f;
        color:#fff;
        // font-weight: 700;
        font-size:16px;
        margin-top:20px;
        outline:none;
        border:none;
        border-radius:4px;
    }
    .link{
        display: block;
        margin-top:16px;
        color:#999;
    }
</style>

