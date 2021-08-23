<template>
    <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div class="flex flex-col overflow-y-auto md:flex-row">
          <div class="h-32 md:h-auto md:w-1/2">
           <img
              aria-hidden="true"
              class="object-cover w-full h-full dark:hidden"
              src="@/assets/img/forgot-password-office.jpeg"
              alt="Office"/>
            <img
              aria-hidden="true"
              class="hidden object-cover w-full h-full dark:block"
              src="@/assets/img/forgot-password-office-dark.jpeg"
              alt="Office"/>
          </div>
          <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div class="w-full">
                <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">ลืมรหัสผ่าน</h1>

                <form>
                  <label class="block text-gray-700 text-sm mb-2" for="email">อีเมล์</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight" id="email" type="text" autocomplete="email">
                    <input type="button"
                    class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg cursor-pointer active:bg-purple-600 hover:bg-purple-700" value="ส่งข้อมูล">
                </form>

                <p class="mt-8">
                    <router-link to="/login" class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline">
                    เข้าสู่ระบบ
                    </router-link>
                </p>

            </div>
          </div>
        </div>
      </div>
    </div>
</template>
