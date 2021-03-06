import React from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";
import { connect } from "react-redux";

class Home extends React.Component {
  // without redux store
  // state = {
  //   posts: [],
  // };

  // without redux store

  // componentDidMount() {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
  //     this.setState({
  //       posts: res.data.slice(0, 10),
  //     });
  //   });
  // }

  render() {
    console.log(this.props);
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="pokeball" />
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <span>{post.body}</span>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts yet</div>
    );
    return (
      <div>
        <div className="container home">
          <h4 className="center">Home</h4>
          <span>{postList}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Home);
