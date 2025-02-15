import React, { useEffect, useState } from 'react';

function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/oscarbackman92/repos');
        const data = await response.json();
        
        if (response.ok) {
          const sortedRepos = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
          setRepos(sortedRepos);
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
    <section className="py-16 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">My GitHub Repositories</h2>
        <h3 className="text-xl font-semibold text-gray-800">Project 1</h3>
        <p className="text-gray-700 mt-2">A description of the first project will go here. You can include the technologies used, challenges faced, and the final outcome.</p>
          <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 mt-4 block">View on GitHub</a>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div key={repo.id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-200">
              <h3 className="text-xl font-semibold text-gray-800">{repo.name}</h3>
              <p className="text-gray-700 mt-2">{repo.description || 'No description available'}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 mt-4 block">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GitHubRepos;
