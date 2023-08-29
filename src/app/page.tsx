export default function Home() {
  return (
    <div className="h-screen bg-slate-800 p-4 text-slate-100  ">
      <h1 className="text-5x text-5xl   gap-3 font-bold before:h-12 before:w-1 before:bg-blue-500 flex text-center ">Hello Tailwind</h1>
      <h2>Hello Tailwind</h2>
      <p>Hello Tailwind</p>
      <button disabled={false} className="bg-sky-500 px-4 py-2 rounded-md font-medium  mt-4 hover:bg-sky-700 transition-[300] disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-sky-700">Sing In</button>
    </div>
  );
}
