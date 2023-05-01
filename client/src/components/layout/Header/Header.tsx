import Image from 'next/image'
import React, { FC } from 'react'
import IconsRight from '@/components/layout/Header/icons/IconsRight'
import Search from '@/images/common/search.svg'

const Header: FC = () => {
	return (
		<header id='header'>
			<div className='search_top'>
				<label>
					<input type='text' placeholder='Search videos, stars or authors...' />
					<Image src={Search} alt='search' width={15} height={15} />
				</label>
			</div>
			<IconsRight />
		</header>
	)
}

export default Header
