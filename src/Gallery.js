import React from "react";
import memes from "./memes.json";

class Gallery extends React.Component {
  state = {
    memes: [],
  };
  componentDidMount() {
    //put get request here to the backend//
    this.setState({
      memes: memes,
    });
  }

  render() {
    return (
      <div>
        {this.state.memes.map((meme) => (
          <div className="meme">
            <img src={meme.url} alt="" />
            <h2 className="top">{meme.topText}</h2>
            <h2 className="bottom">{meme.bottomText}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default Gallery;
