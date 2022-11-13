import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchStream, deleteStream } from "../../actions";
import Modal from "../Modal";

function StreamDelete(props) {
  const dispatch = useDispatch();
  const param = useParams();

  useEffect(() => {
    dispatch(fetchStream(param.id));
  }, []);

  const selectedStream = useSelector((state) => state.streams[param.id]);

  const action = (
    <>
      <button
        onClick={() => dispatch(deleteStream(param.id))}
        class="ui button negative"
      >
        Delete
      </button>
      <Link to="/" class="ui button">
        Cancel
      </Link>
    </>
  );

  const renderContent = () => {
    if (!selectedStream) {
      return "Are you sure you want to delete this stream ?";
    }
    return `Are you sure you want to delete this stream with title : ${selectedStream.title}`;
  };
  return (
    <Modal
      title="Delete Stream"
      action={action}
      content={renderContent()}
      onDismiss={() => window.history.back()}
      selectedStream={selectedStream}
    />
  );
}

export default StreamDelete;
