import React from 'react';
import styled from 'styled-components';

const Date = styled.span``;

const Day = styled.strong``;

const Time = styled.span``;

const DateTime = () => {
	return (
		<>
			<Date>2023.09.22</Date>
			<Day>금</Day>
			<Time>(04:26:54 pm)</Time>
		</>
	);
};

export default DateTime;
