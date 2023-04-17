import React, { FC } from 'react'
import Line from '@/components/ui/Line'
import Lives from '@/components/layout/RightSide/Lives'

import TopChannels from '@/components/layout/RightSide/TopChannels'

const RightSide: FC = () => {
	return (
		<div className='right_side'>
			<Line />
			<Lives />
			<TopChannels />
		</div>
	)
}

export default RightSide
