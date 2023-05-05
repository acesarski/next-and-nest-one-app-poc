'use client';
import * as React from 'react'
import { loadTasks } from '@lib/tasks/actions/loadTasks';

export const Tasks = () => {
  const [tasks, setTasks] = React.useState<{ name: string  }[]>([])
  const [isLoading, setIsLoading] = React.useState(false);


  const handleLoad = async () => {
    setIsLoading(true)

    const t = await loadTasks(true);
    setTasks(t)
    setIsLoading(false)
  }

    return (
        <>
          <button onClick={handleLoad} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {isLoading ? 'Loading...' : 'Load'}
          </button>

          {tasks.map((task) => (
            <div key={task.name}>
              <h1>{task.name}</h1>
            </div>
          ))}
        </>
    )
}