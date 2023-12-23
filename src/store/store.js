import { defineStore } from "pinia";

export const MainStore = defineStore("main", {
    state: () => ({
        isLogin: false,
        userName: "",
        token: "",
        lastLoginTime: "",
    }),
});