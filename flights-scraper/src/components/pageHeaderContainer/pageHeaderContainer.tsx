import Main from "../content/main/main";
import Header from "../header/header";
import { PageHeaderContainer as Container } from "./pageHeaderContainerStyles";

const PageHeaderContainer = () => {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
};

export default PageHeaderContainer;
