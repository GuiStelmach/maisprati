import React, { useState, useEffect } from 'react'
import './PostList.css'

const PostList = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  // Função para obter os dados da API com limite
  const fetchPosts = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5') // Limita a 5 posts
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      console.error('Erro ao carregar os posts:', error)
    } finally {
      setLoading(false)
    }
  }

  // useEffect para carregar os posts ao montar o componente
  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="post-list">
      <h1>Lista de Posts</h1>
      
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id} className="post-item">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}

      <button onClick={fetchPosts} className="reload-button">
        Recarregar Posts
      </button>
    </div>
  )
}

export default PostList
