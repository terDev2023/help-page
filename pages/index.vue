<template>
    <div class="page">
        <h1>Помощь</h1>
        <p class="">Помогите проекту «Подари Радость» – и вы <br>поможете детям.</p>
        <div class="thanksContainer">
            <h2>Спасибо за Вашу Помощь!</h2>
            <div class="donat">
            <p>Любое Ваше пожертвование ценно и поможет нам<br>
            рассказать новую историю миллионам людей.</p>
            </div>
            <div class="hiddenInfo"></div>
        </div>
    </div>
</template>

<style>
    .page {
        display: flex;
        flex-direction: column;
        gap: 2%;
        width: 100%;
    }
    .page p {
        font-size: 2em;
    }

    .page h1{
        font-size: 4em;
        margin: 0;
    }
    .thanksContainer {
        box-sizing: border-box;
        border: 1px solid rgb(207, 207, 207);
        border-radius: 20px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(6.1px);
        background: rgb(255, 255, 255);
        width: 70%;
        padding: 4%;
        margin: 2% auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 10px;
    }
    .thanksContainer h2 {
        font-size: 4em;
        margin: 0;
    }
    .thanksContainer p {
        font-size: 2em;
    }
    .hiddenInfo {
        border-radius: 20px;
        background: rgb(217, 217, 217);
        width: 100%;
        min-height: 200px;
    }
    .donat {
        display: flex;
        flex-direction: column;
        gap: 0
    }
</style>