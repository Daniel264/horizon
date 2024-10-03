




export const Companies = () => {
    return (
        <section>
            <div className="flex flex-col items-center space-y-10">
                <h3 className="text-5xl font-semibold">Trusted by companies like</h3>
                <div className="flex space-x-10">
                    <div className="w-40 h-40 bg-white flex items-center justify-center rounded-full shadow-md">
                        <img src="/assets/images/companies/airbnb.svg" alt="Airbnb" />
                    </div>
                    <div className="w-40 h-40 bg-white flex items-center justify-center rounded-full shadow-md">
                        <img src="/assets/images/companies/coinbase.svg" alt="Coinbase" />
                    </div>
                    <div className="w-40 h-40 bg-white flex items-center justify-center rounded-full shadow-md">
                        <img src="/assets/images/companies/doordash.svg" alt="Doordash" />
                    </div>
                    <div className="w-40 h-40 bg-white flex items-center justify-center rounded-full shadow-md">
                        <img src="/assets/images/companies/lyft.svg" alt="Lyft" />
                    </div>
                    <div className="w-40 h-40 bg-white flex items-center justify-center rounded-full shadow-md">
                        <img src="/assets/images/companies/robinhood.svg" alt="Robinhood" />
                    </div>
                </div>
            </div>
        </section>
    )
}