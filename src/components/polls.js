import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VotingPoll = () => {
  const [pollData, setPollData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setPollData(result.data);
    };

    fetchData();
  }, []);

  if (!pollData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Polls:</h2>
      <ul>
        {(pollData).map((poll) => (
          <li>
            <div className="card" width="18rem;">
              <img className="card-img-top" src="..." alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">{poll.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VotingPoll;

