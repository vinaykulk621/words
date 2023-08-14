import { createClient } from '@supabase/supabase-js'
import { Words } from '@/types/supabase'

export const supabase = createClient<Words>(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
)

// generating Types
// https://www.youtube.com/VSNgAIObBdw
