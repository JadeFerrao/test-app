import styled from 'styled-components/native';

export const Container = styled.View<{ width: number | string; height: number | string; borderRadius: number }>`
  overflow: hidden;
  background-color: #F3F4F6;
  width: ${(props: { width: number | string }) => (typeof props.width === 'number' ? `${props.width}px` : props.width)};
  height: ${(props: { height: number | string }) => (typeof props.height === 'number' ? `${props.height}px` : props.height)};
  border-radius: ${(props: { borderRadius: number }) => props.borderRadius}px;
`;

export const StyledImage = styled.Image<{ borderRadius: number }>`
  width: 100%;
  height: 100%;
  border-radius: ${(props: { borderRadius: number }) => props.borderRadius}px;
`;


export const Placeholder = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: #F3F4F6;
`;

export const ErrorBox = styled(Placeholder)`
  background-color: #E5E7EB;
`;

export const ErrorIcon = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: #D1D5DB;
`;
