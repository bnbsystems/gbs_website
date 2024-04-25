import React from "react";
import { Col, Container, Card, Row, CardBody } from "reactstrap";
import { Link } from "gatsby";

import Blo1Image from "../assets/images/blog/1.jpg";
import Blo2Image from "../assets/images/blog/2.jpg";
import Blo3Image from "../assets/images/blog/3.jpg";
import { useTranslation } from "react-i18next";
import i18next from "i18next";


export default function FeaturedArticles() {
    const { t } = useTranslation()
    const currentLanguage = i18next.language;
    return (
        <>
            {/* Start Blog  */}
            <section className="section bg-light" id="blog">
                <Container>
                    <Row className="justify-content-center">
                        <Col>
                            <div className="section-title text-center mb-4 pb-2">
                                <h4 className="title mb-3">{t('landing_page.articles.title')}</h4>
                                <p className="text-muted para-desc mb-0 mx-auto">{t('landing_page.articles.subtitle')}</p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <Card className="blog blog-primary shadow rounded overflow-hidden border-0">
                                <div className="blog-image position-relative overflow-hidden">
                                    <img src={Blo1Image} className="img-fluid rounded-md" alt="" />
                                </div>

                                <CardBody className="content p-0">
                                    <div className="p-4">
                                        <Link to={`/blog/benefits/${currentLanguage}`} className="h5 title text-dark d-block mb-0">{t('landing_page.articles.advantages.title')}</Link>
                                        <p className="text-muted mt-2 mb-0">{t('landing_page.articles.advantages.description')}</p>

                                        <div className="mt-3">
                                            <Link to={`/blog/benefits/${currentLanguage}`} className="link text-dark">{t('common.read_more')}<i className="uil uil-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <Card className="blog blog-primary shadow rounded overflow-hidden border-0">
                                <div className="blog-image position-relative overflow-hidden">
                                    <img src={Blo2Image} className="img-fluid" alt="" />
                                </div>

                                <CardBody className="content p-0">
                                    <div className="p-4">
                                        <Link to={`/blog/automation/${currentLanguage}`} className="h5 title text-dark d-block mb-0">{t('landing_page.articles.automation.title')}</Link>
                                        <p className="text-muted mt-2 mb-0">{t('landing_page.articles.automation.description')}</p>

                                        <div className="mt-3">
                                            <Link to={`/blog/automation/${currentLanguage}`} className="link text-dark">{t('common.read_more')} <i className="uil uil-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <Card className="blog blog-primary shadow rounded overflow-hidden border-0">
                                <div className="blog-image position-relative overflow-hidden">
                                    <img src={Blo3Image} className="img-fluid" alt="" />
                                </div>

                                <CardBody className="content p-0">
                                    <div className="p-4">
                                        <Link to={`/blog/build-raports/${currentLanguage}`} className="h5 title text-dark d-block mb-0">{t('landing_page.articles.build_raport.title')}</Link>
                                        <p className="text-muted mt-2 mb-0">{t('landing_page.articles.build_raport.description')}</p>

                                        <div className="mt-3">
                                            <Link to={`/blog/build-raports/${currentLanguage}`} className="link text-dark">{t('common.read_more')} <i className="uil uil-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* End Blog  */}
        </>
    )
}