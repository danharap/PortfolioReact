// Quick test to verify Web3Forms access key
// Run this in browser console to test

const testWeb3Forms = async () => {
  console.log('Testing Web3Forms...');
  
  const accessKey = '1b212630-6789-4b9f-81ea-f6fc97cdacc3';
  console.log('Using access key:', accessKey);
  
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: 'Test User',
        email: 'daniel@harapiak.com', // Use your real email here
        message: 'This is a test message to verify the contact form is working.',
        from_name: 'Portfolio Contact Form Test',
        subject: 'Test Message from Portfolio'
      })
    });

    const result = await response.json();
    
    console.log('Response status:', response.status);
    console.log('Response result:', result);
    
    if (response.ok && result.success) {
      console.log('✅ SUCCESS! Email should be sent.');
      alert('Test successful! Check your email.');
    } else {
      console.log('❌ FAILED:', result);
      alert('Test failed: ' + (result.message || 'Unknown error'));
    }
  } catch (error) {
    console.error('❌ ERROR:', error);
    alert('Network error: ' + error.message);
  }
};

// Run the test
testWeb3Forms();
