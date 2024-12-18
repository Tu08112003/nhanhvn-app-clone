<script setup>

</script>

<template>
  <div class="main">
    <div class="container">
    <div class="header">
        <img alt="Nhanhvn Logo" class="logo" src="@/assets/logo.svg" width="140" height="100" />
    </div>
    <div class="form">
      <div class="form__input">
          <span class="material-symbols-outlined">person</span>
          <input type="text" placeholder="Tên đăng nhập"/>
      </div>
      <div class="form__input">
        <span class="material-symbols-outlined">key</span>
      <input type="text" placeholder="Mật khẩu" />
      </div>
      <div class="form__link">
        <a href="#">Quên mật khẩu?</a>
      </div>
      <div class="btn">
        <router-link to="/home">
          <button class="btn--login" type="submit">Đăng nhập</button>
        </router-link>
      </div>
      <div class="form__text text--top">
        <span> Hoặc đăng nhập với</span>
      </div>
      <div class="btn">
        <button class="btn--facebook"><i class="fa-brands fa-facebook fa-lg" style="color: #1d87d7;"></i><a href="#">Đăng nhập với Facebook</a></button>
        <button class="btn--google"><i class="fa-brands fa-google fa-lg" style="color: #de2121;"></i><a href="#">Đăng nhập với Google</a></button>
      </div>
      <div class="form__text text--middle">
        <span> Bạn chưa có tài khoản?</span>
      </div>
      <div class="btn">
        <button class="btn--signup"><a href="#">Đăng ký</a></button>
      </div>
      <div class="form__text text--bottom">
        Bằng cách tiếp tục đăng nhập, bạn xác nhận đồng ý với các  
        <span>
          <a href="#">Chính sách quyền riêng tư</a>
              và
          <a href="#">Điều khoản sử dụng</a>
        </span>
        <span>của Nhanh.vn</span>
      </div>

    </div>
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
  .container{
    width: 25rem;
    height: 41rem;
    border: 2px solid var(--border-color);
    border-radius: 0.35rem;
    background-color: var(--white);
    display: grid;
    grid-template-rows: 5.5rem 1fr;
  }
  .container .header {
      display: flex;
      justify-content: center; 
      align-items: center;   
  }
  .form{
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .form__input {
    position: relative;
    width: 100%;
  }

  .form__input input {
    width: 100%; 
    height: 2.5rem;
    padding: 0.5rem 3rem; 
    border-radius: 0.35rem;
    border: 2px solid var(--border-color);
    box-sizing: border-box; 
  }
  .form__input input:focus{
    border-color: var(--input-focus-border-color);
    outline: none;
  }

  .form__input .material-symbols-outlined {
    position: absolute;
    left: 0.75rem; 
    top: 50%;
    transform: translateY(-50%);
    color: var(--gray-600); 
    font-size: 1.5rem; 
  }
  .form__link{
    display: flex;
    justify-content: flex-end;
  }
  .form__link a{
    text-decoration: none;
    color: var(--link-color);
    font-weight: 500;
  }
  .form__link a:hover{
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
    border-color: #4caf50;
    color: var(--white);
  }
  .btn--login:hover{
    background-color: #05875f;
    border: 1px solid #05875f;
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
  .btn--facebook i, .btn--google i{
    margin-right: 0.7rem;
  }
  .btn--facebook{
    margin-bottom: 0.8rem;
  }
  .form__text{
    text-align: center;
  }
  .form__text.text--middle,
  .form__text.text--top {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center; 
    gap: 1rem;
  }

  .form__text.text--middle::before,
  .form__text.text--middle::after,
  .form__text.text--top::before,
  .form__text.text--top::after {
    content: "";
    height: 1px;
    background-color: var(--gray-400);
    display: block;
  }

  .form__text.text--middle span,
  .form__text.text--top span {
    text-align: center;
  }
  .btn--signup{
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
  .form__text.text--bottom {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

</style>
