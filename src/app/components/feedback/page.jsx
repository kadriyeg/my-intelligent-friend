import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';

const comments = [
    {
        text: "Harika bir uygulama, çok beğendim!",
        author: "Ahmet"
    },
    {
        text: "Kullanıcı dostu arayüzü ile çok etkileyici.",
        author: "Ayşe"
    },
    {
        text: "Çok kullanışlı ve hızlı çalışıyor.",
        author: "Mehmet"
    },
    {
        text: "Harika bir uygulama, çok beğendim!",
        author: "Ahmet"
    },
    {
        text: "Kullanıcı dostu arayüzü ile çok etkileyici.",
        author: "Ayşe"
    },
    {
        text: "Çok kullanışlı ve hızlı çalışıyor.",
        author: "Mehmet"
    },
    // Diğer yorumlar buraya eklenebilir
];

const Feedback = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
        dots: true,
        customPaging: function (i) {
            return <div className="dot"></div>;
        },
    };
    return (
        <div className="container">
            <div className="row">
                <div className="card-slider">
                    <Slider {...settings} className='slider-part'>
                        {comments.map((comment, index) => (
                            <div className="col-md-4">
                                <div key={index} className="card-box">
                                    <p>{comment.text}</p>
                                    <p>- {comment.author}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
