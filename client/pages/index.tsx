import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/Header'
import Main from '../Components/Main'

const style = {
    wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`
}

const Home: NextPage = () => {
    return (
        <div className={style.wrapper}>
            <Header />
            <Main />
        </div>
    )
}

export default Home
