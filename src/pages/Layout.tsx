import styled from "styled-components";
import { Typography } from "../theme/AppTypography";

const Layout = () => {
  return (
    <LayoutWrapper>
      <Typography variant="h1Regular" color="danger" className="heading">
        hii rajat
      </Typography>
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  background: ${(props) => props.theme.heroPageBackground};
  .heading {
    color: yellow !important;
  }
`;
