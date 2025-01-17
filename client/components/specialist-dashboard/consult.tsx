import React, {} from 'react'
import {Typography, Box, Grid, Container, Slide, Divider} from '@mui/material'
import {useTheme} from '@mui/material/styles'
import { WallPaperYGW } from '../wallpapers/wallpapers'
import logo from '../../public/logo.svg'
import HeadLineCurve from "../../public/images/icons/headline-curve.svg"
import { ChatCourseList } from '../chat/chatcourse'
import { StyledBanner } from '../styled-banners'
import { ChatTwoTone, Info, VideoCall } from '@mui/icons-material'
import { StyledButton } from '../styled-buttons'
import {useHistory} from 'react-router-dom'
import { useAuth } from '../auth'

export default function Consult(){
  const theme = useTheme()
  const history = useHistory()
  const {isAuthenticated} = useAuth()
  const toCall = ()=>{
    isAuthenticated().user && history.push('/call') 
  }
  return (
    <WallPaperYGW id='consult' secondaryColor={theme.palette.background.paper} primaryColor={theme.palette.background.default}
    style={{
      '&::before': {
        content: '""',
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundImage: `url(${logo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        opacity: 0.5,
      },
      '& > div':{
        position: 'relative'
      }
    }}> 
      <Box sx={{pt: {xs: 6, md: 8}, pb: 14}}>
        <Container maxWidth="lg" sx={{px: {xs: 0, sm: 'inherit'}}}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3} sx={{pl: {xs: 0, sm: 'inherit'}, pt: {xs: 0, sm: 'inherit'}}}>
            <Slide unmountOnExit={true} timeout={1000} id="slide-description" appear={true} direction="right" in={true} color='inherit'>
            <Box
                sx={{
                height: '100%',
                width: { xs: '100%', md: '90%' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-start' },
                }}>
              <Typography
                component="h2"
                sx={{
                  position: 'relative',
                  fontSize: { xs: '2rem', md: '3.5rem' },
                  mt: { xs: 0, md: 7 },
                  mb: 4,
                  lineHeight: 1,
                  fontWeight: 'bold',
                  color: 'text.primary'
                }}>
                <Typography
                  component="mark"
                  sx={{
                    position: 'relative',
                    color: 'primary.main',
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    backgroundColor: 'unset',
                  }}
                >
                  Consult{' '}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: { xs: 20, md: 28 },
                      left: 2,
                      '& img': { width: { xs: 100, md: 200 }, height: 'auto' },
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={HeadLineCurve}  />
                  </Box>
                </Typography>
                Clients
              </Typography> 
            </Box>
            </Slide>
            </Grid>
            <Grid item xs={12} md={9} sx={{pl: {xs: 0, sm: 'inherit'}, pt: {xs: 0, sm: 'inherit'}}}>
            <Box 
              sx={{ px: {xs: 0, sm:2}, py: 1.5, 
                borderRadius: 4, display: 'flex',
                flexDirection: {xs:'column', md:'row'},
                alignItems: 'center', bgcolor:'background.default'}}>
                <Box sx={{ mt: 1, width: '100%'}}>
                  <Box sx={{  width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: {xs: 'start', md: 'center'}, borderRadius: 3}}>
                      <Box sx={{  width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'text.disabled',
                        textAlign: {xs: 'start', md: 'center'}, bgcolor: 'background.default', borderRadius: 3}}>
                        <StyledBanner icon={<VideoCall sx={{color: 'secondary.main'}}/>} heading={<>Video Call</>} 
                        body={<>
                        {"Connect, meet and consult from anywhere."}
                        </>} />
                        <Box sx={{  width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', color: 'text.disabled',
                          textAlign: {xs: 'start', md: 'center'}, bgcolor: 'background.default', borderRadius: 3}}>
                            <StyledButton onClick={toCall} variant='contained' color='primary' startIcon={<VideoCall/>}> New meeting</StyledButton> 
                        </Box>
                        <Divider sx={{my: 1}}/>
                      </Box>
                      <Typography variant="h1" component="h1" 
                      sx={{ flex: 1, textAlign: 'center', mb: 1, fontSize: { xs: '1.5rem', sm: '2.5rem', color: 'text.primary' }, color: 'text.primary'}}>
                        Course consultation rooms
                      </Typography>
                      <Box sx={{  width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', color: 'text.disabled',
                      textAlign: {xs: 'start', md: 'center'}, bgcolor: 'background.default', borderRadius: 3}}>
                        <StyledBanner icon={<Info/>} heading={<>Please Note <ChatTwoTone sx={{color: 'secondary.main'}}/></>} 
                        body={<>
                        {"You may only provide assitance within the scope of the course of the chat room. Always check your chat rooms at least once a day. Do not use inappropriate language or hate speech. You may escalate disputes to our support team via the Chatbot (on the bottom right of screen), who verifies all conversations."}
                        </>} />
                      </Box>
                      <ChatCourseList />
                    </Box>
                  </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </WallPaperYGW>
 )
}