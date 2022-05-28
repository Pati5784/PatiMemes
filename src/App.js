//import logo from "./logo.svg";
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import { patiMemes } from './patiMemes/patiMemes.js';
import { HotMemes } from './patiMemes/HotMemes';
import { RegularMemes } from './patiMemes/RegularMemes';
import { useEffect, useState } from 'react';

function App() {
	const [memes, setMemes] = useState([]);
	const upvote = (memeTitle) => {
		setMemes((memes) =>
			memes.map((meme) => ({
				...meme,
				upvotes: meme.title === memeTitle ? meme.upvotes + 1 : meme.upvotes,
			}))
		);
	};
	const downvote = (memeTitle) => {
		setMemes((memes) =>
			memes.map((meme) => ({
				...meme,
				downvotes:
					meme.title === memeTitle ? meme.downvotes + 1 : meme.downvotes,
			}))
		);
	};

	useEffect(() => {
		setMemes(patiMemes);
	}, []);

	return (
		<div className='App'>
			<Grid container sx={{ minHeight: '100vh' }}>
				<Grid
					item
					xs={4}
					md={2}
					lg={1}
					sx={{
						backgroundColor: 'white',
						padding: '12px 0',
					}}
				>
					<Link
						to='/hot'
						style={{ textDecoration: 'none', position: 'fixed', left: '10px' }}
					>
						<Button variant='outlined' color='secondary'>
							Hot
						</Button>
					</Link>
					<br />
					<Link
						style={{ textDecoration: 'none', position: 'fixed', left: '10px' }}
						to='/regular'
					>
						<Button variant='outlined' style={{ margin: '24px 0 0 0' }}>
							Regular
						</Button>
					</Link>
				</Grid>
				<Grid
					item
					xs={8}
					md={10}
					lg={11}
					container
					sx={{
						backgroundColor: 'lightgrey',
					}}
				>
					<Grid item xs={0} md={2} lg={3} />
					<Grid item xs={12} md={8} lg={6}>
						<Routes>
							<Route
								path='/regular'
								element={
									<RegularMemes
										memes={memes}
										upvote={upvote}
										downvote={downvote}
									/>
								}
							/>
							<Route
								path='/hot'
								element={
									<HotMemes memes={memes} upvote={upvote} downvote={downvote} />
								}
							/>
						</Routes>
					</Grid>
					<Grid item xs={0} md={2} lg={3} />
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
