// import React, { useState, useEffect } from "react";
import BeerList from "../components/BeerList";
import Header from "../components/Header";

export default function Shop(props) {
  return (
    <div className="Shop">
      <Header notificationsCount={props.notificationsCount} />
      <section className="beerListCenter">
        {
          <BeerList
            beers={props.beers}
            data={props.data}
            cartItems={props.cartItems}
            editCartItems={props.editCartItems}
            ratingToggle={props.ratingToggle}
          />
        }
      </section>
    </div>
  );
}
