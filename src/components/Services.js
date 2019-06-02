import React, { Component } from 'react';
import Title from "../components/Title";
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer}  from 'react-icons/fa';
import { icons } from 'react-icons';

export default class Services extends
 Component {
   state={
     services:[
       {
       icon:<FaCocktail/>,
       title: "Free Cocktail",
       info: " cocktailcocktailcocktailcock"
       },
       {
        icon:<FaHiking/>,
        title: "Hiking",
        info: " cocktailcocktailcocktailcoc"
        },
        {
          icon:<FaShuttleVan/>,
          title: "Shuttlevan",
          info: " cocktailcocktailcocktailcockt"
          },
          {
            icon:<FaBeer/>,
            title: "strongest beer",
            info: " cocktailcocktailcocktailco"
            }
     ]
   }
  render() {
    return (
      <section className="services">
      <Title title="Services"/>
      <div className="services-center">
      {this.state.services.map((item,index) =>{
        return( 
        <article key={index} className='service'>
        <span>{item.icon}</span>
        <h6>{item.title}</h6>
        <p>{item.info}</p>
        </article>
      );
      })}
      </div>
      </section>
    );
  }
}
