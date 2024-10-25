import HeaderGlobal from '../components/Header'

const Sobre = () => {
    return (
        <main className="bg-primary-200 h-screen overflow-auto ">
            <HeaderGlobal />
            <div className="flex flex-col justify-center items-center">
                <section className="flex justify-center items-center mt-32 h-40">
                    <h2 className="text-[40px] font-fredoka text-primary-400">
                        Sobre Nós
                    </h2>
                </section>
                <section className="flex flex-col sm:flex-row justify-center items-start mt-20 h-auto gap-5 sm:gap-10 w-max-[700px]">
                    <div className="flex justify-center items-center w-80">
                        <p className="text-[25px] font-bold font-fredoka text-primary-400 text-justify">
                            Our mission is to offer the best experience and the
                            tastiest desserts & ice cream to our clients.
                        </p>
                    </div>
                    <div className="flex justify-center items-center w-80">
                        <p className="text-[16px] font-fredoka text-primary-400  text-justify">
                            We are Mr. Snowman, a small yet cozy NY cafe
                            network. We have been handcrafting the most
                            delicious ice cream since 1999, and these days, our
                            menu is more varied than ever before. Come to us to
                            enjoy various ice cream flavors and try our seasonal
                            and holiday desserts and cold drinks like iced
                            coffee and milkshakes.
                        </p>
                    </div>
                    <div className="flex justify-center items-center w-80">
                        <p className="text-[16px] font-fredoka text-primary-400  text-justify">
                            If you want to have a great time with friends or
                            family, book a table in our cafe. Or pop into one of
                            our little ice cream shops to take your favorite
                            flavors with you. We have a great network of 18+ ice
                            cream shops, and their number is increasing. Also,
                            you can find our ice cream on other cafes menus.
                        </p>
                    </div>
                </section>
                <section className="flex flex-col sm:flex-row justify-center items-start mt-20 h-auto gap-5 sm:gap-10 mx-20 max-w-[900px]">
                    <div className="flex flex-col justify-center items-center w-80">
                        <p className="text-[20px] font-bold font-fredoka text-primary-400 text-justify">
                            Delicious Ice Cream
                        </p>
                        <p className="text-[18px] font-fredoka text-primary-400 text-justify">
                            Dozens of types of ice cream made from natural
                            ingredients.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-80">
                        <p className="text-[20px] font-bold font-fredoka text-primary-400 text-justify">
                            Cozy Atmosphere
                        </p>
                        <p className="text-[18px] font-fredoka text-primary-400 text-justify">
                            Our cafe is excellent for meeting with friends or
                            familly.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-80">
                        <p className="text-[20px] font-bold font-fredoka text-primary-400 text-justify">
                            Table Reservation
                        </p>
                        <p className="text-[18px] font-fredoka text-primary-400 text-justify">
                            Make sure you ve booked a table on this website.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-80">
                        <p className="text-[20px] font-bold font-fredoka text-primary-400 text-justify">
                            Top Desserts
                        </p>
                        <p className="text-[18px] font-fredoka text-primary-400 text-justify">
                            We offer not only ice cream but also many tasty
                            desserts with cream.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Sobre
