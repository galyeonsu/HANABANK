import React, { useState, useEffect } from 'react'

function Header() {
    const [scrollY, setScrollY] = useState(0)
    const [scrollActive, setScrollActive] = useState(false)
    const [header, setHeader] = useState(0)
    const [progress, setProgress] = useState(0)
    const [hover, setHover] = useState(false)

    const scrollFixed = () => {
        setHeader(document.querySelector('.header').clientHeight)
        setProgress(Math.floor((scrollY / (document.body.scrollHeight - window.innerHeight) ) * 106))
        if(scrollY > header) {
            setScrollY(window.pageYOffset)
            setScrollActive(true)
        } else {
            setScrollY(window.pageYOffset)
            setScrollActive(false)
        }
    }
    
    useEffect(() => {
        const scrollListener = () => {
            window.addEventListener('scroll', scrollFixed);
        };
        scrollListener();
        return () => window.removeEventListener('scroll', scrollFixed);
    })
    return (
        <div className={`header ${scrollActive ? 'fixed' : ''} ${hover ? 'active' : ''}`}>
            <div className='inner'>
                <h1 className='logo'><a href='./'>하나금융그룹</a></h1>
                <div className='gnb'>
                    <ul
                        onMouseEnter={()=> setHover(true)}
                        onMouseLeave={()=> setHover(false)}
                    >
                        <li>
                            <span>그룹소개</span>
                            <div className='depth'>
                                <ul>
                                    <li>
                                        <span>하나금융그룹 소개</span>
                                        <ul>
                                            <li><a href='/company'>하나금융그룹</a></li>
                                            <li><a href='/company'>CEO 소개</a></li>
                                            <li><a href='/company'>CI&하나서체</a></li>
                                            <li><a href='/company'>비전과 미션</a></li>
                                            <li><a href='/company'>핵심가치</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span>윤리경영</span>
                                        <ul>
                                            <li><a href='/company'>하나금융그룹</a></li>
                                            <li><a href='/company'>CEO 소개</a></li>
                                            <li><a href='/company'>CI&하나서체</a></li>
                                            <li><a href='/company'>비전과 미션</a></li>
                                            <li><a href='/company'>핵심가치</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span>금융네트워크</span>
                                        <ul>
                                            <li><a href='/company'>하나금융그룹</a></li>
                                            <li><a href='/company'>CEO 소개</a></li>
                                            <li><a href='/company'>CI&하나서체</a></li>
                                            <li><a href='/company'>비전과 미션</a></li>
                                            <li><a href='/company'>핵심가치</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span>인재/채용</span>
                                        <ul>
                                            <li><a href='/company'>하나금융그룹</a></li>
                                            <li><a href='/company'>CEO 소개</a></li>
                                            <li><a href='/company'>CI&하나서체</a></li>
                                            <li><a href='/company'>비전과 미션</a></li>
                                            <li><a href='/company'>핵심가치</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <span>기업지배구조</span>
                            <div className='depth'>
                                <ul>
                                    <li>
                                        <span>조직도</span>
                                        <ul>
                                            <li><a href='/company'>경영진</a></li>
                                            <li><a href='/company'>임원진</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span>주주총회</span>
                                        <ul>
                                            <li><a href='/company'>주주구성</a></li>
                                            <li><a href='/company'>주주총회 결과</a></li>
                                            <li><a href='/company'>주주총회 관련 자료</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span>이사회</span>
                                        <ul>
                                            <li><a href='/company'>이사회구성</a></li>
                                            <li><a href='/company'>주요 활동 내역</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span>지배구조 관련 내규</span>
                                        <ul>
                                            <li><a href='/company'>정관</a></li>
                                            <li><a href='/company'>지배구조 내부 규범</a></li>
                                            <li><a href='/company'>이사회 규정</a></li>
                                            <li><a href='/company'>사외이사 독립성 기준</a></li>
                                            <li><a href='/company'>이사회 다양성 기준</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <span>ESG경영</span>
                            <div className='depth'>
                                <ul>
                                    <li>
                                        <span>사회가치창출활동</span>
                                        <ul>
                                            <li><a href='/company'>하나 파워 온</a></li>
                                            <li><a href='/company'>보육사업</a></li>
                                            <li><a href='/company'>지역사회기여</a></li>
                                            <li><a href='/company'>ESG 소식</a></li>
                                            <li><a href='/company'>재단</a></li>
                                            <li><a href='/company'>봉사단</a></li>
                                            <li><a href='/company'>금융교육</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span>스포츠</span>
                                        <ul>
                                            <li><a href='/company'>스포츠단</a></li>
                                            <li><a href='/company'>대회/스폰서십</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span>ESG Reporting</span>
                                        <ul>
                                            <li><a href='/company'>Reporting</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span>ESG 자료실</span>
                                        <ul>
                                            <li><a href='/company'>자료실</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <span>투자정보</span>
                            <div className='depth'>
                                <ul>
                                    <li>
                                        <span>주가정보</span>
                                        <ul>
                                            <li><a href='/company'>주가그래프</a></li>
                                            <li><a href='/company'>과거 주가검색</a></li>
                                            <li><a href='/company'>배당현황</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span>공시정보</span>
                                        <ul>
                                            <li><a href='/company'>기업공시</a></li>
                                            <li><a href='/company'>경영공시</a></li>
                                            <li><a href='/company'>재무보고서</a></li>
                                            <li><a href='/company'>재무제표 공고</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span>재무정보</span>
                                        <ul>
                                            <li><a href='/company'>재무하이라이트</a></li>
                                            <li><a href='/company'>요약재무제표</a></li>
                                            <li><a href='/company'>재무제표</a></li>
                                            <li><a href='/company'>Databook</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span>IR 정보</span>
                                        <ul>
                                            <li><a href='/company'>IR행사&프레젠테이션</a></li>
                                            <li><a href='/company'>팩트시트</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <span>PR센터</span>
                            <div className='depth'>
                                <ul>
                                    <li>
                                        <span>PR센터</span>
                                        <ul>
                                            <li><a href='/company'>PR센터</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span>하나소식</span>
                                        <ul>
                                            <li><a href='/company'>하나뉴스</a></li>
                                            <li><a href='/company'>하나영상</a></li>
                                            <li><a href='/company'>하나공지</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span>광고</span>
                                        <ul>
                                            <li><a href='/company'>TVCF</a></li>
                                            <li><a href='/company'>인쇄광고</a></li>
                                        </ul>
                                    </li>
                                    <li></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='aside'>
                    <ul>
                        <li className='info'>
                            <span></span>
                        </li>
                        <li className='network'>
                            <span></span>
                        </li>
                        <li className='language'>
                            <span></span>
                        </li>
                        <li className='menu'>
                            <span></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='progress'>
                <span style={{ width: progress + '%' }}></span>
            </div>
        </div>
    )
}

export default Header