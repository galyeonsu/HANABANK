
function Card() {
    return (
        <div className="c-lpha">
        <div className="card-top">
        <div className="c-notice-slide">
                <div className="c-notice-slide__container swiper ">
                    <div className="c-swiper-wrapper"  >
                        <div className="c-swiper-slide swiper-slide-active" role="group"aria-label="1 / 1" style={{width:"282px"}}>
                            <p className="t-title">하나금융그룹 소셜미디어 연간 대행사 선정 입찰공고</p>
                            <p>2024년 하나금융그룹 소셜미디어 연간대행사 선정을 위해 다음과 같이 공고합니다.</p>
                            <a href="">자세히보기</a>
                        </div>
                </div>
            </div>
        </div>
            <div className="c-hana-group">
                <div className="c-inner">
                    <div>
                        <ul className="c-card">
                            <li id="c-hana">
                                <div className="c-head">
                                    <a href="">하나금융그룹 </a>
                                </div>
                                <div className="c-body">
                                    <p className="c-title">
                                        함께 성장하며
                                        <br />
                                        행복을 나누는 금융
                                    </p>
                                    <p className="c-txt">
                                        직원,손님,사회 모두가 행복한
                                        <br />
                                        금융회사로 성장해 갑니다
                                    </p>
                                </div>
                            </li>
                            <li id="c-global">
                                <div className="c-head">
                                    <a href="">글로벌 네트워크</a>
                                </div>
                                <div className="c-body">
                                    <p className="c-title">
                                        전세계 25개 지역
                                        <br />
                                        211개의 네트워크
                                    </p>
                                    <p className="c-txt">
                                        국내 최대의 글로벌 네트워크를 통해
                                        <br />
                                        세계적인 금융그룹으로 도약합니다
                                    </p>
                                </div>
                            </li>
                            <li id="c-sharePrice">
                                <div className="c-head">
                                    <a href="">주가 정보</a>
                                </div>
                                <div className="c-body">
                                    <p className="c-share-sub" id="koscomShareSub">
                                        하나금융지주(086790)
                                    </p>
                                    <p className="c-share-price" id="koscomSharePrice">
                                        <strong>41,900</strong>
                                        KRW
                                    </p>
                                    <p className="c-share-info">
                                        전일대비
                                        <span className="c-up" id="koscomShareInfo">
                                            250원
                                        </span>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="b-hana-report">
                    <div className="b-inner">
                        <div className="b-card-wrap" id="b-report_card_wrap">
                            <div id="b-card-div">
                                <div className="b-card" id="b-esg">
                                    <div className="b-head">
                                        <a href="">ESG REPORT</a>
                                    </div>
                                    <div className="b-body">
                                        <p>
                                            2022년
                                            <br />
                                            지속가능경영보고서
                                        </p>
                                        <div>
                                            <a href="" className="b-btn-round b-sm b-gray b-download">PDF 국문</a>
                                            <a href="" className="b-btn-round b-sm b-gray b-download">PDF 영문</a>
                                        </div>
                                        <img src='./img/card4.jpg' className="b-cover"></img>
                                    </div>
                                </div>
                                <div className="b-card" id="b-annual">
                                    <div className="b-head">
                                        <a>ANNUAL REPORT</a>
                                    </div>
                                    <div className="b-body">
                                        <p>
                                            2022년
                                            <br />
                                            연차보고서
                                        </p>
                                        <div>
                                            <a href="" className="b-btn-round b-sm b-gray b-download">
                                                Annual Report(Full)
                                            </a>
                                            <a href="" className="b-btn-round b-sm b-gray b-download">
                                                Annual Report(Only)
                                            </a>
                                        </div>
                                        <img className="b-cover" src="./img/card5.png"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="b-card" id="b-result">
                                <div className="b-head">
                                    <a>경영실적</a>
                                </div>
                                <div className="b-body">
                                    <p>
                                        2023년
                                        <br />
                                        3분기 경영 실적 발표
                                    </p>
                                    <a href="" className="b-btn-round b-sm b-gray b-download" style={{ margin: "0 0 10px"}}>
                                        PDF
                                    </a>
                                    <a href="" className="b-btn-round b-sm b-gray b-download">
                                        Web Casting
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
    )
}
export default Card;