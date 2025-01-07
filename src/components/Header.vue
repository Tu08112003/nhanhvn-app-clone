
<template>
    <header class="header">
        <!-- Header Navbar -->
      <nav class="navbar-top">
        <img alt="Nhanhvn logo" class="logo" src="@/assets/logo_white.svg"/>
        <div class="container">
          <ul class="container-navbar__list">
            <li><a href=""> <span id="new-icon">New</span> Mở giỏ hàng Facebook</a></li>
            <li>
              <a href="">
                <span class="material-symbols-outlined">add_circle</span>
                <span class="material-symbols-outlined">keyboard_arrow_down</span>
              </a>
            </li>
            <li>
              <a href="">
                <span class="material-symbols-outlined">support</span>
                <span class="material-symbols-outlined">keyboard_arrow_down</span>
              </a>
            </li>
            <li><a href=""><span class="material-symbols-outlined">notifications</span></a></li>
            <li v-on:click="toggleMenu('profileMenu')">
                <div class="navbar-profile"> 
                    <label>huynhtu@gmail.com</label>
                    <span class="material-symbols-outlined">keyboard_arrow_down</span>
                </div>
              <ul class="subnav-profile" v-show="isMenuVisible.profileMenu">
                <li><a href=""><span class="material-symbols-outlined">person</span> Tài khoản (Giám đốc)</a></li>
                <li><a href=""><span class="material-symbols-outlined">settings</span> Cài đặt giao diện</a></li>
                <li><a href=""><span class="material-symbols-outlined">notifications</span> Cài đặt nhận thông báo</a></li>
                <li><a routerlink="/" href="/"><span class="material-symbols-outlined">power_settings_new</span> Đăng xuất</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Main Navbar -->
      <nav class="navbar-main">
        <ul class="navbar-main__list">
          <li><a href="/auth/admin">Tổng quan</a></li>
          <li v-on:click="toggleMenu('productMenu')">
              <a >Sản phẩm <span class="material-symbols-outlined">keyboard_arrow_down</span></a>
              <ul class="subnav-product" v-show="isMenuVisible.productMenu">
                <li><a href=""><span class="material-symbols-outlined">deployed_code</span>Sản phẩm</a></li>
                <li><a href=""><span class="material-symbols-outlined">arrow_selector_tool</span>Sàn TMĐT</a></li>
                <li><a href=""><span class="material-symbols-outlined">deployed_code</span> Lô sản phẩm</a></li>
                <li><a href=""><span class="material-symbols-outlined">garage_home</span>Tồn kho</a></li>
                <li><a href=""><span class="material-symbols-outlined">schedule</span>Thời gian lưu kho</a></li>
                <li><a href=""><span class="material-symbols-outlined">view_list</span>Danh mục</a></li>
                <li><a href="/product/brand"><span class="material-symbols-outlined">copyright</span>Thương hiệu</a></li>
                <li><a href=""><span class="material-symbols-outlined">format_list_bulleted</span>Thuộc tính</a></li>
                <li><a href=""><span class="material-symbols-outlined">home</span>Nhà cung cấp</a></li>
              </ul>
          </li>
          <li v-on:click="toggleMenu('warehouseMenu')">
            <a >Kho hàng <span class="material-symbols-outlined">keyboard_arrow_down</span></a>
            <ul class="subnav-warehouse" v-show="isMenuVisible.warehouseMenu">
                <li><a href=""><span class="material-symbols-outlined">swap_horiz</span>Xuất nhập kho</a></li>
                <li><a href=""><span class="material-symbols-outlined">swap_horiz</span>Chuyển kho</a></li>
                <li><a href=""><span class="material-symbols-outlined">swap_horiz</span>Kiểm kho</a></li>
                <li><a href=""><span class="material-symbols-outlined">swap_horiz</span>Phiếu nháp</a></li>
                <li><a href=""><span class="material-symbols-outlined">swap_horiz</span>Gói sản phẩm</a></li>
                <li><a href=""><span class="material-symbols-outlined">swap_horiz</span>Hạn mức tồn kho</a></li>
                <li><a href=""><span class="material-symbols-outlined">swap_horiz</span>Vị trí sản phẩm</a></li>
                <li><a href=""><span class="material-symbols-outlined">swap_horiz</span>Dự báo nhập hàng</a></li>
                <li><a href=""><span class="material-symbols-outlined">swap_horiz</span>Tổng công ty</a></li>
                <li><a href=""><span class="material-symbols-outlined">swap_horiz</span>Hàng lỗi</a></li>
                <li><a href=""><span class="material-symbols-outlined">swap_horiz</span>Lịch sử sửa, xóa</a></li>
              </ul>
          </li>
          <li v-on:click="toggleMenu('sellMenu')">
            <a >Bán hàng <span class="material-symbols-outlined">keyboard_arrow_down</span></a>
            <ul class="subnav-sell" v-show="isMenuVisible.sellMenu">
                <li><a href="">Tìm hóa đơn</a></li>
                <li><a href="">Hóa đơn nháp</a></li>
                <li><a href="">Bán lẻ</a></li>
                <li><a href="">Bán sỉ</a></li>
                <li><a href="">Hóa đơn điện tử</a></li>
                <li><a href="">Trả hàng</a></li>
                <li><a href="">Nợ quà tặng</a></li>
              </ul>
          </li>
          <li v-on:click="toggleMenu('orderMenu')">
            <a >Đơn hàng <span class="material-symbols-outlined">keyboard_arrow_down</span></a>
            <ul class="subnav-order" v-show="isMenuVisible.orderMenu">
                <li><a href="">Đơn hàng</a></li>
                <li><a href="">Đơn trùng</a></li>
                <li><a href="">Sàn TMĐT</a></li>
                <li><a href="">Tài chính sàn TMĐT</a></li>
                <li><a href="">Đóng gói</a></li>
                <li><a href="">Biên bản bàn giao</a></li>
                <li><a href="">Chờ gửi vận chuyển</a></li>
                <li><a href="">Khiếu nại</a></li>
                <li><a href="">Đối soát</a></li>
                <li><a href="">Nguồn đơn hàng</a></li>
                <li><a href="">Lịch sử sửa xóa</a></li>
              </ul>
          </li>
          <li v-on:click="toggleMenu('customerMenu')">
            <a>Khách hàng <span class="material-symbols-outlined">keyboard_arrow_down</span></a>
            <ul class="subnav-customer" v-show="isMenuVisible.customerMenu">
                <li><a href="">Khách hàng</a></li>
                <li><a href="">Thẻ khách hàng</a></li>
                <li><a href="">Chăm sóc khách hàng</a></li>
                <li><a href="">Cấp độ</a></li>
                <li><a href="">Nhóm khách hàng</a></li>
                <li><a href="">Hình thức chăm sóc</a></li>
                <li><a href="">Lý do chăm sóc</a></li>
              </ul>
          </li>
          <li v-on:click="toggleMenu('reportMenu')">
            <a>Báo cáo <span class="material-symbols-outlined">keyboard_arrow_down</span></a>
             <ul class="subnav-report" v-show="isMenuVisible.reportMenu">
                <li><a href="">Doanh thu</a></li>
                <li><a href="">Đơn hàng</a></li>
                <li><a href="">Bán lẻ</a></li>
                <li><a href="">Bán sỉ</a></li>
                <li><a href="">Tồn kho</a></li>
                <li><a href="">Sản phẩm</a></li>
                <li><a href="">Khách hàng</a></li>
                <li><a href="">Khuyến mãi</a></li>
                <li><a href="">Zalo</a></li>
              </ul>
          </li>
          <li v-on:click="toggleMenu('websiteMenu')">
            <a >Website <span class="material-symbols-outlined">keyboard_arrow_down</span></a>
            <ul class="subnav-website" v-show="isMenuVisible.websiteMenu">
                <li><a href="">Menu</a></li>
                <li><a href="">Tag</a></li>
              </ul>
          </li>
          <li v-on:click="toggleMenu('discountMenu')"><a>Khuyến mãi <span class="material-symbols-outlined">keyboard_arrow_down</span></a>
            <ul class="subnav-discount" v-show="isMenuVisible.discountMenu">
                <li><a href="">Chiết khấu</a></li>
                <li><a href="">Thiết lập bảng giá</a></li>
                <li><a href="">Tích điểm</a></li>
                <li><a href="">Mã giảm giá</a></li>
                <li><a href="">Quà tặng</a></li>
                <li><a href="">Hoa hồng bán hàng</a></li>
              </ul>
          </li>
          <li v-on:click="toggleMenu('settingMenu')">
            <a>Cài đặt <span class="material-symbols-outlined">keyboard_arrow_down</span></a>
             <ul class="subnav-setting" v-show="isMenuVisible.settingMenu">
                <li><a href="">Nhân viên</a></li>
                <li><a href="">Cài đặt chung</a></li>
                <li><a href="">Bán hàng và XNK</a></li>
                <li><a href="">Hóa đơn điện tử</a></li>
                <li><a href="">Đơn hàng và vận chuyển</a></li>
                <li><a href="">Cài đặt nhãn</a></li>
              </ul>
        </li>
        </ul>
      </nav>
    </header>
</template>

<script setup>
  import { ref } from "vue";

  const isMenuVisible = ref({
      profileMenu: false,
      productMenu: false,
      warehouseMenu: false,
      sellMenu: false,
      orderMenu: false,
      customerMenu: false,
      reportMenu: false,
      websiteMenu: false,
      discountMenu: false,
      settingMenu: false,
  });

  const toggleMenu = (menuName) => {
      const currentState = isMenuVisible.value[menuName];
      for (const key in isMenuVisible.value) {
          isMenuVisible.value[key] = false;
      }
      isMenuVisible.value[menuName] = !currentState;
  };
</script>




<style>
    .header{
        width: 100%;
        height: 6.25rem;
        display: grid;
        grid-template-rows: 3.125rem 3.125rem;
    }

    /* Header Navbar  */
  .navbar-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid;
    padding: 0 5rem;
    background-color: #ab1d1d;
  }
  .navbar-top .logo{
    height: 2rem;
    max-width: 100%;
    color: white;
  }
  .navbar-top .container ul{
    padding: 0;
    list-style: none;
    align-items: center;
  }
  .container li a{
    text-decoration: none;
  }
  .container .container-navbar__list li{
    display: inline-block;
  }
  .container .container-navbar__list li a{
    padding: 0 1rem;
    line-height: 3.125rem;
    display: flex; 
    align-items: center;
  }
  .container .container-navbar__list > li > a {
    color: white;
    display: inline-block;
    font-size: 0.9rem;
  }
  .container-navbar__list li a span {
    vertical-align: middle; 
    font-size: 1.25rem;
  }
   .container .container-navbar__list .navbar-profile{
        line-height: 3.125rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 1rem;
        color: white;
        font-size: 0.9rem;
   }
   .container .container-navbar__list .navbar-profile span{
        font-size: 1.25rem;
   }
   .container .container-navbar__list .navbar-profile:hover{
        background-color: #b43434;
   }
  .container-navbar__list li a #new-icon {
    border: 1px solid #ff7043;
    background-color: #ff7043;
    border-radius: 3rem;
    font-size: 0.7rem;
    padding: 0.2rem 0.5rem;
    margin-right: 0.4rem;
    font-weight: 500;
  }
  .container-navbar__list > li:hover > a{
    background-color: #b43434;
  }
  .subnav-profile{
    position: absolute;
    background-color: white;
    margin-top: 0.4rem;
    width: 13rem;
    right: 5rem;
    box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.2);
    border-radius: var(--border-radius-sm);

  }
  .subnav-profile a{
    color: rgba(51,51,51,.85);
    display: block;
    font-size: 0.8125rem;
    display: flex; 
    align-items: center;
  }
  .subnav-profile li{
    width: 100%;
    border-bottom: 1px solid var(--gray-400);
  }
  .subnav-profile li a span{
    margin-right: 1rem;
    font-size: 1.2rem;
  }
  .subnav-profile li:last-child a{
    color: #ab1d1d;
  }
  .subnav-profile li:hover:not(:last-child) a{
    color: #333333;
    background-color: #f5f5f5;
  }
  .subnav-profile li:last-child:hover a {
    color: #ab1d1d; 
    background-color: #f5f5f5;
  }

    /* Main Navbar  */

  .navbar-main{
    display: grid;
    place-items: center;
    background-color: var(--white);
  }
  .navbar-main__list{
    width: 95%;
  }
  .navbar-main li a{
    text-decoration: none;
  }
  .navbar-main ul{
    list-style: none;
    padding: 0;
  }
  .navbar-main .navbar-main__list li{
    display: inline-block;
    position: relative;
  }
  .navbar-main .navbar-main__list > li > a{
    line-height: 3.125rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(51,51,51,.85)
  }
  .navbar-main .navbar-main__list > li:hover > a{
    color: #333333 ;
    background-color: #f5f5f5 ;
  }
   .subnav-product,
    .subnav-warehouse,
    .subnav-sell,
    .subnav-order,
    .subnav-customer,
    .subnav-report,
    .subnav-website,
    .subnav-discount,
    .subnav-setting {
        position: absolute;
        background-color: white;
        box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.2);
        width: 11rem;
        z-index: 1;
        margin-top: 0.3rem;
        border-radius: var(--border-radius-sm);
    }
    .subnav-product li,
    .subnav-warehouse li,
    .subnav-sell li,
    .subnav-order li,
    .subnav-customer li,
    .subnav-report li,
    .subnav-website li,
    .subnav-discount li,
    .subnav-setting li{
        width: 100%;
    }
    .subnav-product a,
    .subnav-warehouse a,
    .subnav-sell a,
    .subnav-order a,
    .subnav-customer a,
    .subnav-report a,
    .subnav-website a,
    .subnav-discount a,
    .subnav-setting a{
        color: rgba(51,51,51,.85);
        font-size: 0.8125rem;
        padding: 0.6rem 1rem;
        display: flex;
        align-items: center;
        gap: 0.7rem;
        width: 100%;
    }
    .subnav-product li:hover a,
    .subnav-warehouse li:hover a,
    .subnav-sell li:hover a,
    .subnav-order li:hover a,
    .subnav-customer li:hover a,
    .subnav-report li:hover a,
    .subnav-website li:hover a,
    .subnav-discount li:hover a,
    .subnav-setting li:hover a{
        background-color: #f5f5f5;
    }
    .subnav-product a span,
    .subnav-warehouse a span,
    .subnav-sell a span,
    .subnav-order a span,
    .subnav-customer a span,
    .subnav-report a span,
    .subnav-website a span,
    .subnav-discount a span,
    .subnav-setting a span{
        font-size: 1.25rem;
    }

</style>