import { useEffect, useState } from 'react'
import { useCounterStore } from '../store/useCounterStore'

const Home = () => {
  const [message, setMessage] = useState('Loading...')
  const { count, increase, decrease } = useCounterStore()

  useEffect(() => {
    setTimeout(() => {
      setMessage('Hello World')
    }, 500)
  }, [])

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-semibold">{message}</h2>

      <p className="text-gray-700">
        Counter (Zustand): <span className="font-bold">{count}</span>
      </p>

      <button
        onClick={increase}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Increase
      </button>
      <button
        onClick={decrease}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Decrease
      </button>
    </div>
  )
}

export default Home
