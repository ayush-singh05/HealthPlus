
import StatsCard from '@/components/StatsCard';
import { columns } from '@/components/table/columns';
import DataTable from '@/components/table/DataTable';
import { getRecentAppointmentList } from '@/lib/actions/appointment.action';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Admin = async () => {
    const appointments = await getRecentAppointmentList();
    console.log('Appointments:', appointments);

    return (
        <div className='mx-auto max-w-7xl space-y-14 '>
            <header className='admin-header'>
                <Link href="/" className='cursor-pointer'>
                    <Image
                        src="/assets/icons/healthPLus-logo.png"
                        height={32}
                        width={162}
                        alt='logo'
                        className='h-8 w-fit'
                    />
                </Link>

                <p className='text-16-semibold'>Admin Dashboard</p>
            </header>
            <main className='admin-main'>
                <section className='w-full space-y-14'>
                    <h1 className='header'>Welcome 👋</h1>
                    <p className='text-dark-700'>Start the day with managing new appointments</p>
                </section>

                <section className='admin-stat'>
                    <StatsCard
                        type="scheduled"
                        count={appointments?.scheduledCount || 0}
                        label="Scheduled appointments"
                        icon="/assets/icons/appointments.svg"
                    />
                    <StatsCard
                        type="pending"
                        count={appointments?.pendingCount || 0}
                        label="Pending appointments"
                        icon="/assets/icons/pending.svg"
                    />
                    <StatsCard
                        type="cancelled"
                        count={appointments?.cancelledCount || 0}
                        label="Cancelled appointments"
                        icon="/assets/icons/cancelled.svg"
                    />
                </section>
                <DataTable columns={columns} data={Array.isArray(appointments?.documents) ? appointments.documents : []} />
            </main>
        </div>
    );
}

export default Admin;
