import { Words } from '@/types/supabase'

export default function EachWord({ words: words }: { words: Words[] }) {
  return (
    <div className="flex flex-wrap justify-around space-x-3 first:pl-5">
      {words?.map((e: any) => {
        return <span key={e.id}>{e.word}</span>
      })}
    </div>
  )
}
