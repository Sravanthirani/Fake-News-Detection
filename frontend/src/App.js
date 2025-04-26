import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function FactChecker() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false); // Track if a search has been made

  const fetchFactCheck = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setResults([]);
    setSearched(true); // Set searched to true when a search is initiated

    try {
      const res = await axios.post("http://localhost:5000/api/fact-check", { query });
      console.log("Raw API Response:", res.data);// We can actually check out the raw data the google fact check api is producing
      setResults(res.data.claims || []);
    } catch (error) {
      console.error("Error fetching fact check:", error);
      setError("Failed to fetch data.");
    }

    setLoading(false);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">🕵️‍♀️ Fake News Detector</h2>
      
      {/* Input field */}
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter news to check (e.g., 'Covid vaccines cause infertility')"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary" onClick={fetchFactCheck}>
          Check Fact
        </button>
      </div>

      {/* Loading state */}
      {loading && <p className="text-info">Loading results...</p>}
      
      {/* Error state */}
      {error && <p className="text-danger">{error}</p>}
      
      {/* Display "No results" only after a search and no results are found */}
      {searched && !loading && results.length === 0 && query && (
        <p className="text-muted">🔍 No fact-checking data found for this claim.</p>
      )}

      {/* Display results */}
      {results.map((claim, idx) => (
        <div key={idx} className="card mb-3 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Claim: {claim.text}</h5>
            <p className="card-text"><strong>Claimed by:</strong> {claim.claimant || 'Unknown'}</p>

            {claim.claimReview?.length > 0 ? (
              claim.claimReview.map((review, i) => (
                <div key={i} className="border-top pt-2 mt-2">
                  <p className="mb-1">
                    <strong>Source:</strong> {review.publisher?.name || 'Unknown'}
                  </p>
                  <p className="mb-1">
                    <strong>Rating:</strong>{' '}
                    {review.textualRating ? (
                      <span className="badge bg-info text-dark">{review.textualRating}</span>
                    ) : (
                      <span className="text-muted">No rating provided</span>
                    )}
                  </p>
                  <a href={review.url} target="_blank" rel="noopener noreferrer">
                    🔗 Read Full Review
                  </a>
                </div>
              ))
            ) : (
              <p className="text-muted mt-2">No reviews available for this claim.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FactChecker;
