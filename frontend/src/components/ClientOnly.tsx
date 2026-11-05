import { useSyncExternalStore, type ReactNode } from "react"

type ClientOnlyProps = {
  children: ReactNode
  fallback?: ReactNode
}

// Aucun abonnement réel : on veut seulement savoir où l'on s'exécute.
const subscribe = () => () => {}

/**
 * Affiche son contenu uniquement dans le navigateur.
 * Pendant le prerendering (au build) et l'hydratation, c'est le fallback
 * qui est rendu ; le vrai contenu apparaît juste après.
 */
export default function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const isBrowser = useSyncExternalStore(
    subscribe,
    () => true,   // dans le navigateur
    () => false,  // au build (prerendering) et pendant l'hydratation
  )

  return isBrowser ? children : fallback
}