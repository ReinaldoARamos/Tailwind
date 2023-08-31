export default function Home() {
  return (
    <div className="dark: flex h-screen flex-col items-center  bg-slate-50 p-4 text-center  text-slate-900 dark:bg-slate-900 dark:text-slate-100 ">
      <div className="max-w-2xl ">
        <h1 className="gap-3  text-3xl font-bold  sm:text-5xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
        </h1>

        <p className="mt-2 dark:text-slate-400 ">
          nhsadiojhsadokasjhdlaiskjdhasliduhasdkljash
          dliasuaaaaaaaaaaaaaaaaaaaaaaaaaasuhjdflaksjhdfliakjsfhaklsjfhaslkfjhaklsjfh
        </p>
        <button
          disabled={false}
          className="mt-4 rounded-md bg-sky-500 px-4 py-2 font-medium text-white  transition-[300] enabled:hover:bg-sky-700 disabled:cursor-not-allowed disabled:bg-sky-700 disabled:opacity-50 dark:bg-sky-400 dark:text-sky-950"
        >
          Sing In
        </button>
      </div>
    </div>
  )
}
