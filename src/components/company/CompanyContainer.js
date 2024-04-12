function CompanyContainer() {
    return (
        <div className='company'>
            <div className='visual'>
                <div className='inner'>
                    <ol>
                        <li>홈</li>
                        <li>그룹소개</li>
                        <li>하나금융그룹 소개</li>
                        <li>하나금융그룹</li>
                    </ol>
                    <h3>하나금융그룹</h3>
                </div>
            </div>
            <div className='inner'>
                <div className='overview'>
                    <h4>OVERVIEW</h4>
                    <p>
                        <strong>함께 성장하며</strong>
                        <strong>행복을<br />나누는 금융</strong>
                    </p>
                    <ul className='aboutus'>
                        <li>
                            <dl>
                                <dt>손님, 직원, 주주, 사회<br />모두가 행복한 금융</dt>
                                <dd><b>하나금융그룹</b>은<br />직원들에게 자아 실현의 기회를 제공하고, 손님의 자산증대와 사업의 성장을 돕고, 이를 통해 사회가 번영하는데 일조하며 주주가치를 증대시키는 것을 목적으로 항상 최선을 다하는 금융회사가 되겠습니다.</dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>하나로 연결된 모두의 금융</dt>
                                <dd><b>하나금융그룹</b>은<br />손님, 주주, 사회 모두가 필요로 하는 금융서비스 제공은 물론 모두가 함께 성장할 수 있는 지속가능경영과 사회적 가치 실현을 위해 끊임없이 노력하고 있습니다.</dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>아시아 최고 금융그룹으로<br />도약합니다</dt>
                                <dd>1971년 한국투자금융에서 출발하여, 1991년 하나은행으로의 전환을 거쳐 2005년 종합금융그룹으로 발돋움한 하나금융그룹은 손님 중심 미래형 혁신 사업모델을 기반으로 가치 중심 도약을 추구하여 대한민국을 넘어 <b>아시아 No.1 금융그룹</b>으로 도약하고 있습니다.</dd>
                            </dl>
                        </li>
                    </ul>
                    <h4>PROMOTION</h4>
                    <p>하나금융그룹 홍보영상</p>
                    <div className='hanatown'>
                        <a href='#!'>
                            <p>
                                홍보영상은 <b>'함께 성장하며 행복을 나누는 금융'</b><br />
                                그룹 미션을 기반으로<br />
                                손님 편에서 함께 공감하고, 응원하고, 행동하는<br />
                                '내 편'이 되는 하나금융그룹의 모습을 담은 영상입니다.
                            </p>
                        </a>
                    </div>
                </div>
                <ul className='quickmenu'>
                    <li>
                        <a href='#!'>
                            <p className='title'>RECRUIT</p>
                            <p>함께하는<br/>하나의 인재상</p>
                        </a>
                    </li>
                    <li>
                        <a href='#!'>
                            <p className='title'>ESG</p>
                            <p>실천하는<br/>하나의 ESG경영</p>
                        </a>
                    </li>
                    <li>
                        <a href='#!'>
                            <p className='title'>IR</p>
                            <p>투명한<br/>하나의 투자정보</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CompanyContainer