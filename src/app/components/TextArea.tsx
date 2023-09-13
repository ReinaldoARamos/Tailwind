export type TextAreaProps = React.ComponentProps<'textarea'>

export function TextArea({ ...props }: TextAreaProps) {
  return (
    <textarea
      {...props}
      className=" outline-none focus:border-violet-300 focus-within:ring-4 focus:ring-violet-100 min-h-[120px] resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:focus:border-b-violet-500 dark:focus:ring-violet-500/20 dark:text-zinc-100 dark:placeholder:text-zinc-100"
    ></textarea>
  )
}
