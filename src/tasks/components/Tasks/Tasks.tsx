'use client';
import * as React from 'react'
import { loadTasks } from '@lib/tasks/actions/loadTasks';

export const Tasks = () => {
  const [tasks, setTasks] = React.useState<{ name: string  }[]>([])

  const handleLoad = async () => {
    const t = await loadTasks();
    setTasks(t)
  }

    return (
        <>
          <button onClick={handleLoad} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Load
          </button>

          {tasks.map((task) => (
            <div key={task.name}>
              <h1>{task.name}</h1>
            </div>
          ))}
        </>
    )
}