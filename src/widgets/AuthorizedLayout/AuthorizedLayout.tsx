import React, { type FC } from 'react';
import AuthorizedLayoutMobileMenu from './AuthorizedLayoutMobileMenu.tsx';
import AuthorizedLayoutHeader from './AuthorizedLayoutHeader.tsx';
import AuthorizedLayoutDesktopMenu from './AuthorizedLayoutDesktopMenu.tsx';

const AuthorizedLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div className='flex h-screen w-full relative overflow-hidden'>
			<AuthorizedLayoutDesktopMenu />
			<AuthorizedLayoutMobileMenu />
			<div className='flex-1 h-screen'>
				<div className='min-h-screen bg-gradient-to-br from-theme-bg to-theme-surface flex flex-col'>
					<AuthorizedLayoutHeader />

					<main className='flex-1 flex'>{children}</main>

					<footer className='text-center py-6 text-theme-text-tertiary'>
						<p>&copy; 2025 Pretty Pet. Все права защищены.</p>
					</footer>
				</div>
			</div>
		</div>
	);
};

export default AuthorizedLayout;
