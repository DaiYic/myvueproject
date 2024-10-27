const { createApp, ref } = Vue;

const app = createApp({
    setup() {
        const cart = ref([]);  // 将 cart 设置为数组来保存产品ID
        const premium = ref(true);
        
        function updateCart(id) {
            cart.value.push(id);  // 每次点击按钮向购物车添加产品ID
        }

        return {
            cart,
            premium,
            updateCart
        };
    }
});

app.component('product-display', productDisplay);
app.mount('#app');  // 挂载 Vue 应用到 #app 元素
