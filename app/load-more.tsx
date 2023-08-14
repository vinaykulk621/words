'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { fetchWords } from './actions'
import Loader from '@/components/loader'
import { Database } from '@/types/supabase'

export function LoadMore() {
  const [beers, setBeers] = useState<Database[]>([])
  const [page, setPage] = useState(1)

  const { ref, inView } = useInView()

  const loadMoreBeers = async () => {
    const nextPage = page + 1000
    const newProducts = (await fetchWords({ limit: nextPage })) ?? []
    setBeers((prevProducts: Database[]) => [...prevProducts, ...newProducts])
    setPage(nextPage)
  }

  useEffect(() => {
    if (inView) {
      console.log('Working')

      // loadMoreBeers()
    }
  }, [inView])

  return (
    <>
      <div
        className="col-span-1 flex items-center justify-center p-4 sm:col-span-2 md:col-span-3"
        ref={ref}
      >
        <Loader />
      </div>
    </>
  )
}
