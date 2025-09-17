import axios from "axios";

const api = axios.create({
  baseURL: "https://collegesystem1337-fybaeufrf8arcaek.canadacentral-01.azurewebsites.net",
  withCredentials: true, // set to false if you're not using cookies for authentication
});


// ✅ إضافة التوكن تلقائياً في كل طلب
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ التعامل مع انتهاء صلاحية التوكن ومحاولة تحديثه تلقائيًا
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      localStorage.getItem("refreshToken")
    ) {
      originalRequest._retry = true;

      try {
        // نستخدم نسخة منفصلة من axios لتجنب التكرار اللانهائي
        const refreshResponse = await axios.post("https://collegesystem1337-fybaeufrf8arcaek.canadacentral-01.azurewebsites.net/auth/refresh-token", {
          refreshToken: localStorage.getItem("refreshToken"),
        });

        const newToken = refreshResponse.data.jwtToken;
        localStorage.setItem("jwtToken", newToken);

        // إعادة المحاولة مع التوكن الجديد
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        // مسح التوكنات وإعادة التوجيه إلى صفحة الدخول
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login"; // يمكن تعديلها ليتوافق مع `navigate` إذا كنت تستخدم React Router
      }
    }

    return Promise.reject(error);
  }
);

export default api;
