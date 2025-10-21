import { Card, Timeline } from 'antd';
import { CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';

interface ActivitySectionProps {
	activities: string[];
}

const ActivitySection = ({ activities }: ActivitySectionProps) => {
	return (
		<Card
			title={
				<h3 className='flex text-xl items-center'>
					<ClockCircleOutlined className='mr-2 text-theme-primary' />
					Моя активность
				</h3>
			}
		>
			<Timeline
				className='mt-4'
				items={activities.map((activity, index) => ({
					key: index,
					children: activity,
					dot: <CheckCircleOutlined />,
				}))}
			/>
		</Card>
	);
};

export default ActivitySection;
