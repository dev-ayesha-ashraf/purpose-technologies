import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Clients = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-16 font-mulish">
            <h2 className="text-3xl font-bold text-center mb-10 text-[#1A043F]">Our Clients</h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                <ClientLogo href="https://odeonpay.com/" src="https://ajarpay.com.pk/wp-content/uploads/2024/08/logo-1-e1722940709989.png" alt="OdeonPay" width={600} height={276} />
                <ClientLogo href="https://quantumlode.com/" src="https://ajarpay.com.pk/wp-content/uploads/2024/08/QUANTUMLODE_Actual_Logo-removebg-preview.png" alt="Quantum Lode" width={486} height={480} />
                <ClientLogo href="https://momme.pk/" src="https://ajarpay.com.pk/wp-content/uploads/2024/10/mome-1024x422.png" alt="Momme" width={1024} height={422} />
                <ClientLogo href="https://phinnovative.com/" src="https://ajarpay.com.pk/wp-content/uploads/2024/10/Screenshot-2024-10-03-at-6.26.02%E2%80%AFPM.png" alt="Phinnovative" width={686} height={224} />
            </div>
        </section>
    )
}

export default Clients

function ClientLogo({ href, src, alt, width, height }: { href: string; src: string; alt: string; width: number; height: number }) {
    return (
        <Link href={href} target="_blank" rel="noopener noreferrer" className="block transition-transform hover:scale-105">
            <div className="relative w-full h-24 flex items-center justify-center">
                <img src={src} alt={alt} width={width} height={height} className="max-h-20 w-auto object-contain" />
            </div>
        </Link>
    )
}
