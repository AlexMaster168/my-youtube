import React, { FC } from 'react'
import Image from 'next/image'
import Avatar from '@/images/main/avatar.jpg'

const ProfileInfo: FC = () => {
	return (
		<>
			<div className='profile_info'>
				<Image src={Avatar} alt='Avatar' width={70} height={70} />
				<div className='name'>Nannie Nelson</div>
				<div className='location'>Montreal, QC</div>
			</div>
			<div className='information'>
				<div className='item'>
					<div className='top'>278</div>
					<div className='bottom'>videos</div>
				</div>
				<div className='item'>
					<div className='top'>36.5k</div>
					<div className='bottom'>subscribers</div>
				</div>
			</div>
		</>
	)
}

export default ProfileInfo