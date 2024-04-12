import Main from './Main'
import Recruit from './Recruit'
import News from './News'
import Disclosure from './Disclosure'
import Card from './Card'

function MainContainer() {
    return (
        <div className='container'>
            <Main />
            <Card/>
            <News />
            <Disclosure />
            <Recruit />
        </div>
    )
}

export default MainContainer