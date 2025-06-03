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
            {poll.id}
            <ul>
              {poll.title} : {poll.completed? "true" : "false"}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VotingPoll;

