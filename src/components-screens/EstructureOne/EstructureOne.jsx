import { Box, Container, Typography } from "@mui/material";

const EstructureOne = ({titule}) => {
  return (
    <Container>
      <Box>
        <Typography variant="h2">{titule}</Typography>
      </Box>
      <Box></Box>
    </Container>
  );
};

export default EstructureOne;
