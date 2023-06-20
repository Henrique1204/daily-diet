import React from 'react';

import * as Styles from './styles';

import LogoFile from '@images/logo.png';
import UserPhotoFile from '@images/user.png';

const Header: IComponent = () => {
	return (
		<Styles.Container>
			<Styles.Logo
				role='img'
				accessibilityRole='image'
				accessibilityLabel='Ilustração de um garfo e faca ao lado do texto "Daily Diet".'
				alt='Ilustração de um garfo e faca ao lado do texto "Daily Diet".'
				source={LogoFile}
			/>

			<Styles.User>
				<Styles.UserPhoto
					role='img'
					accessibilityRole='image'
					accessibilityLabel='Foto do usuário logado.'
					alt='Foto do usuário logado.'
					source={UserPhotoFile}
				/>
			</Styles.User>
		</Styles.Container>
	);
};

export default Header;
