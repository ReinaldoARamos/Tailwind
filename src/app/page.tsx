import { SettingsTabs } from './components/SettingsTabs'
import {
  InputControls,
  InputPrefix,
  InputRoot,
} from './components/sidebar/input'

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
          className="mt-6 flex flex-col w-full gap-5 "
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
                ></InputControls>
              </InputRoot>
              <InputRoot>
                <InputControls defaultValue={'Ramos'}></InputControls>
              </InputRoot>
            </div>
          </div>
          <div className="grid gap-3 grid-cols-form">
            <label
              htmlFor="firtsName"
              className="text-sm font-medium text-zinc-700"
            >
              Email
            </label>
            <div className="grid gap-6 grid-cols-2">
              <InputRoot>
                <InputControls
                  id="Email"
                  defaultValue={'Gamersolitavi4l@gmail.com'}
                  typeof="email"
                ></InputControls>
              </InputRoot>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
