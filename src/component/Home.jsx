import React from "react";
// import Products from "./Products";

export default function Home() {
  return (
    <div className="hero">
      <div class="card bg-dark text-white border-0">
        <img
          src="/assets/laptop.jpeg"
          class="card-img"
          alt="Background"
          height="1150px"
          width="1000px"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center" text-color="black">
          <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-0">
              New Season Arrivals
            </h5>
            <p class="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
       {/* <Products/>   */}
    </div>
  );
}
