import { StyledBox } from './style';

type BoxProps = {
  content: React.ReactNode;
};

const Box: React.FC<BoxProps> = ({
  content,
}) => (
  <StyledBox>{content}</StyledBox>
);

export default Box;
