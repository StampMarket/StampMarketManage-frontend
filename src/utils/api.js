// define the api url
const baseUrl = "http://localhost:8080";

// define the api
const api = {
    // user
    login: baseUrl + "/login",
    logout: baseUrl + "/logout",
    register: baseUrl + "/register",
    getUserInfo: baseUrl + "/getUserInfo",
    updateUserInfo: baseUrl + "/updateUserInfo",
    // stamp
    getStampList: baseUrl + "/getStampList",
    getStampById: baseUrl + "/getStampById",
    addStamp: baseUrl + "/addStamp",
    updateStamp: baseUrl + "/updateStamp",
    deleteStamp: baseUrl + "/deleteStamp",
    // order
    getOrderList: baseUrl + "/getOrderList",
    getOrderById: baseUrl + "/getOrderById",
    addOrder: baseUrl + "/addOrder",
    updateOrder: baseUrl + "/updateOrder",
    deleteOrder: baseUrl + "/deleteOrder",
    // cart
    getCartList: baseUrl + "/getCartList",
    getCartById: baseUrl + "/getCartById",
    addCart: baseUrl + "/addCart",
    updateCart: baseUrl + "/updateCart",
    deleteCart: baseUrl + "/deleteCart",
};

export default api;