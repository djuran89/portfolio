import { useEffect } from "react";
import Head from "next/head";
import { Provider, useDispatch } from "react-redux";
import { scrollTopAction } from "@/redux/action";
import store from "@/redux/store";

import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
	useEffect(() => {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}, []);
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Provider store={store}>
				<ScrollTopWarper>
					<Component {...pageProps} />
				</ScrollTopWarper>
			</Provider>
		</>
	);
}

const ScrollTopWarper = ({ children }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const onScroll = (e) => dispatch(scrollTopAction.setScrollTop(e.target.documentElement.scrollTop));
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return children;
};
