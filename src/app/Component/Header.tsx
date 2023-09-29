import Link from "next/link"

const menuItem = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'About-Us',
        link: '/About'
    },
    {
        name: 'Services',
        link: '/Services'
    },
    {
        name: 'Projects',
        link: '/Projects'
    },
    {
        name: 'Blog',
        link: '/Blog'
    },
    {
        name: 'Faq',
        link: '/Faq'
    },
    {
        name: 'Gallery',
        link: '/Gallery'
    },
    {
        name: 'Contact-Us',
        link: '/Contact'
    },
    {
        name: 'Products',
        link: '/product'
    },
    
]

export default function Home() {
    return (
        <main className="sticky top-0 bg-white">
            <header className=" flex justify-between px-20">
                <div className="my-4 w-28 items-center">
                    <Link href={"./"}>   <img className="" src="./logo1.jpg" alt="logo" /></Link>
                </div>

                <nav className="flex items-center font-bold ">
                    {menuItem.map((item, index) => (
                        <Link key={index} className="p-6 " href={item.link}>{item.name}</Link>
                    ))}
                </nav>
            </header>
        </main>
    )
}