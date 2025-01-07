<script setup>

</script>

<template>
  <div class="main">
    <div class="login-container">
    <div class="login-header">
        <img alt="Nhanhvn Logo" class="logo" src="@/assets/logo.svg" width="140" height="100" />
    </div>
    <form class="login-form">
      <div class="login-form__input">
          <font-awesome-icon icon="fa-regular fa-user" class="icon"/>
          <input type="text" placeholder="Tên đăng nhập"/>
      </div>
      <div class="login-form__input">
        <font-awesome-icon icon="fa-solid fa-key" class="icon"/>
      <input type="password" placeholder="Mật khẩu" />
      </div>
      <div class="login-form__link">
        <a href="#">Quên mật khẩu?</a>
      </div>
      <div class="btn">
        <router-link to="/auth/admin">
          <button class="btn--login" type="submit">Đăng nhập</button>
        </router-link>
      </div>
      <div class="login-form__text text--top">
        <span> Hoặc đăng nhập với</span>
      </div>
      <div class="btn">
        <button class="btn--facebook"><font-awesome-icon class="icon" icon="fa-brands fa-facebook" /><a href="#">Đăng nhập với Facebook</a></button>
        <button class="btn--google"><font-awesome-icon class="icon" icon="fa-brands fa-google" /><a href="#">Đăng nhập với Google</a></button>
      </div>
      <div class="login-form__text text--middle">
        <span> Bạn chưa có tài khoản?</span>
      </div>
      <div class="btn">
        <router-link to="/signup">
          <button class="btn--signup"><a href="/signup">Đăng ký</a></button>
        </router-link>
      </div>
      <div class="login-form__text text--bottom">
        Bằng cách tiếp tục đăng nhập, bạn xác nhận đồng ý với các  
        <span>
          <a href="#">Chính sách quyền riêng tư</a>
              và
          <a href="#">Điều khoản sử dụng</a>
        </span>
        <span>của Nhanh.vn</span>
      </div>

    </form>
  </div>
  </div>
</template>

<style scoped>
  .main{
    height: 100%; 
    width: 100%; 
    background-color: #E2E6ED; 
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-container{
    width: 25rem;
    height: 41rem;
    border: 2px solid var(--border-color);
    border-radius: 0.35rem;
    background-color: var(--white);
    display: grid;
    grid-template-rows: 5.5rem 1fr;
  }
  .login-container .login-header {
      display: flex;
      justify-content: center; 
      align-items: center;   
  }
  .login-form{
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .login-form__input {
    position: relative;
    width: 100%;
  }

  .login-form__input input {
    width: 100%; 
    height: 2.5rem;
    padding: 0.5rem 3rem; 
    border-radius: 0.35rem;
    border: 2px solid var(--border-color);
    box-sizing: border-box; 
  }
  .login-form__input input:focus{
    border-color: var(--input-focus-border-color);
    outline: none;
  }

  .login-form__input .icon{
    position: absolute;
    left: 0.75rem; 
    top: 50%;
    transform: translateY(-50%);
    color: var(--gray-600); 
    font-size: 1rem; 
  }
  .login-form__link{
    display: flex;
    justify-content: flex-end;
  }
  .login-form__link a{
    text-decoration: none;
    color: var(--link-color);
    font-weight: 500;
  }
  .login-form__link a:hover{
    color: var(--link-hover-color);
  }
  .btn button{
    width: 100%; 
    height: 2.5rem;
    padding: 0.5rem 3rem; 
    border-radius: var(--border-radius-lg);
    border: 1px solid var(--border-color);
    font-size: 0.9rem;
    font-weight: 545;
  }
  .btn button a{
    text-decoration: none;
  }
  .btn .btn--login{
    background-color: #4CAF50;
    border: 1px solid #4caf50;
    color: var(--white);
  }
  .btn--login:hover{
    background-color: #289e2d;
    border: 1px solid #289e2d;
  }
  .btn--facebook, .btn--google, .btn--signup{
    background-color: #f3f4f6;
    align-items: center;
    border: 1px solid var(--gray-400);
  }
  .btn--facebook:hover, .btn--google:hover{
    background-color: var(--gray-300);
    border: 1px solid var(--gray-500);
  }
  .btn--facebook a, .btn--google a{
    color: #1F2937;
    font-weight: 545;
  }
  .btn--facebook .icon, .btn--google .icon{
    margin-right: 0.7rem;
  }
  .btn--facebook .icon{
    color: rgb(12, 131, 255);
  }
  .btn--google .icon{
    color: rgb(239, 68, 68);
  }
  .btn--facebook{
    margin-bottom: 0.8rem;
  }
  .login-form__text{
    text-align: center;
  }
  .login-form__text.text--middle,
  .login-form__text.text--top {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center; 
    gap: 1rem;
  }

  .login-form__text.text--middle::before,
  .login-form__text.text--middle::after,
  .login-form__text.text--top::before,
  .login-form__text.text--top::after {
    content: "";
    height: 1px;
    background-color: var(--gray-400);
    display: block;
  }

  .login-form__text.text--middle span,
  .login-form__text.text--top span {
    text-align: center;
  }
  .btn .btn--signup{
    background-color: #0c83ff;
    border: 1px solid #0c83ff;
  }
  .btn--signup:hover{
    background-color: #0b76e6;
    border: 1px solid #0b76e6;
  }
  .btn--signup a{
    color: var(--white);
    font-weight: 545
  }
  .text--bottom{
    font-size: 0.75rem;
  }
  .text--bottom a{
    color: #0c83ff;
  }
  .login-form__text.text--bottom {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

</style>
