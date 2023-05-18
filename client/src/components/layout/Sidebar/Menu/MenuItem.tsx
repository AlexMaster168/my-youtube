import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IMenuItem } from '@/components/layout/Sidebar/Menu/menu.interface'

const MenuItem:FC<{item: IMenuItem}> = ({item}) => {
	return (
		<li>
			<Link href={item.link}>
				<Image src={item.image} alt={item.title} width={20} height={20} />
				<b>{item.title}</b>
			</Link>
		</li>
	)
}

export default MenuItem
