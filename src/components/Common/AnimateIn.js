import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './AnimateIn.css';

export const AnimateIn = ({ show, animation = 'fade', children }) => {
	return (
		<CSSTransition
			unmountOnExit={true}
			classNames={animation}
			in={show}
			timeout={300}>
			{children}
		</CSSTransition>
	);
};
