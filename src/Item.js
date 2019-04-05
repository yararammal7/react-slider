import React from "react";
import "./item.scss";
export default function Item(props) {
  return (
    
    
    
    <div className="item-wrapper">
      <div
        style={{
          backgroundImage: "url(" + props.src + ")"
        }}
        className="pic-wrapper"
      />
      <div className="information">Paris-France</div>
      <div>Maison Du Liban</div>
      <div>139$/night</div>
    </div>
  );
}
