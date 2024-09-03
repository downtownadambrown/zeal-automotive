"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

function Modal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");

  return (
    <>
      {modal &&
                <dialog
                  className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                  <div className="bg-white m-auto p-8">
                    <div className="flex flex-col items-center">
                      <ContactForm isModal />
                    </div>
                  </div>
                </dialog>
      }
    </>
  );
}

export default Modal;