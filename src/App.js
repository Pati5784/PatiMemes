//import logo from "./logo.svg";
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { patiMemes } from './patiMemes/patiMemes';
import { Memes } from './patiMemes/Memes';

function App() {
	const [memes, setMemes] = useState([]);

	const regularMemes = memes.filter(
		(item) => item.upvotes - item.downvotes <= 5
	);
	const hotMemes = memes.filter((item) => item.upvotes - item.downvotes > 5);

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
						backgroundColor: 'lightgrey',
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
						backgroundColor: 'white',
						borderLeft: '12px dashed lightgrey',
					}}
				>
					<Grid item xs={0} md={2} lg={3} />
					<Grid item xs={12} md={8} lg={6}>
						<Routes>
							<Route
								path='/regular'
								element={
									<Memes
										memes={regularMemes}
										upvote={upvote}
										downvote={downvote}
										title='Regular'
									/>
								}
							/>
							<Route
								path='/hot'
								element={
									<Memes
										memes={hotMemes}
										upvote={upvote}
										downvote={downvote}
										title='Hot'
									/>
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
