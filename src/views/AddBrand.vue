<template>
    <div class="addbrand-container">
        <div class="header__breadcrumb">
                <a href="" class="breadcrumb__item"><font-awesome-icon icon="fa-solid fa-house" /></a>
                <a href="" class="breadcrumb__item">Thương hiệu</a>
                <a href="" class="breadcrumb__item">Thêm mới</a>
        </div>
        <div class="addbrand__content">
           <div class="content__top">
                <div class="information-left">
                    <div class="card-header">
                        <h3> <font-awesome-icon class="icon" icon="fa-solid fa-circle-info" /> Thông tin</h3>
                        <select>
                            <option>- Trạng thái -</option>
                            <option>Đang hoạt động</option>
                            <option>Ngừng hoạt động</option>
                        </select>
                    </div>
                    <div class="card-content">
                        <div class="form-group">
                            <label for="parent-brand">Thương hiệu cha</label>
                            <select id="parent-brand">
                                <option>--</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="brand-name">Tên thương hiệu <span style="color: red;">*</span></label>
                            <input type="text" id="brand-name">
                        </div>
                        <div class="form-group">
                            <label for="brand-code">Mã thương hiệu</label>
                            <input type="text" id="brand-code">
                        </div>
                        <div class="form-group">
                            <label for="order">Thứ tự</label>
                            <input type="text" id="order">
                        </div>
                        <div class="form-group">
                            <label for="description">Mô tả</label>
                            <input type="text" id="description"/>
                        </div>
                    </div>
                </div>
                <div class="information-right">
                    <div class="card-header">
                        <h3> <font-awesome-icon class="icon" icon="fa-solid fa-circle-info" /> Meta</h3>
                    </div>
                    <div class="card-content">
                        <div class="form-group">
                            <label for="meta-title">Meta Title</label>
                            <input type="text" id="meta-title">
                        </div>
                        <div class="form-group">
                            <label for="meta-description">Meta description</label>
                            <input type="text" id="meta-description">
                        </div>
                        <div class="form-group">
                            <label for="meta-keywords">Meta keywords</label>
                            <input type="text" id="meta-keywords">
                        </div>
                        <div class="form-group">
                            <label for="file-upload">Ảnh đại diện</label>
                            <input type="file" id="file-upload"/>
                            <input type="text" placeholder="Chọn file">
                            <button class="file-button">File</button>
                        </div>
                    </div>
                </div>
           </div>
            <div class="content__bottom">
                
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
    .addbrand-container{
        width: 95%;
        margin: 0 auto;
        height: 100%;
        border: 1px solid var(--gray-300);
        background-color: #ececec;
    }
    .addbrand-container .header__breadcrumb{
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
    .addbrand__content{
        display: grid;
        grid-template-rows: auto auto;
        gap: 0.5rem;
    }
    .addbrand__content .content__top{
        display: grid;
        grid-template-columns: auto auto;
        gap: 0.5rem;
        margin-top: 2rem;
    }
    .information-left{
        display: flex;
        flex-direction: column;
        border: 1px solid var(--gray-300);
        background-color: white;
        border-radius: var(--border-radius-sm);
        box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.2);
    }
     .information-right{
        display: flex;
        flex-direction: column;
        border: 1px solid var(--gray-300);
        background-color: white;
        border-radius: var(--border-radius-sm);
        box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.2);
    }
    .card-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--gray-300);
        padding: 0.5rem 1rem;
    }
    .card-header h3{
        font-size: 1.2rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 0.6rem;
    }
    .card-header h3 .icon{
        color: gray;
        font-size: 1.2rem;
    }
    .card-header select{
        padding: 0.5rem 0.5rem;
        border: 1px solid var(--gray-400);
        border-radius: var(--border-radius-sm);
    }
    .card-content{
        padding: 0.9rem;
    }
    .form-group{
        padding: 0.3rem 1rem;
        display: flex;
        align-items: center;
    }
    .form-group label{
        width: 30%;
    }
    .form-group select{
        width: 60%;
        padding: 0.5rem 0.5rem;
        border: 1px solid var(--gray-400);
        border-radius: var(--border-radius-sm);
    }
    .form-group input{
        width: 60%;
        padding: 0.5rem 0.5rem;
        border: 1px solid var(--gray-400);
        border-radius: var(--border-radius-sm);
    }
    .form-group input[type="file"]{
        display: none;
    }
    .form-group button{
        padding: 0.5rem 1rem;
        border: 1px solid #ec407a;
        border-radius: var(--border-radius-sm);
        background-color: #ec407a;
        color: white;
        margin-left: 0.5rem;
    }
   
</style>

