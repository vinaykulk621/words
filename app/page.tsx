import Cmdk from '../components/cmdk'
import { fetchWords } from '@/app/actions'
import { LoadMore } from './load-more'

export default async function Home() {
  const words = await fetchWords({ limit: 1000 })

  return (
    <>
      <div className="flex h-fit flex-col items-center justify-center bg-black pb-5 text-justify text-white">
        {
          <div className="flex flex-wrap items-center justify-center space-x-3">
            {words?.map((e: any) => {
              return <span key={e.id}>{e.word}</span>
            })}
          </div>
        }
        <LoadMore />
      </div>
      <Cmdk />
    </>
  )
}
