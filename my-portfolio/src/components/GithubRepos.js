import React, { useEffect, useState } from 'react';

function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/OscarBackman92/repos');
        const data = await response.json();
        
        if (response.ok) {
          setRepos(data);
        } else {
          setError('Failed to fetch repos');
        }
      } catch (err) {
        setError('An error occurred while fetching repos');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return <p>Loading repositories...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">My GitHub Repositories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <div key={repo.id} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-semibold">{repo.name}</h3>
            <p>{repo.description || 'No description provided'}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 inline-block">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GitHubRepos;
