import { PropsWithChildren } from 'react'

export const Navigation: React.FC<PropsWithChildren> = ({ children }) => (
  <nav>
    { children }
  </nav>
)
