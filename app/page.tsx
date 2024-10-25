import Image from 'next/image'
import HeaderGlobal from './components/Header'
import { SwiperComponent } from './components/Swiper'
import { TabsComponent } from './components/Tabs'

export default function Home() {
    return (
        <main className="bg-primary-200 h-screen overflow-auto scroll-smooth">
            <HeaderGlobal />
            <div
                id="section1"
                className="container mx-auto p-4  z-10 pt-60 sm:pt-36 "
            >
                <div className="relative flex justify-end mt-10">
                    <div className="flex absolute flex-col text-white  top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-44  justify-center items-center z-20">
                        <h5 className="text-lg sm:text-3xl font-fredoka">
                            Welcome to:
                        </h5>
                        <div className="flex justify-center items-center rounded-3xl p-3 bg-primary-300">
                            <h2 className="text-4xl sm:text-7xl font-fredoka ">
                                Mr.Frozen
                            </h2>
                        </div>
                        <div className=" flex w-2/3 flex-col mt-10 sm:flex-row justify-center items-center gap-5 ">
                            <button className="transition-colors ease-in-out duration-300 bg-primary-500 font-fredoka px-4 py-2 rounded-md sm:text-3xl hover:text-primary-300 hover:bg-white">
                                Menu
                            </button>
                            <button className="transition-colors ease-in-out duration-300 bg-primary-500 font-fredoka px-4 py-2 rounded-md sm:text-3xl hover:text-primary-300 hover:bg-white">
                                About
                            </button>
                        </div>
                    </div>
                    <div className=" relative h-[350px] w-[150px] sm:h-[450px] sm:w-[200px] md:h-[600px] md:w-[250px] z-10 rotate-[15deg] mr-14 sm:mr-32">
                        <Image
                            src="/cone.png"
                            alt="cone"
                            fill
                            className="object-cover "
                        />
                    </div>
                    <div className="absolute top-40 right-20 sm:right-48 w-36 h-36 sm:w-96 sm:h-96 rounded-3xl rotate-[60deg] bg-primary-400 z-0" />
                </div>
            </div>

            <div className="h-[60%] flex justify-center items-center flex-col sm:flex-row sm: px-10 bg-primary-200 mt-80 gap-10">
                <div className="flex relative items-center h-44 sm:h-96 bg-red-400 w-10/12 sm:w-3/4 rounded-xl">
                    <h2 className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-primary-300 rounded-md p-2">
                        Milkshakes
                    </h2>
                    <Image
                        src="/milkshake.jpg"
                        alt="milkshake"
                        className="object-cover rounded-xl"
                        fill
                    />
                </div>
                <div className="flex relative items-center h-44 sm:h-96 bg-red-400 w-10/12 sm:w-3/4  rounded-xl">
                    <h2 className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-primary-300 rounded-md p-2">
                        Cups
                    </h2>
                    <Image
                        src="/hands.jpg"
                        alt="milkshake"
                        className="object-cover rounded-xl"
                        fill
                    />
                </div>
                <div className="flex relative items-center h-44 sm:h-96 bg-red-400 w-10/12 sm:w-3/4  rounded-xl">
                    <h2 className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-fredoka text-2xl bg-primary-300 rounded-md p-2">
                        Cones
                    </h2>
                    <Image
                        src="/cupsCone.jpg"
                        alt="milkshake"
                        className="object-cover rounded-xl"
                        fill
                    />
                </div>
            </div>
            <div className="h-[60%] flex justify-center items-center flex-col bg-primary-200 my-44 gap-10 w-[98vw]">
                <h2 className="text-xl font-fredoka text-center text-primary-400">
                    Ice Cream Tastes
                </h2>
                <h2 className="text-2xl font-fredoka text-center text-primary-400">
                    From strawberry to coconut, we have them all!
                </h2>
                <SwiperComponent />
            </div>
            <div className="relative justify-center flex flex-col lg:flex-row object-center items-center mt-10">
                <div className=" relative h-[350px] w-[150px] sm:h-[450px] sm:w-[200px] md:h-[600px] md:w-[250px] z-10 rotate-[35deg] mr-14 sm:mr-32">
                    <Image
                        src="/cone.png"
                        alt="cone"
                        fill
                        className="object-cover "
                    />
                </div>

                <div className="flex flex-col">
                    <h2 className="ml-5 font-bold mb-3 text-base font-fredoka text-primary-400">
                        Ingredients
                    </h2>
                    <h2 className="ml-5 font-bold text-4xl font-fredoka text-primary-400">
                        100% Organic and Natural
                    </h2>
                    <h2 className="ml-5 mb-5 mt-5 text-lg font-fredoka text-primary-400 opacity-85">
                        We use only natural ingredients in our ice cream and
                        desserts.
                    </h2>

                    <ul className="list-none pl-5">
                        <li className="-ml-2 mb-2 mt-2 font-bold text-lg font-fredoka text-primary-400">
                            🍦 Farm milk from local households;
                        </li>
                        <li className="-ml-2 mb-2 mt-2 font-bold text-lg font-fredoka text-primary-400">
                            🍦 Berry and fruit pieces and whole fruit;
                        </li>
                        <li className="-ml-2 mb-2 mt-2 font-bold text-lg font-fredoka text-primary-400">
                            🍦 No chemical flavors or sweeteners.
                        </li>
                    </ul>

                    <h2 className="ml-5 mb-20 mt-5 text-lg font-fredoka text-primary-400 max-w-md">
                        The recipe for good ice cream is simple: milk, cream,
                        and fruit. And, of course, lots of love! We use
                        traditional recipes and state-of-the-art technology to
                        handcraft the most delicious ice cream in New York!
                    </h2>
                </div>
            </div>

            <div
                id="menu"
                className="flex items-start justify-center h-screen p-32"
            >
                <div className="text-center">
                    <p className="ml-5 mb-3 mt-2 text-base font-fredoka text-primary-400">
                        Our menu
                    </p>
                    <p className="ml-5 mb-5 mt-2 text-4xl font-fredoka text-primary-400">
                        Featured Desserts & Treats
                    </p>
                    <p className="ml-5 mb-10 mt-2 text-lg font-fredoka text-primary-400">
                        Welcome to the sweet tooth paradise!
                    </p>

                    <TabsComponent />
                </div>
            </div>
        </main>
    )
}
