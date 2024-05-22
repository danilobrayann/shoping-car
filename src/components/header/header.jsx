import SeachBar from "../SeachBar/seachBar"
export default function header(){

    return(
        <header className="bg-yellow-300 fixed w-full">
            <div className="flex justify-between items-center p-5">
                <SeachBar/>
                <button>cart</button>
            </div>
        </header>
    )
}