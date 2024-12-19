<template>
  <div class="App">
    <header class="header">
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
            <li>
              <a href="">Tứ <span class="material-symbols-outlined">keyboard_arrow_down</span></a>
              <ul class="subnav-profile">
                <li><a href=""><span class="material-symbols-outlined">person</span> Tài khoản (Giám đốc)</a></li>
                <li><a href=""><span class="material-symbols-outlined">settings</span> Cài đặt giao diện</a></li>
                <li><a href=""><span class="material-symbols-outlined">notifications</span> Cài đặt nhận thông báo</a></li>
                <li><a href=""><span class="material-symbols-outlined">power_settings_new</span> Đăng xuất</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <nav class="navbar-main">
        <ul class="navbar-main__list">
          <li><a href="">Tổng quan</a></li>
          <li>
              <a href="#">Sản phẩm</a>
              <ul class="subnav-product">
                <li><a href=""><span class="material-symbols-outlined">deployed_code</span>Sản phẩm</a></li>
                <li><a href=""><span class="material-symbols-outlined">arrow_selector_tool</span>Sàn TMĐT</a></li>
                <li><a href=""><span class="material-symbols-outlined">deployed_code</span> Lô sản phẩm</a></li>
                <li><a href=""><span class="material-symbols-outlined">garage_home</span>Tồn kho</a></li>
                <li><a href=""><span class="material-symbols-outlined">schedule</span>Thời gian lưu kho</a></li>
                <li><a href=""><span class="material-symbols-outlined">view_list</span>Danh mục</a></li>
                <li><a href=""><span class="material-symbols-outlined">copyright</span>Thương hiệu</a></li>
                <li><a href=""><span class="material-symbols-outlined">format_list_bulleted</span>Thuộc tính</a></li>
                <li><a href=""><span class="material-symbols-outlined">home</span>Nhà cung cấp</a></li>
              </ul>
          </li>
          <li>
            <a href="#">Kho hàng</a>
            <ul class="subnav-warehouse">
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
          <li>
            <a href="#">Bán hàng</a>
            <ul class="subnav-sell">
                <li><a href="">Tìm hóa đơn</a></li>
                <li><a href="">Hóa đơn nháp</a></li>
                <li><a href="">Bán lẻ</a></li>
                <li><a href="">Bán sỉ</a></li>
                <li><a href="">Hóa đơn điện tử</a></li>
                <li><a href="">Trả hàng</a></li>
                <li><a href="">Nợ quà tặng</a></li>
              </ul>
          </li>
          <li>
            <a href="#">Đơn hàng</a>
            <ul class="subnav-order">
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
          <li>
            <a href="#">Khách hàng</a>
            <ul class="subnav-customer">
                <li><a href="">Khách hàng</a></li>
                <li><a href="">Thẻ khách hàng</a></li>
                <li><a href="">Chăm sóc khách hàng</a></li>
                <li><a href="">Cấp độ</a></li>
                <li><a href="">Nhóm khách hàng</a></li>
                <li><a href="">Hình thức chăm sóc</a></li>
                <li><a href="">Lý do chăm sóc</a></li>
              </ul>
          </li>
          <li>
            <a href="#">Báo cáo</a>
             <ul class="subnav-report">
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
          <li>
            <a href="#">Website</a>
            <ul class="subnav-website">
                <li><a href="">Menu</a></li>
                <li><a href="">Tag</a></li>
              </ul>
          </li>
          <li><a href="#">Khuyến mãi</a>
            <ul class="subnav-discount">
                <li><a href="">Chiết khấu</a></li>
                <li><a href="">Thiết lập bảng giá</a></li>
                <li><a href="">Tích điểm</a></li>
                <li><a href="">Mã giảm giá</a></li>
                <li><a href="">Quà tặng</a></li>
                <li><a href="">Hoa hồng bán hàng</a></li>
              </ul>
          </li>
          <li>
            <a href="#">Cài đặt</a>
             <ul class="subnav-setting">
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
    <div class="main-page">
      <div class="page-header">
        <div class="page-header__title">
          <span class="material-symbols-outlined">speed</span>
          <h2>Trang tổng quan</h2>
        </div>
        <div class="page-header__element">
            <button> 
              <span class="material-symbols-outlined">calendar_month</span>
              Hôm nay
            </button>
            <button>
              <span class="material-symbols-outlined">location_on</span>
              huynhtu012023@gmail.com
              <span class="material-symbols-outlined">keyboard_arrow_down</span>
            </button>
        </div>
      </div>
      <div class="page-content">
        <div class="page-content__left">
          <div class="revenue-dashboard">
            <div class="revenue-dashboard__header">
              <div class="row row--revenue">
                <div class="text-top">
                  <span class="material-symbols-outlined">finance</span>
                  DOANH THU
                </div>
                <div class="text-center">
                  <span>0</span>
                  <span><span class="material-symbols-outlined icon-bottom">arrow_upward</span> 0%</span>
                </div>
              </div>
              <div class="row row--retail">
                <div class="text-top">
                  <span class="material-symbols-outlined">shopping_bag</span>
                  BÁN LẺ
                </div>
                <div class="text-center">
                  <span>0</span>
                  <span><span class="material-symbols-outlined icon-bottom">arrow_upward</span> 0% (0 hóa đơn)</span>
                </div>
              </div>
              <div class="row row--order">
                <div class="text-top">
                  <span class="material-symbols-outlined">shopping_cart</span>
                  ĐƠN HÀNG
                </div>
                <div class="text-center">
                  <span>0</span>
                  <span><span class="material-symbols-outlined icon-bottom">arrow_upward</span> 0% (0 đơn)</span>
                </div>
              </div>
              <div class="row row--inventory">
                <div class="text-top">
                  <span class="material-symbols-outlined">deployed_code</span>
                  TỒN KHO
                </div>
                <div class="text-center">
                  <span>0</span>
                  <span><span class="material-symbols-outlined icon-bottom">arrow_upward</span> 0% (0 hóa đơn)</span>
                </div>
              </div>
            </div>
            <div class="revenue-dashboard__content">
              
            </div>
          </div>
          <table class="sale-channel-dashboard">
            <thead>
              <tr>
                <th>Kênh bán</th>
                <th>Đơn</th>
                <th>%</th>
                <th>Doanh thu</th>
                <th>%</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Không có dữ liệu</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div class="infomation">
            <table class="infomation__order">
              <thead>
                <tr>
                  <th> <span class="material-symbols-outlined">shopping_cart</span> Đơn hàng</th>
                  <th>SL</th>
                  <th>Doanh thu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mới</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Đã gửi vận chuyển</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Thành công</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Thất bại</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Hủy</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Tổng</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
            <table class="infomation__store">
                 <thead>
                    <tr>
                      <th> <span class="material-symbols-outlined">location_on</span> Cửa hàng</th>
                      <th>Doanh thu</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Không có dữ liệu</td>
                      <td></td>
                    </tr>
                  </tbody>
            </table>
            <table class="infomation__top-product">
                <thead>
                  <tr>
                    <th> <span class="material-symbols-outlined">deployed_code</span> Top Sản Phẩm</th>
                    <th>SL</th>
                    <th>Tồn</th>
                    <th>Doanh thu</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Không có dữ liệu</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
            </table>
            <table class="infomation__top-employee">
                <thead>                    
                  <tr>
                    <th><span class="material-symbols-outlined">person</span> Top Nhân Viên</th>
                    <th>SL</th>
                    <th>Doanh thu</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Không có dữ liệu</td>
                    <td></td>
                  </tr>
                </tbody>
            </table>
          </div>
        </div>
        
        <div class="page-content__right">
          <div class="history-dashboard">
            <div class="history__header">
              <span class="material-symbols-outlined">payments</span> 
              <h3>Hóa đơn mới</h3>
            </div>
            <div class="history__content">
              <h4>Không có dữ liệu</h4>
            </div>
          </div>
          <div class="notification">
            <div class="notification__header">
              <span class="material-symbols-outlined">campaign</span>
              <h3>Thông báo mới</h3>
            </div>
            <div class="notification__card">
              <div class="card-content">
                <h4>Thông báo lỗi kết nối hãng BEST Express</h4>
                <h5>2 days ago</h5>
              </div>
              <div class="card-content">
                <h4>Thông báo thay đổi bảng giá dịch vụ Viettel Post từ ngày 10/12/2024</h4>
                <h5>18 days ago</h5>
              </div>
              <div class="card-content">
                <h4>Thông báo ra mắt giao diện POS v3.0 - Beta</h4>
                <h5>18 days ago</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .App{
    width: 100%;
    height: 100%;
    background-color: #ececec;
    display: grid;
    grid-template-rows: auto auto;
  }
  .header{
    width: 100%;
    height: 6.25rem;
    display: grid;
    grid-template-rows: 3.125rem 3.125rem;
  }
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
    margin: 0;
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
  .container .container-navbar__list li:hover .subnav-profile {
    display: block;
  }
  .subnav-profile{
    position: absolute;
    background-color: white;
    width: 13rem;
    right: 5rem;
    box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.2);
    display: none;
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
  .subnav-profile li:hover a{
    color: #333333;
    background-color: #f5f5f5;
  }
  .navbar-main{
    display: grid;
    place-items: center;
    background-color: var(--white);
  }
  .navbar-main__list{
    width: 95%;
  }
  .navbar-main .navbar-main__list li{
    display: inline-block;
  }
  .navbar-main li a{
    text-decoration: none;
  }
  .navbar-main ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .navbar-main .navbar-main__list li a{
    line-height: 3.125rem;
    padding: 0 1rem;
    display: inline-block;
    color: rgba(51,51,51,.85)
  }
  .navbar-main .navbar-main__list li:hover a{
    color: #333333 ;
    background-color: #f5f5f5 ;
  }
  .subnav-product,.subnav-warehouse,.subnav-sell,.subnav-order,.subnav-customer,
  .subnav-report,.subnav-website,.subnav-discount,.subnav-setting{
    display: none;
  }
  .main-page{
    display: grid;
    grid-template-rows: 6rem auto;
    gap: 1rem;
    background-color: #ececec;
  }
  .page-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 91%;
    margin: 0 auto;
  }
  .page-header .page-header__title{
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }
  .page-header .page-header__title span{
    margin-top: 0.2rem;
  }
  .page-header .page-header__title h2{
    font-weight: 600;
    font-size: 1.4rem;
  }
  .page-header .page-header__element{
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .page-header__element button{
    background-color: #26A69A;
    color: white;
    border: 1px solid #26A69A;
    border-radius: var(--border-radius-sm);
    padding: 0.4375rem 0.875rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .page-header__element button span{
    font-size: 1rem;
  }
  .page-content{
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 92%;
    margin: 0 auto;
    padding-top: 1rem;
  }
  .page-content .page-content__left{
    display: grid;
    grid-template-rows: auto auto auto;
    gap: 1rem;
    padding: 1rem;
  }
  .page-content__left .revenue-dashboard{
    display: flex;
    flex-direction: column;
    border: 1px solid var(--gray-300);
    background-color: white;
    padding: 1rem;
    border-radius: var(--border-radius-sm);
    box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.2);

  }
  .page-content__left .revenue-dashboard .revenue-dashboard__header{
    display: flex;
    justify-content: space-evenly;
    gap: 1rem;
  }
  .revenue-dashboard__header .row{
    border: 1px solid;
    width: 12rem;
    padding: 0.625rem 0;
    border-radius: var(--border-radius-sm);
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
  }
  .revenue-dashboard__header .row .text-top{
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    padding: 0 2;
    color: white;
  }
   .revenue-dashboard__header .row .text-center{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .row .text-center .material-symbols-outlined.icon-bottom{
    font-size: 1.2rem;
    position: relative;
    top: 0.25rem;
    left: 0.19rem;
  }
  .row.row--revenue{
    background-color: #4CAF50;
    border-color: #4CAF50;
  }
  .row.row--retail{
    background-color: #29B6F6;
    border-color: #29B6F6;
  }
  .row.row--order{
    background-color: #FB8C00;
    border-color: #FB8C00;
  }
  .row.row--inventory{
    background-color: #A1887F;
    border-color: #A1887F;
  }
  .page-content__left .revenue-dashboard .revenue-dashboard__content{
    width: 100%;
    height: 20rem;
  }
  .page-content__left .sale-channel-dashboard {
      width: 100%;
      border-collapse: collapse;
      margin: 1.25rem 0;
      font-size: 1rem;
      box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.2);
      text-align: right;
    }
    .sale-channel-dashboard th, .sale-channel-dashboard td {
      border: 1px solid #ddd;
      padding: 0.5rem;
    }
    .sale-channel-dashboard th:first-child {
        text-align: left; 
    }
    .sale-channel-dashboard th {
      background-color: #f4f4f4;
      font-weight: bold;
    }
    .sale-channel-dashboard tr:hover {
      background-color: #f4f4f4;
    }
    .sale-channel-dashboard td {
      color: var(--cyan);
      font-size: 0.9rem;
      text-align: left;
    }
    .page-content__left .infomation{
      display: grid;
      grid-template-columns: auto auto;
      grid-template-rows: auto auto;
      gap: 1.5rem;
    }
    .infomation table{
      width: 100%;
      border-collapse: collapse;
      font-size: 1rem;
      box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.2);
      text-align: left;
      align-self: start;
    }
    .infomation table th, .infomation table td{
      border: 1px solid #ddd;
      padding: 0.5rem 0.7rem;
    }
    .infomation table th{
      background-color: #f4f4f4;
      font-weight: bold;
    }
    .infomation table th .material-symbols-outlined{
      position: relative;
      top: 0.3rem;
      margin-right: 0.3rem;
    }
    .infomation table tr:hover {
      background-color: #f4f4f4;
    }
    .infomation__order{
      grid-column: 1 / 2; 
      grid-row: 1 / 2; 
    }
    .infomation__store{
      grid-column: 2 / 3; 
      grid-row: 1 / 2;
    }
    .infomation__top-product{
      grid-column: 1 / 2; 
      grid-row: 2 / 3;
    }
    .infomation__top-employee{
      grid-column: 2 / 3; 
      grid-row: 2 / 3;
    }
    .page-content .page-content__right{
      display: grid;
      grid-template-rows: auto auto;
      gap: 1rem;
      padding: 1rem;
      align-self: start;
    }
    .page-content__right .history-dashboard{
      display: flex;
      flex-direction: column;
      border: 1px solid var(--gray-300);
      background-color: white;
      border-radius: var(--border-radius-sm);
      box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.2);
      align-self: start;
    }
    .history__header{
      display: flex;
      align-items: center;
      gap: 1rem;
      border-bottom: 1px solid var(--gray-300);
      padding: 0.6rem;
    }
    .history__header h3{
      font-weight: bold;
    }
    .history__content h4{
      padding: 1rem;
      color: var(--cyan);

    }
    .page-content__right .notification{
      display: flex;
      flex-direction: column;
      border: 1px solid var(--gray-300);
      background-color: white;
      border-radius: var(--border-radius-sm);
      box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.2);
      align-self: start;
    }
    .notification__header{
      display: flex;
      align-items: center;
      gap: 0.8rem;
      border-bottom: 1px solid var(--gray-300);
      padding: 0.6rem;
    }
    .notification__header h3{
      font-weight: bold;
    }
    .notification__card .card-content{
      padding: 0.7rem 1rem;
    }



</style>
