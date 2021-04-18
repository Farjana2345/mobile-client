import React from 'react';
import mb from '../../../images/m1.jpg';
import m1 from '../../../images/m2.jpg';
import m2 from '../../../images/m3.jpg';

const HeaderMain = () => {
    return (
      <main>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
               
                    <div class="carousel-item active">
                        <img style={{height:'600px'}} src={mb} class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                        <h5>Welcome To Mobile Repair Service</h5>
                        <p>What Ever The MOBILE We Will Fix It With Care</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                        <img style={{height:'600px'}} src={m1} class="d-block w-100" alt="..."/>
                    
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Trusted Service Center science 1990.</h5>
                        <p>We Will Solve All Types of SmartPhone and All Iphone services.</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                        <img style={{height:'600px'}} src={m2} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>We Diagons Repair Any mobile Problems.</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
      </main>
    );
};

export default HeaderMain;