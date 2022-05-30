import { Meme } from './Meme';
import { Typography } from '@mui/material';

export function Memes(props) {
	return (
		<div>
			<Typography variant='h4' gutterBottom component='div'>
				{props.title}
			</Typography>
			{props.memes.map((item) => (
				<Meme
					{...item}
					upvote={props.upvote}
					downvote={props.downvote}
					key={item.title}
				/>
			))}
		</div>
	);
}
