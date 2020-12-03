import NextNprogress from "nextjs-progressbar";
import type { AppProps } from 'next/app'

import "../styles/main.css";

export default ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Component { ...pageProps } />
            {/*<style global jsx>{`*/}
            {/*    body {*/}
            {/*        font-family: 'Roboto', sans-serif;*/}
            {/*    }*/}
            {/*`}</style>*/}
            <NextNprogress
                color="yellow"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
            />
        </>
    )
}