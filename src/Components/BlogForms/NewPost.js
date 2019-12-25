import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import firebase from "../../firebase/firebaseUtils";

class NewPost extends React.Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection("posts");
    this.state = {
      title: "",
      image: "",
      text: "",
      date: new Date()
    };
  }

  onChange = e => {
    const state = this.state;
    state[e.target.id] = e.target.value;
    this.setState(state);
  };

  handleChange = value => {
    this.setState({ text: value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { title, image, text, date } = this.state;

    this.ref
      .add({
        title,
        image,
        text,
        date: date.toLocaleDateString(),
        slug: title.replace(/\s/g, "-").toLowerCase()
      })
      .then(docRef => {
        this.setState({
          title: "",
          image: "",
          text: "",
          date: "",
          slug: ""
        });
        this.props.history.push("/blog");
      })
      .catch(error => {
        console.error("Error Adding Document:", error);
      });
  };
  render() {
    const { title, image, text } = this.state;
    return (
      <React.Fragment>
        <form className="post-form" onSubmit={this.onSubmit}>
          <h2>Post Form</h2>
          <label className="post-form__label">Enter Post Title</label>
          <input
            value={title}
            onChange={this.onChange}
            type="text"
            id="title"
            placeholder="Enter Title"
            className="post-form__input"
          />

          <label className="post-form__label">Choose an Image</label>
          <input
            value={image}
            onChange={this.onChange}
            type="text"
            id="image"
            className="post-form__input"
            placeholder="Enter Image URL..."
          />

          <label className="post-form__label">Enter Text</label>
          <ReactQuill
            value={text}
            onChange={this.handleChange}
            modules={NewPost.modules}
            formats={NewPost.formats}
            className="post-form__text"
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

NewPost.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote", "code"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ],
    ["link", "image", "video"],
    ["clean"]
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
NewPost.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video"
];

export default NewPost;
