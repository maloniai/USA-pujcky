import { redirect } from 'next/navigation'

/**
 * Czech Apply Page Redirect
 * 
 * This page redirects to /cz/zadost (Czech word for "application")
 * The navigation uses /apply as the standard path, but Czech customers
 * should use the localized /zadost path for better UX
 */
export default function CzechApplyRedirect() {
  redirect('/cz/zadost')
}
