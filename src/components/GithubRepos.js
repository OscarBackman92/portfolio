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
    <section className="min-h-screen py-24 bg-gray-900 text-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold mb-6 animate-fade-in">My GitHub Projects</h2>
        <p className="text-lg text-gray-300 mb-8 animate-slide-up">
          Here are some of the projects I've been working on. I love building web applications and experimenting with new technologies!
        </p>
        {loading ? <p className="animate-pulse">Loading projects...</p> : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {repos.map((repo, index) => (
              <div 
                key={repo.id} 
                className="bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
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
