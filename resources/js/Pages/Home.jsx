
import { spMenuShow,curveTitle,openBusinessImg } from "@/Script"
import GuestLayout from '@/Layouts/GuestLayout';
import kv01 from '../../img/kv01.jpg';
import kv02 from '../../img/kv02.jpg';
import kv03 from '../../img/kv03.jpg';

import vision from '../../img/vision.jpeg';
import business01 from '../../img/business01.jpg';
import business02 from '../../img/business02.jpeg';


import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


import { Pagination,Autoplay,EffectFade } from 'swiper/modules';


export default function(){
    spMenuShow();
    curveTitle();
    openBusinessImg();
    return(
        <GuestLayout>
            <main className="main">
                <div className="kv">
                <Swiper 
                    pagination={{
                        clickable: true,
                      }}
                    effect={'fade'}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay, EffectFade]} 
                    className="mySwiper">
                    <SwiperSlide>
                        <img className="mySwiper_img" src={kv01} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="mySwiper_img" src={kv02} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="mySwiper_img" src={kv03} alt=""/>
                    </SwiperSlide>
                </Swiper>
                </div>
                <section className="vision wrapper section">
                    <h2 className="section_title">わたしたちの想い</h2>
                    <div className="vision_content">
                        <div className="vision_content_pic">
                            <img src={vision} alt="" />
                        </div>
                        <p className="vision_content_text">
                        原料が服になり手に届くまでの長い道のりに関わる、たくさんの人たちのものづくりへの想いを知ること。
                        知らなくても服は買えるけれど、知るとちょっと心が温まり、どこか誇らしい気持ちになる。それは小さいけれど生活者として大切にしたい感情。
                        だからITONAMIは、自分たちが素晴らしいと思う素材を形にして、つくり手の心の中に宿る誇りとともにデニムを届けています。
                        
                        </p>
                    </div>

                </section>
                <section className="business wrapper section">
                    <h2 className="section_title">事業概要</h2>
                    <div className="business_content">
                        <div className="business_content_col js-col">
                            <div className="business_content_col_pic">
                                <div className="business_content_col_pic_rightgate js-left-gate"></div>
                                <img src={business01} alt="" />
                                <div className="business_content_col_pic_leftgate js-right-gate"></div>
                            </div>
                            <h3 className="business_content_col_title js-upper-curve" id="myElement">喫茶ポパイ</h3>
                            <span className="business_content_col_subtitle js-below-curve">
                                EAT
                            </span>
                            <div className="business_content_col_text">
                               
                            </div>
                        </div>
                        <div className="business_content_col js-col">
                            <div className="business_content_col_pic">
                                <img src={business02} alt="" />
                            </div>
                            <h3 className="business_content_col_title js-upper-curve" id="myElement">
                                ゲストハウスポパイ</h3>
                            <span className="business_content_col_subtitle js-below-curve">
                                STAY
                            </span>
                        </div>
                        <div className="business_content_col">
                            <div className="business_content_col_pic">
                                <img src={business02} alt="" />
                            </div>
                            <h3 className="business_content_col_title js-upper-curve" id="myElement">
                            ふたみ図鑑</h3>
                            <span className="business_content_col_subtitle js-below-curve">
                            KNOW
                            </span>
                        </div>
                       
                        
                        
                        
                    </div>
                </section>
                
            </main>
        </GuestLayout>
    )
}