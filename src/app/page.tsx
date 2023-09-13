import {
  Bold,
  Italic,
  Link,
  List,
  ListOrdered,
  LogOut,
  Mail,
} from 'lucide-react'
import { SettingsTabs } from './components/SettingsTabs'
import {
  InputControls,
  InputPrefix,
  InputRoot,
} from './components/sidebar/input'
import * as Form from './components/Form/FileInput'
import { SelectedItem } from './components/Form/FileInput/Select/SelectItem'
import { TextArea } from './components/TextArea'
import { Button } from './components/Button'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />
      <div className="mt-6 flex flex-col  ">
        <div className="flex flex-col  lg:flex-row   lg:justify-between pb-5 lg:items-center border-b border-zinc-200">
          <div className="space-y-1 items-start ">
            <h2 className="text-lg font-medium text-zinc-900 ">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500">
              {' '}
              Update your personal info
            </span>
          </div>
          <div className="flex items center gap-2 ">
            <Button variant="outline"> Cancel</Button>
            <Button>Save</Button>
          </div>
        </div>

        <form
          id="settings"
          action=""
          className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200"
        >
          <div className="lg:grid gap-3 lg:grid-cols-form flex flex-col">
            <label
              htmlFor="firtsName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid gap-6 grid-cols-2 ">
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

          <div className="lg:grid gap-3 lg:grid-cols-form  flex flex-col pt-5">
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

          <div className="lg:grid gap-3 lg:grid-cols-form  flex flex-col pt-5">
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

          <div className="lg:grid gap-3 lg:grid-cols-form  flex flex-col pt-5">
            <label
              htmlFor="role"
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
          <div className="lg:grid gap-3 lg:grid-cols-form  flex flex-col pt-5">
            <label
              htmlFor="Country"
              className="text-sm font-medium text-zinc-700 "
            >
              Country
            </label>
            <div className="grid gap-6 grid-cols-2">
              <Form.SelectForm placeholder="Select a Country">
                <SelectedItem text="Brazil" value="br" />
                <SelectedItem text="United States" value="us" />
                <SelectedItem text="Russia" value="ur" />
              </Form.SelectForm>
            </div>
          </div>
          <div className="lg:grid gap-3 lg:grid-cols-form  flex flex-col pt-5">
            <label
              htmlFor="Country"
              className="text-sm font-medium text-zinc-700 "
            >
              Country
            </label>
            <div className="grid gap-6 grid-cols-2">
              <Form.SelectForm placeholder="Select a Timezone">
                <SelectedItem
                  text="Pacific Standard Time (UTC-08:00)"
                  value="pacific"
                />
                <SelectedItem
                  text="America São Paulo Standard Time (UTC-03:00)"
                  value="sao-paulo"
                />
              </Form.SelectForm>
            </div>
          </div>
          <div className="lg:grid gap-3 lg:grid-cols-form  flex flex-col pt-5">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700  space-y-0.5 "
            >
              Bio
              <span className=" block text-sm font-normal text-zinc-500">
                Write a short introduction to yourself
              </span>
            </label>
            <div className="space-y-13">
              <div className="grid gap-3 grid-cols-2 ">
                <Form.SelectForm value="normal" placeholder="">
                  <SelectedItem text="Normal" value="normal" />
                  <SelectedItem text="Markdown" value="markdown" />
                </Form.SelectForm>
                <div className="flex item-center gap-1 ">
                  <Button variant="ghost">
                    <Bold className="w-4 h-4text-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost">
                    <Italic className="w-4 h-4 text-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost">
                    <Link className="w-4 h-4 text-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost">
                    <List className="w-4 h-4 text-500" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost">
                    <ListOrdered className="w-4 h-4 text-500" strokeWidth={3} />
                  </Button>
                </div>
                <TextArea
                  id="bio"
                  defaultValue={
                    "I'm a front end dev with focus on react and next.js"
                  }
                />
              </div>
            </div>
          </div>

          <div className="lg:grid gap-3 lg:grid-cols-form  flex flex-col pt-5">
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

          <div className="flex items-center lg:justify-end pt-5 gap-3">
            <Button variant="outline">Cancel</Button>
            <Button type="submit" form="settings">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
