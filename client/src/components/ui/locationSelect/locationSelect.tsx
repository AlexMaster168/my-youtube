import React from 'react';
import styles from './LocationSelect.module.css';
import { LocationSelectProps } from '@/components/ui/locationSelect/locationSelect.interface'
import { regions } from '@/components/ui/locationSelect/locationSelect.data'


const LocationSelect: React.FC<LocationSelectProps> = ({
																												 selectedLocation,
																												 onChange,
																											 }) => {


	return (
		<div>
			<label className={styles.label} htmlFor="location">
				Локація:
			</label>
			<select
				className={styles.select}
				id="location"
				value={selectedLocation}
				onChange={onChange}
			>
				<option value="">Оберіть локацію</option>
				{regions.map((city) => (
					<option key={city} value={city}>
						{city}
					</option>
				))}
			</select>
		</div>
	);
};

export default LocationSelect;
