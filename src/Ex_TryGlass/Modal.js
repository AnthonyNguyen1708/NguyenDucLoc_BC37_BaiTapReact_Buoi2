import React, { Component } from "react";
import styles from "./Modal.module.css";

export default class Modal extends Component {
  render() {
    return (
      <div className={styles.model}>
        <img className={styles.img} src="./glassesImage/model.jpg" alt="" />

        {this.props.selectedGlass && (
          <img
            className={styles.glass}
            src={this.props.selectedGlass.url}
            alt=""
          />
        )}

        {this.props.selectedGlass && (
          <div className={styles.detail}>
            <div className={styles.top}>
              <h3 style={{ color: "blue" }}>{this.props.selectedGlass.name}</h3>
              <p style={{ fontSize: "20px" }}>
                {this.props.selectedGlass.price}$
              </p>
            </div>
            <div className={styles.des}>{this.props.selectedGlass.desc}</div>
          </div>
        )}
      </div>
    );
  }
}
