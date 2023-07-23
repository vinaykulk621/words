import Loader from '@/components/loader'
import Cmdk from '../components/cmdk'
import { fetchWords } from '@/app/actions'
import { useInfiniteQuery } from '@tanstack/react-query'


export default async function Home() {
  const { words } = await fetchWords({ limit: 1000 })

  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ['query'],
    async ({ pageParam = 1 }) => {
      const { words } = await fetchWords({ limit: 1000 })
      return words
    }, {
    getNextPageParam: (_, pages) => {
      return pages.length + 1
    },
    initialData: {
      pages: [words],
      pageParams: [1]
    }
  }
  )
  return (
    <>
      <div className="flex h-fit flex-col items-center justify-center bg-black text-justify text-white">
        {words}
        <Loader />
      </div>
      <Cmdk />
    </>
  )
}
