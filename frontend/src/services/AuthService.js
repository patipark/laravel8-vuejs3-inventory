import axios from "axios";

axios.defaults.withCredentials = false

const authService = axios.create({
  // baseURL: "http://localhost:8000/api/",
  baseURL: "http://localhost:8001/api/", //ปกติ laravel คำสั่ง php artisan serve จะรัน port 8000 แต่ในที่นี้ port ไม่ว่างเลยใข้ 8001
  headers: {
    "Content-type": "application/json",
    "Accept": "application/json"
  },
});

export default authService;
