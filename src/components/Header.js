import React from "react";
import PropTypes from "prop-types";

function Header({ text, bgcolor }) {
  const style = {
    backgroundColor: bgcolor,
  };

  return (
    <div style={style}>
      <h2>{text}</h2>
    </div>
  );
}
Header.defaultProps = {
  text: "i am a header default prop!",
  bgcolor: "hsl(80deg 100% 50%)",
};
Header.propTypes = {
  text: PropTypes.string,
  bgcolor: PropTypes.string,
};

export default Header;
