import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboards, setLeaderboards] = useState([]);
  const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboards/`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setLeaderboards(results);
        console.log('Fetched leaderboards:', results);
        console.log('API endpoint:', apiUrl);
      })
      .catch(err => console.error('Error fetching leaderboards:', err));
  }, [apiUrl]);

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4 text-success fw-bold">Leaderboard</h2>
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-success">
              <tr>
                <th>#</th>
                <th>Team</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {leaderboards.map((entry, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{entry.team && entry.team.name ? entry.team.name : 'Team'}</td>
                  <td>{entry.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
