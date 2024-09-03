"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaCircleCheck } from "react-icons/fa6";

const InputField = ({ className, type, label, name, value, onChange, big, error, showErrors }: { className?: string; type?: string; label: string; name?: string; value: number | string; onChange: (e: React.SyntheticEvent) => void; big?: boolean; error?: string; showErrors: boolean }) => {
    if (big) {
      return (
        <div className={`flex flex-col ${className} px-4`}>
          <label className="uppercase">{label}</label>
          <textarea className="w-full" rows={4} name={name} value={value} onChange={onChange} />
        </div>
      )
    }

    const errorText = (
        <div className="flex text-sm text-red-500 h-4">{error}</div>
    )

    return (
      <div className={`flex flex-col ${className} px-4`}>
        <label className="uppercase">{label}</label>
        <input className="w-full" type={type} name={name} value={value} onChange={onChange} />
        {showErrors && !!error && errorText}
      </div>
    )
}

const validateEmail = (value: string) => !!String(value)
    .toLowerCase()
    .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const defaultFormData = {
    name: "",
    email: "",
    phone: "",
    make: "",
    model: "",
    mileage: "",
    info: "",
}

const ContactForm = ({ isModal }: { isModal?: boolean }) => {
    const [formData, setFormData] = useState(defaultFormData)
    const [isValid, setIsValid] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [showErrors, setShowErrors] = useState(false);
    const [errors, setErrors] = useState<Record<string, string | undefined>>(defaultFormData)
    const pathname = usePathname();

    const cancelButton = (
        <Link href={pathname} scroll={false}>
            <button className="submit-button flex mt-8 mx-4 py-4 px-8 self-start uppercase font-bold">
                Cancel
            </button>
        </Link>
    )

    const submitForm = async () => {
        await fetch("/api/send", {
            method: "POST",
            body: JSON.stringify(formData),
        }).then(res => {
            if (res.status == 200) {
                setIsSent(true);
            }
        });
    }

    const validateField = (name: string, value: string) => {
        let error = "";
        switch(name) {
            case "name":
                if (value.length >= 1 && value.length <= 64) {
                    setIsValid(true);
                } else {
                    setIsValid(false);
                    error = "Invalid name length entered."
                }
                setErrors({
                    ...errors,
                    [name]: error,
                });
                return;
            case "email":
                const isEmailValid = validateEmail(value);
                if (!isEmailValid) {
                    error = "Invalid email format entered."
                }
                setIsValid(isEmailValid);
                setErrors({
                    ...errors,
                    [name]: error,
                });
                return;
            case "phone":
                // setIsValid(true);
                return;
            case "make":
                // setIsValid(true);
                return;
            case "model":
                // setIsValid(true);
                return;
            case "mileage":
                if (value.length == 0 || Number.isInteger(value)) {
                    if (Number(value) >= 0 && Number(value) <= 2000000) {
                        setIsValid(true)
                    } else {
                        setIsValid(false);
                        error = "Invalid mileage entered."
                    }
                } else {
                    setIsValid(true);
                }
                setErrors({
                    ...errors,
                    [name]: error,
                });
                return;
            case "info":
                if (value.length >= 0 && value.length < 256) {
                    setIsValid(true)
                } else {
                    error = "Character length exceeded"
                    setIsValid(false)
                }
                setErrors({
                    ...errors,
                    [name]: error,
                });
                return;
        }
    }

    const handleInputChange = (e: React.SyntheticEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const htmlElement = e.target as HTMLInputElement
        setFormData({
            ...formData,
            [htmlElement.name]: htmlElement.value,
        })
        validateField(htmlElement.name, htmlElement.value)
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("isValid: ", isValid)
        if (!isValid) {
            validateField("name", formData.name)
            validateField("email", formData.email)
            validateField("phone", formData.phone)
            setShowErrors(true);
            return;
        } else {
            setShowErrors(false);
            submitForm();
        }
    }

    if (isSent) {
        return (
            <div className="flex w-full h-72 items-center justify-center flex-col">
                <span className="text-3xl">Sent</span>
                <FaCircleCheck color="green" size="40" />
            </div>
        )
    }

    return (
        <form className="flex flex-col px-4 py-8">
            <div className="uppercase mx-4 text-4xl mb-4">Contact Us</div>
            <div className="mx-4">We want to hear from you!<br/>Please provide us with your name, email, and phone number below and we will contact you as soon as possible.</div>
            <div className="flex flex-col md:flex-row mt-8">
                <InputField error={errors.name} showErrors={showErrors} className="w-full md:w-1/3 pb-4 md:pb-0" label="Name:" type="text" name="name" value={formData.name} onChange={handleInputChange} />
                <InputField error={errors.email} showErrors={showErrors} className="w-full md:w-1/3 pb-4 md:pb-0" label="Email:" type="text" name="email" value={formData.email} onChange={handleInputChange} />
                <InputField error={errors.phone} showErrors={showErrors} className="w-full md:w-1/3 pb-4 md:pb-0" label="Phone:" type="text" name="phone" value={formData.phone} onChange={handleInputChange}  />
            </div>
            <div className="flex flex-col md:flex-row md:mt-8">
                <InputField error={errors.make} showErrors={showErrors} className="w-full md:w-1/3 pb-4 md:pb-0" label="Vehicle Make:" type="text" name="make" value={formData.make} onChange={handleInputChange} />
                <InputField error={errors.model} showErrors={showErrors} className="w-full md:w-1/3 pb-4 md:pb-0" label="Vehicle Model:" type="text" name="model" value={formData.model} onChange={handleInputChange} />
                <InputField error={errors.mileage} showErrors={showErrors} className="w-full md:w-1/3 pb-4 md:pb-0" label="Mileage:" type="number" name="mileage" value={formData.mileage} onChange={handleInputChange} />
            </div>
            <div className="flex flex-col md:flex-row md:mt-8">
                <InputField big error={errors.info} showErrors={showErrors} className="w-full" label="Any Additional Information?" name="info" value={formData.info} onChange={handleInputChange} />
            </div>
            <div className="flex flex-row justify-between">
                <button className="submit-button flex mt-8 mx-4 py-4 px-8 self-start uppercase font-bold" onClick={handleSubmit}>Submit</button>
                {!!isModal && cancelButton}
            </div>
        </form>
    )
}

export default ContactForm;