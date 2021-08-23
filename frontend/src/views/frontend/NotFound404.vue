<template>
<div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div class="flex items-center py-10 flex-col overflow-y-auto md:flex-col">
          <img class="" src="@/assets/img/404.gif" alt="404 not found"/>
          <p class="text-gray-700 dark:text-gray-300 text-xl">
            เหมือนจะไม่พบหน้าที่ต้องการ
            <router-link to="/" class="text-purple-600 hover:underline dark:text-purple-300" href="#">กลับหน้าหลัก</router-link>
          </p>
        </div>
      </div>
</div>
</template>
