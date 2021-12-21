import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Funfact from "../components/Funfact";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import ModalVideo from "react-modal-video";
class Sobre extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <div>
        {/* Navigation bar */}
        <NavBar />

        {/* breadcrumb */}
        {/*====================  breadcrumb area ====================*/}
        <div
          className="breadcrumb-area breadcrumb-bg"
          style={{
            backgroundImage: `url(assets/img/backgrounds/funfact-bg.jpg)`
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>Sobre Nós</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Sobre Nós</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        <div className="page-wrapper section-space--inner--top--120">
          {/*About section start*/}
          <div className="about-section section-space--inner--bottom--120">
            <div className="container">
              <div className="row row-25 align-items-center">
                <div className="col-lg-6 col-12 mb-30">
                  <div className="about-image-two">
                    <img src="assets/img/about/about-3.jpg" alt="" />
                    <span className="video-popup">
                      <ModalVideo
                        channel="youtube"
                        isOpen={this.state.isOpen}
                        videoId="O"
                        onClose={() => this.setState({ isOpen: false })}
                      />
                      <button onClick={this.openModal}>
                        <i className="ion-ios-play-outline" />
                      </button>
                    </span>
                  </div>
                </div>
                <div className="col-lg-6 col-12 mb-30">
                  <div className="about-content-two">
                    <h3>Bem vindo</h3>
                    <h1>Sobre Ferragens Gaúcho</h1>
                    <h4>
                    Fundada em julho de 2008, a Ferragens Gaúcho vem atuando no comercio varejista de ferragens e ferramentas, 
                    </h4>
                    <p>
                    sendo a única empresa da cidade licenciada para fazer destinação final dos resíduos metálicos. Contando também com a compra e venda de sucatas diversas.
                    Sua instalação conta com uma sede própria totalizando área de **** m2, dispõe de uma equipe capacitada e pronta para prestar o melhor atendimento.
                    Temos como objetivo atender a necessidade de todos com muita dedicação assim obtendo e gerando resultados positivos 

                    </p>
                    <a
                      href="services"
                      className="ht-btn--default ht-btn--default--dark-hover section-space--top--20"
                    >
                      Nossos Produtos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*About section end*/}

          {/*About section start*/}
          <div className="about-section section-space--inner--120">
            <div className="container">
              <div className="about-wrapper row">
                <div className="col-sm-6 col-12 order-1 order-lg-2">
                  <div className="about-image about-image-1">
                    <img src="assets/img/about/about-1.jpg" alt="" />
                  </div>
                </div>
                <div className="col-sm-6 col-12 order-2 order-lg-3">
                  <div className="about-image about-image-2">
                    <img src="assets/img/about/about-2.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-12 order-3 order-lg-1">
                  <div className="about-content about-content-1">
                    <h1>
                      <span>13</span>Anos de experiência
                    </h1>
                    <p>
                      ligendi optio cumque nihil impedit quo minus id quod
                      maxime placeat facere possimus, omnis voluptas assumenda
                      est, omnis dolor ellendus. Temporibus autem quibusdam et
                      aut officiis debitis aut rerum atibus saepe eveniet ut et
                      voluptates repudiandae sint et molestiae
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-12 order-4">
                  <div className="about-content about-content-2">
                    <p>
                      ligendi optio cumque nihil impedit quo minus id quod
                      maxime placeat facere possimus, omnis voluptas assumenda
                      est, omnis dolor ellendus. Temporibus autem quibusdam et
                      aut officiis debitis aut rerum atibus saepe eveniet ut et
                      voluptates repudiandae sint et molestiae non recusandae.
                      Itaque earum rerum hic tenetur a sapie
                    </p>
                    <a
                      href={`${process.env.PUBLIC_URL}/contact-us`}
                      className="ht-btn--default ht-btn--default--dark-hover section-space--top--20"
                    >
                      Entre em contato
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*About section end*/}

          {/* Fun fact */}
          <Funfact />
        </div>

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default Sobre;
