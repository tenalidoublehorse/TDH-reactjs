import React, { Component } from 'react';
import AOS from 'aos';

class Factorylocation extends Component {

    componentDidMount() {
        AOS.init({
            duration: 1500, 
        });
    }
    
    render() {
        return (
            <div className="section" style={{ backgroundColor: '#fff7ef' }}>
                <div className="container-fluid">
                    <div className="section-title-wrap text-center wow animate__animated  animate__fadeInUp" data-wow-delay="0.2s">
                        {/* <h5 className="custom-primary  white-bg mx-auto">Explore Our Factory Locations</h5> */}
                        <h2 className="title">Where Innovation Takes Shape</h2>
                        <p className="subtitle mb-3">
                            For inquiries about our factory locations and more
                        </p>
                    </div>
                    <div className="row ">

                        <div className="col-lg-3 wow animate__animated  animate__fadeInUp" data-wow-delay="0.2s">
                            <div className="card-locations mb-4">

                                <div className="card-body ">
                                    <i className='fas fa-industry' style={{ fontSize: '40px', color: ' #ED4E53' }} />
                                    <h5 className="card-title ">MAHENDRA DALL MILL</h5>
                                    <p className="card-text "  style={{ wordWrap: 'break-word' }} > P.No.37,47,48,49&49A, AutoNagar,Somasundarapalem,
                                        Kattevaram(Post),522295,
                                        TENALI,Guntur, A.P</p>
                                    <div>
                                        <div  className='d-flex'>
                                            <div><i class='pl-2 fas fa-phone' style={{ fontSize: '15px', color: '#ED4E53' }} /></div>&nbsp;&nbsp;
                                            &nbsp;
                                            <div><a href="tel:9666389389" target='_blank'>9666389389</a></div>
                                        </div>
                                        <div  className='d-flex'>
                                            <div><i class='pl-2 fas fa-envelope' style={{ fontSize: '15px', color: '#ED4E53' }} /></div>&nbsp;&nbsp;
                                            &nbsp;
                                            <div><a href="mailto:madindradallmill9@gmail.com " target='_blank'>madindradallmill9@gmail.com</a></div>
                                        </div>
                                    </div>
                                    {/* <button type="button" className=" btn-sm mail-btn mt-4">
                                        <a href="mailto: info@tenalidoublehorse.com" target='_blank'>Write Us <i class='pl-2 fas fa-envelope' style={{ fontSize: '15px', color: '#7e8083' }} /></a>
                                    </button> */}
                                       
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 wow animate__animated  animate__fadeInUp" data-wow-delay="0.4s">
                            <div className="card-locations mb-4">

                                <div className="card-body">
                                    <i className='fas fa-industry' style={{ fontSize: '40px', color: ' #ED4E53' }} />
                                    <h5 className="card-title">MAHARANI DALL MILL</h5>
                                    <p className="card-text d-flex content-justify"> Plot.No.38,39,40,AutoNagar, Somasundarapalem,
                                        Kattevaram(Post)–522295, TENALI, Guntur Dist, A.P</p>
                                        <div>
                                        <div  className='d-flex'>
                                            <div><i class='pl-2 fas fa-phone' style={{ fontSize: '15px', color: '#ED4E53' }} /></div>&nbsp;&nbsp;
                                            &nbsp;
                                            <div><a href="tel:+91 85019 69798" target='_blank'>+91 85019 69798</a></div>
                                        </div>
                                        <div  className='d-flex'>
                                            <div><i class='pl-2 fas fa-envelope' style={{ fontSize: '15px', color: '#ED4E53' }} /></div>&nbsp;&nbsp;
                                            &nbsp;
                                            <div><a href="mailto: maharanidallmill@gmail.com" target='_blank'>maharanidallmill@gmail.com</a></div>
                                        </div>
                                    </div>
                                        {/* <p className="card-text content-justify d-flex justify-content-center p-text" >
                                    &nbsp;<a href = "mailto: maharanidallmill@gmail.com">Write us <i class='fas fa-arrow-right'  style={{ fontSize: '20px', color: '#7e8083' }}/></a>
                                    </p> */}
                                    {/* <button type="button" className=" btn-sm mail-btn mt-4">
                                        <a  href="mailto: maharanidallmill@gmail.com" target='_blank'>Write Us <i class=' pl-2 fas fa-envelope' style={{ fontSize: '15px', color: '#7e8083' }} /></a>
                                    </button> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 wow animate__animated  animate__fadeInUp" data-wow-delay="0.6s">
                            <div className="card-locations mb-4">

                                <div className="card-body">
                                    <i className='fas fa-industry' style={{ fontSize: '40px', color: ' #ED4E53' }} />
                                    <h5 className="card-title">MAHADEVA DALL INDUSTRIES PVT LTD</h5>
                                    <p className="card-text d-flex content-justify"> Nandivelugu,
                                        Nandivelugu (Post) – 522 306
                                        TENALI, Guntur Dist, A.P</p>
                                    {/* <p className="card-text content-justify d-flex justify-content-center p-text" > 
                                    &nbsp;<a href = "mailto: mahadevadallindustries@gmail.com"><i class='fas fa-arrow-right'  style={{ fontSize: '20px', color: '#7e8083' }}/></a>
                                    </p>
                                     */}
                                      <div>
                                        <div  className='d-flex'>
                                            <div><i class='pl-2 fas fa-phone' style={{ fontSize: '15px', color: '#ED4E53' }} /></div>&nbsp;&nbsp;
                                            &nbsp;
                                            <div><a href="tel:+91 91333 45456" target='_blank'>+91 91333 45456</a></div>
                                        </div>
                                        <div  className='d-flex'>
                                            <div><i class='pl-2 fas fa-envelope' style={{ fontSize: '15px', color: '#ED4E53' }} /></div>&nbsp;&nbsp;
                                            &nbsp;
                                            <div><a href="mailto: mahadevadallindustries@gmail.com" target='_blank'>mahadevadallindustries@gmail</a></div>
                                        </div>
                                    </div>
                                     {/* <button type="button" className=" btn-sm mail-btn mt-4">
                                        <a   href="mailto: mahadevadallindustries@gmail.com" target='_blank'>Write Us <i class='pl-2 fas fa-envelope' style={{ fontSize: '15px', color: '#7e8083' }} /></a>
                                    </button> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 wow animate__animated  animate__fadeInUp" data-wow-delay="0.8s">
                            <div className="card-locations mb-4">

                                <div className="card-body">
                                    <i className='fas fa-industry' style={{ fontSize: '35px', color: ' #ED4E53' }} />
                                    <h5 className="card-title cutsom-primary">TENALI DOUBLE HORSE FOODS PVT LIMITED</h5>
                                    <p className="card-text d-flex content-justify"> 60 A, AUTONAGAR, TENALI, GUNTUR, ANDHRA PRADESH - 522295, Tenali, Andhra Pradesh 530012 </p>
                                    {/* <p className="card-text content-justify d-flex justify-content-center p-text" >
                                    &nbsp;<a href = "mailto: tenalidoublehorsefoods@gmail.com"><i class='fas fa-arrow-right'  style={{ fontSize: '20px', color: '#7e8083' }}/></a>
                                    </p> */}
                                     <div>
                                        <div  className='d-flex'>
                                            <div><i class='pl-2 fas fa-phone' style={{ fontSize: '15px', color: '#ED4E53' }} /></div>&nbsp;&nbsp;
                                            &nbsp;
                                            <div><a href="tel:8187896075" target='_blank'>8187896075</a></div>
                                        </div>
                                        <div  className='d-flex'>
                                            <div><i class='pl-2 fas fa-envelope' style={{ fontSize: '15px', color: '#ED4E53' }} /></div>&nbsp;&nbsp;
                                            &nbsp;
                                            <div><a href="mailto: tenalidoublehorsefoods@gmail.com" target='_blank'>tenalidoublehorsefoods</a></div>
                                        </div>
                                    </div>
                                    {/* <button type="button" className=" btn-sm mail-btn">
                                        <a href="mailto: tenalidoublehorsefoods@gmail.com" target='_blank'>Write Us <i class=' pl-2 fas fa-envelope' style={{ fontSize: '15px', color: '#7e8083' }} /></a>
                                    </button> */}
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

export default Factorylocation;