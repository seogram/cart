import { PriceList } from "./priceList";
import React from "react";
import HOC from "./spinner";

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      basePrice: null,
      Price: null,
      href: null,
      selected: false,
    };
  }

  render() {

    /**
 * Handling dropdown change 
 */
    const handleChange = el => {
      var e = document.getElementById(el);
      const id = e.selectedIndex;
      if (this.props.data) {
        const basePrice = this.props.data.inventory[id - 1].basePrice;
        const price = this.props.data.inventory[id - 1].price;
        const href = this.props.data.inventory[id - 1].purchaseURL;
        this.setState({ basePrice, price, href, selected: true });
      }
    };

    return (
      <div>
        <h3> Air Jordan</h3>
        <select
          className="select"
          id="size"
          onChange={() => handleChange("size")}
          defaultValue="select"
        >
          <option
            key="default-label"
            value="select"
            disabled
            className="option"
          >
            Choose here
          </option>

          {this.props.renderDropDown}
        </select>

        <PriceList
          basePrice={this.state.basePrice}
          price={this.state.price}
          href={this.state.href}
          selected={this.state.selected}
        />
      </div>
    );
  }
}

/**
 * Enhancing Product detail componenet with Higher order component
 */

export const ExtendedProductDetail = HOC(ProductDetails);
