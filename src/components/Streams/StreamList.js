import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";
import { useNavigate } from "react-router-dom";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (this.props.userId === stream.userId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui blue button">
            Edit
          </Link>
          <Link to={`/streams/delete/${stream.id}`} className="ui red button">
            Delete
          </Link>
        </div>
      );
    }
  }

  createStreamButton() {
    if (this.props.isSignedIn) {
      return (
        <Link
          to="/streams/new"
          className="ui button primary right floated content"
        >
          Create Stream
        </Link>
      );
    }
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div key={stream.id} className="item">
          {this.renderAdmin(stream)}

          <i className="large middle aligned icon camera"></i>
          <div className="content">
            <Link to={`/streams/${stream.id}`} className="header">
              {stream.title}
            </Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h2>Stream List</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.createStreamButton()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    userId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
