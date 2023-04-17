import React, { FC } from 'react'
import Image from 'next/image'

import Search from '@/images/common/search.svg'
import Plus from '@/images/common/plus.svg'
import Review from '@/images/common/review.svg'
import Basket from '@/images/common/basket.svg'

const Header: FC = () => {
	return (
		<header id='header'>
			<div className='search_top'>
				<label>
					<input type='text' placeholder='Search videos, stars or authors...' />
					<Image src={Search} alt='search' width={15} height={15} />
				</label>
			</div>
			<div className='icons_right'>
				<a href='#'>
					<Image src={Plus} alt='Plus' width={25} height={25} />
				</a>
				<a href='#'>
					<Image src={Review} alt='Review' width={25} height={25} />
				</a>
				<a href='#'>
					<Image src={Basket} alt='Basket' width={25} height={25} />
				</a>
			</div>
		</header>
	)
}

export default Header
