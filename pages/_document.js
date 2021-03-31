import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <link rel="stylesheet" href="assets/vendors/liquid-icon/liquid-icon.min.css" />
	        <link rel="stylesheet" href="assets/vendors/font-awesome/css/font-awesome.min.css" />
	        <link rel="stylesheet" href="assets/css/theme-vendors.min.css" />
	        <link rel="stylesheet" href="assets/css/theme.min.css" />
	        <link rel="stylesheet" href="assets/css/themes/freelancer.css" />
	        <script async src="assets/vendors/modernizr.min.js"></script>
        </Head>
        <body data-mobile-nav-trigger-alignment="right" data-mobile-nav-align="left"   > 
          <Main />
          <NextScript />


          <script src="./assets/vendors/jquery.min.js"></script>
          <script src="./assets/js/theme-vendors.js"></script>
          <script src="./assets/js/theme.min.js"></script>
          <script src="./assets/js/liquidAjaxContactForm.min.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument