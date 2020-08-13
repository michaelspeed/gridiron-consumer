import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang='en'>
                <Head>
                    <link rel="stylesheet" href="/css/vendor/bootstrap.min.css"/>
                    <link rel="stylesheet" href="/css/vendor/vandella.css"/>
                    <link rel="stylesheet" href="/css/vendor/jellybelly.css"/>
                    <link rel="stylesheet" href="/css/vendor/icofont.min.css"/>
                    <link rel="stylesheet" href="/css/vendor/fontello.css"/>
                    <link rel="stylesheet" href="/css/plugins/easyzoom.css"/>
                    <link rel="stylesheet" href="/css/plugins/slick.css"/>
                    <link rel="stylesheet" href="/css/plugins/nice-select.css"/>
                    <link rel="stylesheet" href="/css/plugins/animate.css"/>
                    <link rel="stylesheet" href="/css/plugins/magnific-popup.css"/>
                    <link rel="stylesheet" href="/css/plugins/jquery-ui.css"/>
                    <link rel="stylesheet" href="/css/style.css"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                <script src="/js/vendor/modernizr-3.6.0.min.js"></script>
                <script src="/js/vendor/jquery-3.5.1.min.js"></script>
                <script src="/js/vendor/jquery-migrate-3.3.0.min.js"></script>
                <script src="/js/vendor/bootstrap.bundle.min.js"></script>
                <script src="/js/plugins/slick.js"></script>
                <script src="/js/plugins/countdown.js"></script>
                <script src="/js/plugins/wow.js"></script>
                <script src="/js/plugins/instafeed.js"></script>
                <script src="/js/plugins/svg-injector.min.js"></script>
                <script src="/js/plugins/jquery.nice-select.min.js"></script>
                <script src="/js/plugins/mouse-parallax.js"></script>
                <script src="/js/plugins/images-loaded.js"></script>
                <script src="/js/plugins/isotope.js"></script>
                <script src="/js/plugins/jquery-ui-touch-punch.js"></script>
                <script src="/js/plugins/jquery-ui.js"></script>
                <script src="/js/plugins/magnific-popup.js"></script>
                <script src="/js/plugins/easyzoom.js"></script>
                <script src="/js/plugins/scrollup.js"></script>
                <script src="/js/plugins/ajax-mail.js"></script>
                {/*<script src="/js/main.js"></script>*/}
                </body>
            </Html>
        )
    }
}
