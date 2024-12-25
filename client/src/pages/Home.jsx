import Navbar from '../components/Navbar';
import Header from '../components/Header';
import FeaturedCities from '../components/FeaturedCities';
import PropertyList from '../components/PropertyList';
import FeaturedProperties from '../components/FeaturedProperties';
import MailList from '../components/MailList';
import Footer from '../components/Footer';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Header />

			<div className='flex flex-col gap-5 items-center mt-10'>
				<FeaturedCities />
				<h1 className='font-bold w-[1024px] ps-3 text-2xl'>Browse by property type</h1>
				<PropertyList />
				<h1 className='font-bold w-[1024px] ps-3 text-2xl'>Homes guests love</h1>
				<FeaturedProperties />
				<MailList />
				<Footer />
			</div>
		</div>
	);
};

export default Home;
