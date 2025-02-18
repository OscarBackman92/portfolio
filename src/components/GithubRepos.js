import React, { useEffect, useState } from 'react';

function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch('https://api.github.com/users/oscarbackman92/repos');
      const data = await response.json();
      setRepos(data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)));
      setLoading(false);
    };
    fetchRepos();
  }, []);

  return (
    <section className="py-16 bg-gray-900 text-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-6">My GitHub Repositories</h2>
        {loading ? <p>Loading...</p> : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <div key={repo.id} className="bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-200">
                <h3 className="text-xl font-semibold">{repo.name}</h3>
                <p className="text-gray-300 mt-2">{repo.description || 'No description available'}</p>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 mt-4 block">
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default GitHubRepos;
