import React from 'react';
import { Button } from 'antd';
import BraftEditor from 'braft-editor';
import styles from './home.less';
import './home.scss';

const Home = () => (
	<div className={styles.home}>
		home
		<div className="tt">test</div>
		<Button type="primary">Primary</Button>
		<Button>Default</Button>
		<Button type="dashed">Dashed</Button>
		<Button type="danger">Danger</Button>
		<Button type="link">Link</Button>
		<a href="http://www.baidu.cn">123231312</a>
		<BraftEditor />
	</div>
);

export default Home;
