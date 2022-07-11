import { NextPage } from "next"
import { Container, Content } from '../styles/homePage'

const Home: NextPage = () => {
  return (

    <Container>
      <Content>
        <div>
            <h1>Bem vindo ao Site da Porto a Porto Acabamentos!</h1>
            <h3>Este projeto está em desenvolvimento e estará no ar em breve!</h3>
        </div>
      </Content>
    </Container>

  )
}

export default Home