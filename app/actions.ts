'use server'
import { supabase } from '@/supabase'

export async function fetchWords({ limit }: { limit: number }) {
  let { data: words, error } = await supabase
    .from('words')
    .select()
    .limit(limit)

  return words
}
