/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import {
  MusicalNoteIcon,
  CheckIcon,
  ChevronUpDownIcon,
} from '@heroicons/react/24/solid';
import { PhotoIcon } from '@heroicons/react/24/outline';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const people = [
  { id: 1, name: 'Alternative Rock' },
  { id: 2, name: 'Ambient' },
  { id: 3, name: 'Classical' },
  { id: 4, name: 'Country' },
  { id: 5, name: 'Dance & EDM' },
  { id: 6, name: 'Dancehall' },
  { id: 7, name: 'Deep House' },
  { id: 8, name: 'Disco' },
  { id: 9, name: 'Drum & Bass' },
  { id: 10, name: 'Electric' },
  { id: 11, name: 'Folk' },
  { id: 12, name: 'Hip-hop & Rap' },
  { id: 13, name: 'House' },
  { id: 14, name: 'Indie' },
  { id: 15, name: 'Jazz & Blues' },
  { id: 16, name: 'Metal' },
  { id: 17, name: 'Pop' },
  { id: 18, name: 'R&B & Soul' },
  { id: 19, name: 'Rock' },
  { id: 20, name: 'Trap' },
  { id: 21, name: 'World' },
  { id: 22, name: 'None' },
];

export default function Upload() {
  const [selected, setSelected] = useState(people[3]);
  return (
    <form>
      <div className="space-y-8">
        <div className="">
          <div className="mt-5 grid grid-cols-1 text-center gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full  border border-radius-2 rounded-lg border-purple-500 pb-12 ml-3 mr-3 bg-black">
              <label
                htmlFor="username"
                className="block text-lg font-medium leading-6 pt-5 text-white"
              >
                Fork Song
              </label>
              <div className="mt-3 pb-3 flex justify-center">
                <div className="flex justify-center items-center w-5/6 text-center rounded-lg  ring-1 ring-inset ring-black focus:outline-none shadow-sm border border-purple-500">
                  <span className="flex select-none items-center pl-3 pr-3 text-white sm:text-sm ">
                    songfork.com/
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block bg-black w-full border-0 py-1.5 pl-1 text-white placeholder:text-gray-400 focus-within:ring-0 focus-within:ring-inset ring-black focus:outline-none sm:text-sm sm:leading-6 "
                    placeholder="URL"
                  />

                  <button
                    type="button"
                    className=" bg-transparent rounded-r-md px-6 py-2.5 text-sm font-semibold text-white   hover:bg-purple-400 hover:text-black"
                  >
                    Fork
                  </button>
                </div>
              </div>
            </div>

            <div className="col-span-full p-5">
              <label
                htmlFor="cover-photo"
                className="block text-lg  font-medium leading-6 text-gray-900"
              >
                Upload Song
              </label>
              <div className="mt-5 flex justify-center rounded-lg border border-dashed border-black px-6 py-10">
                <div className="text-center">
                  <MusicalNoteIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-purple-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-purple-600 focus-within:ring-offset-2 hover:text-purple-600"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    MP3, WAV, AIFF up to 100MB
                  </p>
                </div>
              </div>
              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Title
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3  ">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900 "
                    >
                      Permalink
                    </label>
                    <div className="mt-2 flex items-center w-5/6 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6 focus:outline-none">
                      <span className="flex select-none items-center pl-3 pr-3 text-gray-500 sm:text-sm ">
                        songfork.com/
                      </span>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"
                        className="block bg-transparent border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus-within:ring-0 focus-within:ring-inset ring-black focus:outline-none sm:text-sm sm:leading-6"
                        placeholder="URL"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <Listbox value={selected} onChange={setSelected}>
                      {({ open }) => (
                        <>
                          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
                            Genre
                          </Listbox.Label>
                          <div className="relative mt-2">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 sm:text-sm sm:leading-6">
                              <span className="block truncate">
                                {selected.name}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Transition
                              show={open}
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {people.map((person) => (
                                  <Listbox.Option
                                    key={person.id}
                                    className={({ active }) =>
                                      classNames(
                                        active
                                          ? 'bg-purple-600 text-white'
                                          : 'text-gray-900',
                                        'relative cursor-default select-none py-2 pl-3 pr-9',
                                      )
                                    }
                                    value={person}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <span
                                          className={classNames(
                                            selected
                                              ? 'font-semibold'
                                              : 'font-normal',
                                            'block truncate',
                                          )}
                                        >
                                          {person.name}
                                        </span>

                                        {selected ? (
                                          <span
                                            className={classNames(
                                              active
                                                ? 'text-white'
                                                : 'text-purple-600',
                                              'absolute inset-y-0 right-0 flex items-center pr-4',
                                            )}
                                          >
                                            <CheckIcon
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Listbox>
                  </div>

                  <div className="sm:col-span-3  ">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Additional tags
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900 "
                    >
                      Description
                    </label>
                    <input
                      type="text"
                      id="large-input"
                      className="block mt-2 w-full h-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-md"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="cover-photo"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Upload Album Art
                    </label>
                    <div className="mt-2 h-full flex justify-center rounded-lg border border-dashed border-black px-6 py-10">
                      <div className="text-center">
                        <PhotoIcon
                          className="mx-auto h-8 w-8 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600 ">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-purple-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-purple-600 focus-within:ring-offset-2 hover:text-purple-600"
                          >
                            <span>Upload a photo</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">
                          JPEG, PNG up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Privacy:
          </h2>

          <div className="mt-2 space-y-5">
            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                className="w-4 h-4  accent-purple-500"
              />
              <label
                htmlFor="bordered-checkbox-1"
                className="w-full py-4 ms-2 text-sm font-medium text-black dark:text-black"
              >
                Public
              </label>
            </div>
            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
              <input
                checked
                id="bordered-checkbox-2"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                className="w-4 h-4 accent-purple-500"
              />
              <label
                htmlFor="bordered-checkbox-2"
                className="w-full py-4 ms-2 text-sm font-medium text-black dark:text-black"
              >
                Private
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-purple-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
