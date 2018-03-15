/**
 * Rendering available sizes
 */

import React from "react";

export const renderDropDown = ( data ) => {
  if (data) {
    return data.availableSizes.map((size, i) => {
      return (
        <option className="option" value={size} id={i} key={i}>
          {size}
        </option>
      );
    });
  }
};
