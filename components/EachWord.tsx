import { Words } from '@/types/supabase'

export default function EachWord({ words: words }: { words: Words[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center space-x-3">
      {words?.map((e: any) => {
        return <span key={e.id}>{e.word}</span>
      })}
    </div>
  )
}
