# دليل ربط مشروع Sea Greats بـ GitHub

هذا الدليل يشرح خطوات ربط مشروع Sea Greats بمستودع GitHub والاستفادة من ميزات التكامل المستمر.

## الخطوات الأساسية لربط المشروع بـ GitHub

### 1. إعداد المستودع على GitHub

1. قم بإنشاء حساب على GitHub إذا لم يكن لديك حساب بالفعل
2. انتقل إلى [https://github.com/new](https://github.com/new) لإنشاء مستودع جديد
3. اسم المستودع: `Seagreats`
4. اختر "Public" للمستودع العام أو "Private" للمستودع الخاص
5. لا تقم بإضافة README أو .gitignore أو الترخيص (سنقوم بدفعهم من المشروع المحلي)
6. انقر على "Create repository"

### 2. إعداد Git في المشروع المحلي

افتح موجه الأوامر (Command Prompt) أو PowerShell واتبع الخطوات التالية:

```bash
# انتقل إلى مجلد المشروع
cd "c:\Users\Mohamed Aty\Desktop\انشاء تطبيق بالذكاء الاصطناعى\مشروعات تطبيقات\Seagreats\Seagrats-Readdy\Seagreats-vs"

# تهيئة Git في المجلد
git init

# إضافة ملف .gitignore
# (تم إنشاءه بالفعل)

# استبدال ملفات .new بالملفات الأصلية
# (يمكنك القيام بذلك يدويًا أو استخدام الأمر التالي)
# ren components\Hero.tsx.new components\Hero.tsx

# إضافة جميع الملفات للتتبع
git add .

# عمل أول commit
git commit -m "النسخة الأولية من موقع Sea Greats مع التأثيرات الحركية ودعم GitHub"

# إضافة المستودع البعيد
git remote add origin https://github.com/Bluehostn/Seagreats-vs.git

# دفع التغييرات إلى المستودع البعيد
git push -u origin main
```

### 3. إعداد GitHub Actions للتكامل المستمر

تم إنشاء ملف التكوين في `.github/workflows/main.yml` والذي يتضمن:

- بناء المشروع تلقائيًا مع كل دفعة جديدة
- تشغيل اختبارات Lint
- نشر المشروع تلقائيًا (اختياري)

### 4. إعداد سر النشر لـ Vercel (اختياري)

إذا كنت ترغب في النشر التلقائي إلى Vercel، اتبع الخطوات التالية:

1. انتقل إلى إعدادات المستودع على GitHub: `https://github.com/Bluehostn/Seagreats/settings/secrets/actions`
2. انقر على "New repository secret"
3. أضف الأسرار التالية:
   - `VERCEL_TOKEN`: رمز الوصول من إعدادات Vercel
   - `VERCEL_ORG_ID`: معرف المؤسسة من Vercel
   - `VERCEL_PROJECT_ID`: معرف المشروع من Vercel

### 5. استخدام لوحة التحكم للمزامنة

بعد إكمال الإعداد، يمكنك استخدام لوحة التحكم الإدارية لمزامنة المشروع مباشرة:

1. انتقل إلى `/admin/dashboard`
2. استخدم قسم "مزامنة GitHub" للدفع والسحب من المستودع

## حل المشكلات الشائعة

### مشكلة: خطأ الوصول عند دفع التغييرات

```
remote: Permission to Bluehostn/Seagreats.git denied
```

**الحل**: تأكد من أنك مسجل الدخول إلى GitHub وأن لديك صلاحيات الكتابة للمستودع.

```bash
git config --global user.name "اسم المستخدم الخاص بك"
git config --global user.email "البريد الإلكتروني الخاص بك"
```

إذا كنت تستخدم رمز الوصول الشخصي (Personal Access Token)، تأكد من أن الرمز لديه الصلاحيات الكافية.

### مشكلة: تضارب عند دفع التغييرات

```
error: failed to push some refs
```

**الحل**: قم بسحب التغييرات أولاً ثم دفع التغييرات المحلية:

```bash
git pull --rebase origin main
git push origin main
```

### مشكلة: الملفات كبيرة جدًا لا يمكن دفعها

```
error: file too large
```

**الحل**: تأكد من أن ملف .gitignore يستبعد الملفات الكبيرة والمجلدات غير الضرورية مثل node_modules.

## أفضل الممارسات للعمل مع GitHub

1. **استخدام الفروع**: قم بإنشاء فروع جديدة للميزات أو الإصلاحات.
```bash
git checkout -b feature/new-feature
```

2. **تحديثات منتظمة**: قم بتحديث المستودع المحلي بانتظام.
```bash
git pull origin main
```

3. **رسائل commit واضحة**: استخدم رسائل وصفية تشرح التغييرات.
```bash
git commit -m "إضافة تأثيرات حركية لصفحة الخدمات"
```

4. **مراجعة التغييرات**: قبل الدفع، راجع التغييرات.
```bash
git diff
git status
```

---

للمزيد من المعلومات حول استخدام GitHub مع المشروع، يمكنك الاطلاع على [وثائق GitHub الرسمية](https://docs.github.com/en) أو التواصل مع فريق التطوير.
