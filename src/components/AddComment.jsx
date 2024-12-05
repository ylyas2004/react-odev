import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import server_url from '../services/config';

function AddComment() {
  const { id: venueId } = useParams();  // Extract venueId from the route params
  const navigate = useNavigate();

  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState("");
  const [rating, setRating] = useState("5");
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  // Handle username input change
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Handle rating input change
  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  // Handle comment text input change
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // Submit comment to the backend
  const onSubmit = async (evt) => {
    evt.preventDefault();  // Prevent the default form submission

    if (!username) {
      setError("Username is required");
      return;
    }

    if (!venueId) {
      setError("Venue ID is missing. Please ensure the venue is selected.");
      return;
    }

    const commentData = {
      author: username,
      rating: parseInt(rating),
      text: text,
    };

    try {
      // Make API call to add comment
      const response = await fetch(`${server_url}/api/venues/${venueId}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentData),
      });

      if (response.ok) {
        // Redirect or show success message
        navigate(`/venue/${venueId}`);
      } else {
        setError("Failed to add comment");
      }
    } catch (error) {
      console.error("Error adding comment:", error);
      setError("An error occurred while submitting your comment.");
    }
  };

  return (
    <>
      <Header headerText="Add Comment" motto="mekanına yorum yap" />
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <form
            className="form-horizontal"
            id="yorumEkle"
            onSubmit={onSubmit}  // Form submit will trigger the onSubmit function
          >
            {error && <div className="alert alert-danger">{error}</div>}

            {/* Username Input - If not logged in */}
            {!logged && (
              <div className="form-group">
                <label className="col-xs-10 col-sm-2 control-label">
                  Kullanıcı Adı:
                </label>
                <div className="col-xs-12 col-sm-4">
                  <input
                    type="text"
                    className="form-control input-sm"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                  />
                </div>
              </div>
            )}

            {/* Rating Input */}
            <div className="form-group">
              <label className="col-xs-10 col-sm-2 control-label">
                Puan:
              </label>
              <div className="col-xs-12 col-sm-2">
                <select
                  className="form-control input-sm"
                  id="rating"
                  name="rating"
                  value={rating}
                  onChange={handleRatingChange}
                >
                  <option value="5">5</option>
                  <option value="4">4</option>
                  <option value="3">3</option>
                  <option value="2">2</option>
                  <option value="1">1</option>
                  <option value="0">0</option>
                </select>
              </div>
            </div>

            {/* Comment Text Input */}
            <div className="form-group">
              <label className="col-sm-2 control-label">Yorum:</label>
              <div className="col-sm-10">
                <textarea
                  className="review form-control"
                  name="text"
                  rows={5}
                  value={text}
                  onChange={handleTextChange}
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-default pull-right">
              Yorum Ekle
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddComment;