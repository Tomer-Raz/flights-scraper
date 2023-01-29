import styled from 'styled-components';

export const SidebarWrapper = styled.div.attrs(
  (props: { bgcolor: string, collapseBgColor: string }) => props
)`
  background: ${(props) => props.collapseBgColor} !important;
  margin-top: 8vh;
  position: fixed;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.24) 10px 13px 18px;
  .ant-layout-sider-trigger {
    background: ${(props) => props.bgcolor} !important;
  }
`;
