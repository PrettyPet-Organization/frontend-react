import React, { type FC } from 'react';
import AuthorizedLayoutMobileMenu from './AuthorizedLayoutMobileMenu.tsx';
import AuthorizedLayoutHeader from './AuthorizedLayoutHeader.tsx';
import AuthorizedLayoutDesktopMenu from './AuthorizedLayoutDesktopMenu.tsx';

const AuthorizedLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div className='flex min-h-screen w-full relative overflow-x-hidden'>
			<AuthorizedLayoutDesktopMenu />
			<AuthorizedLayoutMobileMenu />
			<div
				className='bg-gradient-to-br from-theme-bg to-theme-surface grid min-h-screen w-full'
				style={{ gridTemplateRows: 'auto 1fr auto' }}
			>
				<AuthorizedLayoutHeader />

				<main>{children}</main>

				<footer className='text-center py-6 text-theme-text-tertiary '>
					<p>&copy; 2025 Pretty Pet. Все права защищены.</p>
				</footer>
			</div>
		</div>
	);
};

export default AuthorizedLayout;
