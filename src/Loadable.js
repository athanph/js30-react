import Loadable from 'react-loadable';
import Loading from './Loader';

export default function LazyLoadable(opts) {
	return Loadable(Object.assign({
		loading: Loading,
		delay: 200,
		timeout: 10000,
	}, opts));
};