'use client'

import NoSSR from '@/app/utils/no-ssr'
import { useMediaQuery } from 'react-responsive'
import { useState, useEffect, useCallback } from 'react'
import Button from '../../ui/Button'
import { Link } from '@/app/components/essentials/Link'
import Container from '../Container'
import Logo from '../../resources/Logo'
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri'
import clsx from 'clsx'
interface NavigationData {
  label: string
  slug: string
}

const navigation: NavigationData[] = [
  {
    label: 'Hem',
    slug: '/',
  },
  {
    label: 'Tjänster',
    slug: '/tjanster',
  },
  {
    label: 'Om oss',
    slug: '/om-oss',
  },
  {
    label: 'Kontakt',
    slug: '/kontakt',
  },
  {
    label: 'Offert',
    slug: '/offert',
  },
]

/* Desktop version of header */
function DesktopHeader() {
  return (
    <nav className="flex items-center gap-8">
      <ul className="flex w-max gap-8 [&>li]:font-semibold">
        {navigation.slice(0, -1).map((nav) => (
          <li key={nav.label}>
            <Link href={nav.slug}>{nav.label}</Link>
          </li>
        ))}
      </ul>
      <div className="w-max">
        <Button href="/offert" variants="primary">
          Få offert
        </Button>
      </div>
    </nav>
  )
}

/* Mobile version of header */
function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    document.body.classList.toggle('no-scroll')
    const main = document.getElementsByTagName('main')[0]
    main.classList.toggle('menu-open')
    // main.style.filter = isOpen ? 'brightness(1)' : 'brightness(0.5)';
    setIsOpen((prev) => !prev)
  }, [isOpen])

  return (
    <div className="relative">
      <div
        className="absolute right-0 z-10 flex h-full cursor-pointer items-center"
        onClick={toggleMenu}
      >
        {!isOpen ? (
          <RiMenu3Fill size={32} color="var(--tertiary-color)" />
        ) : (
          <RiCloseFill size={32} color="var(--tertiary-color)" />
        )}
      </div>

      <div
        className={`fixed left-0 top-0 h-max w-full transform bg-tertiary-accent opacity-0
          drop-shadow-xl transition-all duration-200
          ${isOpen ? 'translate-y-[90px] opacity-100' : 'pointer-events-none -translate-y-full'}`}
      >
        <ul className="flex h-full flex-col items-center gap-0.5">
          {navigation.map((item, index) => (
            <li
              key={index}
              className="flex w-full items-center justify-center bg-primary-accent p-5"
            >
              <Link
                className="h-full w-full text-xl font-semibold"
                onClick={toggleMenu}
                href={item.slug}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function HeaderClient() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const infoHeaderHeight = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--info-header-height'),
      )
      if (window.scrollY > infoHeaderHeight) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={clsx(
        'sticky top-0 z-[9999] flex h-header w-full items-center',
        isSticky ? 'bg-primary-accent' : 'bg-transparent',
        'transition-colors duration-200 ease-in-out',
      )}
    >
      <Container className="flex h-full items-center justify-between">
        <Logo backToHome={true} />
        <div className="hidden md:block">
          <DesktopHeader />
        </div>
        <div className="block md:hidden">
          <MobileHeader />
        </div>
      </Container>
    </header>
  )
}
