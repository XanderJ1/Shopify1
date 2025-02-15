<script setup>

</script>

<template>
    <div class="flex">
    <!--
    .item{ 
    display: flex;
    flex-direction: column;
    flex-basis: 20%;
    margin: 1rem;
    padding: 2rem;
    border: 1px solid gray;
    border-radius: 1%;
    font-size: 20px;
}
    -->    
<div class="item flex flex-col basis-1/5 m-4 p-8 border border-gray-400 rounded-md text-lg">
    <div class="">
        <a href="signUp.vue">Home</a>
    </div>
    
    <div class="pic">
        <img src="../assets/images/download.jpg" alt="Nike Shoes">
    </div>
    <p class="mt-4">Nike Shoes For Men</p>
    <div class="price mt-2">
        <span class="text-gray-700 font-medium">USD 234.00</span>
    </div>
    <div class="addCart flex items-center px-2 py-1 w-28 border border-black rounded-full text-base mt-2 cursor-pointer transition-transform duration-300 hover:scale-105">
    <img src="../assets/images/plus.svg" alt="Add to cart" class="w-5 h-5 mr-2">
    <span class="text-blue-600 font-semibold hover:underline">Add to cart</span>
</div>
</div>
    <div class="item">
        <div class="pic">
            <img src="../assets/images/shopping.jpg">
        </div>
        <p>Air Jordan 11 </p>
        <div class="price">
            <span>USD 234.00</span>
        </div>
        <div class="addCart">
            <img src="../assets/images/plus.svg">
            <span>Add to cart</span>
        </div>
    </div>
    <div class="item">
        <div class="pic">
            <img src="../assets/images/images.jpeg">
        </div>
        <p>Sports Wear For Men</p>
        <div class="price">
            <span>USD 234.00</span>
        </div>
        <div class="addCart">
            <img src="../assets/images/plus.svg">
            <span>Add to cart</span>
        </div>
    </div>
    <div class="item">
    <div class="pic">
        <img src="../assets/images/sweater.jpeg">
    </div>
    <p>Sports Wear For Men</p>
    <div class="price">
        <span>USD 234.00</span>
    </div>
    <div class="addCart">
        <img src="../assets/images/plus.svg">
        <span>Add to cart</span>
    </div>
</div>
</div>
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
    font-family: manrope;
}
@font-face {
    font-family: "Manrope";
    src:
    local("Manrope"),
  url("manrope-extrabold.otf")
}
body{
    background: #fff;
}
header{
    display: flex;
    justify-content: space-between;
    font-weight: bolder;
    padding: 1rem;
    border-bottom: 0.1rem solid #B3B3B3;;
}
logo{
    display: flex;
    font-family: Arial;
    font-weight: bold;
    padding: 1rem;
    margin-left: 9rem;
    margin-right: 9rem;
    font-size: 1.4rem;
}
logo img{
    width: 3.5rem;
    height: 3.5rem;
}
logo{
    color: green;
}
nav{
    margin-right: 8rem;
}
nav ul {
    display: flex;
    text-decoration: none;
}
nav ul li{
    list-style: none;
    text-decoration: none;
    padding: 1.5rem;
    font-size: 1.4rem;
    
}
nav ul li a{
    text-decoration: none;
    color: green;
}
nav ul li a:hover{
    border-bottom: 0.2rem solid green;
}
main{
    margin: 10rem;
}
.products{
    display: flex;    
}
.item{ 
    display: flex;
    flex-direction: column;
    flex-basis: 20%;
    margin: 1rem;
    padding: 2rem;
    border: 1px solid gray;
    border-radius: 1%;
    font-size: 20px;
}
.item p{
    margin-top: 0.3rem;
    font-size: 20px;
    font-weight: bold;
    margin-top: 1rem;
}
.pic{
    width: 225px;
    height: 225px;
    justify-content: center;
}
.price{
    margin-top: 0.5rem;
}
.addCart{
    display: flex;
    padding: 5px;
    width: 7rem;
    border: 1px solid #000;
    border-radius: 3rem;
    font-size: 16px;
    margin-top: 0.5rem;
    cursor: pointer;
    transition: transform 0.3s;
}
.addCart:hover{
    transform: scale(1.11);
}
.addCart img{
    padding-right: 0.5rem;
}

/*  Smaller Screen*/

@media (max-width: 23px) {
    .products{
        display: grid;
    }
}
</style>