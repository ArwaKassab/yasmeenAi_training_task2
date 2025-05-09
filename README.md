
## Steps to Run the Project

### Step 1: Run the Backend Server (Django API)

1. Open a terminal window.
2. Navigate to the `auth_project` directory (where `manage.py` is located).
3. Run the following command to start the Django server:

   ```bash
   python manage.py runserver

### Step 2: Test the API (Choose One Method)

#### Method 1: Test Using the Frontend Interface

1. Open a **second terminal window**.

2. Navigate to the `frontend` directory (where the frontend files are located).

3. Run the following command to start the frontend server:

   ```bash
   python -m http.server 5500
   ```

4. This will start the frontend server, and you can access the frontend interface at `http://127.0.0.1:5500`.

   You can visit the following pages:

   * [Register Page](http://localhost:5500/register.html)
   * [Login Page](http://localhost:5500/login.html)

   After logging in successfully, you'll be redirected to the page displaying the user data using the token.

#### Method 2: Test Using Postman

1. **Download the Postman Collection** from the task submission link.
2. Open Postman, and **import the collection**.

   * Go to **File > Import**.
   * Select the Postman collection file.
3. Use the imported collection in to test the API endpoints for:

   * **Registering users**
   * **Logging in**
   * **protected API (show profile)** after obtaining the token.

---
