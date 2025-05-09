
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
3. Use the imported collection to test the API endpoints for:

   * **Registering users**
   * **Logging in**
   * **protected API (show profile)** after obtaining the token.

---


* **الخطوة الأولى**: تشغيل السيرفر الخاص بـ Django (API) في نافذة طرفية باستخدام الأمر:

  ```bash
  python manage.py runserver
  ```

  هذا يشغل الـ API في `http://127.0.0.1:8000`.

* **الخطوة الثانية**: يمكنك اختبار الـ API باستخدام إحدى الطريقتين:

  * **الطريقة الأولى**: تشغيل السيرفر الخاص بالواجهة الأمامية (Frontend) باستخدام الأمر:

    ```bash
    python -m http.server 5500
    ```

    هذا يشغل الواجهة في `http://127.0.0.1:5500`.

    ثم يمكنك زيارة صفحات الـ API مثل [تسجيل الدخول](http://localhost:5500/login.html) و [التسجيل](http://localhost:5500/register.html).

  * **الطريقة الثانية**: استيراد كوليكشن Postman لاختبار الـ API.

    * استيراد كوليكشن Postman واختبار الـ API من خلال:

      * **تسجيل المستخدمين**
      * **تسجيل الدخول**
      * **الوصول إلى الـ API المحمي** لعرض الملف الشخصي بعد الحصول على التوكن.

### ملاحظات:

* تأكد من أنك في المجلد الصحيح قبل تشغيل الأوامر.
* يمكن تغيير البورتات أو المسارات في حال كانت مختلفة في بيئة العمل الخاصة بك.

```
