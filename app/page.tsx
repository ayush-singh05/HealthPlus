import PatientForm from "@/components/form/PatientForm";
import { PassKeyModel } from "@/components/PassKeyModel";

import Image from "next/image";
import Link from "next/link";

export default function Home({searchParams} : SearchParamProps) {
  const isAdmin = searchParams.admin === 'true';

  return (
    <div className="flex h-screen max-h-screen">
      {
        isAdmin && <PassKeyModel/>
      }
    <section className="remove-scrollbar container my-auto">
      <div className="sub-container mx-w-[496px] ">
        <Image
          src="/assets/icons/healthPLus-logo.png"
          height={1000}
          width={1000}
          alt="patient"
          className="mb-12 h-10 w-fit"
        />
        <PatientForm/>
        
        <div className="text-14-regular mt-20 fle justify-between flex ">
          <p className="justify-items-end text-dark-600 xl:text-left">© 2024 HealthPlus</p>
          <Link href="/?admin=true" className="text-green-500  ">
            Admin
          </Link>
        </div>
      </div>
    </section>

    <Image 
      src="/assets/images/onboarding-img.png"
      width={1000}
      height={1000}
      alt="patient"
      className="side-img max-w-[50%]"
    />
  </div>
  );
}
