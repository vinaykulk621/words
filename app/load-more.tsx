'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { fetchWords } from './actions'
import Loader from '@/components/loader'
import { Words } from '@/types/supabase'
import EachWord from '@/components/EachWord'

export function LoadMore() {
  const [words, setWords] = useState<Words[]>([])
  const [page, setPage] = useState(1000)

  const { ref, inView } = useInView()

  const loadMoreWords = async () => {
    const nextPage = page + 1000
    console.log('nextPagen', nextPage)
    const newWords = (await fetchWords({ limit: nextPage })) ?? []
    setWords([...newWords])
    setPage(nextPage)
  }

  useEffect(() => {
    if (inView) {
      console.log('Working')
      console.log(page)
      loadMoreWords()
    }
  }, [inView])

  return (
    <>
      <EachWord words={words} />
      <div
        className="col-span-1 flex items-center justify-center p-4 sm:col-span-2 md:col-span-3"
        ref={ref}
      >
        <Loader />
      </div>
    </>
  )
}
