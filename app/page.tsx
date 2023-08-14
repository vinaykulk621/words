import { LoadMore } from './load-more'

export default async function Home() {
  return (
    <div className="bg-black px-10 pb-5 text-white">
      <div className="flex justify-center py-60 font-spotify text-lg md:text-2xl xl:text-3xl">
        This website is a simple implementation of Infinte-scroll in Next js 13
        using server actions.
      </div>
      <LoadMore />
    </div>
  )
}
