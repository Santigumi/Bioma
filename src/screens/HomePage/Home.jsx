import Navbar from '../../components-screens/Navbar/Navbar';
import HomeBanner from '../../components-screens/HomeBanner/HomeBanner';
import { Box } from "@mui/material";
const Home = () => {
    return(
        <Box sx={{
            display: 'flex',
            flexDirection: {
            xs:"column",
            md:"column",
            lg:"row",
            xl:"row",
            }
        }}>
        <Navbar></Navbar>
        <HomeBanner></HomeBanner>
        </Box>
    )
}
export default Home