export default function Footer() {
    return (
                <footer className="bg-background border-t border-border py-4 px-4 mt-auto">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-center">

                            <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
                                <p className="text-[12px] text-gray-500">© {new Date().getFullYear()} Construtora Habit</p>
                            </div>
                            
                            <div className="mb-4 md:mb-0">
                                <a href="#" className="text-gray-500 hover:text-gray-700">
                                    <i className="fab fa-github text-xl"></i>
                                </a>
                            </div>
                            
                            <div className="flex flex-wrap justify-center gap-4">
                                <a href="https://www.instagram.com/hbt.const/" className="text-[12px] text-gray-500 hover:text-yellow-600 hover:underline">Instagram</a>
                                <a href="https://www.linkedin.com/company/habit-constru%C3%A7%C3%A3o/posts/?feedView=all" className="text-[12px] text-gray-500 hover:text-yellow-600 hover:underline">Linkedin</a>
                            </div>
                        </div>
                    </div>
                </footer>
    )
}


