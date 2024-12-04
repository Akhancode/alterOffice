
# Custom URL Shortener API

A scalable URL shortener API designed to simplify the sharing of long URLs. The system includes advanced analytics, user authentication via Google Sign-In, and rate limiting to ensure secure and efficient usage.

---

## **Features**

1. **URL Shortening**  
   - Converts long URLs into short, easy-to-share links.
2. **Custom URL Grouping**  
   - Group links under topics such as *acquisition*, *activation*, and *retention*.
3. **Advanced Analytics**  
   - View analytics for individual and overall URLs (e.g., click count, region-based metrics).
4. **User Authentication**  
   - Secure sign-in via Google Sign-In.
5. **Rate Limiting**  
   - Prevents abuse by limiting the number of requests per user.
6. **Scalability**  
   - Dockerized architecture for efficient cloud deployment.

---

## **Tech Stack**

- **Backend:** Node.js with Express.js
- **Database:** MongoDB (for URL storage and analytics)
- **Authentication:** Google OAuth 2.0
- **Caching:** Redis (for rate limiting and performance optimization)
- **Containerization:** Docker
- **Deployment:** Compatible with AWS, GCP, or Azure

---

## **Getting Started**

### **Prerequisites**

1. Install [Node.js](https://nodejs.org/)
2. Set up a Google OAuth client for authentication.
3. Set up a MongoDB instance (local or cloud-based).
4. Install Redis for caching.and run redis 

---

### **Setup Instructions**

1. Clone the repository:
   ```bash
   git clone https://github.com/Akhancode/alterOffice.git
   cd alterOffice
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set environment variables in a `.env` file:
   [Download .env](https://drive.google.com/file/d/1cBiw3fUBhasKxfr1RqJ8mM5HTP63oDG2/view?usp=sharing)


4. Start the development server:
   ```bash
   npm start
   ```

---

## **API Endpoints**
Swagger - documentation in http://localhost:9000/api-docs
[![image.png](https://i.postimg.cc/15Vwj6Zq/image.png)](https://postimg.cc/gndxwxjz)

### **Authentication**
- `POST /auth/google`  
  Authenticates a user via Google Sign-In. will give response as accesstoken please copy and paste in authenticator in swagger

### **Rate Limiting**
- Limits requests to `5` requests per minute per user.

## **Contact**

For any queries or suggestions, please reach out at:  
**Email:** your-email@example.com  
**GitHub:** [YourGitHubProfile](https://github.com/your-profile)
