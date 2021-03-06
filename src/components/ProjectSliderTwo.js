import React, {Component} from 'react';
import Swiper from 'react-id-swiper';

class ServiceGridSlider extends Component{
    render(){
        const params = {
            slidesPerView : 3,
            loop: true,
            speed: 1000,
            watchSlidesVisibility: true,
            spaceBetween : 30,
            autoplay: {
                delay: 3000,
            },
            // Responsive breakpoints
            breakpoints: {
                1499:{
                    slidesPerView : 3
                },

                991:{
                    slidesPerView : 2
                },

                767:{
                    slidesPerView : 1
                },

                575:{
                    slidesPerView : 1
                }
            }

        }
        let data = [
            {img: 'Imagem1.png', serviceTitle: 'Alumínio', serviceExcerpt: '', serviceUrl: 'projects'},
            {img: 'Imagem2.png', serviceTitle: 'Barra Chata', serviceExcerpt: '', serviceUrl: 'projects'},
            {img: 'Imagem3.png', serviceTitle: 'Bucha de Ferro', serviceExcerpt: '', serviceUrl: 'projects'},
            {img: 'Imagem4.png', serviceTitle: 'Bronze', serviceExcerpt: '', serviceUrl: 'projects'},
            {img: 'Imagem5.png', serviceTitle: 'Contoneira', serviceExcerpt: '', serviceUrl: 'projects'},
            {img: 'Imagem6.png', serviceTitle: 'Chapas', serviceExcerpt: 'Ferro Trefilado, Ferro Fundido, Ferro Mecânico, Latão.', serviceUrl: 'projects'},
            {img: 'Imagem7.png', serviceTitle: 'Tubos', serviceExcerpt: 'Espessura em MM- Peso Teórico (barra de 6 metros), Tubos Quadrados, Tubos Retangulares.', serviceUrl: 'projects'},
            {img: 'Imagem8.png', serviceTitle: 'Tecnil', serviceExcerpt: '', serviceUrl: 'projects'},
        ];

        let DataList = data.map((val, i)=>{
            return(
                <div className="swiper-slide" key={i}>
                    <div className="service-grid-item service-grid-item--style2">
                    <div className="service-grid-item__image">
                        <div className="service-grid-item__image-wrapper">
                        <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>
                            <img src={`assets/img/service/${val.img}`} className="img-fluid" alt="" />
                        </a>
                        </div>
                    </div>
                    <div className="service-grid-item__content">
                        <h3 className="title">
                        <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>{val.serviceTitle}</a>
                        </h3>
                        <p className="subtitle">{val.serviceExcerpt}</p>
                        <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`} className="see-more-link">Obter uma Cotação</a>
                    </div>
                    </div>
                </div>
            )
        });
        return(
            <div>
                {/*====================  project grid slider area ====================*/}
                <div className="service-slider-title-area grey-bg section-space--inner--top--120 section-space--inner--bottom--285">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="section-title-area text-center">
                            <h2 className="section-title mb-0"> Produtos <span className="title-icon" /></h2>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="service-grid-slider-area">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="service-slider">
                            <div className="service-slider__container service-slider__container--style2">
                                <Swiper {...params}>
                                    {DataList}
                                </Swiper>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/*====================  End of project grid slider area  ====================*/}

            </div>
        )
    }
}


export default ServiceGridSlider;