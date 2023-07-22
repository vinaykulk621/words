import Cmdk from "./cmdk";
import words from "./words";

export default function Home() {
  let gay: Array<string> = []
  for (let i = 0; i <= 5000; i++) {
    gay.push(words[Math.floor(Math.random() * words.length)]);
  }

  return (
    <>
      <div className="flex flex-wrap space-x-3 h-fit items-center justify-center bg-black text-white">
        {gay.map(e => {
          return <span key={Math.random() * 68524578}>{e}</span>
        })}
        <Cmdk />
      </div >
    </>
  )
}
