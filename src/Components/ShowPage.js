import React from "react";
import firebase from "../firebase/firebaseUtils";

class ShowPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      key: ""
    };
  }

  componentDidMount() {
    const ref = firebase
      .firestore()
      .collection("posts")
      .doc(this.props.match.params.id);
    ref.get().then(doc => {
      if (doc.exists) {
        this.setState({
          post: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="post-content">
            <h3 className="post-content__title">{this.state.post.title}</h3>

            <img
              className="post-content__image"
              src={this.state.post.image}
              alt="Blog Post"
            />

            <em>Published On: {this.state.post.date}</em>
            <p
              className="post-content__text"
              dangerouslySetInnerHTML={{ __html: this.state.post.text }}
            ></p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ShowPage;
