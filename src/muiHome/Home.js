import { Box, Grid, Icon, Link, SvgIcon, Typography } from "@mui/material";
import { Container, padding } from "@mui/system";
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Home = () => {
    return (
        <Container maxWidth="md">
            <Box sx={{ width: "auto", flexGrow: 1, display: "flex", paddingTop: 6}}>
                <img width={80} src={'./rob_silverlake.png'} alt={'Rob Silverlake'} flexGrow={2} />
                <Box>
                    <Typography variant="h6" component="div" sx={{paddingX: 2}} gutterBottom flexGrow={1}>Robert Coomber</Typography>
                    <Box sx={{display: "flex", paddingX: 2}}>
                        <EmailIcon sx={{paddingRight: 2}} onClick={() => {console.log("hey")}}></EmailIcon>
                        <TwitterIcon sx={{paddingRight: 2}} onClick={() => {console.log("hey")}}></TwitterIcon>
                        <GitHubIcon sx={{paddingRight: 2}} onClick={() => {console.log("hey")}}></GitHubIcon>
                    </Box>
                </Box>
            </Box>
            <Typography variant="body1" component="div" sx={{paddingTop: 6}} gutterBottom flexGrow={1}>
                I am a technical co-founder 4th Floor, and immersive audio company. I currently live in Los Angeles, CA. I am passionate 
about advancing consumer xr technology through audio and software
            </Typography>
            <Typography variant="h6" component="div" sx={{paddingTop: 4}} gutterBottom flexGrow={1}>
                Projects
            </Typography>
            <Link href="https://4th-floor.com/research/dolby-atmos-for-game-engines" underline="always" variant="body2" component="div" sx={{paddingY: 0}} gutterBottom flexGrow={1}>
                Dolby Atmos for Game Engines (research paper) - 2022 ↗️
            </Link>
            <Link href="https://www.instagram.com/ar/153264500082040/" underline="always" variant="body2" component="div" sx={{paddingY: 0}} gutterBottom flexGrow={1}>
                ✨The Light✨ (Instagram Filter) - 2020 ↗️
            </Link>
            <Link href="https://www.youtube.com/watch?v=uVb1ZTVCjvE" underline="always" variant="body2" component="div" sx={{paddingY: 0}} gutterBottom flexGrow={1}>
                Wwise Livestream 3D Interactive Music (livestream) - 2021 ↗️
            </Link>
            <Link href="https://apps.apple.com/us/app/dirty-laundry-by-blake-ruby/id1501449544" underline="always" variant="body2" component="div" sx={{paddingY: 0}} gutterBottom flexGrow={1}>
                Spatial Audio 360 Music (ios app) - 2020 ↗️
            </Link>
        </Container>
    )
};

export default Home;