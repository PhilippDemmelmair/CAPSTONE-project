import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages';
import About from './pages/about';
import Admin from './pages/admin';
import Article from './pages/article';
import {GlobalStyle} from './styles';

export default function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="about/" element={<About />} />
						<Route path="admin/" element={<Admin />} />
						<Route path=":articleId" element={<Article />} />
						{/* </Route> */}
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
