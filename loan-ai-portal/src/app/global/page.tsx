import { redirect } from 'next/navigation';

// Global directory has been moved to the root page
// This route now redirects to maintain any existing links
export default function GlobalDirectoryRedirect() {
  redirect('/');
}
