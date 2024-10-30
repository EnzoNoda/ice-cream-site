import Image from 'next/image'
import HeaderGlobal from '../components/Header'
import { FaClock, FaLocationDot, FaPhone } from 'react-icons/fa6'
import { IoMail } from 'react-icons/io5'

const Contatos = () => {
    return (
        <main className="bg-primary-200 h-screen pb-20 overflow-auto ">
            <HeaderGlobal />
            <div className="flex flex-col justify-center items-center">
                <section className="flex justify-center items-center mt-32 h-40">
                    <h2 className="text-[40px] font-fredoka text-primary-400">
                        Contatos
                    </h2>
                </section>

                <section className="flex flex-col sm:flex-row justify-center items-start mt-20 h-auto gap-5 sm:gap-14 mx-20 max-w-[900px]">
                    <div className="flex flex-col justify-center items-start w-72">
                        <div className="flex justify-center items-center p-3 bg-primary-400 rounded-full mb-4">
                            <FaPhone />
                        </div>
                        <p className="text-[20px] font-bold font-fredoka text-primary-400 text-justify">
                            Phone
                        </p>
                        <p className="text-[18px] font-fredoka text-primary-400 text-justify">
                            +1 (234) 567 89 00
                        </p>
                        <p className="text-[18px] font-fredoka text-primary-400 text-justify">
                            +1 (234) 567 89 01
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-start w-72">
                        <div className="flex justify-center items-center p-3 bg-primary-400 rounded-full mb-4">
                            <IoMail size={18} />
                        </div>
                        <p className="text-[20px] font-bold font-fredoka text-primary-400 text-justify">
                            Email
                        </p>
                        <p className="text-[18px] font-fredoka text-primary-400 text-justify">
                            mr.snowman@email.com
                        </p>
                        <p className="text-[18px] font-fredoka text-primary-400 text-justify">
                            mr.snowman@email.com
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-start w-72">
                        <div className="flex justify-center items-center p-3 bg-primary-400 rounded-full mb-4">
                            <FaLocationDot />
                        </div>
                        <p className="text-[20px] font-bold font-fredoka text-primary-400 text-justify">
                            Address
                        </p>
                        <p className="text-[18px] font-fredoka text-primary-400 text-justify">
                            176 Spring St, New York, NY 10012
                        </p>
                        <p className="text-[18px] font-fredoka text-primary-400 text-justify">
                            United States
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-start w-72">
                        <div className="flex justify-center items-center p-3 bg-primary-400 rounded-full mb-4">
                            <FaClock />
                        </div>
                        <p className="text-[20px] font-bold font-fredoka text-primary-400 text-justify">
                            Working Hours
                        </p>
                        <p className="text-[18px] font-fredoka text-primary-400 text-justify">
                            Mon – Thu: 10:00 AM – 11 PM
                        </p>
                        <p className="text-[18px] font-fredoka text-primary-400 text-justify">
                            Sat - Sun : 11:00 AM – 11 PM
                        </p>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Contatos
