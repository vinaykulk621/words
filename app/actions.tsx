'use server'
import supabase from '@/supabase'

export async function fetchWords({ limit }: { limit: number }) {
    let { data: words, error } = await supabase.from('words').select().limit(limit)

    return {
        words: (
            <div className="flex flex-wrap items-center justify-center space-x-3">
                {words?.map((e) => {
                    return <span key={e.id}>{e.word}</span>
                })}
            </div>
        )
    }
}
