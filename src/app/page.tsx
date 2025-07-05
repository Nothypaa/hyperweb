import Header from '@/components/Header'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />
      <main className="max-w-6xl mx-auto px-8 py-16">
        <div className="text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
            </svg>
          </div>
          <h1 className="text-5xl font-black text-[#1a1a1a] mb-6 tracking-tight leading-tight font-system">
            The first cloud employee
          </h1>
          <p className="text-xl text-[#6B7280] mb-8 font-medium">
            Uses all your apps for you.
          </p>
        </div>
      </main>
    </div>
  );
}
