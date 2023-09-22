import React from 'react';
import styled from 'styled-components';
import DateTime from '../components/DateTime';

const Header = styled.header``;

const Hello = styled.h1``;

const Quote = styled.p``;

const Home = () => {
	return (
		<>
			<Header>
				<DateTime />
				<Hello>
					<span class="user">Duly</span>님,
					<br />
					오늘도 즐거운 하루 되세요~!
				</Hello>
				<Quote>
					<span class="author">Hemmingway</span>
					<span class="sr-only">-</span>
					<q class="msg">Never go on trips with anyone you do not love.</q>
				</Quote>
			</Header>
		</>
	);
};

export default Home;
