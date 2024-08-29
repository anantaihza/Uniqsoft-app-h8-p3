import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

interface TypeChildren {
  children: React.ReactNode;
}

export default function ServerProtected({ children }: TypeChildren) {
  const cookiesStore = cookies();

  const token = cookiesStore.get('Authorization');

  if (!token) {
    redirect('/login');
  }

  return <>{children}</>;
}
