import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Clients = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-16 font-mulish" id="clients">
            <h2 className="text-3xl font-bold text-center mb-10 text-[#1A043F]">Our Clients</h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
                <ClientLogo href="https://www.mochishoes.com/" src="/client-one.webp" alt="Moni Shoes" width={600} height={276} />
                <ClientLogo href="https://www.facebook.com/MoneezaLuggage/" src="/client-two.jpg" alt="⁠Moneeza Luggage" width={600} height={275} />
                <ClientLogo href="https://www.instagram.com/chicoobabyworldofficial/?hl=en" src="/client-three.jpg" alt="⁠Chicoo Baby World" width={600} height={275} />
               
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
