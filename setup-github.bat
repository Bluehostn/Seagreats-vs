@echo off
echo ===================================================
echo       ربط مشروع Sea Greats بمستودع GitHub
echo ===================================================
echo.

:: تأكيد وجود Git
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
  echo [!] لم يتم العثور على Git. الرجاء تثبيت Git واعادة المحاولة.
  echo    يمكنك تحميل Git من: https://git-scm.com/downloads
  goto :EOF
)

echo [1] تهيئة Git في المشروع...

:: تهيئة Git
git init

echo.
echo [2] استبدال ملفات المكونات المحسنة...
echo    (يُرجى الانتظار، يجري استبدال الملفات...)

:: استبدال الملفات المحسنة
if exist "components\Hero.tsx.new" (
  copy /Y "components\Hero.tsx.new" "components\Hero.tsx"
  echo    - تم استبدال Hero.tsx
)

if exist "components\Services.tsx.new" (
  copy /Y "components\Services.tsx.new" "components\Services.tsx"
  echo    - تم استبدال Services.tsx
)

if exist "components\WhyUs.tsx.new" (
  copy /Y "components\WhyUs.tsx.new" "components\WhyUs.tsx"
  echo    - تم استبدال WhyUs.tsx
)

if exist "components\ContactSection.tsx.new" (
  copy /Y "components\ContactSection.tsx.new" "components\ContactSection.tsx"
  echo    - تم استبدال ContactSection.tsx
)

echo.
echo [3] إضافة الملفات إلى Git...

:: إضافة الملفات إلى Git
git add .

echo.
echo [4] إنشاء أول commit...

:: إنشاء commit
git commit -m "النسخة الأولية من موقع Sea Greats مع التأثيرات الحركية ودعم GitHub"

echo.
echo [5] ربط المشروع بمستودع GitHub...

:: ربط المستودع
git remote add origin https://github.com/Bluehostn/Seagreats.git

echo.
echo [6] دفع الكود إلى GitHub...
echo    (سيطلب منك تسجيل الدخول إلى GitHub إذا لم تكن مسجلًا)

:: دفع الكود إلى GitHub
git push -u origin main

if %ERRORLEVEL% NEQ 0 (
  echo.
  echo [!] حدث خطأ أثناء الدفع إلى GitHub.
  echo    إذا كانت هذه المرة الأولى التي تستخدم فيها Git، قم بإعداد اسم المستخدم والبريد الإلكتروني:
  echo.
  echo    git config --global user.name "اسم المستخدم الخاص بك"
  echo    git config --global user.email "البريد الإلكتروني الخاص بك"
  echo.
  echo    ثم قم بتشغيل الأمر التالي:
  echo    git push -u origin main
) else (
  echo.
  echo [✓] تم ربط المشروع بنجاح مع مستودع GitHub!
  echo    يمكنك الآن الوصول إلى المشروع على GitHub:
  echo    https://github.com/Bluehostn/Seagreats
)

echo.
echo ===================================================
echo              انتهت عملية الربط
echo ===================================================
