"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import Image from "next/image"
import "swiper/css"

interface Client {
    name: string
    logo: string
    width?: number
    height?: number
}

interface LogoSliderProps {
    clients: Client[]
}

export default function LogoSlider({ clients }: LogoSliderProps) {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={50}
                    slidesPerView={5}
                    autoplay={{
                        delay: 1,
                        disableOnInteraction: false,
                    }}
                    speed={3000}
                    loop={true}
                    breakpoints={{
                        0: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                    }}
                >
                    {clients.map((client) => (
                        <SwiperSlide key={client.name}>
                            <div className="relative h-16 w-full mx-auto" style={{
                                maxWidth: client.width || 150,
                                height: client.height || 60
                            }}>
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    fill
                                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                    sizes="(max-width: 768px) 100px, 150px"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}