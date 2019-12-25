import React from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase/firebaseUtils";

class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("posts");
    this.unsubscribe = null;
    this.state = {
      posts: []
    };
  }

  onCollectionUpdate = querySnapshot => {
    const posts = [];
    querySnapshot.forEach(doc => {
      const { title, image, text, date } = doc.data();
      posts.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        text,
        image,
        date
      });
    });
    this.setState({
      posts
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    document.title = "Blog Posts | Lawrence Thomas";
    return (
      <React.Fragment>
        <div className="blog-container">
          <h3 className="blog-heading">Blog Posts</h3>
          <hr className="small-line" />
          <div className="grid-blog">
            {this.state.posts.map(post => (
              <div className="grid-item">
                <Link to={`/blog/show/${post.key}`}>
                  <img
                    className="grid-item__image"
                    src={post.image}
                    alt="Blog post"
                  />
                </Link>
                <h3 className="grid-item__title">{post.title}</h3>
                <em>Written By Lawrence Thomas</em>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BlogList;
