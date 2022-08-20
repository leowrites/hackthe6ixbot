import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function ChatBox() {
  const [message, setMessage] = useState('');
  const handleSendMessage = (msg) => {
    // send message to api using sockets
  };
  return (
        <Box
          sx={{
            textAlign: 'center',
            ml: 2,
            textAlign: 'start',
            width: '25rem',
            border: '1px solid white',
            borderRadius: '1rem',
            height: '30rem',
            color: 'white',
          }}>
          <Box sx={{ p: 3 }}>
            <Typography variant={'h6'} fontWeight={'bold'}>
              You conversation with Finabot
            </Typography>
            <Divider color={'white'} sx={{ my: 1 }} />
            <Stack id={'conversation-box'} spacing={1}>
              <Typography>
                <strong>Finabot</strong>: Hello, I'm Finabot. How can I help you?
              </Typography>
              {
                // show all the previous conversations
              }
              <Stack direction={'row'} spacing={2} alignItems={'start'}>
                <Typography sx={{ display: 'inline-flex' }}>
                  <strong>You: </strong>
                </Typography>
                <TextField
                  variant='standard'
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  sx={{
                    ml: 1,
                    borderBottom: '1px solid white',
                    '& .MuiInputBase-input': { padding: 0, color: 'white' },
                  }}
                />
                <Button size={'small'} sx={{ color: 'white', m: 0.5 }}>
                  send
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Box>
  );
}
