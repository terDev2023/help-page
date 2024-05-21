<script setup>
import { pages } from '/consts.ts'

const firstSection = Array.from({ length: 3 }, (el, i) => el = pages[i])
const secondSection = Array.from({ length: 3 }, (el, i) => el = pages[i + 3])
</script>

<template>
    <footer class="footer">
        <div class="footerContainer">
            <img src="/footerTop.svg" alt="footer top" class="footerTop" />
            <div class="footerSections">
                <section class="infSection">
                    <div>
                        <p>© 2024, Благотворительный фонд <br>
                        «Подари радость»</p>
                    </div>

                    <div class="sotialButtons">
                        <button class="sotials">
                            <img src="/vk.svg" alt="vk">
                        </button>
                        <button class="sotials">
                            <img src="/ok.svg" alt="vk">
                        </button>
                    </div>
                </section>
                <section class="infSection">
                    <NuxtLink v-for="page of firstSection" :key="page.pageName" :to="page.to" class="footerPage">
                        {{ page.pageName }}
                    </NuxtLink>
                </section>
                <section class="infSection">
                    <NuxtLink v-for="page of secondSection" :key="page.pageName" :to="page.to" class="footerPage">
                        {{ page.pageName }}
                    </NuxtLink>
                </section>
                <section class="infSection last">
                    <div class="privacyParent">
                    <NuxtLink :to="'/#'" class="privacy">Политика конфиденциальности</NuxtLink>
                    <NuxtLink :to="'/#'" class="privacy">Политика обработки персональных данных</NuxtLink>
                    </div>
                    <p class="doIn">Сделано в &nbsp;<img src="/company-logo.svg" alt="philgood" class="doInSvg"></p>
                </section>
            </div>
        </div>
    </footer>
</template>

<style>
.footer {
    position: relative;
    max-width: 100vw;
    max-height: 10vh;
    padding: 1%;
    display: flex;
    align-items: end;
    background-color: #535D67;
    color: white;
    margin-top: 10vh;
}

.footerContainer {
    margin: 0 auto;
    width: 90vw;
    padding: 1%;
}

.footerTop {
    position: absolute;
    width: 100%;
    max-width: 100vw;
    left: 0;
    top: -40%;
    z-index: -1;
}

.footerSections {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    gap: 2%;
}
.infSection:last-child {
    align-items: end;
    text-align: end;
}

.infSection:first-child {
    align-items: start;
    text-align: start;
}

.sotialButtons {
    display: flex;
    gap: 2%;
}

.infSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: start;
    width: 24%;
    font-size: 1em;
    margin: 0 auto
}

.sotials {
    all: unset;
    background-color: rgb(155, 167, 179);
    border-radius: 50px;
    width: 32px;
    height: 32px;
    padding: 1%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    opacity: 0.3;
}

.sotials:hover {
    opacity: 1;
}

.footerPage {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: start;
    width: 25%
}

.privacyParent {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 10px
}

.privacy {
    color: rgb(155, 167, 179);
}

.doIn {
    display: flex;
    align-items: center;
}

.doInSvg {
    display: flex;
    align-items: center;
    margin-top: 2%;
    max-width: 100vw
}
</style>