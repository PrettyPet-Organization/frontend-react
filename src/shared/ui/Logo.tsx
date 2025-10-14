import { type FC } from 'react';
import { ASSETS } from '../config/assets.ts';

type LogoProps = {
	onClick?: () => void;
};

const Logo: FC<LogoProps> = ({ onClick }) => {
	return (
		<div
			className='flex items-center space-x-2 cursor-pointer'
			onClick={onClick}
		>
			<img
				src={ASSETS.logo}
				alt='Pretty Pet Logo'
				className='w-8 h-8 rounded-full object-cover'
			/>
			<span className='text-lg font-semibold text-theme-text'>Pretty Pet</span>
		</div>
	);
};

export default Logo;
