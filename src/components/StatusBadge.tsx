import type { ProjectStatus } from '../data/projectsData';

export const STATUS_LABEL: Record<ProjectStatus, string> = {
	live: 'Live',
	progress: 'In progress',
	archived: 'Archived',
	private: 'Private',
};

const DOT_CLASS: Record<ProjectStatus, string> = {
	live: 'animate-pulse bg-green-600 dark:bg-green-400',
	progress: 'animate-pulse bg-amber-600 dark:bg-amber-400',
	archived: 'bg-ink-faint',
	private: 'bg-ink-faint',
};

const TEXT_CLASS: Record<ProjectStatus, string> = {
	live: 'text-green-600 dark:text-green-400',
	progress: 'text-amber-600 dark:text-amber-400',
	archived: 'text-ink-faint',
	private: 'text-ink-faint',
};

const StatusBadge = ({ status, className = '' }: { status: ProjectStatus; className?: string }) => (
	<span className={`inline-flex items-center gap-[7px] text-[0.82rem] font-medium ${TEXT_CLASS[status]} ${className}`}>
		<span className={`h-[6px] w-[6px] flex-none rounded-full ${DOT_CLASS[status]}`} />
		{STATUS_LABEL[status]}
	</span>
);

export default StatusBadge;
