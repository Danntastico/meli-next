'use client'

import "@/styles/components/searchbar.scss"
import { IconSearch } from '@tabler/icons-react'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useState } from "react"

export default function SearchBar({ queryParams }) {
  const router = useRouter()

  const [query, setQuery] = useState(queryParams || '')

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  const pushToItems = () => router.push(`/items?q=${query}`)

  return (
    <header className="topbar">
      <div className="topbar-content">
        <Link className="topbar-logo" href="/">
          <Image
            src="/logo_meli.png"
            alt="Mercado Libre Logo"
            width={60}
            height={40}
            style={{ objectFit: 'cover' }}
          />
        </Link>
        <div className="topbar-search">
          <input
            autoComplete="off"
            className='topbar-search-input'
            value={query}
            name="query"
            onChange={handleInputChange}
            onKeyDown={e => e.key === 'Enter' && pushToItems()}
            placeholder="Nunca dejes de buscar"
          />
        </div>
        <button
          className="topbar-search-button"
          onClick={() => pushToItems()}
        >
          <IconSearch color="gray" />
        </button>
      </div>
    </header>
  )
}
