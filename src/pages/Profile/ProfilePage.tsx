import { useState } from 'react';
import ProfileHeader from './ProfileHeader';
import AboutMeSection from './AboutMeSection';
import ActivitySection from './ActivitySection';
import SkillsSection from './SkillsSection';

const mockProfileData = {
	id: 1,
	createdAt: '2025-10-20T18:09:33.232Z',
	updatedAt: '2025-10-20T18:09:33.232Z',
	email: 'test@example.com',
	fullName: 'Test Test',
	bio: 'Passionate developer with 5 years of experience in web technologies.',
	preferences: 'Loves working with React and TypeScript',
	experience: '5 years',
	level: {
		id: 1,
		name: 'Senior Developer',
	},
	skills: [
		{ id: 1, name: 'React', level: 50 },
		{ id: 2, name: 'TypeScript', level: 100 },
		{ id: 3, name: 'Node.js', level: 10 },
	],
	avatarUrl: undefined,
};

const ProfilePage = () => {
	const [profileData] = useState(mockProfileData);

	return (
		<div className='flex flex-col items-center px-4 sm:px-8 py-6 animate-fade-in'>
			<div className='flex flex-col items-center mb-8 sm:mb-10 max-w-7xl'>
				<ProfileHeader
					fullName={profileData.fullName}
					email={profileData.email}
					avatarUrl={profileData.avatarUrl}
					onAvatarChange={function (file: File): void {
						// TODO: Implement actual avatar upload logic
						console.log('Avatar changed:', file);
					}}
				/>
			</div>

			<div className='w-full max-w-7xl grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
				{/* Activity Section */}
				<ActivitySection
					activities={[
						'Создал проект "Pretty Pet"',
						'Добавил 3 новых навыка',
						'Обновил профиль',
					]}
				/>

				{/* About Me Section */}
				<AboutMeSection
					bio={profileData.bio}
					experience={profileData.experience}
					level={profileData.level.name}
					preferences={profileData.preferences}
				/>

				{/* Skills Section */}
				<SkillsSection skills={profileData.skills} />
			</div>
		</div>
	);
};

export default ProfilePage;
