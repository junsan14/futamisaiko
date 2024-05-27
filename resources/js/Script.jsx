
import $ from 'jquery';
import React,{useState,useEffect, Component } from "react"; 
import ArcText from 'arc-text';


function spMenuShow(){
    const [loadState, setLoadState]= useState(false);
    useEffect(()=>{
      const $nav = $('.js-nav');
      const $toggleBtn = $('.js-toggle-sp');
      const $naviList = $('.js-nav-ul-li');
      if(!loadState){
        $toggleBtn.on('click', ()=>{      
          if($nav.hasClass('show')){
            $nav.removeClass('show');
            $toggleBtn.removeClass('show');
            $("body").removeClass('noscroll');
            //console.log("show remove" +loadState) 
            //console.log($header.hasClass('show'))
          }else{  
            $nav.addClass('show');
            $toggleBtn.addClass('show');
            $("body").addClass('noscroll');
          }
        })
        $naviList.on('click',()=>{
          $nav.removeClass('show');
          $toggleBtn.removeClass('show');
          $("body").removeClass('noscroll');
        })
        setLoadState(true);
      }
    },[loadState])    
    
    
}

function curveTitle(){
    let $titles = $('.js-upper-curve');
    let $subTitles = $('.js-below-curve');
    let a = document.getElementById('myElement')?document.getElementById('myElement').innerHTML:"";
    let arcText;
    $titles.each((i,title)=>{
        if(title){
            arcText = new ArcText(title);
            arcText.arc(150);

        } 
    })
    $subTitles.each((i,subTitle)=>{
        if(subTitle){
            arcText = new ArcText(subTitle);
            arcText.arc(150);
            arcText.direction(-1);  
        }
    })
}

function openBusinessImg(){

    let $cols = $('.js-col');
    let mag = 1.2;
     $(window).on('scroll', function(){
            let currentHeight = $(window).scrollTop();
            let browserHeight = $(window).height();
            //console.log(currentHeight)
            //section fadein
            $cols.each(function(i, ele){
                let colHeight = $(ele).offset().top;
                console.log(currentHeight*mag)
                //console.log(currentHeight)
                if(currentHeight*mag > colHeight){
                   // console.log($(ele))
                   $(ele).find('.js-left-gate').addClass('show');
                   $(ele).find('.js-right-gate').addClass('show');
                   // console.log($(ele).find('.js-gate'))
                }
                //console.log($(ele).height());
            })
        })
    //console.log($gates)
}


export {spMenuShow, curveTitle, openBusinessImg};