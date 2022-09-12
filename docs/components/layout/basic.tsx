import { Layout } from 'votary'

const { Header, Aside, Main, Footer } = Layout

export default () => (
  <>
    <Layout>
      <Header>header</Header>
      <Main>
        <Aside>aside</Aside>
        <Main>main</Main>
      </Main>
    </Layout>

    <Layout>
      <Header>header</Header>
      <Main>main</Main>
      <Footer>footer</Footer>
    </Layout>
  </>
)
