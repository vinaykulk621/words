import { LoadMore } from './load-more'

export default async function Home() {
  return (
    <div className="flex h-fit flex-col items-center justify-center bg-black pb-5 text-justify text-white">
      <LoadMore />
    </div>
  )
}
