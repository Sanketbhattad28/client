import _ from "lodash";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import { useDispatch } from "react-redux";
import StreamForm from "./StreamForm";

const StreamEdit = () => {
  const dispatch = useDispatch();
  const param = useParams();
  useEffect(() => {
    dispatch(fetchStream(param.id));
  }, []);

  const selectedStream = useSelector((state) => state.streams[param.id]);

  const onSubmit = (formValues) => {
    dispatch(editStream(param.id, formValues));
  };

  const render = () => {
    if (!selectedStream) {
      return <div>Loading !!</div>;
    } else {
      return (
        <div>
          <h3>Edit a stream</h3>
          <StreamForm
            initialValues={_.pick(selectedStream, "title", "description")}
            onSubmit={onSubmit}
          />
        </div>
      );
    }
  };

  return <div>{render()}</div>;
};

export default StreamEdit;
