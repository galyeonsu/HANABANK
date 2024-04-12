import { corporate, management } from '../../data'

function Disclosure() {
    return (
        <div className='notice'>
            <div className='inner'>
                <div className='announce'>
                    <div className='corporate'>
                        <div className='announceHeader'>
                            <h3>기업공시</h3>
                            <a className='more' href='#!'>More</a>
                        </div>
                        <ul>
                            {
                                corporate.map((item,i) => (
                                    <li key={ item.id }>
                                        <p><a href='#!'>{ item.title }</a></p>
                                        <span>{ item.date }</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='management'>
                        <div className='announceHeader'>
                            <h3>경영공시</h3>
                            <a className='more' href='#!'>More</a>
                        </div>
                        <ul>
                            {
                                management.map((item,i) => (
                                    <li key={ item.id }>
                                        <p>{ item.title} <br/>하나금융지주회사 현황</p>
                                        <a href='#!'>PDF</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Disclosure