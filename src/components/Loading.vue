<template>
    <div class="kmovie-loading">
        <div class="kmovie-loading__text">
            <h2 class="text-white">
                kMovie
                <div class="spinner-border text-success" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </h2>
        </div>
    </div>
</template>
<style scoped>
.kmovie-loading {
    background: #000;
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 2000;
}
.kmovie-loading__text {
    color: #fff;
    position: absolute;
    margin: 0;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
</style>
