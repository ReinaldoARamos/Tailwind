import { Mail } from 'lucide-react'
import { SettingsTabs } from './components/SettingsTabs'
import {
  InputControls,
  InputPrefix,
  InputRoot,
} from './components/sidebar/input'
import * as Form from './components/Form/FileInput'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />
      <div className="mt-6 flex flex-col  ">
        <div className="flex justify-between pb-5 items-center border-b border-zinc-200">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              {' '}
              Update your personal info
            </span>
          </div>
          <div className="flex items center gap-2 ">
            <button className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border-zinc-300 text-zinc-700 hover:bg-zinc-50 ">
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>

        <form
          id="settings"
          action=""
          className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200"
        >
          <div className="grid gap-3 grid-cols-form">
            <label
              htmlFor="firtsName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid gap-6 grid-cols-2">
              <InputRoot>
                <InputControls
                  id="FirtsName"
                  defaultValue={'Reinaldo'}
                  type="text"
                ></InputControls>
              </InputRoot>
              <InputRoot>
                <InputControls defaultValue={'Ramos'}></InputControls>
              </InputRoot>
            </div>
          </div>
          <div className="grid gap-3 grid-cols-form  pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 "
            >
              Email
            </label>
            <div className="grid gap-6 grid-cols-2">
              <InputRoot>
                <InputPrefix>
                  <Mail className="h-5 w-5 text-zinc-500" />
                </InputPrefix>
                <InputControls
                  id="Email"
                  defaultValue={'Gamersolitavi4l@gmail.com'}
                  type="email"
                ></InputControls>
              </InputRoot>
            </div>
          </div>

          <div className="grid gap-3 grid-cols-form  pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700  space-y-0.5 "
            >
              Your Photo
              <span className=" block text-sm font-normal text-zinc-500">
                This will be displayed on your profile
              </span>
            </label>

            <Form.Root className="flex items-start gap-5 ">
              <Form.ImagePreview />
              <Form.Trigger />
              <Form.Control />
            </Form.Root>
          </div>

          <div className="grid gap-3 grid-cols-form  pt-5">
            <label
              htmlFor="firtsName"
              className="text-sm font-medium text-zinc-700 "
            >
              Role
            </label>
            <div className="grid gap-6 grid-cols-2">
              <InputRoot>
                <InputControls
                  id="role"
                  defaultValue={'Admin'}
                  type="text"
                ></InputControls>
              </InputRoot>
            </div>
          </div>

          <div className="grid gap-3 grid-cols-form  pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700 "
            >
              Country
            </label>
            <div></div>
          </div>
          <div className="grid gap-3 grid-cols-form  pt-5">
            <label
              htmlFor="time-zone"
              className="text-sm font-medium text-zinc-700 "
            >
              Time Zone
            </label>
            <div></div>
          </div>

          <div className="grid gap-3 grid-cols-form  pt-5">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700  space-y-0.5 "
            >
              Bio
              <span className=" block text-sm font-normal text-zinc-500">
                Write a short introduction to yourself
              </span>
            </label>
            <div></div>
          </div>

          <div className="grid gap-3 grid-cols-form  pt-5">
            <label
              htmlFor="portfolio"
              className="text-sm font-medium text-zinc-700  space-y-0.5 "
            >
              Portfolio
              <span className=" block text-sm font-normal text-zinc-500">
                Share a few snippets of your work
              </span>
            </label>
            <Form.Root>
              <Form.Trigger />
              <Form.FileList />
              <Form.Control multiple />
            </Form.Root>
          </div>

          <div className="flex items-center justify-end pt-5">
            <button className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border-zinc-300 text-zinc-700 hover:bg-zinc-50 ">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
