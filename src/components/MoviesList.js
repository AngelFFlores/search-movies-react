import React, { Component } from "react";
import PropTypes from "prop-types";
import { Movie } from "./Movie";

export class MoviesList extends Component {
  static propTypes = {
    movies: PropTypes.array,
  };

  render() {
    const { movies } = this.props;
    return (
      <div className="MoviesList">
        { movies.map((movie) => {
          return (
              <div className =" MoviesList-item" key={movie.imdbID}>
            <Movie
              id = {movie.imdbID}
              title={movie.Title}
              year={movie.year}
              poster={movie.Poster}
            />
            </div>
          )
        })}
      </div>
    )
  }
}
