export type TextAreaProps = React.ComponentProps<'textarea'>

export function TextArea({ ...props }: TextAreaProps) {
  return (
    <textarea
      {...props}
      className=" outline-none focus:border-violet-300 focus-within:ring-4 focus:ring-violet-100 min-h-[120px] resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
    ></textarea>
  )
}
