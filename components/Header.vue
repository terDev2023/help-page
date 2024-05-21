<script setup>

import { pages } from '/consts.ts'

const help = () => {
    console.log("Помочь")
}

const relevantPages = pages.filter( (page) => page.pageName !== 'Контакты')

</script>

<template>
    <div class="header">
        <nav>
            <img src="/logo.png" alt="logo" class="logo">
            <ul class="links">
                <li v-for="page of relevantPages" :key="page">
                    <NuxtLink :to="page.to" class="link">{{ page.pageName }}</NuxtLink>
                </li>
            </ul>
            <button class="headerButton" @click="help()">Помочь</button>
        </nav>
    </div>
</template>

<style>
ul,
nav {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.logo {
    float: left;
    height: 80%;
}

nav {
    height: 12vh;
    position: fixed;
    top: 0;
    width: 90%;
    padding: .5% 0;
    background-color: white;
    margin: 0 auto;
    justify-content: space-between;
    z-index: 1000;
}

.header {
    height: 8vh;
    margin-bottom: 5vh;
    width: 100%;
    display: flex;
    justify-content: center;
}

.links {
    width: 100%;
    padding: 4%;
    gap: 2%;
    list-style: none;
    justify-content: space-around;
}

.link {
    all: unset;
    white-space: nowrap;
    cursor: pointer;
    font-size: 1.5em;
    color: rgb(0, 0, 0);
    font-weight: 700;
    line-height: 21px;
    text-align: left;
}

.headerButton {
    all: unset;
    padding: 1% 3%;
    box-sizing: border-box;
    border: 1px solid rgb(10, 10, 10);
    border-radius: 90px;
    float: right;
}
.headerButton:hover {
    transform: scale(1.2);
    transition: .4s;
}
.headerButton:active {
    transform: scale(1);
    transition: .4s;
}

.headerButton * {
    color: rgb(10, 10, 10);
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: 0%;
    text-align: center;
}
</style>

