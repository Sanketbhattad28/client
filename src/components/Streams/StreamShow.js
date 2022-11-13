import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchStream } from "../../actions";

function StreamShow(props) {
  const dispatch = useDispatch();
  const param = useParams();

  useEffect(() => {
    dispatch(fetchStream(param.id));
  }, []);

  const selectedStream = useSelector((state) => state.streams[param.id]);
  return (
    <div>
      <h1>{selectedStream.title}</h1>
      <h5>{selectedStream.description}</h5>
    </div>
  );
}

export default StreamShow;
