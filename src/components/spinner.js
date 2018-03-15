/**
 * Higher order function for Loading spinner 
 */

import React from "react";

export default function HOC(WrappedComponent) {

  return class extends React.Component {
    render() {
      if (!this.props.loading) {
        return <WrappedComponent {...this.props} />;
      }
      return <div className="loader"></div>;
    }
  };
}
