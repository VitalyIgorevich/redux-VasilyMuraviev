import { useEffect } from "react";
import { useState } from "react";



const SingleComments = (data) => {
  const [commentText, setCommentText] = useState('');
  const {text, id} = data;

  useEffect(() => {
    if (text) {
      setCommentText(text)
    }
  }, [text])
  
  return (
    <div className="card-comments">
      <form action="">
        <div className="comments-item-delete">&times;</div>
        <input type="text" value={commentText} />
        <input type="submit" hidden />
      </form>
    </div>
  );
};

export default SingleComments;
