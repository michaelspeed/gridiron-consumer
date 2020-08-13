import Layout from '../components/Layout'
import useScripts from "../utils/useScript";
import withApollo from "../utils/withApollo";
import {NextPageContext} from "next";
import {GetHomePageDocument, GetMenuDocument} from "../gql";
import {assetsURL} from "../utils/globalconstants";
import {useRouter} from "next/router";

interface Props {
  menu: any,
  main: any
}

const IndexPage = ({menu, main}: Props) => {
  useScripts('/js/main.js')
  console.log(main)
  const navig = useRouter()

  return (
      <Layout title="AirEcommerce" menu={menu.data.GetMenu.menu}>
        <div className="slider-area bg-light-green slider-mt-1">
          <div className="slider-active-1 nav-style-1 dot-style-1">
            {main.map(item => (
                <div className="single-slider slider-height-2 custom-d-flex custom-align-item-center">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-md-6 col-12 col-sm-5">
                        <div className="slider-content-1 slider-animated-1">
                          {item.type === 'product' && <h1 className="animated">{item.target.productName}</h1>}
                          {item.type === "variant" && <h1 className="animated">{item.target.name}</h1>}
                          {item.type === "category" && <h1 className="animated">{item.target.name}</h1>}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12 col-sm-7">
                        <div className="slider-single-img-2 slider-animated-1">
                          <a href="#"><img className="animated" src={`${assetsURL}/${item.preview.preview}`} alt=""/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>
          <div className="slider-shape-electric2">
            <img src="/images/slider/shape-electric2.png" alt="shape"/>
          </div>
        </div>
      </Layout>
  )
}

IndexPage.getInitialProps = async (ctx) => {
  const client = ctx.apolloClient;
  const menu = await client.query({
    query: GetMenuDocument
  })
  const home = await client.query({
    query: GetHomePageDocument
  })
  return {
    menu,
    main: home.data.getHomePage.single.main
  }
}

export default withApollo(IndexPage)
