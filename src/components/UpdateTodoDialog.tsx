import { Fragment, useContext, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

// react context
import { AppContext } from "../context/Provider";
import { ModalContext } from "../context/ModalContext";

const UpdateTodoDialog = () => {
  const [todoTitle, setTodoTitle] = useState<string>();

  const context = useContext(AppContext);
  const modalContext = useContext(ModalContext);

  useEffect(() => {
    setTodoTitle(context?.selectedTodo?.title);
  }, [context]);

  function updateHandler() {
    context?.updateTodoHandler(context.selectedTodo, todoTitle);
    modalContext?.handleUpdateClose();
  }

  function submitHandler() {
    context?.finishedHandler(context.selectedTodo);
    modalContext?.handleUpdateClose();
  }

  return (
    <Transition appear show={modalContext?.isUpdateOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => modalContext?.handleUpdateClose()}
      >
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
                    onChange={(e) => setTodoTitle(e.target.value)}
                    value={todoTitle}
                    placeholder="Enter new To-do"
                    className="w-full px-3 py-2 border rounded-md outline-none border-slate-500"
                    type="text"
                  />
                </div>

                <div className="flex justify-end gap-2 mt-6">
                  <button
                    onClick={updateHandler}
                    type="button"
                    className="flex items-center gap-2 px-5 py-2 font-semibold tracking-wider text-black duration-300 bg-white border border-black rounded-lg hover:bg-gray-100"
                  >
                    Update
                  </button>
                  <button
                    onClick={submitHandler}
                    type="button"
                    className="flex items-center gap-2 px-5 py-2 font-semibold tracking-wider text-white duration-300 bg-black border rounded-lg hover:bg-gray-800"
                  >
                    Mark as finished
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

export default UpdateTodoDialog;
