import RegisterForm from '@/components/form/RegisterForm'
import { getPatient, getUser } from '@/lib/actions/patient.action'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from "next/navigation";
import React from 'react'

const Register = async ({params: {userId}}: SearchParamProps) => {

    const user = await getUser(userId);
    const patient = await getPatient(userId);
  
    
    if (patient) redirect(`/patients/${userId}/new-appointment`);

  return (
    <div className="flex h-screen max-h-screen">
    <section className="remove-scrollbar container ">
      <div className="sub-container mx-w-[860px] flex-col py-10 xl:px-32 ">
        <Image
          src="/assets/icons/logo-full.svg"
          height={1000}
          width={1000}
          alt="patient"
          className="mb-12 h-10 w-fit"
        />
        <RegisterForm user={user}  />
        <div className="text-14-regular mt-10  pb-5 fle justify-center  flex ">
          <p className="justify-items-end text-dark-600 xl:text-left">© 2024 HealthPlus</p>
        </div>
      </div>
    </section>

    <Image 
      src="/assets/images/register-img.png"
      width={1000}
      height={1000}
      alt="patient"
      className="side-img max-w-[390px]"
    />
  </div>
  )
}

export default Register