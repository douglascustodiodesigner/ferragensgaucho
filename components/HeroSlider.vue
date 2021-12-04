<template>
    <div class="slider-area">
        <!-- Main Slider -->
        <div class="main-slider swiper-arrow with-bg_white">
            <swiper :options="heroSlider">
                <div class="swiper-slide animation-style-01">
                    <div class="slide-inner bg-height" :style="{ backgroundImage: `url('/images/slider/bg/1-1.jpg')` }">
                        <div class="container">
                            <div class="slide-content">
                                <span class="sub-title mb-1">Since 1995</span>
                                <h2 class="title mb-3">We Construct <br> your <span>Dream</span></h2>
                                <p class="short-desc-2 font-size-20 mb-35">Construction of itself, because it is pain, but because some proper style design occur in which toil and pain pleasure.</p>
                                <div class="button-wrap">
                                    <n-link to="/project" class="btn btn-custom btn-secondary btn-white-hover me-3">Learn more</n-link>
                                    <n-link to="/contact" class="btn btn-custom btn-primary btn-white-hover">Contact us</n-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide animation-style-01">
                    <div class="slide-inner bg-height" :style="{ backgroundImage: `url('/images/slider/bg/1-2.jpg')` }">
                        <div class="container">
                            <div class="slide-content text-white">
                                <span class="sub-title mb-1">Since 1995</span>
                                <h2 class="title white-stroke mb-3">Primeira informacão <br> With <span>Continua</span></h2>
                                <p class="short-desc-2 font-size-20 mb-35">Mais Informacoes.</p>
                                <div class="button-wrap">
                                    <n-link to="/project" class="btn btn-custom btn-secondary btn-white-hover me-3">Sobre Nos</n-link>
                                    <n-link to="/contact" class="btn btn-custom btn-primary btn-white-hover">Contatos</n-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper>
            <!-- Add Pagination -->
            <div class="swiper-pagination with-bg d-md-none"></div>
            <!-- Add Arrows -->
            <div class="swiper-button-next">
                <i class="ion-ios-arrow-forward"></i>
            </div>
            <div class="swiper-button-prev">
                <i class="ion-ios-arrow-back"></i>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                heroSlider: {
                    loop: true,
                    speed: 750,
                    slidesPerView: 1,
                    spaceBetween: 10,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        type: 'bullets',
                    },
                }
            }
        },
    };
</script>