import React, { Component } from "react";
import NavBar from "../components/NavBar";
import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
class Project extends Component {
  render() {
    let data = [
      {
        pageLink: "project-details",
        img: "Imagem1.png",
        projectTitle: "Alumínio",
        projectSubtitle:
          ""
      },
      {
        pageLink: "project-details",
        img: "Imagem2.png",
        projectTitle: "Barra Chata",
        projectSubtitle:
          ""
      },
      {
        pageLink: "project-details",
        img: "Imagem3.png",
        projectTitle: "Bucha de Ferro",
        projectSubtitle:
          ""
      },
      {
        pageLink: "project-details",
        img: "Imagem4.png",
        projectTitle: "Broze",
        projectSubtitle:
          ""
      },
      {
        pageLink: "project-details",
        img: "Imagem5.png",
        projectTitle: "Cantoneira",
        projectSubtitle:
          ""
      },
      {
        pageLink: "project-details",
        img: "Imagem6.png",
        projectTitle: "Chapas",
        projectSubtitle:
          "Ferro Trefilado, Ferro Fundido, Ferro Mecânico, Latão."
      },
      {
        pageLink: "project-details",
        img: "Imagem7.png",
        projectTitle: "Tubos",
        projectSubtitle:
          "Espessura em MM- Peso Teórico (barra de 6 metros), Tubos Quadrados, Tubos Retangular."
      },
      {
        pageLink: "project-details",
        img: "Imagem8.png",
        projectTitle: "Tecnil",
        projectSubtitle:
          ""
      }
    ];

    let Datalist = data.map((val, i) => {
      return (
        <div
          className="col-lg-4 col-sm-6 col-12 section-space--bottom--30"
          key={i}
        >
          <div className="service-grid-item service-grid-item--style2">
            <div className="service-grid-item__image">
              <div className="service-grid-item__image-wrapper">
                <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>
                  <img
                    src={`assets/img/projects/${val.img}`}
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="service-grid-item__content">
              <h3 className="title">
                <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>
                  {val.projectTitle}
                </a>
              </h3>
              <p className="subtitle">{val.projectSubtitle}</p>
              <a
                href={`${process.env.PUBLIC_URL}/${val.pageLink}`}
                className="see-more-link"
              >
                
              </a>
            </div>
          </div>
        </div>
      );
    });

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
                  <h1>Nossos Produtos</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Produtos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        {/*====================  project page content ====================*/}
        <div className="page-wrapper section-space--inner--120">
          {/*Projects section start*/}
          <div className="project-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="project-item-wrapper">
                    <div className="row">{Datalist}</div>
                  </div>
                </div>
              </div>
              <div className="row section-space--top--60">
                <div className="col">
                  <ul className="page-pagination">
                    <li>
                      <a href="/projects">
                        <i className="fa fa-angle-left" /> Prev
                      </a>
                    </li>
                    <li className="active">
                      <a href="/projects">01</a>
                    </li>
                    <li>
                      <a href="/projects">
                        <i className="fa fa-angle-right" /> Next
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*Projects section end*/}
        </div>

        {/*====================  End of project page content  ====================*/}

        {/* Brand logo */}
        <BrandLogoSlider background="grey-bg" />

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default Project;