import Sidebar from './components/Sidebar';

export default function Home() {
  return (
    <main className='flex h-screen w-screen items-center justify-start capitalize font-bold'>
      <Sidebar />
      Dashboard
    </main>
  );
}
