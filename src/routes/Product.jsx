import Layout from "../components/Layout";
import Banner1 from "../assets/Banner1.jpg"
import Banner2 from "../assets/Banner2.jpg"
import Banner3 from "../assets/Banner3.jpg"
export default function Product() {
    return (
        <Layout>
            <div className="w-full flex flex-col items-center justify-center">
                <div className="w-full flex flex-col items-center justify-center space-y-8 bg-red-200">
                    <div>HaeTree Food</div>
                    <div>해트리 푸드</div>
                    <div className="w-8 border border-black"></div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti accusamus iure magnam non ipsa, quisquam, recusandae eligendi hic nesciunt maxime aperiam est soluta iste similique. Impedit cum explicabo quos. Blanditiis?</div>
                </div>
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-full h-16 flex justify-center items-center bg-red-100">대표 상품</div>
                    <div className="w-[1280px] flex flex-wrap justify-center gap-[6px] mt-10 mb-10">
                        <div className="w-[33%] h-80 text-center relative">
                            <img src={Banner1} alt="" className="w-full h-[90%] object-center"/>
                            <div className="w-full h-[10%] bg-red-400">1</div>
                        </div>
                        <div className="w-[33%] h-80 text-center relative">
                            <img src={Banner2} alt="" className="w-full h-[90%] object-center"/>
                            <div className="w-full h-[10%] bg-red-400">1</div>
                        </div>
                        <div className="w-[33%] h-80 text-center relative">
                            <img src={Banner3} alt="" className="w-full h-[90%] object-center"/>
                            <div className="w-full h-[10%] bg-red-400">1</div>
                        </div>
                        <div className="w-[33%] h-80 text-center relative">
                            <img src={Banner1} alt="" className="w-full h-[90%] object-center"/>
                            <div className="w-full h-[10%] bg-red-400">1</div>
                        </div>
                        <div className="w-[33%] h-80 text-center relative">
                            <img src={Banner2} alt="" className="w-full h-[90%] object-center"/>
                            <div className="w-full h-[10%] bg-red-400">1</div>
                        </div>
                        <div className="w-[33%] h-80 text-center relative">
                            <img src={Banner3} alt="" className="w-full h-[90%] object-center"/>
                            <div className="w-full h-[10%] bg-red-400">1</div>
                        </div>
                        <div className="w-[33%] h-80 text-center relative">
                            <img src={Banner1} alt="" className="w-full h-[90%] object-center"/>
                            <div className="w-full h-[10%] bg-red-400">1</div>
                        </div>
                        <div className="w-[33%] h-80 text-center relative">
                            <img src={Banner2} alt="" className="w-full h-[90%] object-center"/>
                            <div className="w-full h-[10%] bg-red-400">1</div>
                        </div>
                        <div className="w-[33%] h-80 text-center relative">
                            <img src={Banner3} alt="" className="w-full h-[90%] object-center"/>
                            <div className="w-full h-[10%] bg-red-400">1</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}