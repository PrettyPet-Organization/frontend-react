import { Card, List, Tag, Progress, Tooltip } from 'antd';
import { TrophyOutlined, RocketOutlined } from '@ant-design/icons';

interface Skill {
	id: number;
	name: string;
	level?: number;
}

interface SkillsSectionProps {
	skills: Skill[];
}

const SkillsSection = ({ skills }: SkillsSectionProps) => {
	return (
		<Card
			title={
				<h3 className='flex text-xl items-center'>
					<TrophyOutlined className='mr-2 text-theme-primary' />
					Мои навыки и достижения
				</h3>
			}
		>
			<List
				dataSource={skills}
				renderItem={(skill) => (
					<List.Item className='flex items-center justify-between'>
						<div className='flex items-center'>
							<RocketOutlined className='mr-2 text-theme-primary' />
							<Tag>{skill.name}</Tag>
						</div>
						{skill.level !== undefined && (
							<Tooltip title={`${skill.level}% мастерства`}>
								<Progress
									percent={skill.level}
									size={'small'}
									strokeColor='var(--color-primary)'
									trailColor='var(--color-surface-variant)'
									showInfo={false}
								/>
							</Tooltip>
						)}
					</List.Item>
				)}
			/>
		</Card>
	);
};

export default SkillsSection;
