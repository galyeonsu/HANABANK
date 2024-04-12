function Footer() {
    return (
        <div className='footer'>
            <div className='inner'>
                <ul>
                    <li><a href='#!'><strong>개인정보처리방침</strong></a></li>
                    <li><a href='#!'><strong>신용정보활용체제</strong></a></li>
                    <li><a href='#!'>고객정보취급방침</a></li>
                    <li><a href='#!'>하나맵</a></li>
                </ul>
                <ul className='sns'>
                    <li className='youtube'><a href='#!'>youtube</a></li>
                    <li className='instagram'><a href='#!'>instagram</a></li>
                    <li className='tictok'><a href='#!'>tictok</a></li>
                    <li className='facebook'><a href='#!'>facebook</a></li>
                </ul>
            </div>
            <div className='inner'>
                <h2 className='logo'>하나금융그룹</h2>
                <address>서울특별시 중구 을지로 66 02.2002.1110</address>
                <p className='copyright'>Copyright ⓒ 2022 HANA FINANCIAL GROUP. All rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer