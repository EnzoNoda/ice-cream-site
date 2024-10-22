'use client'
import Image from 'next/image'
import { useState } from 'react'

export const TabsComponent = () => {
    const [activeTab, setActiveTab] = useState(1)

    return (
        <>
            <button
                onClick={() => setActiveTab(1)}
                className={`px-5 py-2 ${
                    activeTab === 1
                        ? 'text-blue-500 border-b-2 border-blue-500 font-bold'
                        : 'text-gray-500 hover:text-blue-500'
                } focus:outline-none`}
            >
                Desserts
            </button>

            <button
                onClick={() => setActiveTab(2)}
                className={`px-5 py-2 ${
                    activeTab === 2
                        ? 'text-blue-500 border-b-2 border-blue-500 font-bold'
                        : 'text-gray-500 hover:text-blue-500'
                } focus:outline-none`}
            >
                Ice Cream
            </button>

            <button
                onClick={() => setActiveTab(3)}
                className={`px-5 py-2 ${
                    activeTab === 3
                        ? 'text-blue-500 border-b-2 border-blue-500 font-bold'
                        : 'text-gray-500 hover:text-blue-500'
                } focus:outline-none`}
            >
                Drinks
            </button>

            {activeTab === 1 && (
                <div className="mt-5 tab-content mb-10" id="tab1">
                    <div className="h-[60%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-10 bg-primary-200 mt-10">
                        <div className="flex relative justify-center items-center h-80 sm:h-[300px] sm:w-[250px] bg-cyan-800 w-full lg:h-[300px] lg:w-[300px] rounded-xl">
                            <Image
                                src="/sweetJoy.png"
                                alt="sweetJoy"
                                width={200}
                                height={200}
                            />
                            <h2 className="text-white absolute z-20 top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-cyan-800 rounded-md p-2 whitespace-nowrap">
                                Sweet Joy/
                                <span className="text-yellow-400">$15</span>
                            </h2>
                        </div>

                        <div className="flex relative justify-center items-center h-80 sm:h-[300px] sm:w-[250px] bg-cyan-800 w-full lg:h-[300px] lg:w-[300px] rounded-xl">
                            <Image
                                src="/gentleCloud.png"
                                alt="gentleCloud"
                                width={200}
                                height={200}
                            />
                            <h2 className="text-white absolute z-20 top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-cyan-800 rounded-md p-2 whitespace-nowrap">
                                Gentle Cloud/{' '}
                                <span className="text-yellow-400">$12</span>
                            </h2>
                        </div>

                        <div className="flex relative justify-center items-center h-80 sm:h-[300px] bg-cyan-800 w-full sm:w-[250px] lg:h-[300px] lg:w-[300px] rounded-xl">
                            <Image
                                src="/roseSparkle.png"
                                alt="roseSparkle"
                                width={200}
                                height={200}
                            />
                            <h2 className="text-white absolute z-20 top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-cyan-800 rounded-md p-2 whitespace-nowrap">
                                Rose Sparkle/{' '}
                                <span className="text-yellow-400">$15</span>
                            </h2>
                        </div>

                        <div className="flex relative justify-center items-center h-80 sm:h-[300px] bg-cyan-800 w-full sm:w-[250px] lg:h-[300px] lg:w-[300px] rounded-xl">
                            <Image
                                src="/tropicalDay.png"
                                alt="tropicalDay"
                                width={200}
                                height={200}
                            />
                            <h2 className="text-white absolute z-20 top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-cyan-800 rounded-md p-2 whitespace-nowrap">
                                Tropical Day/{' '}
                                <span className="text-yellow-400">$18</span>
                            </h2>
                        </div>

                        <div className="flex relative justify-center items-center h-80 sm:h-[300px] bg-cyan-800 w-full sm:w-[250px] lg:h-[300px] lg:w-[300px] rounded-xl">
                            <Image
                                src="/hazelnut.png"
                                alt="hazelnut"
                                width={200}
                                height={200}
                            />
                            <h2 className="text-white absolute z-20 top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-cyan-800 rounded-md p-2 whitespace-nowrap">
                                Hazelnut/{' '}
                                <span className="text-yellow-400">$12</span>
                            </h2>
                        </div>

                        <div className="flex relative justify-center items-center h-80 sm:h-[300px] bg-cyan-800 w-full sm:w-[250px] lg:h-[300px] lg:w-[300px] rounded-xl">
                            <Image
                                src="/berryMix.png"
                                alt="berryMix"
                                width={200}
                                height={200}
                            />
                            <h2 className="text-white absolute z-20 top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-cyan-800 rounded-md p-2 whitespace-nowrap">
                                Berry Mix/{' '}
                                <span className="text-yellow-400">$13</span>
                            </h2>
                        </div>

                        <div className="flex relative justify-center items-center h-80 sm:h-[300px] bg-cyan-800 w-full sm:w-[250px] lg:h-[300px] lg:w-[300px] rounded-xl">
                            <Image
                                src="/siesta.png"
                                alt="siesta"
                                width={200}
                                height={200}
                            />
                            <h2 className="text-white absolute z-20 top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-cyan-800 rounded-md p-2 whitespace-nowrap">
                                Siesta/{' '}
                                <span className="text-yellow-400">$15</span>
                            </h2>
                        </div>

                        <div className="flex relative justify-center items-center h-80 sm:h-[300px] bg-cyan-800 w-full sm:w-[250px] lg:h-[300px] lg:w-[300px] rounded-xl">
                            <Image
                                src="/chocoCream.png"
                                alt="chocoCream"
                                width={200}
                                height={200}
                            />
                            <h2 className="text-white absolute z-20 top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-cyan-800 rounded-md p-2 whitespace-nowrap">
                                Choco Cream/{' '}
                                <span className="text-yellow-400">$11</span>
                            </h2>
                        </div>
                    </div>
                </div>
            )}
            {activeTab === 2 && (
                <div className="mt-5 tab-content  mb-10" id="tab2">
                    <div className="h-[60%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-10 bg-primary-200 mt-10">
                        <div className="flex relative justify-center items-center h-80 sm:h-[300px] bg-cyan-800 w-full sm:w-[250px] lg:h-[300px] lg:w-[300px] rounded-xl">
                            <Image
                                src="/lemon.png"
                                alt="lemon"
                                width={110}
                                height={130}
                            />
                            <h2 className="text-white absolute z-20 top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-cyan-800 rounded-md p-2 whitespace-nowrap">
                                Lemon & Lime/{' '}
                                <span className="text-yellow-400">$6</span>
                            </h2>
                        </div>

                        <div className="flex relative justify-center items-center h-80 sm:h-[300px] bg-cyan-800 w-full sm:w-[250px] lg:h-[300px] lg:w-[300px] rounded-xl">
                            <Image
                                src="/blackberry.png"
                                alt="blackberry"
                                width={110}
                                height={130}
                            />
                            <h2 className="text-white absolute z-20 top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-cyan-800 rounded-md p-2 whitespace-nowrap">
                                Blackberry/{' '}
                                <span className="text-yellow-400">$7</span>
                            </h2>
                        </div>

                        <div className="flex relative justify-center items-center h-80 sm:h-[300px] bg-cyan-800 w-full sm:w-[250px] lg:h-[300px] lg:w-[300px] rounded-xl">
                            <Image
                                src="/mango.png"
                                alt="mango"
                                width={110}
                                height={130}
                            />
                            <h2 className="text-white absolute z-20 top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-cyan-800 rounded-md p-2 whitespace-nowrap">
                                Mango/{' '}
                                <span className="text-yellow-400">$5</span>
                            </h2>
                        </div>

                        <div className="flex relative justify-center items-center h-80 sm:h-[300px] bg-cyan-800 w-full sm:w-[250px] lg:h-[300px] lg:w-[300px] rounded-xl">
                            <Image
                                src="/lavender.png"
                                alt="lavender"
                                width={110}
                                height={130}
                            />
                            <h2 className="text-white absolute z-20 top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-cyan-800 rounded-md p-2 whitespace-nowrap">
                                Lavender/{' '}
                                <span className="text-yellow-400">$8</span>
                            </h2>
                        </div>

                        <div className="flex relative justify-center items-center h-80 sm:h-[300px] bg-cyan-800 w-full sm:w-[250px] lg:h-[300px] lg:w-[300px] rounded-xl">
                            <Image
                                src="/vanilla.png"
                                alt="vanilla"
                                width={110}
                                height={130}
                            />
                            <h2 className="text-white absolute z-20 top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-cyan-800 rounded-md p-2 whitespace-nowrap">
                                Vanilla/{' '}
                                <span className="text-yellow-400">$4</span>
                            </h2>
                        </div>

                        <div className="flex relative justify-center items-center h-80 sm:h-[300px] bg-cyan-800 w-full sm:w-[250px] lg:h-[300px] lg:w-[300px] rounded-xl">
                            <Image
                                src="/chocolate.png"
                                alt="chocolate"
                                width={110}
                                height={130}
                            />
                            <h2 className="text-white absolute z-20 top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-cyan-800 rounded-md p-2 whitespace-nowrap">
                                Chocolate/{' '}
                                <span className="text-yellow-400">$5</span>
                            </h2>
                        </div>

                        <div className="flex relative justify-center items-center h-80 sm:h-[300px] bg-cyan-800 w-full sm:w-[250px] lg:h-[300px] lg:w-[300px] rounded-xl">
                            <Image
                                src="/strawberry.png"
                                alt="strawberry"
                                width={110}
                                height={130}
                            />
                            <h2 className="text-white absolute z-20 top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-cyan-800 rounded-md p-2 whitespace-nowrap">
                                Strawberry/{' '}
                                <span className="text-yellow-400">$5</span>
                            </h2>
                        </div>

                        <div className="flex relative justify-center items-center h-80 sm:h-[300px] bg-cyan-800 w-full sm:w-[250px] lg:h-[300px] lg:w-[300px] rounded-xl">
                            <Image
                                src="/pistachio.png"
                                alt="pistachio"
                                width={110}
                                height={130}
                            />
                            <h2 className="text-white absolute z-20 top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-cyan-800 rounded-md p-2 whitespace-nowrap">
                                Pistachio/{' '}
                                <span className="text-yellow-400">$5</span>
                            </h2>
                        </div>
                    </div>
                </div>
            )}
            {activeTab === 3 && (
                <div className="mt-5 tab-content mb-10" id="tab3">
                    <div className="h-[60%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-10 bg-primary-200 mt-10">
                        <div className="flex relative justify-center items-center h-80 sm:h-[300px] bg-cyan-800 w-full sm:w-[250px] lg:h-[300px] lg:w-[300px] rounded-xl">
                            <Image
                                src="/strawberryShake.png"
                                alt="strawberryShake"
                                width={120}
                                height={120}
                            />
                            <h2 className="text-white absolute z-20 top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-cyan-800 rounded-md p-2 whitespace-nowrap">
                                Strawberry/{' '}
                                <span className="text-yellow-400">$10</span>
                            </h2>
                        </div>

                        <div className="flex relative justify-center items-center h-80 sm:h-[300px] bg-cyan-800 w-full sm:w-[250px] lg:h-[300px] lg:w-[300px] rounded-xl">
                            <Image
                                src="/caramelShake.png"
                                alt="caramelShake"
                                width={120}
                                height={120}
                            />
                            <h2 className="text-white absolute z-20 top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-cyan-800 rounded-md p-2 whitespace-nowrap">
                                Caramel/{' '}
                                <span className="text-yellow-400">$8</span>
                            </h2>
                        </div>

                        <div className="flex relative justify-center items-center h-80 sm:h-[300px] bg-cyan-800 w-full sm:w-[250px] lg:h-[300px] lg:w-[300px] rounded-xl">
                            <Image
                                src="/berryShake.png"
                                alt="berryShake"
                                width={120}
                                height={120}
                            />
                            <h2 className="text-white absolute z-20 top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-cyan-800 rounded-md p-2 whitespace-nowrap">
                                Berry Shake/{' '}
                                <span className="text-yellow-400">$12</span>
                            </h2>
                        </div>

                        <div className="flex relative justify-center items-center h-80 sm:h-[300px] bg-cyan-800 w-full sm:w-[250px] lg:h-[300px] lg:w-[300px] rounded-xl">
                            <Image
                                src="/chocoChocoShake.png"
                                alt="chocoChocoShake"
                                width={120}
                                height={120}
                            />
                            <h2 className="text-white absolute z-20 top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-cyan-800 rounded-md p-2 whitespace-nowrap">
                                Choco-Choco/{' '}
                                <span className="text-yellow-400">$9</span>
                            </h2>
                        </div>

                        <div className="flex relative justify-center items-center h-80 sm:h-[300px] bg-cyan-800 w-full sm:w-[250px] lg:h-[300px] lg:w-[300px] rounded-xl">
                            <Image
                                src="/mangoShake.png"
                                alt="mangoShake"
                                width={120}
                                height={120}
                            />
                            <h2 className="text-white absolute z-20 top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-cyan-800 rounded-md p-2 whitespace-nowrap">
                                Mango Shake/{' '}
                                <span className="text-yellow-400">$8</span>
                            </h2>
                        </div>

                        <div className="flex relative justify-center items-center h-80 sm:h-[300px] bg-cyan-800 w-full sm:w-[250px] lg:h-[300px] lg:w-[300px] rounded-xl">
                            <Image
                                src="/orangeShake.png"
                                alt="orangeShake"
                                width={120}
                                height={120}
                            />
                            <h2 className="text-white absolute z-20 top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-cyan-800 rounded-md p-2 whitespace-nowrap">
                                Orange Shake/{' '}
                                <span className="text-yellow-400">$9</span>
                            </h2>
                        </div>

                        <div className="flex relative justify-center items-center h-80 sm:h-[300px] bg-cyan-800 w-full sm:w-[250px] lg:h-[300px] lg:w-[300px] rounded-xl">
                            <Image
                                src="/bananaShake.png"
                                alt="bananaShake"
                                width={120}
                                height={120}
                            />
                            <h2 className="text-white absolute z-20 top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-cyan-800 rounded-md p-2 whitespace-nowrap">
                                Banana Shake/{' '}
                                <span className="text-yellow-400">$8</span>
                            </h2>
                        </div>

                        <div className="flex relative justify-center items-center h-80 sm:h-[300px] bg-cyan-800 w-full sm:w-[250px] lg:h-[300px] lg:w-[300px] rounded-xl">
                            <Image
                                src="/iceLatteShake.png"
                                alt="iceLatteShake"
                                width={120}
                                height={120}
                            />
                            <h2 className="text-white absolute z-20 top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-cyan-800 rounded-md p-2 whitespace-nowrap">
                                Ice Latte/{' '}
                                <span className="text-yellow-400">$10</span>
                            </h2>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
