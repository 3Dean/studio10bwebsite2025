export async function post({ request }) {
    try {
      const formData = await request.formData();
      const name = formData.get('name');
      const email = formData.get('email');
      const subject = formData.get('subject');
      const message = formData.get('message');
      
      // Validate form inputs
      if (!name || !email || !subject || !message) {
        return new Response(JSON.stringify({
          success: false,
          message: 'All fields are required'
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      // Here you would add code to send an email or store data
      // For example, using a service like Nodemailer, SendGrid, etc.
      
      // Send email code would go here
      // Example: await sendEmail({ name, email, subject, message });
      
      // For now, just log the data and return success
      console.log({ name, email, subject, message });
      
      return new Response(JSON.stringify({
        success: true,
        message: 'Form submitted successfully'
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      console.error('Error processing form submission:', error);
      return new Response(JSON.stringify({
        success: false,
        message: 'Server error processing your request'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }