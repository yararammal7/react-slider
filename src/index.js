import React from "react";
import ReactDOM from "react-dom";
import Slider, { Slide } from "./Slider";
import Item from "./Item";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App(props) {
  return (
    <div className="container-fluid mt-3">
      <Slider autoPlay={true} speed={3000} loop={true}>
        <Slide>
          <Item src="https://a0.muscache.com/im/pictures/998b4270-25d7-4850-8ccf-4350b9a5ab05.jpg?aki_policy=large" />
        </Slide>
        <Slide>
          <Item src="https://a0.muscache.com/im/pictures/60145c65-7c36-4ac5-8129-6ae9a0d27a81.jpg?aki_policy=large" />
        </Slide>
        <Slide>
          <Item src="https://a0.muscache.com/im/pictures/6729455e-af21-4dc3-bfdf-332393d407a8.jpg?aki_policy=large" />
        </Slide>
        <Slide>
          <Item src="https://a0.muscache.com/im/pictures/82af5bc4-ed5b-44d9-9209-ac0f2fbf8986.jpg?aki_policy=large" />
        </Slide>
        <Slide>
          <Item src="https://a0.muscache.com/im/pictures/6db93b37-3d4b-49c0-af00-c184a9dd6305.jpg?aki_policy=large" />
        </Slide>
        <Slide>
          <Item src="https://a0.muscache.com/im/pictures/2767347c-00af-47aa-acca-c8430fcc3c17.jpg?aki_policy=large" />
        </Slide>
        <Slide>
          <Item src="https://a0.muscache.com/im/pictures/bd5f6088-b8e9-4c56-aae7-272fe1a5d7a3.jpg?aki_policy=large" />
        </Slide>
        <Slide>
          <Item src="https://a0.muscache.com/im/pictures/35aa653a-c0db-4f5a-b930-ff94901e730d.jpg?aki_policy=large" />
        </Slide>
        <Slide>
          <Item src="https://a0.muscache.com/im/pictures/6db93b37-3d4b-49c0-af00-c184a9dd6305.jpg?aki_policy=large" />
        </Slide>
        <Slide>
          <Item src="https://a0.muscache.com/im/pictures/2767347c-00af-47aa-acca-c8430fcc3c17.jpg?aki_policy=large" />
        </Slide>
        <Slide>
          <Item src="https://a0.muscache.com/im/pictures/bd5f6088-b8e9-4c56-aae7-272fe1a5d7a3.jpg?aki_policy=large" />
        </Slide>
        <Slide>
          <Item src="https://a0.muscache.com/im/pictures/35aa653a-c0db-4f5a-b930-ff94901e730d.jpg?aki_policy=large" />
        </Slide>
        <Slide>
          <Item src="https://a0.muscache.com/im/pictures/6db93b37-3d4b-49c0-af00-c184a9dd6305.jpg?aki_policy=large" />
        </Slide>
        <Slide>
          <Item src="https://a0.muscache.com/im/pictures/2767347c-00af-47aa-acca-c8430fcc3c17.jpg?aki_policy=large" />
        </Slide>
        <Slide>
          <Item src="https://a0.muscache.com/im/pictures/bd5f6088-b8e9-4c56-aae7-272fe1a5d7a3.jpg?aki_policy=large" />
        </Slide>
        <Slide>
          <Item src="https://a0.muscache.com/im/pictures/35aa653a-c0db-4f5a-b930-ff94901e730d.jpg?aki_policy=large" />
        </Slide>
      </Slider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
