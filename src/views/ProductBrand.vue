<template>
    <div class="brand-container">
        <div class="brand-header">
            <div class="header__breadcrumb">
                <a href="" class="breadcrumb__item"><font-awesome-icon icon="fa-solid fa-house" /></a>
                <a href="" class="breadcrumb__item">Sản phẩm</a>
                <a href="" class="breadcrumb__item">Danh sách thương hiệu</a>
            </div>
            <div class="header__content">
                <form >
                    <input type="text" placeholder="ID">
                    <input type="text" placeholder="Tên thương hiệu">
                    <button>Lọc</button>
                </form>
                <div class="btn">
                    <ul>
                        <li v-on:click="toggleMenu('menuAdd')">
                            <button class="btn--add">Thêm mới <font-awesome-icon icon="fa-solid fa-angle-down" /></button>
                            <ul class="sub-add" v-show="isMenuVisible.menuAdd">
                                <li> <router-link to="addbrand"><a><font-awesome-icon class="icon" icon="fa-solid fa-plus" />Thêm thương hiệu</a></router-link></li>
                                <li><a href=""><font-awesome-icon class="icon" icon="fa-solid fa-plus" />Import Excel</a></li>
                            </ul>
                        </li>
                        <li v-on:click="toggleMenu('menuOperation')">
                            <button class="btn--operation">Thao tác <font-awesome-icon icon="fa-solid fa-angle-down" /></button>
                            <ul class="sub-operation" v-show="isMenuVisible.menuOperation">
                                <li><a href=""><font-awesome-icon class="icon" icon="fa-regular fa-file-excel" />Xuất Excel</a></li>
                                <li><a href=""><font-awesome-icon class="icon" icon="fa-solid fa-trash" />Xóa các dòng đã chọn</a></li>
                            </ul>
                        </li>
                    </ul>
                    
                    
                </div>
            </div>
        </div>

        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox"></th>
                        <th>#</th>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>Mã</th>
                        <th>Ảnh</th>
                        <th>Số sản phẩm</th>
                        <th>Thứ tự</th>
                        <th>Ghi chú</th>
                        <th>Người tạo</th>
                        <th>Trạng thái</th>
                        <th><font-awesome-icon icon="fa-solid fa-gear" /></th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
     import { ref } from "vue";
    const isMenuVisible = ref({
        menuAdd:false,
        menuOperation: false
    });

    const toggleMenu = (menuName) => {
        const currentState = isMenuVisible.value[menuName];
        for (const key in isMenuVisible.value) {
            isMenuVisible.value[key] = false;
        }
        isMenuVisible.value[menuName] = !currentState;
  };
</script>

<style scoped>
    .brand-container{
        width: 95%;
        margin: 0 auto;
        height: 100%;
        border: 1px solid var(--gray-300);
        background-color: #f5f5f5;
    }
    .brand-container .header__breadcrumb{
       padding: 0 1rem;
       background-color: white;
       display: flex;
       align-items: center;
       line-height: 2.5rem;
       border: 1px solid var(--gray-300);
    }
    .header__breadcrumb .breadcrumb__item{
        color: #333333;
        text-decoration: none;
        font-size: 0.8rem;
        padding: 0 0.625rem;
    }
    .breadcrumb__item + .breadcrumb__item::before {
        padding-right: 0.625rem;
        content: "/";
    }
    .header__breadcrumb .breadcrumb__item:hover{
        transition: opacity ease-in-out .15s;
        opacity: 0.7;
    }
    .header__content{
        padding: 0.5rem 1.6rem;
        border: 1px solid var(--gray-300);
        height: 10rem;
    }
    .header__content button{
        padding: 0.6rem 1rem;
        border: 1px solid var(--gray-300);
        border-radius: 0.25rem;
        color: white;
        align-items: center;
        display: inline-flex;
        gap: 0.5rem;
    }
    .header__content form{
       margin-top: 1rem;
    }
    .header__content form input{
        padding: 0.6rem 0.625rem;
        border: 1px solid var(--gray-300);
        border-radius: 0.25rem;
        margin-right: 0.625rem;
    }
    .header__content form button{
        background-color: #26A69A;
        border-color: #26A69A;
    }
    .header__content form button:hover{
        background-color: #1e857a;
        border-color: #1e857a;
    }
    .header__content .btn{
        margin-top: 1.5rem;
    }
    .header__content .btn ul{
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        gap: 1rem;
    }
    .header__content .btn > ul > li{
        position: relative;
        display: inline-block;
    }
    .header__content .btn ul li a{
        text-decoration: none;
        color: #333333;
        font-size: 0.8rem;

    }
    .header__content .btn .sub-add, .header__content .btn .sub-operation{
        position: absolute;
        background-color: white;
        margin-top: 0.4rem;
        width: 12rem;
        box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.2);
        border-radius: var(--border-radius-sm);
        display: block;
        padding: 0.5rem 0;
    }
    .btn .sub-add li, .btn .sub-operation li{
        padding: 0.7rem 1rem;
        font-size: 0.875rem;
    }
    .btn .sub-add .icon, .btn .sub-operation .icon{
        margin-right: 0.7rem;
    }
    .btn .sub-add li:hover, .btn .sub-operation li:hover{
        background-color: #f5f5f5;
    }
    .btn .sub-operation li:last-child a{
        color: var(--danger);
    }
    .btn .btn--add{
        background-color: #4CAF50;
        border-color: #4caf50;
    }
    .btn .btn--add:hover{
        background-color: #289e2d;
        border: 1px solid #289e2d;
    }
    .btn .btn--operation{
        background-color: #0c83ff;
        border: 1px solid #0c83ff;
    }
    .btn .btn--operation:hover{
        background-color: #0b76e6;
        border: 1px solid #0b76e6;
    }
    .table-container table {
        width: 100%;
        border-collapse: collapse;
        background-color: white;
        text-align: center;
    }
    th, td {
        padding: 0.625rem;
        border-bottom: 1px solid var(--gray-400);
        border-right: 1px solid var(--gray-400);
        font-weight: 500;
        font-size: 0.875rem;
        color: #333333;
    }
    th {
        background-color: #eeeeee;
    }

</style>

