import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home.jsx';
import Hotel from './pages/Hotel.jsx';
import Hotels from './pages/Hotels.jsx';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route index element={<Home />} />

			<Route path='hotels'>
				<Route index element={<Hotels />} />
				<Route path=':id' element={<Hotel />} />
			</Route>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
