import React  from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function Newsletter() {
  // You can use React hooks to manage the state and handle the form submission
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can use any API or service to send the email to your newsletter list
    // For example, you can use EmailJS, Mailchimp, or SendGrid
    // Here, I will just use a mock function to simulate the response
    setEmail(email)
      .then((response) => {
        // If the email is sent successfully, show a success message
        setMessage('Thank you for subscribing to our newsletter!');
      })
      .catch((error) => {
        // If there is an error, show an error message
        setMessage('Oops, something went wrong. Please try again.');
      });
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        py: 4,
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" color="text.primary" gutterBottom>
        Subscribe to our newsletter
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Get the latest news and updates from us.
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Subscribe
          </Button>
        </Box>
      </form>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        {message}
      </Typography>
    </Box>
  );
}

export default Newsletter;