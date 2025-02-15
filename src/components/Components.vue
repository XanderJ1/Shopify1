<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { RouterLink } from 'vue-router';

// Make products reactive
const products = ref([]);

function getIt(){
    console.log('Hello');

    const token =  localStorage.getItem('token');
    axios.defaults. headers. common ['Authorization'] = `Bearer ${token}`;
    axios.get('http://localhost:8080/api/v1/products')
    .then((response) => {
        products.value = response.data;
        console.log(response.data);
        console.log(products.length);
        console.log(products);
    })
    .catch((error) => {
        console.log(error);
    });

    onMounted(() => {
    getIt();
});
    
}
</script>

<template>

    <h1 class="text-center text-3xl" @click="getIt()"> Hello </h1>
    <RouterLink to="/addProduct"> AddProduct</RouterLink>
    <div class="grid-container">
    <div class="firstProduct">
        <div class="img-cont">
            <img src="../assets/images/headphone2.png" alt="">
        </div>
        <h1>Wireless Earbuds, IPX8</h1>
        <p>Original Classic, IPX8 certified</p>
        <div class="stars">★★★★★</div>
        <div class="cartPrice">
            <div class="cart">Add to cart</div>
            <div class="price"> $700 </div>
        </div>
    </div>
    <div class="firstProduct">
        <div class="img-cont">
            <img src="../assets/images/images-removebg-preview.png" alt="">
        </div>
        <h1>Wireless Earbuds, IPX8</h1>
        <p>Original Classic, IPX8 certified</p>
        <div class="stars">★★★★★</div>
        <div class="cartPrice">
            <div class="cart">Add to cart</div>
            <div class="price"> $700 </div>
        </div>
    </div>
    <div class="firstProduct">
        <div class="img-cont">
            <img src="../assets/images/images-removebg-preview.png" alt="">
        </div>
        <h1>Wireless Earbuds, IPX8</h1>
        <p>Original Classic, IPX8 certified</p>
        <div class="stars">★★★★★</div>
        <div class="cartPrice">
            <div class="cart">Add to cart</div>
            <div class="price"> $700 </div>
        </div>
    </div>
    <div class="firstProduct">
        <div class="img-cont">
            <img src="../assets/images/images-removebg-preview.png" alt="">
        </div>
        <div class="namePrice">
            <h1>Wireless Earbuds, IPX8</h1>
        </div>
        <p>Original Classic, IPX8 certified</p>
        <div class="stars">★★★★★</div>
        <div class="cartPrice">
            <div class="cart">Add to cart</div>
            <div class="price"> $700 </div>
        </div>
    </div>
    <div class="firstProduct">
        <div class="img-cont">
            <img src="../assets/images/images-removebg-preview.png" alt="">
        </div>
        <h1>Wireless Earbuds, IPX8</h1>
        <p>Original Classic, IPX8 certified</p>
        <div class="stars">★★★★★</div>
        <div class="cartPrice">
            <div class="cart">Add to cart</div>
            <div class="price"> $700 </div>
        </div>
    </div>
    <div class="firstProduct">
        <div class="img-cont">
            <img src="../assets/images/images-removebg-preview.png" alt="">
        </div>
        <h1>Wireless Earbuds, IPX8</h1>
        <p>Original Classic, IPX8 certified</p>
        <div class="stars">★★★★★</div>
        <div class="cartPrice">
            <div class="cart">Add to cart</div>
            <div class="price"> $700 </div>
        </div>
    </div>
    <div class="firstProduct">
        <div class="img-cont">
            <img src="../assets/images/airmax.png" alt="">
        </div>
        <h1>Wireless Earbuds, IPX8</h1>
        <p>Original Classic, IPX8 certified</p>
        <div class="stars">★★★★★</div>
        <div class="cartPrice">
            <div class="cart">Add to cart</div>
            <div class="price"> $700 </div>
        </div>
    </div>
    <div class="firstProduct">
        <div class="img-cont">
            <img src="../assets/images/airpod.png" alt="">
        </div>
        <div class="namePrice">
            <h1>Wireless Earbuds, IPX8</h1>
        </div>
        <p>Original Classic, IPX8 certified</p>
        <div class="stars">★★★★★</div>
        <div class="cartPrice">
            <div class="cart">Add to cart</div>
            <div class="price"> $700 </div>
        </div>
    </div>
    <div class="firstProduct">
        <div class="img-cont">
            <img src="../assets/images/airpods-max-headphones-silver.png" alt="">
        </div>
        <h1>Wireless Earbuds, IPX8</h1>
        <p>Original Classic, IPX8 certified</p>
        <div class="stars">★★★★★</div>
        <div class="cartPrice">
            <div class="cart">Add to cart</div>
            <div class="price"> $700 </div>
        </div>
    </div>
    <div class="firstProduct">
        <div class="img-cont">
            <img src="../assets/images/airpods-max-headphones-silver.png" alt="">
        </div>
        <h1>Wireless Earbuds, IPX8</h1>
        <p>Original Classic, IPX8 certified</p>
        <div class="stars">★★★★★</div>
        <div class="cartPrice">
            <div class="cart">Add to cart</div>
            <div class="price"> $700 </div>
        </div>
    </div>
    <div class="firstProduct">
        <div class="img-cont">
            <img src="../assets/images/headphone1.png" alt="">
        </div>
        <h1>Wireless Earbuds, IPX8</h1>
        <p>Original Classic, IPX8 certified</p>
        <div class="stars">★★★★★</div>
        <div class="cartPrice">
            <div class="cart">Add to cart</div>
            <div class="price"> $700 </div>
        </div>
    </div>
    <div class="firstProduct">
        <div class="img-cont">
            <img src="../assets/images/headphone1.png" alt="">
        </div>
        <h1>Wireless Earbuds, IPX8</h1>
        <p>Original Classic, IPX8 certified</p>
        <div class="stars">★★★★★</div>
        <div class="cartPrice">
            <div class="cart">Add to cart</div>
            <div class="price"> $700 </div>
        </div>
    </div>
    <div class="firstProduct">
        <div class="img-cont">
            <img src="../assets/images/headphone1.png" alt="">
        </div>
        <h1>Wireless Earbuds, IPX8</h1>
        <p>Original Classic, IPX8 certified</p>
        <div class="stars">★★★★★</div>
        <div class="cartPrice">
            <div class="cart">Add to cart</div>
            <div class="price"> $700 </div>
        </div>
    </div>
    <div class="firstProduct">
        <div class="img-cont">
            <img src="../assets/images/AirPods Max Headphones Silver.G03.watermarked.2k.png" alt="">
        </div>
        <div class="namePrice">
            <h1>Wireless Earbuds, IPX8</h1>
            <h3>$39.4</h3>
        </div>
        <p>Original Classic, IPX8 certified</p>
        <div class="stars">★★★★★</div>
        <div class="cartPrice">
            <div class="cart">Add to cart</div>
            <div class="price"> $700 </div>
        </div>
    </div>
    <div class="firstProduct">
        <div class="img-cont">
            <img src="../assets/images/sweater-removebg-preview.png" alt="">
        </div>
        <h1>Wireless Earbuds, IPX8</h1>
        <p>Original Classic, IPX8 certified</p>
        <div class="stars">★★★★★</div>
        <div class="cartPrice">
            <div class="cart">Add to cart</div>
            <div class="price"> $700 </div>
        </div>
    </div>
    <div class="firstProduct">
        <div class="img-cont">
            <img src="../assets/images/shopping-removebg-preview.png" alt="">
        </div>
        <h1>Wireless Earbuds, IPX8</h1>
        <p>Original Classic, IPX8 certified</p>
        <div class="stars">★★★★★</div>
        <div class="cartPrice">
            <div class="cart">Add to cart</div>
            <div class="price"> $700 </div>
        </div>
    </div>
    <div class="firstProduct">
        <div class="img-cont">
            <img src="../assets/images/download.jpg" alt="">
        </div>
        <h1>Wireless Earbuds, IPX8</h1>
        <p>Original Classic, IPX8 certified</p>
        <div class="stars">★★★★★</div>
        <div class="cartPrice">
            <div class="cart">Add to cart</div>
            <div class="price"> $700 </div>
        </div>
    </div>

    <div class="firstProduct">
        <div class="img-cont">
            <img src="../assets/images/download.jpg" alt="">
        </div>
        <h1>Wireless Earbuds, IPX8</h1>
        <p>Original Classic, IPX8 certified</p>
        <div class="stars">★★★★★</div>
        <div class="cartPrice">
            <div class="cart">Add to cart</div>
            <div class="price"> $700 </div>
        </div>
    </div>

    <!--   Database Content  -->
    <div class="firstProduct" v-for="product in products" :key="product.id">
        <div class="img-cont">
            <img :src="`data:${product.imageType};base64,${product.imageData}`" alt="">
        </div>
        <h1>{{product.name}}</h1>
        <p>{{product.description}}</p>
        <div class="stars">★★★★★</div>
        <div class="cartPrice">
            <div class="cart">Add to cart</div>
            <div class="price"> ${{product.price}} </div>
        </div>
    </div>     
    

</div>
</template>

<style scoped>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body{
            margin: 70px;
            padding: 20px;
        }
        body .h1{
            text-align: center;
        }
        .grid-container{
            display: grid;
            padding: 20px;
            margin: 60px;
            grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
            gap: 10px;
            justify-content: center;

        }
        .firstProduct{
            display: flex;
            flex-direction: column;
        }
        .firstProduct .img-cont{
            display: flex;
            justify-content: center;
            background-color: rgb(239, 233, 233);
        }
        .firstProduct img{
            height: 200px;
            width: 200px;
            min-width: 230px;
        }
        .firstProduct .namePrice{
            display: flex;
            width: 230px;
            padding-top: 7px;
            justify-content: space-between;
        }
        .firstProduct h1{
            font-family: Poppins;
            font-size: 20px;
        }
        .firstProduct p{
            font-size: 15px;
            color: gray;
            padding: 10px 0px 10px 0px;
        }
        .firstProduct .cartPrice{
            display: flex;
            justify-content: space-between;
        }
        .firstProduct .cart{
            border: 1px solid black;
            border-radius: 20px;
            margin-top: 10px;
            padding: 10px 6px;
            margin-bottom: 10px;
            width: 100px;
            transition: 0.3s ease-out;
        }
        .firstProduct .price{
            padding: 10px 6px;
            margin: 10px 0px;
            margin-right: 10px;
            font-size: 20px;
        }

        :hover.cart{
            transform: scale(1.15);
            cursor: pointer;
        }
</style>