<template>
    <div class="container">
    <h3>Nhập Điểm của bạn:</h3>
    <input type="number" v-model.number="month" />
    <p v-if ="month < 0 || month > 10" style="color: red">Vui lòng nhập điểm từ 0 đến 10</p>
    <p v-else-if="month < 5.0">Yếu</p>
    <p v-else-if ="month >= 5.0 && month <= 6.5">Trung bình</p>
    <p v-else-if ="month >= 6.5 && month <= 8.0">Khá</p>
    <p v-else-if ="month >= 8.0 && month <= 9.0">Giỏi</p>
    
    <p v-else-if ="month >= 9">Xuất sắc</p>
    <p v-else>Mùa Đông</p>
    </div>
    </template>
    <script setup>
    import { ref} from 'vue';
    const month = ref('1');
    </script>