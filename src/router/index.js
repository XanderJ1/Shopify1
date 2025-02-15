import { createRouter, createWebHashHistory } from "vue-router";
import Homeview from "@/views/Homeview.vue";
import SignUp from "@/components/signUp.vue";
import Login from "@/components/Login.vue";
import AddProduct from "@/components/AddProduct.vue";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Homeview,
        },
        {
            path: "/signup",
            name: "signup",
            component: SignUp,
        },
        {
            path: "/login",
            name: "login",
            component: Login,
        },
        {
            path: "/addProduct",
            name: "addProduct",
            component: AddProduct,r
        }
    ]
});

export default router;