import type { AppProps } from "next/app";
import Layout from "@/common/layouts/Layout";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
export default MyApp;
