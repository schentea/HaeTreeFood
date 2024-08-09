import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <div className="w-full h-full flex justify-center bg-red-500">
            <div className="w-[1280px] flex justify-between items-center">
                <Link to="/">
                    <div>Logo</div>
                </Link>
                <div className="flex space-x-4">
                    <Link to="/About" >
                        <div>About</div>
                    </Link>
                    <Link to="/Product">
                        <div>Product</div>
                    </Link>
                    <Link to="/Production">
                        <div>Production</div>
                    </Link>
                    <Link to="/Act">
                        <div>Act</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
