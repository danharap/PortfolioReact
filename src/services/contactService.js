// Contact form service with Web3Forms integration
// Best practice for portfolio contact forms

// Form validation
export const validateForm = (formData) => {
  const errors = {};
  
  if (!formData.name?.trim()) {
    errors.name = 'Name is required';
  } else if (formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  
  if (!formData.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!formData.message?.trim()) {
    errors.message = 'Message is required';
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Send contact email using Web3Forms
export const sendContactEmail = async (formData) => {
  console.log('🚀 Sending email with data:', formData);
  
  try {
    const accessKey = process.env.REACT_APP_WEB3FORMS_KEY || '1b212630-6789-4b9f-81ea-f6fc97cdacc3';
    
    const payload = {
      access_key: accessKey,
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      from_name: 'Portfolio Contact Form',
      subject: `New message from ${formData.name} - Portfolio Contact`,
      // Additional Web3Forms features
      botcheck: false, // Spam protection
      cc: '', // CC emails if needed
      redirect: false // We'll handle success in React
    };
    
    console.log('📦 Payload being sent:', payload);
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    
    console.log('📡 Response status:', response.status);
    console.log('📋 Response result:', result);

    if (response.ok && result.success) {
      console.log('✅ Email sent successfully!');
      return {
        success: true,
        message: 'Message sent successfully! I\'ll get back to you soon.'
      };
    } else {
      console.log('❌ Email sending failed:', result);
      throw new Error(result.message || 'Failed to send message');
    }
  } catch (error) {
    console.error('💥 Error sending email:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again or email me directly.'
    };
  }
};

// Fetch live GitHub repos (bonus feature)
export const fetchGitHubProjects = async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    
    const repos = await response.json();
    
    return repos.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || 'No description available',
      url: repo.html_url,
      homepage: repo.homepage,
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      updated: repo.updated_at,
      topics: repo.topics || []
    }));
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    return [];
  }
};
