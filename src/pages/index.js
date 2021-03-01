import React, {useState, useEffect} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import FixedSidebar from '../components/Sidebar/FixedSidebar';
import MainSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {animateScroll as scroll} from 'react-scroll';
import Msg from '../components/MessageMe/Msg'
const Home = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [SideBar, setSidebar] = useState(false);

	const showSidebar = (params) => {
		if(window.innerWidth >= 986){
			setSidebar(false);
		}else {
			setSidebar(true);
		}
	}

	
	window.addEventListener('resize', showSidebar);
	useEffect(() => {
		return ( showSidebar()) 
	}, [])
	const toggle = (params) => {
		setIsOpen(!isOpen);
	}

	const closeMenu = () => {
		setIsOpen(false)
	}
	const toggleHome = () => {
		setIsOpen(false);
		scroll.scrollToTop(0,0);
	}

/*)	const [scrollTop, setScrollTop] = useState(0);
		const onScroll = (params) => {
		const windowScroll = document.documentElement.scrollTop;
		const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

		const scrolled = (windowScroll / height) * 100;
		setScrollTop(scrolled)
	}

	useEffect(() => {
		window.addEventListener('scroll', onScroll)
		return ( ) => window.removeEventListener('scroll', onScroll);
	}, [])*/


const [scroollTops, setScroollTops] = useState(0);
		const onScrooll = (params) => {
		const windowScroll = document.documentElement.scrollTop;
		const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

		const opacity = (windowScroll / height) * 550;
			
		setScroollTops(opacity)
	}


	useEffect(() => {
		window.addEventListener('scroll', onScrooll)
		return ( ) =>   window.removeEventListener('scroll', onScrooll)
	}, [])

	window.onunload = function(){ window.scrollTo(0,0); }
	return (
		<>
			 {SideBar && <Sidebar  isOpen={isOpen} toggle={toggle} closeMenu={closeMenu}/>}
			 <Navbar toggle={toggle} isOpen={isOpen} toggleHome={toggleHome}  />
			  <FixedSidebar scroollTops={scroollTops}/>
			 <MainSection />
         	 <InfoSection />
         	 <Msg />
         	
         </>
	)
}

export default Home