import Image from 'next/image';
import {useRouter} from 'next/router';
import {FC, useEffect, useState} from 'react';
import {cnPagination} from '~/client/shared/components/pagination/pagination.const';
import {ILink, IMeta} from '~/client/shared/types/pagination';
import NextIcon from './assets/next.svg';
import PrevIcon from './assets/prev.svg';

interface IPaginationProps {
	onPageChange: (page: number) => Promise<void>;
	onPageAppend: (page: number) => Promise<void>;
	meta: IMeta;
}

function IconLoading() {
	return (
		<svg
			style={{width: '24px', height: '24px'}}
			viewBox="-20 -20 40 40"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				style={{
					animation: '4s a infinite linear, 3s o infinite linear'
				}}
				fill="none"
				r="16"
				stroke="black"
				strokeWidth="4"
			/>
		</svg>
	);
}

export const Pagination: FC<IPaginationProps> = (props) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [loading, setLoading] = useState<boolean>(false);
	const [isLastPage, setIsLastPage] = useState<boolean>(false);
	const router = useRouter();

	useEffect(() => {
		if (currentPage >= props.meta.last_page) {
			setIsLastPage(true);
		}
		// shallow redirect to same route with changed page param
		router.push(
			{
				pathname: router.pathname,
				query: {
					...router.query,
					page: currentPage
				}
			},
			undefined,
			{shallow: true}
		);
	}, [currentPage]);

	const handleLoadMore = async () => {
		setCurrentPage(currentPage + 1);
		setLoading(true);
		await props.onPageAppend(currentPage);
		setLoading(false);
	};

	const handlePageChange = async (link: ILink) => {
		if (!link?.url) {
			return;
		}

		const page = Number(link.url.split('page=').at(1));
		setCurrentPage(page);
		await props.onPageChange(page);
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	const buildLabelText = (text: string) => {
		switch (text) {
			case 'prev':
				return (
					<Image
						src={PrevIcon}
						alt={'prev'}
						width={16}
						height={16}
					/>);
			case 'next':
				return (
					<Image
						src={NextIcon}
						width={16}
						height={16}
						alt={'prev'}
					/>);
			default:
				return text;
		}
	};

	return (
		<>
			<div className={cnPagination()}>
				{!isLastPage &&
					<button
						onClick={() => handleLoadMore()}
						className={cnPagination('button')}
					>
						{loading ? <IconLoading/> : <>Показать еще</>}
					</button>
				}
				<ul className={cnPagination('list')}>
					{props.meta.links.map(link =>
						<li
							className={cnPagination('list-item', {active: link.active})}
							key={link.label}
							onClick={() => handlePageChange(link)}
						>
							{buildLabelText(link.label)}
						</li>
					)}
				</ul>
			</div>
		</>
	);
};
