import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

interface TypeChildren {
  children: React.ReactNode;
}

export default function ServerPublic({ children }: TypeChildren) {
  const cookiesStore = cookies();

  const token = cookiesStore.get('Authorization');

  if (token) redirect('/');

  return <>{children}</>;
}
