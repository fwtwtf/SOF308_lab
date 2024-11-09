<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
       <div class="container-fluid">
         <a class="navbar-brand" href="#">
           <img src="/images/logo-energy-pilates.png" alt="" style="width: 150px;">
         </a>
   
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>
   
         <div class="collapse navbar-collapse" id="navbarNavDropdown">
           <ul class="navbar-nav">
             <li class="nav-item">
               <a class="nav-link active" aria-current="page" href="#">
                 <i class="bi bi-pencil-square"></i> Bài viết
               </a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="#">
                 <i class="bi bi-play-btn"></i> Video
               </a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="#">
                 <i class="bi bi-info-circle"></i> Giới Thiệu
               </a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="#">
                 <i class="bi bi-calendar-event"></i> Sự kiện
               </a>
             </li>
             <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 <i class="bi bi-person-circle"></i> Tài khoản
               </a>
               <ul class="dropdown-menu">
                 <li><a class="dropdown-item" href="#"><i class="bi bi-box-arrow-in-right"></i> Đăng nhập</a></li>
                 <li><a class="dropdown-item" href="#"><i class="bi bi-key"></i> Quên Mật khẩu</a></li>
                 <li><a class="dropdown-item" href="#"><i class="bi bi-person-plus"></i> Đăng kí thành viên</a></li>
               </ul>
             </li>
           </ul>
   
           <ul class="navbar-nav d-flex">
             <li class="nav-item">
               <a class="nav-link">
                 <i class="bi bi-translate"></i> Tiếng Việt
               </a>
             </li>
             <li class="nav-item">
               <a class="nav-link">
                 <i class="bi bi-translate"></i> Tiếng Anh
               </a>
             </li>
           </ul>
         </div> 
       </div>
     </nav>
   
     <div class="container">
        <!-- Carousel Section -->
        <div id="blogCarousel" class="carousel slide mb-4" data-bs-ride="carousel">
         <div class="carousel-inner">
           <div class="carousel-item active">
             <img src="/images/banner1.jpg" class="d-block w-100" alt="Image 1" />
             <div class="carousel-caption d-none d-md-block">
               <h5>Bài viết nổi bật 1</h5>
               <p>Mô tả ngắn về bài viết nổi bật 1</p>
             </div>
           </div>
           <div class="carousel-item">
             <img src="/images/banner2.jpg" class="d-block w-100" alt="Image 2" />
             <div class="carousel-caption d-none d-md-block">
               <h5>Bài viết nổi bật 2</h5>
               <p>Mô tả ngắn về bài viết nổi bật 2</p>
             </div>
           </div>
           <div class="carousel-item">
             <img src="/images/banner3.jpg" class="d-block w-100" alt="Image 3" />
             <div class="carousel-caption d-none d-md-block">
               <h5>Bài viết nổi bật 3</h5>
               <p>Mô tả ngắn về bài viết nổi bật 3</p>
             </div>
           </div>
         </div>
         <button
           class="carousel-control-prev"
           type="button"
           data-bs-target="#blogCarousel"
           data-bs-slide="prev"
         >
           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Previous</span>
         </button>
         <button
           class="carousel-control-next"
           type="button"
           data-bs-target="#blogCarousel"
           data-bs-slide="next"
         >
           <span class="carousel-control-next-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Next</span>
         </button>
       </div>
     <section class="row">
       <!-- Sidebar thông tin cá nhân bên trái -->
       <aside class="col-sm-4 p-3 rounded">
         <!-- <div class="col-sm-4"> -->
         
   
         <h3 class="text-info mt-2">Chuyên mục</h3>
         <ul class="list-group">
           <li class="list-group-item active bg-info d-flex justify-content-between align-items-center">
             <a class="nav-link" href="#">Chế độ tập</a>
             <span cLass="badge bg-primary rounded-pill">12</span>
           </li>
   
           <li class="list-group-item d-flex justify-content-between align-items-center">
             <a class="nav-link" href="#">Chế độ dinh dưỡng</a>
             <span class="badge bg-primary rounded-pill">15</span>
           </li>
   
           <li class="list-group-item d-flex justify-content-between align-items-center">
             <a class="nav-link" href="#">Cẩm nang cuộc sống</a>
             <span class="badge bg-primary rounded-pill">99</span>
           </li>
         </ul>
       <!-- </div> -->
       <div class="media">
           <img src="/images/corevalue.jpg" alt="Post Image" style="width: 100px">
           <div class="media-body">
             <h6 class="mt-0">Biết ơn đời, đời sẽ thương ta</h6>
             
           </div>
         </div>
         <div class="media">
           <img src="/images/orange_300x300.jpg" alt="Post Image" style="width: 100px">
           <div class="media-body">
             <h6 class="mt-0">9 tác dụng tuyệt vời của quả cam</h6>
             
           </div>
         </div>
         <div class="media">
           <img src="/images/sesameoil_300x300.jpg" alt="Post Image" style="width: 100px">
           <div class="media-body">
             <h6 class="mt-0">10 công dụng bất ngờ từ dầu dừa</h6>
             
           </div>
         </div>
         <div class="media">
           <img src="/images/spinach_300x300.jpg" alt="Post Image" style="width: 100px">
           <div class="media-body">
             <h6 class="mt-0">Lợi ích khi ăn rau mỗi ngày</h6>
             
           </div>
         </div>
       </aside>
   
       <!-- Nội dung chính bên phải -->
       <article class="col-lg-8 col-md-12 text-info p-3">
      <h2>Tất cả bài viết</h2>

      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="card">
            <div class="card-header fw-bold">
              <a href="/lab3/Bai4"
                >Phương pháp tập Pilates giúp phục hồi chấn thương cột sống</a
              >
              <span><i class="bi bi-chat-left-fill"> 16</i></span>
            </div>
            <img src="/images/tap-piltes.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                Hai người đang tập luyện trên máy Pilates reformer trong một
                phòng tập. Văn bản tiếng Việt đi kèm có thể là hướng dẫn hoặc mô
                tả về phương pháp tập Pilates giúp phục hồi chấn thương cột
                sống.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="card">
            <div class="card-header fw-bold">
              Đây là những gì 1 giờ tập Pilates có thể làm cho cơ thể bạn
              <span><i class="bi bi-chat-left-fill"> 8</i></span>
            </div>
            <img src="/images/tap-pilates1.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                Được thiết kế để xây dựng cơ bắp săn chắc, khỏe mạnh hơn, bài
                tập này đã trở thành một cái tên quen thuộc nhờ có rất nhiều
                người nổi tiếng theo dõi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="card">
            <div class="card-header fw-bold">
              Tập Pilates có thể cải thiện sức khoẻ tim mạch của bạn
              <span><i class="bi bi-chat-left-fill"> 5</i></span>
            </div>
            <img src="/images/tim-mach.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                Tập Pilates không chỉ giúp bạn có một cơ thể khỏe mạnh và linh
                hoạt mà còn có nhiều lợi ích cho sức khỏe tim mạch. Bài viết này
                sẽ tìm hiểu sâu hơn về tác động tích cực của việc tập Pilates
                đối với sức khỏe tim mạch.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="card">
            <div class="card-header fw-bold">
              EAT CLEAN: Nên Và Không Nên Ăn Thực Phẩm Nào?
              <span><i class="bi bi-chat-left-fill"> 3</i></span>
            </div>
            <img src="/images/eat-clean.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                Chúng ta luôn chú trọng lựa chọn thực phẩm sạch và duy trì lối
                sống lành mạnh. Vậy chế độ ăn Eat clean nên và không nên ăn gì
                trong thực đơn hàng ngày để cân bằng tháp dinh dưỡng cho cơ thể?
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#" tabindex="-1">←</a>
          </li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">→</a>
          </li>
        </ul>
      </nav>
    </article>
   
   
     </section>
     <footer class="row bg-dark text-white p-3 text-center justify-content-center">&copy; 2024 Blog của Tôi. Tất cả quyền được bảo lưu.</footer>
   </div>
   
   
   
       </template>
       
       <script>
   
       
       export default {
           name: "Lab1Bai4",
       
       }
       </script>
       
       <style>
       
       </style>