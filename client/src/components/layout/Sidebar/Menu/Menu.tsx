import React, { FC, Fragment } from 'react'
import { menu } from '@/components/layout/Sidebar/Menu/menu.data'
import MenuItem from '@/components/layout/Sidebar/Menu/MenuItem'
import Line from '@/components/ui/Line'

const Menu: FC = () => {
	return (
		<>
			<ul className='mnu_sidebar'>
				{menu.map((menuItem, index) => (
						<Fragment key={menuItem.title}>
							<MenuItem item={menuItem} />
							{index === 3 && <Line />}
						</Fragment>
					)
				)}
				<Line />
			</ul>
		</>
	)
}

export default Menu
