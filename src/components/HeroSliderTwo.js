import React, {Component} from 'react';
import Swiper from 'react-id-swiper';

class HeroSliderTwo extends Component{
    render(){
        const params = {
            slidesPerView : 1,
            loop: true,
            speed: 2300,
            watchSlidesVisibility: true,
            effect: 'fade',
            navigation: {
                nextEl: '.ht-swiper-button-next',
                prevEl: '.ht-swiper-button-prev'
            },
            renderPrevButton: () => (
                <div className="ht-swiper-button-prev ht-swiper-button-nav d-none d-xl-block"><i className="ion-ios-arrow-left" /></div>
              ),
              renderNextButton: () => (
                <div className="ht-swiper-button-next ht-swiper-button-nav d-none d-xl-block"><i className="ion-ios-arrow-forward" /></div>
              ),
            autoplay: {
                delay: 5000,
            }
        }

        let data = [
            {bgImg: 'slider3.jpg', sliderTitle: 'Logística e Qualidade', sliderSubtitle: 'Trabalhamos para garantir uma entrega eficaz, com frota própria entregamos de forma rápida e segura, produtos de qualidade comprovada através dos seus certificados de gestão de qualidade. ', btnLink: 'contact-us'},
            {bgImg: 'slider2.jpg', sliderTitle: 'Materiais de Qualidade para sua obra', sliderSubtitle: 'Aqui na Ferragens Gaúcho, você irá encontrar diversas peças de ferragens de ótima qualidade para poder equipar sua obra! 🏗️🔧', btnLink: 'contact-us'},
            {bgImg: 'slider1.jpg', sliderTitle: 'Logística Própria e segura', sliderSubtitle: 'Você sabia que temos uma logística própria? 🚚 Temos caminhões próprios para fazer o transporte com total segurança! ', btnLink: 'contact-us'}
        ];

        let DataList = data.map((val, i)=>{
            return(
                <div className="swiper-slide" key={i}>
                    <div className="hero-slider__single-item" style={{ backgroundImage: `url(assets/img/slider/${val.bgImg})` }}>
                        <div className="hero-slider__content-wrapper">
                            <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="hero-slider__content m-auto text-center">
                                    <h2 className="hero-slider__title">{val.sliderTitle}</h2>
                                    <p className="hero-slider__text">{val.sliderSubtitle}</p>
                                    <a className="hero-slider__btn hero-slider__btn--style2" href={`${process.env.PUBLIC_URL}/${val.btnLink}`}> Entre em Contato</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });

        return(
            <div>
                {/*====================  hero slider area ====================*/}
                <div className="hero-alider-area">
                    <Swiper {...params}>
                        {DataList}
                    </Swiper>
                </div>
                {/*====================  End of hero slider area  ====================*/}

            </div>
        )
    }
}

export default HeroSliderTwo;