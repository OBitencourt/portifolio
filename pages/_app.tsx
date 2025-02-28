

import React from 'react';
import propTypes from 'prop-types'
import Head from 'next/head';
import {CssBaseline} from '@mui/material';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import Lenis from "lenis"

export default function MyApp(props: AppProps) {
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time: DOMHighResTimeStamp) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    })

    const { Component, pageProps } = props

    return (
        <React.Fragment>
            <Head>
                <title>Arthur Bitencourt</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <CssBaseline />
            <Component {...pageProps} />
        </React.Fragment>
    )
}

MyApp.propTypes = {
    Component: propTypes.elementType.isRequired,
    pageProps: propTypes.object.isRequired
}