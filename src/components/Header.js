import React from "react";

const Header = props => {
  const { search, onInputChange, onSearchClick } = props;
  return (
    <div className="jumbotron">
      <h1 className="display-1">
        <i class="material-icons brand-icon ">fastfood</i> Search Your Recipe
        <br /><h3 className="display-5">You Name The Food , We Give you The Recipe</h3><br />
      </h1>
      <div class="input-group w-50 mx-auto">
        <input
          type="text"
          class="form-control"
          placeholder="Enter Your Recipe..."
          value={search}
          onChange={onInputChange}
        />
        <div class="input-group-append">
          <button className="btn btn-dark" onClick={onSearchClick}>
            Find Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
