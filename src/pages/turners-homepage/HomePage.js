import './HomePage.css';
import HomePagenavbar from './homepage-components/HomePage-navbar'
import HomePageBody from './homepage-components/HomePage-body';
export default function HomePage() {
    return (
        <div className='homepage-body-container'>
            <HomePagenavbar />
            <HomePageBody />

        </div>
    )
}


