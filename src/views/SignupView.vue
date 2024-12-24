<script setup>

</script>

<template>
  <div class="main">
    <div class="signup-container">
    <div class="signup-header">
        <img alt="Nhanhvn Logo" class="logo" src="@/assets/logo.svg" width="140" height="100" />
    </div>
    <div class="signup-form">
      <div class="signup-form__input">
          <input type="email" placeholder="Email" required />
      </div>
      <div class="signup-form__input">
        <input type="password" placeholder="Mật khẩu" required />
      </div>
      <div class="signup-form__text text--alert">
        <ul>
          <li>Có từ 8 ký tự trở lên, có ít nhất 1 ký tự viết hoa, 1 ký tự viết thường, 1 chữ số.</li>
          <li>Mật khẩu không được giống tên đăng nhập.</li>
        </ul>
      </div>
      <div class="signup-form__input">
        <input type="text" placeholder="Số điện thoại" required />
      </div>
      <div class="signup-form__input">
        <input type="text" placeholder="Thành phố" required />
      </div>
      <div class="signup-form__text text--top">
        <input type="checkbox" >
        <span>Đồng ý với các <a href="#">Chính sách quyền riêng tư</a> và <a href="#">Điều khoản sử dụng</a> của Nhanh.vn</span>  
      </div>
      <div class="btn">
        <button class="btn--signup">Đăng ký</button>
      </div>
      <div class="signup-form__text text-middle">
        <span> Hoặc đăng ký với</span>
      </div>
      <div class="btn">
        <button class="btn--facebook"><i class="fa-brands fa-facebook fa-lg" style="color: #1d87d7;"></i><a href="#">Đăng nhập với Facebook</a></button>
        <button class="btn--google"><i class="fa-brands fa-google fa-lg" style="color: #de2121;"></i><a href="#">Đăng nhập với Google</a></button>
      </div>
      <div class="signup-form__text text--bottom">
        <span> 
          Bạn đã có tài khoản? 
            <a routerlink="/" href="/">Đăng nhập</a>
        </span>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
  .main{
    height: auto; 
    width: 100%; 
    background-color: #E2E6ED; 
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .signup-container{
    width: 25rem;
    height: 47rem;
    background-color: #E2E6ED; 
    border: 2px solid var(--border-color);
    border-radius: 0.35rem;
    background-color: var(--white);
    display: grid;
    grid-template-rows: 5.5rem 1fr;
    margin: 1rem;
  }
  .signup-container .signup-header {
      display: flex;
      justify-content: center; 
      align-items: center;   
  }
  .signup-form{
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .signup-form__input {
    width: 100%;
  }

  .signup-form__input input {
    width: 100%; 
    height: 2.5rem;
    padding: 0.5rem 1rem; 
    border-radius: 0.35rem;
    border: 2px solid var(--border-color);
    box-sizing: border-box; 
  }
  .signup-form__input input:focus{
    border-color: var(--input-focus-border-color);
    outline: none;
  }
  .signup-form__text.text--alert{
    border: 1px solid #82cdd6;
    background-color: #e6f5f7;
    border-radius: 0.35rem;
  }
  .signup-form__text.text--alert ul{
    margin: 0.6rem 0;
    padding: 0;
  }
  .signup-form__text.text--alert ul li{
    font-size: 0.82rem;
    color: #036c79;
    margin-left: 2rem;
  }
  .signup-form__text.text--top{
    display: flex;
    gap: 1rem;
    font-size: 0.82rem;
    align-items: center;
  }
  .text--top a{
    color: #0c83ff;
    font-weight: 545;
  }
  .text--top input[type="checkbox"]:focus{
    accent-color: #0c83ff;
    border: 1px solid #0c83ff;
    box-shadow: 0 0 0.2rem #0c83ff;
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
  .btn .btn--signup{
    background-color: #0c83ff;
    border: 1px solid #0c83ff;
    color: var(--white);
    font-weight: 545;
  }
  .btn--signup:hover{
    background-color: #0b76e6;
    border: 1px solid #0b76e6;
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
  .signup-form__text.text-middle {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center; 
    gap: 1rem;
    text-align: center;
  }
  .signup-form__text.text-middle::before,
  .signup-form__text.text-middle::after {
    content: "";
    height: 1px;
    background-color: var(--gray-400);
    display: block;
  }
  .signup-form__text.text-middle span {
    text-align: center;
  }
 
  .text--bottom{
    font-size: 0.82rem;
  }
  .text--bottom a{
    color: #0c83ff;
    font-weight: 545;
  }
  .signup-form__text.text--bottom {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

</style>
