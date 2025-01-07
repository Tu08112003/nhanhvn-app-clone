<script setup>
  import Header from '../components/Header.vue'
</script>

<template>
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
</template>

<style>

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
