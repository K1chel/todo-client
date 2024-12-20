import { useState } from "react";
import type { JSX } from "react";

export const useConfirm = (
  title: string,
  message: string
): [() => JSX.Element | null, () => Promise<unknown>] => {
  const [promise, setPromise] = useState<{
    resolve: (value: boolean) => void;
  } | null>(null);

  const confirm = () =>
    new Promise((resolve) => {
      setPromise({ resolve });
    });

  const handleClose = () => setPromise(null);

  const handleConfirm = () => {
    promise?.resolve(true);
    handleClose();
  };

  const handleCancel = () => {
    promise?.resolve(false);
    handleClose();
  };

  const ConfirmationDialog = () => {
    if (!promise) return null;

    return (
      <div
        onClick={(e) => {
          e.preventDefault();
          handleCancel();
        }}
        className="bg-black/10 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-black text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden py-12"
        >
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-center mb-2">{title}</h3>
            <p className="text-center mb-6">{message}</p>
            <div className="flex flex-col md:flex-row gap-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleCancel();
                }}
                className="w-full border rounded-md border-gray-700 py-2 hover:opacity-75 transition"
              >
                Cancel
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleConfirm();
                }}
                className="w-full  rounded-md bg-primary py-2 hover:opacity-75 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return [ConfirmationDialog, confirm];
};
