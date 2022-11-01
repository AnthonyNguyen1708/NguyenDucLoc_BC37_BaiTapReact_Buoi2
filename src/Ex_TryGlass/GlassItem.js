import React, { Component } from "react";
import styles from "./GlassItem.module.css";
export default class GlassItem extends Component {
  render() {
    const { url } = this.props.item;
    return (
      <div>
        <div
          onClick={() => {
            this.props.tryOnGlass(this.props.item);
          }}
          className={styles.glassItem}
        >
          <img style={{ width: "100%" }} src={url} alt="" />
        </div>
      </div>
    );
  }
}
