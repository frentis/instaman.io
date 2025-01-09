import { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Heart, Clock, Users, Play } from 'lucide-react'

export default function Dashboard() {
  const [data, setData] = useState([
    { name: 'Day 1', likes: 4000, comments: 2400, posts: 2400 },
    { name: 'Day 2', likes: 3000, comments: 1398, posts: 2210 },
    { name: 'Day 3', likes: 2000, comments: 9800, posts: 2290 },
    { name: 'Day 4', likes: 2780, comments: 3908, posts: 2000 },
    { name: 'Day 5', likes: 1890, comments: 4800, posts: 2181 },
    { name: 'Day 6', likes: 2390, comments: 3800, posts: 2500 },
    { name: 'Day 7', likes: 3490, comments: 4300, posts: 2100 },
  ])

  useEffect(() => {
    // Simulate data fetching or updating
    const interval = setInterval(() => {
      const newData = data.map((entry, index) => ({
        ...entry,
        likes: entry.likes + Math.floor(Math.random() * 100),
        comments: entry.comments + Math.floor(Math.random() * 50),
        posts: entry.posts + Math.floor(Math.random() * 10),
      }))
      setData(newData)
    }, 5000)

    return () => clearInterval(interval)
  }, [data])

  return (
    <div className="bg-white min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Instagram Activity Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center">
            <Heart className="w-10 h-10 mr-4 text-red-500" />
            <div>
              <h2 className="text-xl font-bold">Likes</h2>
              <p className="text-gray-500">Total: {data.reduce((acc, curr) => acc + curr.likes, 0)}</p>
            </div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center">
            <Users className="w-10 h-10 mr-4 text-blue-500" />
            <div>
              <h2 className="text-xl font-bold">Comments</h2>
              <p className="text-gray-500">Total: {data.reduce((acc, curr) => acc + curr.comments, 0)}</p>
            </div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center">
            <Play className="w-10 h-10 mr-4 text-green-500" />
            <div>
              <h2 className="text-xl font-bold">Posts</h2>
              <p className="text-gray-500">Total: {data.reduce((acc, curr) => acc + curr.posts, 0)}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Activity Over Time</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="likes" stroke="#ff6347" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="comments" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="posts" stroke="#82ca9d" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
