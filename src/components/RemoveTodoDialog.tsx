import React, { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";

type Props = {};

const RemoveTodoDialog = (props: Props) => {
  return (
    <Transition appear show={false} as={Fragment}>
      <Dialog onClose={()=>{
        
      }} as="div" className="relative z-10">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md p-6 -mt-[6.5rem] overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-800"
                >
                  Update Todo
                </Dialog.Title>
                <div className="mt-4">
                  <input
                    placeholder="Enter new To-do"
                    className="w-full px-3 py-2 border rounded-md outline-none border-slate-500"
                    type="text"
                  />
                </div>

                <div className="flex justify-end mt-6">
                  <button
                    type="button"
                    className="flex items-center gap-2 px-4 py-2 font-semibold duration-300 border border-black rounded-lg hover:bg-slate-100"
                  >
                    Update
                    <img src=" " className="w-5 h-5" alt="" />
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default RemoveTodoDialog;
