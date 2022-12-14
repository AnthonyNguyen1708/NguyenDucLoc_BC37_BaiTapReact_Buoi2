import React, { Component } from "react";
import GlassItem from "./GlassItem";
import styles from "./GlassList.module.css";
import Modal from "./Modal";

export default class GlassList extends Component {
  GlassesData = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  state = {
    selectedGlass: null
  };

  tryOnGlass = (glass) => {
    this.setState(
      {
        selectedGlass: glass,
      },
      () => {
        console.log(this.state.selectedGlass.url);
      }
    );
  };

  renderGlasses = () => {
    const html = this.GlassesData.map((item) => {
      return (
        <GlassItem tryOnGlass={this.tryOnGlass} key={item.id} item={item} />
      );
    });
    return html;
  };

  render() {
    return (
      <div className={styles.background}>
        <div className={styles.layer}></div>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>try glass app online</h1>
          </div>

          <Modal selectedGlass={this.state.selectedGlass} />

          <div className={styles.glassList}>{this.renderGlasses()}</div>
        </div>
      </div>
    );
  }
}
