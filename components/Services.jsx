import {services} from '@/data/data'
import Image from 'next/image'
const Services = () => {
  return (
    <section>
        <div className="container">
            <div className="text-center mb-20">
                <h1>We Provide Best</h1>
                <p className="description">Take high quality online courses from the best online instructors <br /> around the world & develop your skills.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-20'>
                {services.map((service) => (
                    <div key={service.id} className="w-full h-full bg-white p-10">
                        <div className=" flex items-center justify-center bg-white p- shadow-xl w-28 h-28 mb-16 rounded-md">
                            <Image src={service.icon} alt="service"  width={59} height={59}/>
                        </div>
                        <div className="w-full">
                            <h2>{service.title}</h2>
                            <p className='text-gray-500 text-lg pr-16'>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
export default Services