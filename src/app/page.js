import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      {/* Top Horizontal Row */}
      <div className="row top-row">
        <Image src="/1.jpg" alt="Image 1" width={100} height={100} className="top-image" />
        <Image src="/2.jpg" alt="Image 2" width={100} height={100} className="top-image" />
        <Image src="/3.jpg" alt="Image 3" width={100} height={100} className="top-image" />
        <Image src="/4.jpg" alt="Image 4" width={100} height={100} className="top-image" />
      </div>

      {/* Right Vertical Row */}
      <div className="column right-column">
        <Image src="/4.jpg" alt="Image 4" width={100} height={100} className="right-image" />
        <Image src="/5.jpg" alt="Image 5" width={100} height={100} className="right-image" />
        <Image src="/6.jpg" alt="Image 6" width={100} height={100} className="right-image" />
        <Image src="/7.jpg" alt="Image 7" width={100} height={100} className="right-image" />
      </div>

      {/* Bottom Horizontal Row */}
      <div className="row bottom-row">
        <Image src="/7.jpg" alt="Image 7" width={100} height={100} className="bottom-image" />
        <Image src="/8.jpg" alt="Image 8" width={100} height={100} className="bottom-image" />
        <Image src="/9.jpg" alt="Image 9" width={100} height={100} className="bottom-image" />
        <Image src="/10.jpg" alt="Image 10" width={100} height={100} className="bottom-image" />
      </div>

      {/* Main Content */}
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2">Get started by editing <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded">src/app/page.js</code>.</li>
          <li>Save and see your changes instantly.</li>
        </ol>
      </main>
    </div>
  );
}
