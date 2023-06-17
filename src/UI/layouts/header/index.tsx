import { PropsWithChildren } from 'react'

export const Header: React.FC<PropsWithChildren> = ({ children }) => (
  <header className="px-2 pt-6">
    { children }
  </header>
)
