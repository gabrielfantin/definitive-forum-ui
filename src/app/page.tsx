import Thread from './_components/Topic'
import { GrAdd } from 'react-icons/gr'

interface Thread 
{
  id: number;
  title: string;
  created_at: string;
}

export default async function Home() {
  const topics = await (await fetch('http://localhost:8080/threads')).json()

  return (
    <div className={'p-10'}>
      <div className='mb-5 flex justify-between'>
        <div className='flex-0 self-center'>
          <h1 className='text-3xl'>Threads</h1>
        </div>
        <div className='flex-0 place-end'>
          <button className='p-4 bg-gray-300 rounded-xl hover:bg-gray-400'><GrAdd /></button>
        </div>
      </div>
      <div className='text-black rounded-sm space-y-5'>
        {topics.map((topic : Thread) => <Thread title={topic.title} key={topic.id} />)}
      </div>
    </div>
  )
}
