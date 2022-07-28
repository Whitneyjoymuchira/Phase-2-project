import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking,FaBeer,FaShuttleVan } from 'react-icons/fa'
export default class Services extends Component {
    state={
        services: [
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info: "Get complimentary cocktails with a stay at our hotel"
            },
            {
                icon:<FaHiking/>,
                title:"Hiking grounds",
                info: "Enjoy a serene hike, in the tropical forests on the upper wing of the hotel"
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Transport",
                info: "We have shuttle vans to help with your transits, around the resort and to other tourist destiations in town"
            },
            {
                icon:<FaBeer/>,
                title:"Hoppy Hour!",
                info: "Our beertiful shelves to help you ease into the evening"
            }
        ]
    }
  render() {
    return (
        <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
      
    )
  }
}
