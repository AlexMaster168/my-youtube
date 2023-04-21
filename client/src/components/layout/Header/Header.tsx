import React, { FC } from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import Image from 'next/image'

import Search from '@/images/common/search.svg'
import IconsRight from '@/components/layout/Header/icons/IconsRight'

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
