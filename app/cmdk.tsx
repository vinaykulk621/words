'use client'

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'

import React from 'react'
import words from './words';

export default function Cmdk({ }) {

  let gay: Array<string> = []
  for (let i = 0; i <= 2000; i++) {
    gay.push(words[Math.floor(Math.random() * words.length)]);
  }

  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && e.ctrlKey) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          {gay.map(e => {
            return <CommandItem key={Math.random() * 68524578}>{e}</CommandItem>
          })}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
