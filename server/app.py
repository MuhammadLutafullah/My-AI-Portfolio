from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for your React app

# Email configuration
SMTP_SERVER = os.getenv('SMTP_SERVER', 'smtp.gmail.com')
SMTP_PORT = int(os.getenv('SMTP_PORT', 587))
SENDER_EMAIL = os.getenv('SENDER_EMAIL')
SENDER_PASSWORD = os.getenv('SENDER_PASSWORD')
RECIPIENT_EMAIL = os.getenv('RECIPIENT_EMAIL', SENDER_EMAIL)

@app.route('/api/contact', methods=['POST'])
def send_email():
    try:
        data = request.json
        
        # Validate required fields
        required_fields = ['firstName', 'lastName', 'email', 'message']
        if not all(field in data for field in required_fields):
            return jsonify({'error': 'Missing required fields'}), 400
        
        # Create email
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f"Portfolio Contact: {data['firstName']} {data['lastName']}"
        msg['From'] = SENDER_EMAIL
        msg['To'] = RECIPIENT_EMAIL
        
        # Plain text version
        text = f"""
        New Contact Form Submission:
        
        Name: {data['firstName']} {data['lastName']}
        Email: {data['email']}
        Phone: {data.get('phone', 'Not provided')}
        
        Message:
        {data['message']}
        """
        
        # HTML version
        html = f"""
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> {data['firstName']} {data['lastName']}</p>
        <p><strong>Email:</strong> {data['email']}</p>
        <p><strong>Phone:</strong> {data.get('phone', 'Not provided')}</p>
        <p><strong>Message:</strong></p>
        <p>{data['message']}</p>
        """
        
        part1 = MIMEText(text, 'plain')
        part2 = MIMEText(html, 'html')
        msg.attach(part1)
        msg.attach(part2)
        
        # Send email
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SENDER_EMAIL, SENDER_PASSWORD)
            server.send_message(msg)
        
        return jsonify({'message': 'Email sent successfully'}), 200
        
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({'error': 'Failed to send email'}), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)