/**
 *  Main Component
 */

import React from "react";
import axios from "axios";
import { Image } from "./product-image";
import { renderDropDown } from "./sizeList";
import { ExtendedProductDetail } from "./productDetail";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: false
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const data = await axios.get(
      "https://www.presentedbyklekt.com/api/product/get/10033/inventory"
    );

    this.setState({ data: data.data, loading: false });
  }

  render() {
    return (
      <div className="container">
        <div className="leftCol">
          <Image src="https://cdn.filestackcontent.com/z9AwNf3DQQKy8TOkzDOw" />
        </div>
        <div className="rightCol">
          <ExtendedProductDetail
            renderDropDown={renderDropDown(this.state.data)}
            data={this.state.data}
            loading={this.state.loading}
          />
        </div>
      </div>
    );
  }
}
