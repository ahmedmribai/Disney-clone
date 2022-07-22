import styled from 'styled-components'
import img from '../images/login-background.jpg'
import cta from '../images/cta-logo-one.svg'

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src={cta} alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  )
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`
const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`
const BgImage = styled.div`
  background-image: url(${img});
  z-index: -1;
  height: 100%;
  background-position: top;
  background-size: cover;
  position: absolute;
  right: 0;
  left: 0;
`

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`

export default Login
