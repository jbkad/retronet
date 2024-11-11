import { Note } from "./Note";

export function Navbar() {
    return (
        <nav className="w-full">
            <Note />
            <div className='pb-8'>
                <div className="flex w-fit font-jaro text-4xl text-primary hover:text-paragraph transition-colors duration-500">
                    Retro Net
                </div>
                <a href="https://www.linkedin.com/in/jbkad/" target="blank" className="flex w-fit font-jaro text-md text-highlight hover:text-paragraph transition-colors duration-500">
                    By Joyce Kadibu
                </a>
            </div>
        </nav>
    )
};