import { Box, Container, Typography } from "@mui/material";

const EstructureOne = ({titule}) => {
  return (
    <Container>
      <Box>
        <Typography>{titule}</Typography>
      </Box>
      <Box></Box>
    </Container>
  );
};

export default EstructureOne;
