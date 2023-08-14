'use server'
import { supabase } from '@/supabase'
import { Words } from '@/types/supabase'

export async function fetchWords({
  limit,
}: {
  limit: number
}): Promise<Words[]> {
  let { data: words, error } = await supabase
    .from('words')
    .select()
    .limit(limit)

  return words || []
}
