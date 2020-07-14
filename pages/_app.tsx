import { AppProps } from 'next/app';
import '../src/components/FrseSupermario/FrseSupermario.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp