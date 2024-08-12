
export default function Footer() {
    return (
        <div className="w-full h-48 flex justify-center bg-blue-500">
            <div className="w-[1280px] h-full flex justify-between">
                <div className="w-[50%] flex items-center">
                    <div>logo</div>
                </div>
                <div className="w-[50%] h-full flex flex-col justify-center items-center">
                    <div className="w-full flex space-x-10">
                        <div>해트리푸드</div>
                        <div> | </div>
                        <div>사업자등록번호 856-17-00186</div>
                        <div> | </div>
                        <div>대표 윤숙자</div>
                    </div>
                    <div className="w-full flex space-x-10">
                        <div>주소 : 경상북도 예천군 보문면 산단길 42</div>
                        <div> | </div>
                        <div>팩스 : 054-653-9553</div>
                    </div>
                    <div className="w-full flex space-x-10">
                        <div>전화번호 : 054-653-9552</div>
                        <div> | </div>
                        <div>이메일 : htf0118@naver.com</div>
                    </div>
                </div>
            </div>
        </div>
    );
}