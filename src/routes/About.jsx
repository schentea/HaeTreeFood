import Layout from "../components/Layout";

export default function About() {
    return (
        <Layout>
            <div className="w-full flex flex-col items-center justify-center">
                <div className="w-full flex flex-col items-center justify-center space-y-8 bg-red-200">
                    <div>HaeTree Food</div>
                    <div>해트리 푸드</div>
                    <div className="w-8 border border-black"></div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti accusamus iure magnam non ipsa, quisquam, recusandae eligendi hic nesciunt maxime aperiam est soluta iste similique. Impedit cum explicabo quos. Blanditiis?</div>
                </div>
                <div>
                    HaeTree Food의 시작
                    {/* 연혁 */}
                </div>
            </div>
        </Layout>
    );
}